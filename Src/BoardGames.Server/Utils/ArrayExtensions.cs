namespace BoardGames.Server.Utils;

public static class ArrayExtensions
{
	public static T[][] ToArrayOfArrays<T>( this T[,] arr2d )
	{
		var height = arr2d.GetLength( 0 );
		var width = arr2d.GetLength( 1 );
		var arr = new T[height][];
		for ( int row = 0; row < height; row++ )
		{
			arr[row] = new T[width];
			for ( int col = 0; col < width; col++ )
			{
				arr[row][col] = arr2d[row, col];
			}
		}

		return arr;
	}
}
