
function areaOfTriangle(base,heigth){
    if(typeof base!=="number"||typeof heigth!=="number"){
        return "please enter the number value";
    }else if(base<0||heigth<0){
        return "please enter the positive number";
    }
    else{
        var area=0;
        area=1/2*base*heigth;
}
        return area;
}

let a=areaOfTriangle(8,6);
console.log(a);


    function addTwoNumbers(num1,num2){
        if(typeof num1!=="number"||typeof num2!=="number"){
            return "please enter the number value";
        }else if(num1<0||num2<0){
            return "please enter the positive value"
        }else{
            var add=0;
            add=num1+num2;
            }
            return add;

    }
    console.log(addTwoNumbers(3,2));

function check(a){
    if(typeof a!=="number"){
        return "please enter the number value";
    }
    else if(a<0){
        return "please enter the positive number"
    }else{

         //b=a++;
         b=++a;
         //c=++a;

    }

    // return b;
    return a;

}
console.log(check(4));

    Question 3:
● Write a simple script that adds 1 and 2 and displays the result on the console
● Use variables a, b & c
● Use "let" to declare the variables
● Use the formula c = a + b
● Display the value of c on console
function addTwoNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "please enter the number";
  } else if (a < 0 || b < 0) {
    return "please enter the positive number";
  } else {
    c = a + b;
  }
  return c;
}
console.log(addTwoNumbers(4, 8));

Question 4:
● Create a variable to hold your first name
● Create another variable to hold your last name
● Create a third variable to hold your full name
● Assign the value of your first name and last name to the first two variable
● Use "+" to concatenate your first name and last name to assign the result to your last name's
variable
● Don't forget to include space between your first and last name
● Display the value of your full name on the console

var person = {
  fristName: "Kiflom",
  lastName: "Hailu",
  fullName: function () {
    return (this.fullName = this.fristName + " " + this.lastName);
  },
};
person.fullName();
console.log(person.fullName);

Question 1
● Define a simple function named myFirst that prints the word "Hello" on the console
○ First define the function
○ Then call the function

function myFirst() {
  console.log("Hello");
}
myFirst();

Question 2
● Define a function called mySecond that takes a parameter and prints the parameter on
console
○ Feel free to give any value as a parameter in your function
function mySecond(a) {
  return a;
}
let c=mySecond(8);
console.log(c);

Question 3
● Define a function called myThird that takes a parameter and prints the parameter on the
console. But, it uses mySecond function to print the parameter on the console

    function myThird(x){
      console.log(x);
    }
    console.log(mySecond(c));

    Question 4
● Write a function named myFourth that takes an array as a parameter and prints only the first
value of the array on the console. Remember, this question is here to explain the concept of
function delegation in JavaScript.


function myFourth(arr){
  for (let index = 0; index < arr.length; index++) {
    //return arr[0];
    //return arr[arr.length-1];
    return arr.length;
    
  }
  
}
let value=myFourth([5,4,6,7]);
console.log(value);

Question 5
● Write a function named myFifth that takes an array with two numbers in it as a parameter
and prints the sum of the two numbers on console


 function myFifth(array){
   sum=0;
 for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
   sum=sum+array[index];
 sum+=array[index];
  
 }
 //return sum;
 }
 let x=myFifth([3,7]);
 console.log(x);

Question 6
● Write a function that takes an integer minutes and converts it to seconds.
function changeMinutes(a){
 if(typeof a!== "number") {
return "please enter the number value"
 }else if(typeof a<0){
   return "please enter a positive number"
 }else{
   minutes=0;
   minutes=a*60;
 }
 return minutes;
}
let y=changeMinutes(2);
console.log(y);

Question 7
● Create a function that takes a number as a parameter, increments the number by +1 and
returns the result
function incrementByOne(a){
  if(typeof a!== "number") {
    return "please enter the number value"
     }else{
      c=0; b=0;
       b=++a;
       c=++a;
        }
     return b;
     //return c;

}
let f=incrementByOne(5);
console.log(f);

Question 8
● Write a function that takes the base and height of a triangle and returns its area.
function areaOfTriangle(base,height){
  if(typeof base!=="number"||typeof height!=="number"){
    return "please enter the number value"
  }else if(typeof base<0||height<0){
    return "pleas enter the positive number"
  }else{
    let Area=0;
  Area=1/2*base*height;
  return Area;
  }
}
let g=areaOfTriangle(2,4);
console.log(g);

Question 9
● Create a function that returns the total number of legs of all the animals. In this challenge, a
farmer is asking you to tell him how many legs can be counted among all his animals. The
farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember:
the farmer wants to know the total number of legs and not the total number of animals.
function threeSpiceies(chickens,cows,pigs){
  var cl,cwl,pl,total=0;
  cl=2*chickens;
  cwl=4*cows;
  pl=4*pigs;
  total=cl+cwl+pl;
  return total;
}
let l=threeSpiceies(2,4,6);
console.log(l);

Question 10 (not from edabit.com)
● Create a function that takes an array containing only TWO numbers as a parameter and
returns a value that is 3 times the first element of the array.
function twoNumbers(array){
for (let index = 0; index < array.length; index++) {
  multiply=0;
  multiply=3*array[0];
  
}
return multiply;
}
let t=twoNumbers([5,8]);
console.log(t);

Question 11
● Create a function that returns true when num1 is equal to num2; otherwise return false.
function greater(num1,num2){
  if(num1==num2){
    return true
  }
  return false;
}
let w=greater(5,9);
console.log(w);

Question 12
● Create a function that takes an integer and returns true if it's divisible by 100, otherwise
return false.

function divisibleByHundered(a){
 if(typeof a!=="number"){
   return "please enter the number value"

 } else if(a<0){
   return "please enter the positive number"
 }else{
   if(a%100==0){
return true;
   }
   return false;
 }
//}
let k=divisibleByHundered(10);
let r=divisibleByHundered(200);
let m=divisibleByHundered(-123);
let n=divisibleByHundered("abebe");
console.log(k);
console.log(r);
console.log(m);
console.log(n);

Create a function that takes a number as an argument and returns "even" for even numbers
and "odd" for odd numbers.
function evenAndOdd(a){
if(typeof a!=="number"){
      return "please enter the number value"
   
    } else if(a<0){
      return "please enter the positive number"
    }else{
      
      if(a%2==0){
        return "even";
      }
      return "odd";
    }
  }
   let check1= evenAndOdd(4);
   let check2= evenAndOdd(7);
   console.log(check1);
   console.log(check2);

Question 14
● Create a function that returns
○ “Invalid score” if score is above 100 or score is a negative number
○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
○ “Grade C” for any score below 79

function grade(a){
  if(a>100||a<0){
    return "Invalid score";
  }else if(a>=90&&a<=100){
    return "Grade A"
  }else if(a>=80&&a<90){
    return "Grade B"
  }else{
    return "Grade C"
  }
}

let z1= grade(177);
let z2= grade(-54);
let z3= grade(90);
let z4= grade(89);
let z5= grade(80);
let z6= grade(77);
console.log(z1);
console.log(z2);
console.log(z3);
console.log(z4);
console.log(z5);
console.log(z6);