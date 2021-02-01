//Example 1:

var firstName = "Charles";
var lastLetter = firstName[firstName.length - 1]; // lastLetter is "s"

//-------------
//Example 2:

var ourArray = [50,40,30];
ourArray[0] = 15; // equals [15,40,30]

//----------------
//Example 3 :

var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11

//----------------

An easy way to append data to the end of an array is via the push() function.

.push() takes one or more parameters and "pushes" them onto the end of the array.

Examples:

var arr1 = [1,2,3];
arr1.push(4);
// arr1 is now [1,2,3,4]

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
// arr2 now equals ["Stimpson", "J", "cat", ["happy", "joy"]]


//-------------------------

Another way to change the data in an array is with the .pop() function.

.pop() is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.

Example(1):

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]

Example(3):
// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop(1);
console.log(removedFromMyArray)//[ 'cat', 2 ]
console.log(myArray)//["John", 23]

//----------------------

pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

Example:

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

//-------------------------

.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

Example:

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

//---------------------------

excesise:
nextInLine([], 5) should return a number.

Passed
nextInLine([], 1) should return 1

Passed
nextInLine([2], 1) should return 2

Passed
nextInLine([5,6,7,8,9], 1) should return 5

Passed
After nextInLine(testArr, 10), testArr[4] should be 10

در واقع متن سوال این است نه سوالات بالا :
Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed. 
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  var remove = arr.shift();
  return remove;
  // Only change code above this line

}

//------------------------

Example

function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);  // returns "It was true"
test(false); // returns "It was false"









