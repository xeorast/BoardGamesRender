using BoardGames.AleaEvangelii;
using System.Collections.Concurrent;
using System.Diagnostics.CodeAnalysis;

namespace BoardGames.Server.Data.AleaEvangelii;

public interface IAERoomStorage
{
	string CreateRoom();
	AEJoinRoomResult TryJoinRoom( string roomId, string playerId, out Player player );
	void LeaveRoom( string roomId, string playerId );
	bool TryGetGame( string roomId, [NotNullWhen( true )] out AleaEvangeliiGame? game );
}

public enum AEJoinRoomResult
{
	Success,
	RoomDoesNotExists,
	RoomIsFull,
}

public class AERoomStorage : IAERoomStorage
{
	private readonly ConcurrentDictionary<string, AERoomData> _rooms = new();

	public string CreateRoom()
	{
		AERoomData room = new();
		string id;
		do
		{
			id = Random.Shared.Next( 100, 1000 ).ToString();
		} while ( !_rooms.TryAdd( id, room ) );
		return id;
	}

	public AEJoinRoomResult TryJoinRoom( string roomId, string playerId, out Player player )
	{
		if ( !_rooms.TryGetValue( roomId, out var room ) )
		{
			player = default;
			return AEJoinRoomResult.RoomDoesNotExists;
		}

		lock ( room.PresentPlayers )
		{
			var possible = AERoomData.PossiblePlayers.Except( room.PresentPlayers.Values ).ToArray();
			if ( possible.Length == 0 )
			{
				player = default;
				return AEJoinRoomResult.RoomIsFull;
			}

			var chosen = possible[Random.Shared.Next( 0, possible.Length )];
			room.PresentPlayers.Add( playerId, chosen );

			player = chosen;
			return AEJoinRoomResult.Success;
		}
	}

	public void LeaveRoom( string roomId, string playerId )
	{
		if ( !_rooms.TryGetValue( roomId, out var room ) )
		{
			return;
		}

		lock ( room )
		{
			_ = room.PresentPlayers.Remove( playerId );
		}
	}

	public bool TryGetGame( string roomId, [NotNullWhen( true )] out AleaEvangeliiGame? game )
	{
		if ( !_rooms.TryGetValue( roomId, out var room ) )
		{
			game = null;
			return false;
		}

		game = room.Game;
		return true;
	}

}
