internal class SpiralArray
{
    private const string Right = "Right";
    private const string Left = "Left";
    private const string Down = "Down";
    private const string Up = "Up";

    public string PrintSpiralArray(int[,] matrix, int m, int n)
    {
        string result = "";
        int x = 0;
        int i = -1;
        int l = m;
        int laps = 0;
        string direction = Right;
        int count = 0;
        while (i < l && count < m * n)
        {
            count++;
            if (direction == Right)
            {
                i++;
                result += matrix[x, i] + " ";
                if (i == l - 1)
                {
                    direction = Down;
                    x = i;
                    i = laps;
                    l = n - laps;
                }

            }
            else if (direction == Down)
            {
                i++;
                result += matrix[i, x] + " ";
                if (i == l - 1)
                {
                    direction = Left;
                    x = i;
                    i = m - laps - 1;
                    l = m - laps;
                }

            }
            else if (direction == Left)
            {
                i--;
                result += matrix[x, i] + " ";
                if (i == laps)
                {
                    direction = Up;
                    x = i;
                    i = n - laps - 1;
                    l = n - laps;
                }
            }
            else if (direction == Up)
            {
                i--;
                result += matrix[i, x] + " ";
                if (i == laps + 1)
                {
                    direction = Right;
                    laps++;
                    x = laps;
                    i = laps - 1;
                    l = m - laps;
                }
            }
        }
        return result;
    }

    static void Main()
    {
        int[,] matrix =
        {
                { 1,   2,  3,  4, 5 },
                { 18, 19, 20, 21, 6 },
                { 17, 28, 29, 22, 7 },
                { 16, 27, 30, 23, 8 },
                { 15, 26, 25, 24, 9 },
                { 14, 13, 12, 11, 10 }
            };
        System.Console.WriteLine(new SpiralArray().PrintSpiralArray(matrix, 5, 6));
        System.Console.ReadLine();
    }
}