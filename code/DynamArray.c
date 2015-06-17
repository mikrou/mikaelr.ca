
#include <stdio.h>
#include "vector.h"
#include <stdlib.h>


int main() {
Vector dynamArray; //initialize the Dynamic array
vector_init(&dynamArray);

//user can make following input:
// - add to array eg. "1" then request for data to add
// - list all elements eg. "2"
// - check capacity eg. "3" 
// - check second highest element ex. "4"
// - exit the program with exit key ex. "5"
int input;
int numToAppend = 0; //number to append to the array
int loop = 0; //loop continues while loop is 0

while(loop == 0){
	
	printf("What would you like to do?\n");
	printf("Press:\n '1' to add to the array\n '2' to list all elements,\n '3' to check array capacity,\n '4' to find the second highest element,\n '5' to exit the program\n");
	scanf("%d", &input);
	switch (input) {
		case 1:
			printf("What would you like to add to array?\n");
			scanf("%d", &numToAppend);
			vector_append(&dynamArray, numToAppend);
			break;
		case 2:
			printArray(&dynamArray);
			break;
		case 3:
			printf("Current capacity of the array is ");
			printCapacity(&dynamArray);
			break;
		case 4:
			printf("The second highest element in the array is %d\n", findSecondHighest(&dynamArray));
			break;
		case 5:
			printf("Quitting program now.\n");
			loop = 1;
			break;
		default:
			printf("Incorrect input, try again\n");
			break;
		}
			
}


vector_free(&dynamArray); //free at the end of the program
return 0;
}

void vector_init(Vector *vector) {
	vector->size = 0;
	vector->capacity = VECTOR_INITIAL;
	
	vector->data = malloc(sizeof(int) * vector->capacity);
}

void vector_append(Vector *vector, int value) {
	vector_double_capacity_if_full(vector);

	vector->data[vector->size++] = value;
}

int vector_get(Vector *vector, int index) {
 if (index >= vector->size || index < 0) {
	printf("That index is out of bounds for vector of size %d",vector->size);
	exit(1);
	}
	return vector->data[index];
}

void vector_set(Vector *vector, int index, int value) {
	//zero fill up to desired index
	while (index >= vector->size) {
		vector_append(vector, 0);
	}
	
	vector->data[index] = value;
}

void vector_double_capacity_if_full(Vector *vector) {
	if(vector->size >= vector->capacity) {
		vector->capacity *= 2;
		vector->data = realloc(vector->data, sizeof(int) * vector->capacity);
	}
}

void vector_free(Vector *vector) {
	free(vector->data);
}

void printArray(Vector *vector) {
	printf("\n\nThe elements of the array are:\n");
	for(int i = 0; i<vector->size; i++)
		{
			printf("%d\n", vector->data[i]);
		}
}

void printCapacity(Vector *vector) {
	printf("%d\n", vector->capacity);
}

int findSecondHighest(Vector *vector) {
	int highest = 0;
	int highIndex;
	for(int i= 0; i<= vector->size -1; i++){
		if(vector->data[i] >= highest){
			highest = vector->data[i];
			highIndex = i;
		}	
	}
	int secondHighest = 0;
	for(int x = 0; x<= vector->size -1; x++){
		if((vector->data[x]>=secondHighest) && (x != highIndex) && (vector->data[x] != highest))
		secondHighest = vector->data[x];
	}
return secondHighest;
}
