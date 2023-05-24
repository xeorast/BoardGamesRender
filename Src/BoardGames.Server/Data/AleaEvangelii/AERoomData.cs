using BoardGames.AleaEvangelii;

namespace BoardGames.Server.Data.AleaEvangelii;

public class AERoomData
{
	public static HashSet<Player> PossiblePlayers { get; }
		= new() { Player.Attacker, Player.Defender };

	public Dictionary<string, Player> PresentPlayers { get; } = new();
	public AleaEvangeliiGame Game { get; } = new();

}
