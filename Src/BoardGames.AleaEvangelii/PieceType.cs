namespace BoardGames.AleaEvangelii;

public enum PieceType
{
	Attacker = 1,
	Defender = 2,
	Commander = 3,
}

public static class PieceTypeExtensions
{
	public static Player Owner( this PieceType piece )
	{
		return piece switch
		{
			PieceType.Attacker => Player.Attacker,
			PieceType.Defender => Player.Defender,
			PieceType.Commander => Player.Defender,
			_ => (Player)( -1 )
		};
	}
}
