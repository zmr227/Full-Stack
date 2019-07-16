var firstName = prompt("What's your first name?");
var lastName = prompt("What's your last name?");
var fullName = firstName + ' ' + lastName;
var age = prompt("How old are you?");

// leap year every 4 years, in average, 365.25 days a year.
var daysLived = age * 365.25;

alert("You have lived " + daysLived + " days!");
console.log("Your full name is " + fullName + '.');
console.log("You are " + age + " years old.");