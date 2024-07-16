// // 1.
// const myName = "Tahmid";
// const email = "tahmidr49@gmail.com";
// const age = 30;
// const isDeveloper = true;
// let isGoingToBeDesigner;

// const details =
//   "Hey it's me" +
//   " " +
//   myName +
//   " " +
//   ". I am " +
//   age +
//   ". you can contact me by this" +
//   " " +
//   email +
//   ".I am a Developer and it's " +
//   isDeveloper +
//   " . I am going to be a Designer" +
//   " " +
//   isGoingToBeDesigner +
//   ".";

// //2.
// console.log(details);
// const details2 = `Hey it's me ${myName}. I am ${age}.you can contact me by this ${email}.I am a Developer and it's ${isDeveloper}. I am going to be a Designer-${isGoingToBeDesigner}`;
// console.log(details2);

// let myName = "Hasan";
// console.log(myName);

// console.log(typeof NaN);

/**
 * 3
 *It showed a SyntaxError: Identifier 'myName' has already been declared
 First one takes precedence.

 4.
 Javascript self define the value of undefined variable.
 We defined the value "null" of a null variable.

 5.
 NaN means Not a Number
 console.log(typeof NaN);
 the typeof NaN is number.

 6.
 It is undefined.
 */
/**
 * ===============
 * Array in Practice
 * ===============
 *
 */
// const firstName = "samim";
// const lastName = "hasan0";
// const age = 30;
// const profession = "web engineer";

// // constructing array
// const profile = ["samim", "hasan", 30, "web engineer"];

// // Access on profile data
// console.log(profile[0]);
// console.log(profile[1]);
// console.log(profile[2]);
// console.log(profile[3]);

// const fName = profile[0];
// const lName = profile[1];

// console.log(fName + " " + lName);
// console.log(`${fName} ${lName}`);

// // Updating data
// profile[1] = "khan";

// console.log(profile);

// // Adding data in dynamic array
// profile[4] = true;
// console.log(profile);

// // find out the last element dynamically
// const lastEleIndex = profile.length - 1;
// console.log(profile[lastEleIndex]);

/**
 * ===============
 * Array Extra
 * ===============
 *
 */

// const arr = [];
// arr[1] = "tahmid";
// console.log(arr);
// const arr2 = new Array("tahmid", "hasan");
// console.log(arr2);
// arr2[2] = "web developer";
// console.log(arr2);

// const complexArr = [1, "hello", true, null, ["nested", "array"]];
// const lastIndex = complexArr.length - 1;
// console.log(complexArr[lastIndex][0]);
// console.log(complexArr[lastIndex][1]);

/**
 * ==================
 * OBJECT
 * ==================
 */
// arranging data in a key value pair

// const profile = {
//   myName: "Tahmid",
//   age: 30,
//   profession: "developer",
// };

// // accessing data from object
// // accessing value with myName property
// profile.myName;
// console.log(profile.myName);
// console.log(profile["myName"]);
// //accessing value with age property
// console.log(profile.age);

// // Updating data
// // modifying object data - myName value
// profile.myName = "Aziz";
// console.log(profile);
// //adding / updating new property
// profile.learner = true;
// console.log(profile);

// // we can initialized object in tow ways

// const firstObj = {};
// const secondObj = new Object();

// // Object can holds any kind of data
// const random_collection = {
//   name: "tahmid",
//   age: 30,
//   isDeveloper: true,
//   hobbies: ["traveling", "learning", "teaching"],
//   obj: {
//     key1: "value1",
//   },
//   fullName: function () {
//     console.log(this.name);
//   },
// };

// console.log(random_collection.hobbies[1]);
// console.log(random_collection.obj.key1);
// console.log(random_collection.fullName);

// Exercise

// Question : 1
// In JavaScript the complex data types are Object, Array and Function.

// Question : 2
// Array
// Array are best to use when the elements are numbers.
// The data inside an array is known as elements
// The data elements can be manipulated using [];

// Object
// Objects are best to use when the elements string (text).
// The data inside objects are known as property which consists of a key value pair.
// The properties can be manipulated using both DOT notation and [].

// Question : 3
const profile = {
  firstName: "Tahmid",
  lastName: "Hasan",
  occupation: "Developer",
};

