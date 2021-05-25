Questions to practice using PREP method:
One: Given a non-empty array of integers, return the result of multiplying the values together in order. Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 

PREP
Parameters- an array , it is 1d, it has only integers and it is not empty, can the number repeat,
can it have non negative numbers

Results- 
return the multiplied value of all the integers of the array

Examples-
1. [2,3,4,5]=>2*3*4*5=120
2. [-2,-5,10,-5]=>(-2)*(-5)*(10)*(-5)=-500
3. [10,10,10,10]=>10**4=10000


Psuedocode:-

1. Start traversing the array from the first element
2. Multiply the first and the consecutive element 
3. loop through the array until we traverse all the elements and perform the multiplication of all elements
4. store it in a variable
5. display the result 


JS CODE

function multiply(arr){
let tot=1;
arr.forEach((item)=> tot*=item)
return arr
}
Let numbers=[1,2,3,4]
Const result=Multiply(numbers)
Cosnoel.log(result)


Two: You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age]. 


PREP 
Parameters;
 an array , ages in whole numbers,? if less than a year return 0?

Results:
New array with [youngest, oldest, diff between youngest and oldest age]

Examples:
1. [10, 0.4, 15,20]=>[0,20, 20]
2. [5,55,30,100,89,23]=>[5,100,95]
3.[0,0,0,1,10

Psuedocode:

1. find the min value in the array
2. find the max value in the array
3. find the difference between the min and the max value 
4. return in a new array the min, max and the difference between min and max value

JS CODE

Function difference(arr){
 Let newArr=[]
  Let minimum=Math.min(arr)
 Let maximum=Math.max(arr)
 Let diff=maximum-minimum
newArr.push(minimum)
newArr.push(maximum)
newArr.push(diff)
return newArr
}

Let arr=[10,0.4,70,40,60,20]
Const res=difference(arr)
Console.log(res)


Three: Sum all the numbers of the array except the highest and the lowest element (the value, not the index!). Example: [ 6, 2, 1, 8, 10 ] => 16 [ 1, 1, 11, 2, 3 ] => 6

PREP

Parameters:-
An array, 1dimensional , +ve or -VE numbers? Array ever empty? Duplicate values? 

Results:-
Add  the value of all numbers except lowest and highest and return the value

Examples:-
1. [0,0,0,0,0,0]=0
2. [-10,40,6,-20]=-4
3.[20,40,10,5,50]=70

Pseudocode:

1.Sort the given array in ascending order
2. slice the array from second element to the last but one element 
3. add  the elements of the sliced array and save it in a variable
4. print the sum 


JSCODE

Function sum(arr){

arr.sort((a,b) => a-b)
const slicedArr= arr.slice(1, arr.length-1)
 return slicedArr.reduce((acc,cur)=>acc+cur,0)
}

Let num=[20,40,5,100,10]
Const arrSum=sum(num)
