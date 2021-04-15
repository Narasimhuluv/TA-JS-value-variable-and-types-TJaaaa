// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num = Number (prompt("Enter the number"))
if(num % 2 == 0){
  alert("Number is even")
}else{
  alert("Number is odd")
}

// 2. Write a program to accept two numbers from 20user using`prompt` and alert the max value.

  let num1 = Number(prompt("Enter first Number"))
  let num2 = Number(prompt("Enter second Number"))
  if(num1 > num2){
    alert(`${num1} is greater`)
  }else{
    alert( `${num2} is greater`)
  }

// 3. Convert the above code using`?` terniary operator
// num1 >= num2 || num2 >= num1 ? alert(num1 >= num2 ) : alert(num1 || num2)

num1 > num2 ? alert( `${num1} is greater`) : alert( `${num2} is greater`)

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt("Enter the housename")
if(houseName === "stark"){
  alert("Winter is coming")
}else if(houseName == "lannister"){
  alert("a lannister always pays his debt")
}else{
  alert("All men must die")
}

// 5. Convert the above code using`?` terniary operator
//  houseName === "stark" ? alert("winter is comming") : houseName === "lannister" ? alert("a lannister always pays his debt");
// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let monthname = prompt("Enter the name of the month")

switch(monthname){
  case "January":
    alert("the number of days are 31");
    break;
    case "feb":
    alert("the number of days are 28");
    break;
    case "mar":
    alert("the number of days are 30");
    break;
    case "apr":
    alert("the number of days are 31");
    break;
    case "may":
    alert("the number of days are 30");
    break;
    case "june":
    alert("the number of days are 31");
    break;
    case "july":
    alert("the number of days are 30");
    break;
    case "aug":
    alert("the number of days are 31");
    break;
    case "sep":
    alert("the number of days are 30");
    break;
    case "oct":
    alert("the number of days are 31");
    break;
    case "nov":
    alert("the number of days are 31");
    break;
    case "dec":
    alert("the number of days are 31");
    break;
    default:
      alert("Not a valid input")
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let salary = prompt("Enter your salary")
switch(salary){
  case salary <=2000:
    let tax = (salary * 10)/100;
    alert( )
}
//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
if(marks > 100){
  alert("marks cant be greater than 100")
}else if(marks > 80 && marks < 100){
  alert("Grade A")
}else if(marks > 80 && marks < 80){
  alert('Grade B')
}else if(marks > 50 && marks < 80){
  alert("Grade C")
}else if(marks > 30 && marks < 50){
  alert("Grade C")
}else{
  alert("Grade D")
}
/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
