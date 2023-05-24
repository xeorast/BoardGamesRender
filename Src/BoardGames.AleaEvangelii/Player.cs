namespace BoardGames.AleaEvangelii;

public enum Player
{
	Attacker = 1,
	Defender
}

public static class PlayerExtensions
{
	public static Player Opposite( this Player to )
	{
		return to switch
		{
			Player.Attacker => Player.Defender,
			Player.Defender => Player.Attacker,
			_ => (Player)( -1 )
		};
	}
}
