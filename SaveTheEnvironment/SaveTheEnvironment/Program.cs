using System;

namespace SaveTheEnvironment
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Are you drinking out of a plastic bottle?");

            string response = Console.ReadLine();

            if(response.ToLower()[0] == 'y')
            {
                Console.WriteLine("This is bad. BLAHAJ would be sad </3");
            }
            else
            {
                Console.WriteLine("Yay! You made BLAHAJ happy");
            }
        }
    }
}
