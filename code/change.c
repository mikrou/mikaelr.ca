#include <stdio.h>

//declare function "cashConvert"
void cashConvert(int total,int *twenties, int* tens, int* fives, int* toonies, int* loonies);
//declare function to print the converted cash
void printCash(int twenties, int tens, int fives, int toonies, int loonies);

int main(void)
{
	//declare variables
	int fives = 0;
	int tens = 0;
	int twenties = 0;
	int loonies = 0;
	int toonies = 0;
	int total = 0;
	//Get cost and cash info from cashier
	printf("Cash to convert: ");
	//receive input from user (Must be a whole number)
	scanf("%d", &total);
	cashConvert(total, &twenties, &tens, &fives, &toonies, &loonies);
	printCash(twenties, tens, fives, toonies, loonies);
		
return 0;
}

void cashConvert(int total, int* twenties, int* tens, int* fives, int* toonies, int* loonies)
{
	if(total >= 20)
	{
		*twenties = total/20;
		total = total%20;
	}
	if(total >= 10)
	{
		*tens = total/10;
		total = total%10;
	}
	if(total >= 5)
	{
		*fives = total/5;
		total = total%5;
	}
	if(total >=2)
	{
		*toonies = total/2;
		total %= 2;
	}
	if(total == 1)
	{
		*loonies = 1;
		total = 0;
	}	
}

void printCash(int twenties, int tens, int fives, int toonies, int loonies)
{
	printf("Twenties: %d\n    Tens: %d\n   Fives: %d\n Toonies: %d\n Loonies: %d\n", twenties, tens, fives, toonies, loonies);
}
