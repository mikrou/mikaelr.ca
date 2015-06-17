#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SQUARE 10


int main(void)
{
	char map[SQUARE][SQUARE]; //declaring the square map
	for(int x = 0; x < SQUARE; x++) // initializing the map
		for(int y = 0; y < SQUARE; y++)
			map[x][y] = '.';

	const char path[] = {'A','B','C','D','E','F','G','H','I','J','K','L','M',
							'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'};
	srand((unsigned) time(NULL));
	int step = 0;
	int row = rand()%10;
	int column = rand()%10;
	map[row][column] = path[step++]; //start off at origin (0,0)

	while(step !=26)
	{
		int direction = rand() % 4;
		//first check if a step is possible
		if(((map[row-1][column] == '.') && (row-1 >=0)) || ((map[row+1][column] == '.') && (row+1 <=9)) ||
			((map[row][column-1] == '.') && (column-1 >=0)) || ((map[row][column +1] == '.') && (column+1<=9)))
		{
			switch(direction)
			{
			case 0: //up
				if(row-1 >=0)
				if(map[row-1][column] == '.')
				map[--row][column] = path[step++];
				break;
				
			case 1: //down
				if(row+1 <=9)
				if(map[row+1][column] == '.')
				map[++row][column] = path[step++];
				break;
								
			case 2: //left
				if(column-1 >=0)
				if(map[row][column-1] == '.')
				map[row][--column] = path[step++];
				break;
				
							
			case 3: //right
				if(column+1 <=9)
				if((map[row][column+1] == '.'))
				map[row][++column] = path[step++];
				break;
				
			}
		}
		else step = 26;
			
	}
//all possible steps made, print the final array
	for(int x = 0; x < SQUARE; x++)
	{
		for(int y = 0; y < SQUARE; y++)
			printf("%c ", map[x][y]);
		printf("\n");
	}
return 0;
}