// Accessing the data in Object
console.log(profile.firstName);
console.log(profile["firstName"]);
console.log(profile.lastName);
console.log(profile["lastName"]);
console.log(profile.occupation);
console.log(profile["occupation"]);

// adding key for hobby
profile.hobby = "learning";
console.log(profile);

// remove the eky and value for occupation
delete profile.occupation;
console.log(profile);

// Question : 4
//Both dot notation and bracket notation can be used to access and manipulate object properties in JavaScript. Dot notation is preferred when the property key is a valid identifier, while bracket notation is preferred when the property key contains spaces, special characters, or is stored in a variable.

// Question: 5
// The multiple ways to define an array and an object
// Array
const arr1 = [];
const arr2 = new Array();

// Object
const obj1 = {};
const obj2 = new Object();

// Question : 5
const userObj = {
  name: "samim",
  address: {
    city: "Dhaka",
    university: {
      name: "Dhaka University",
    },
  },
};

const userArr = ["samim", ["Dhaka", ["Dhaka university"]]];

// accessing university name from array
console.log(userArr[1][1][0]);

// accessing university name from Object
console.log(userObj.address.university.name);

Function;
function printProfile() {
  console.log("Hello I'm tahmid");
  console.log("I'm 30 years old");
  console.log("I'm a software developer by profession");
  console.log("I love to lear");
}

// call or execute the function
printProfile();

function multiPly() {
  console.log(10 * 5);
}

multiPly();

// function parameter and arguments

function square(num) {
  console.log(10 * num);
}

square(2);
square(3);
square(4);

// return keyword
//Return কিওয়ার্ডটা আমাদের ফাংকশনের আউটপুটটা ফাংকশনের বাইরে বের করার জন্য লাগে।

// function returnOutPut() {
//   console.log(8 * 9); // not getting the output outside the function
//   return 4 * 5; // getting this output outside the function.
// }

// const result = returnOutPut();
// console.log(result + 40); // we can use the output in various ways

// console.log(returnOutPut());

// Exercise

// Question: 1.When and why function is needed?
// Function is needed when we need repeat any task. It is time saving.

// Question: 2.write down and recap the difference between console and Return.
// When we use the console we can't use the output of a function outside of the function.
// On the other hand when we use the return keyword we can use the output of a function outside of the function.

// Question: 3.
// function difference(num1, num2) {
//   return num1 - num2;
// }

// const result1 = difference(10, 2);
// const result2 = difference(0, 2);

// console.log(result1);
// console.log(result2);

// // Question: 4
// // a function that finding out the type of a argument
// function myFunction(para) {
//   return typeof para;
// }
// console.log(myFunction(1));
// console.log(myFunction(false));
// console.log(myFunction({}));
// console.log(myFunction(null));
// console.log(myFunction("string"));
// console.log(myFunction(["string"]));

// // Question: 5
// // a function that finding out the day name depending on day number from the passing argument.
// function printDay(dayNumber) {
//   const arrOfDay = [
//     "",
//     "saturday",
//     "sunday",
//     "monday",
//     "tuesday",
//     "wednesday",
//     "thursday",
//     "friday",
//   ];
//   let day = arrOfDay[dayNumber];
//   return day;
// }

// console.log(printDay(4));
// console.log(printDay(7));
// console.log(printDay(41));

// //Question: 6
// // a function that finding out the last element of an array
// function lastElement(arr) {
//   const arrLength = arr.length;
//   return arr[arrLength - 1];
// }

// console.log(lastElement([1, 2, 3, 4]));
// console.log(lastElement([1, 2, 3, 10]));
// console.log(lastElement([1, 2, 3, "hi"]));
// console.log(lastElement([]));

// //Question: 7
// // a function that creating an object from the passing value as arguments.
// function createObj(value1, value2, value3) {
//   return { x: value1, y: value2, z: value3 };
// }

// console.log(createObj(1, 2, 3));
// console.log(createObj("a", "b", "c"));
// console.log(createObj("ab", "bc", "ca"));

const num1 = 2;
const num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 % num2);
console.log(num1 ** num2);

// Operator > Operands

let num3 = 3;
// num3 += 3;
num3++; //post increment

++num3; //pre-increment
console.log(num3);
