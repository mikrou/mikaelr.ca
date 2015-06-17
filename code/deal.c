#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <time.h>

#define NUM_SUITS 4
#define NUM_RANKS 13

int main(void)
{
	bool in_hand[NUM_SUITS][NUM_RANKS] = {false};
	int num_cards, rank, suit;
	const char rank_code[] = {'2','3','4','5','6','7','8','9',
							't','j','q','k','a'};
	const char suit_code[] = {'C','D','H','S'};

	srand((unsigned) time(NULL));

	printf("Enter number of cards drawn (between 1 and 52): ");
	scanf("%d", &num_cards);

	if(num_cards<1 || num_cards>52)
	{
		printf("Invalid number of cards drawn. Rerun program to try again.\n");
		return 0;
	}	
	
	printf("Your hand is:");
	while(num_cards > 0)
	{
		suit = rand() % NUM_SUITS; //picks random number between 0-3 (suit)
		rank = rand() % NUM_RANKS; //picks random number between 0-12
		if (!in_hand[suit][rank])
		{
			in_hand[suit][rank] = true;
			num_cards--;
			printf(" %c%c", rank_code[rank], suit_code[suit]);
		}
	}
	printf("\n");
	
	return 0;
}
	
