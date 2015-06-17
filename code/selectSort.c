#include <stdio.h>

void selection_sort(int a[], int size);
void initializeArray(int a[], int size);

int main(void)
{
	int n;
	printf("How many numbers would you like to sort?\n");
	scanf("%d", &n);
	printf("List %d numbers to be sorted, separated by a space:\n", n);
	int a[n];
	//initialize all elements to 0, but shouldn't make a difference if user
	//gives correct number of integers
	initializeArray(a, n);
	
	//gathering numbers for array from user
	int i = 0;
	while(i < n)
		scanf("%d", &a[i++]);
	
	selection_sort(a, n);
	printf("The numbers sorted are:\n");
	i = 0;
	while (i < n)
		printf("%d ", a[i++]); 
	printf("\n");
	return 0;
}

void initializeArray(int a[], int size)
{
	for(int i = 0; i< size; i++)
		a[i] = 0;
}

void selection_sort(int a[], int size)
{
	int index = 1;
	if(index == size) //base case when array has one element
		return; // already sorted when only one element exists
	else
	{
		int highest = 0;
		int highIndex = 0;
		for(int i=0; i< size; i++)
		{
			if(a[i] > highest)
			{
				highest = a[i];
				highIndex = i;
			}
		}
		int temp = a[size-1];
		a[size-1] = highest;
		a[highIndex] = temp;			
		selection_sort(a, size-1); //recursion, calling itself with size decreased
	}
}
	
