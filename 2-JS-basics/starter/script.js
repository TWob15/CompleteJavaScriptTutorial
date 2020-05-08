/*

var firstName = 'Tyler';
console.log(firstName);

var lastName = 'Wobschall';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

*/

// var firstName = 'Tyler';
// var age = 28;

// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'developer';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// //variable mutation

// age = 'twenty eight';
// job = 'programmer';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);

/*********************
* Basic operators
*/

// var year, yearTyler, yearCurtis;
// now = 2020
// ageTyler = 28;
// ageCurtis = 26;

// // Math Operators
// yearTyler = now - ageTyler;
// yearCurtis = now - ageCurtis;

// console.log(yearTyler);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// // Logical Operators
// var tylerOlder = ageTyler > ageCurtis;
// console.log(tylerOlder);

// // typeof operator
// console.log(typeof tylerOlder);
// console.log(typeof ageTyler);

/*******************************
 * Operator Precedence
 */

//  var now = 2020;
//  var yearTyler = 1992;
//  var fullAge = 18;

//  // Multiple Operators
//  var isFullAge = now - yearTyler >= fullAge;
//  console.log(isFullAge);

//  // Grouping
//  var ageTyler = now - yearTyler;
//  var ageCurtis = 26;
//  var average = (ageTyler + ageCurtis) / 2;
//  console.log(average);

//  // Multiple Assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // More Operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++;

/***************************
 * Coding Challenge
 */

//  var massJohn = 230;
//  var heightJohn = 74;
//  var massMark = 185;
//  var heightMark = 66;

//  var johnBMI = massJohn / (heightJohn * heightJohn);
//  var markBMI = massMark / (heightMark * heightMark);

//  var largeBMI = markBMI > johnBMI;

//  console.log("Is Mark's BMI higher than John's?", largeBMI);

/******************************
 * If / else statements
 */
// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married')
// {
//     console.log(firstName + 'is married!');
// }
// else 
// {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var isMarried = true;
// if (isMarried)
// {
//     console.log(firstName + 'is married!');
// }
// else 
// {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

/******************************
 * Boolean Logic
 */
// var firstName = 'John';
// var age = 20;

// if (age < 13)
// {
//     console.log(firstName + ' is a boy.');
// }
// else if (age >= 13 && age < 20)
// {
//     console.log(firstName + ' is a teenager.');
// }
// else if (age >= 20 && age < 30)
// {
//     console.log(firstName + ' is a young man');
// }
// else
// {
//     console.log(firstName + ' is a man.');
// }

/******************************
 * Ternary Operator and Switch Statements
 */

 //Ternary Operator
// var firstName = 'John';
// var age = 16;

// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

/*if (age >= 18)
{
    var drink = 'beer';
}
else
{
    var drink = 'juice';
}*/

// Switch Statement

// var job = 'teacher';

// switch (job) 
// {
//     case 'teacher':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an Uber in Lisbon.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
// }

// switch (true)
// {
//     case age < 13: console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20: console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30: console.log(firstName + ' is a young man.');
//         break;
//     default: console.log(firstName + ' is a man.');
// }

/*************************************
 * Truthy and Falsy values and Equality Operators
 */

 // falsy values: undefined, null, 0, '', NaN
 // truthy values: NOT falsy values

//  var height;

//  height = 23;

//  if (height || height == 0)
//  {
//      console.log('Variable is defined');
//  }
//  else 
//  {
//      console.log('Variable has NOT been defined');
//  }

//  // Equality operators
//  if (height == '23')
//  {
//      console.log('The == operator does type coercion!');
//  }

/************************************
 * Coding Challenge 2
 */

//  var teamJohn = (100 + 89 + 89) / 3;
//  var teamMark = (102 + 89 + 89) / 3;
//  var teamMary = (89 + 89 + 89) / 3;

//  if (teamJohn > teamMark && teamJohn > teamMary)
//  {
//      console.log("John's team has a higher average with:", teamJohn);
//  }
//  else if (teamMark > teamJohn && teamMark > teamMary)
//  {
//      console.log("Mark's team has a higher average with:", teamMark);
//  }
//  else if (teamMary > teamJohn && teamMary > teamMark)
//  {
//      console.log("Mary's team has a higher average with:", teamMary);
//  }
//  else 
//  {
//      console.log("It's a draw.");
//  }

/*******************************
 * Functions
 */

//  function calculateAge(birthYear)
//  {
//      return 2020 - birthYear;
//  }

//  var ageJohn = calculateAge(1992);
//  var ageMike = calculateAge(1948);
//  var ageJane = calculateAge(1969);

//  console.log(ageJohn, ageMike, ageJane);

//  function yearsUntilRetirement(year, firstName)
//  {
//      var age = calculateAge(year);
//      var retirement = 65 - age;

//      if (retiremnet > 0)     // retirement is not defined
//      {
//      console.log(firstName + ' reires in ' + retirement + ' years.');
//      }
//      else
//      {
//          console.log(firstName + ' is already retired.');
//      }
//  }

//  yearsUntilRetirement(1992, 'John');
//  yearsUntilRetirement(1948, 'Mike');
//  yearsUntilRetirement(1969, 'Jane');

/******************************
 * Function Statements and Expressions
 */

 // Function declaration
 //function whatDoYouDo(job, firstName){}

 // Function Expression 
// var whatDoYouDo = function(job, firstName)
// {
//     switch(job)
//     {
//         case 'teacher':
//             return firstName + ' teaches kids how to code.';
//         case 'driver':
//             return firstName + ' drives a cab in Lisbon';
//         case 'designer':
//             return firstName + ' designs beautiful websites';
//         default:
//             return firstName + ' does something else';
//     }
// }

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Tyler'));
// console.log(whatDoYouDo('driver', 'Jim'));
// console.log(whatDoYouDo('cop', 'Chase'));

/***********************************
 * Arrays
 */

//  var names = ['John', 'Mark', 'Jane'];
//  var years = new Array(1992, 1948, 1969);

//  console.log(names);
//  console.log(names.length);

// // Mutated Arrays
//  names[names.length] = 'Mary';
//  names[1] = 'Ben';
//  console.log(names);

// // Different Data Types
// var john = ['John', 'Smith', 1990, 'teacher', false];

// john.push('blue');
// john.unshift('Mr.');
// console.log(john);

// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(1990));

/*******************************
 * Codeing Challenge 3
 */

 function calculateTip(bill)
 {
    var percentage;
    if (bill < 50)
    {
        percentage = .2;
    }
    else if (bill >= 50 && bill < 200)
    {
        percentage = .15;
    }
    else
    {
        percentage = .1;
    }
    return percentage * bill;
 }

var bills = [124, 48, 268];
var tips = [calculateTip(bills[0]),
            calculateTip(bills[1]),
            calculateTip(bills[2])];


var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, finalValues);