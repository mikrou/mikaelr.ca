#include <stdio.h>

int main(void){
printf("Enter the number of days in the month (between 1 and 99): ");
int n;
scanf("%d", &n);
printf("Enter starting day of the week (1=Sun, 7=Sat): ");
int start;
scanf("%d", &start);

if(n<1 || n>99){
printf("Invalid number of days. Rerun program to try again.\n");
return 0;
}
if(start<1 || start > 7){
printf("Invalid starting day. Rerun program to try again.\n");
return 0;
}

for(int i = 0; i<start-1; i++) //sets the starting date position
printf("   ");

for(int x = 1; x<=n; x++){ //prints the days calandar style
printf("%2d ", x);
start++;
	if(start == 8){
		printf("\n");
		start = 1;
	}
}
printf("\n");

return 0;
}
