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

 var massJohn = 230;
 var heightJohn = 74;
 var massMark = 185;
 var heightMark = 66;

 var johnBMI = massJohn / (heightJohn * heightJohn);
 var markBMI = massMark / (heightMark * heightMark);

 var largeBMI = markBMI > johnBMI;

 console.log("Is Mark's BMI higher than John's?", largeBMI);