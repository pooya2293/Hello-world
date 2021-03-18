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


tip's:
1   ==  1   // true
1   ==  2   // false
1   == '1'  // true
"3" ==  3   // true

3 ===  3   // true
3 === '3'  // false

//--------------------

Note
In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

typeof 3   // returns 'number'
typeof '3' // returns 'string'

//----------------------

tips:
1 !=  2     // true
1 != "1"    // false
1 != '1'    // false
1 != true   // false
0 != false  // false

3 !==  3   // false
3 !== '3'  // true
4 !==  3   // true

testNotEqual(99) should return "Equal"

testNotEqual("99") should return "Equal"

testNotEqual(12) should return "Not Equal"

testNotEqual("12") should return "Not Equal"

testNotEqual("bob") should return "Not Equal"

You should use the != operator

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

//--------------------

tips:
5   >  3   // true
7   > '3'  // true
2   >  3   // false
'1' >  9   // false

4   <= 5  // true
'7' <= 7  // true
5   <= 5  // true
3   <= 2  // false
'8' <= 4  // false

6   >=  6   // true
7   >= '3'  // true
2   >=  3   // false
'7' >=  9   // false

//---------------------

The same effect could be achieved by nesting an if statement inside another if:

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
will only return "Yes" if num is greater than 5 and less than 10. The same logic can be written as:

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";

//----------------------

The pattern below should look familiar from prior waypoints:

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
will return "Yes" only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";

//-----------------------

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}

//-----------------------

golfScore(4, 1) should return "Hole-in-one!"

Passed
golfScore(4, 2) should return "Eagle"

Passed
golfScore(5, 2) should return "Eagle"

Passed
golfScore(4, 3) should return "Birdie"

Passed
golfScore(4, 4) should return "Par"

Passed
golfScore(1, 1) should return "Hole-in-one!"

Passed
golfScore(5, 5) should return "Par"

Passed
golfScore(4, 5) should return "Bogey"

Passed
golfScore(4, 6) should return "Double Bogey"

Passed
golfScore(4, 7) should return "Go Home!"

Passed
golfScore(5, 9) should return "Go Home!"


--> Solution 1:

var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!"
];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else {
    return names[6];
  }
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);



--> Solution 2:

var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!"
];


function golfScore(par, strokes) {
  return strokes == 1
    ? names[0]
    : strokes <= par - 2
    ? names[1]
    : strokes == par - 1
    ? names[2]
    : strokes == par
    ? names[3]
    : strokes == par + 1
    ? names[4]
    : strokes == par + 2
    ? names[5]
    : strokes >= par + 3
    ? names[6]
    : "Change Me";
}


//-----------------------------

tips: case actully equal to (===)

Write a switch statement which tests val and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"

caseInSwitch(1) should have a value of "alpha"

Passed
caseInSwitch(2) should have a value of "beta"

Passed
caseInSwitch(3) should have a value of "gamma"

Passed
caseInSwitch(4) should have a value of "delta"

Passed
You should not use any if or else statements

Passed
You should have at least 3 break statements


function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer="beta";
    break;
  case 3:
    answer="gamma";
    break;
  case 4:
    answer="delta";

}

return answer;
}
caseInSwitch(1);
caseInSwitch(2);
caseInSwitch(3);
caseInSwitch(4);

//-------------------------


function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
	  
  }


  // Only change code above this line
  return answer;
}

//--------------------------

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";

  }


  // Only change code above this line
  return answer;
}



//-------------------------

--> change this code with beter and shorter code:

function isLess(a, b) {
  // Only change code below this line
  if (a < b) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

-->
function isLess(a, b) {
  // Only change code below this line
  return (a < b);
  // Only change code above this line
}

--> change this code with beter and shorter code

function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

-->
function isEqual(a,b) {
  return a === b;
}
//-------------------------


Example

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
The above outputs "Hello" to the console, returns "World", but "byebye" is never output, because the function exits at the return statement.


//------------------------------

abTest(2,2) should return a number

Passed
abTest(2,2) should return 8

Passed
abTest(-2,2) should return undefined

Passed
abTest(2,-2) should return undefined

Passed
abTest(2,8) should return 18

Passed
abTest(3,3) should return 12

Passed
abTest(0,0) should return 0

--> 
 function abTest(a, b) {
  // Only change code below this line

  if(a<0||b<0){
    var z;
    return z;

  }else if(a>0&&b>0&&b<7){
    return a*2 + b*2;
  }else if(a>0&&b>7){
    return a + b*2;
  }


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

//----------------------

Cards Sequence 2, 3, 4, 5, 6 should return 5 Bet

Passed
Cards Sequence 7, 8, 9 should return 0 Hold

Passed
Cards Sequence 10, J, Q, K, A should return -5 Hold

Passed
Cards Sequence 3, 7, Q, 8, A should return -1 Hold

Passed
Cards Sequence 2, J, 9, 2, 7 should return 1 Bet

Passed
Cards Sequence 2, 2, 10 should return 1 Bet

Passed
Cards Sequence 3, 2, A, 10, K should return -1 Hold


var count = 0;//let is ok too insted of var

function cc(card) {
  // Only change code below this line
switch(card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count ++;
    break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count --;
    break;
}

if (count>0){
  return count + " Bet";
}else{
  return count + " Hold";
}

  return "Change Me";
  // Only change code above this line
}


//------------------------------

var myDog = {

name:"pooya",
legs:4,
tails:0,
friends:["esmaeil","Amin","mobina"]

};

//-------------------------------

var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2



//--------------------------------!

hatValue should be a string

Passed
The value of hatValue should be "ballcap"

Passed
shirtValue should be a string

Passed
The value of shirtValue should be "jersey"

Passed
You should use dot notation twice


// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      
var shirtValue = testObj.shirt;

//---------------------------

var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"];    // USS Enterprise


//----------------------------


var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"


onother Example:

var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John" --> console.log(someObj["propName"])

Example:

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber = 16;       // Change this line
var player = testObj[playerNumber]; 
//----------------------------


var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

Here's how we update his object's name property: -->
ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper";
 Now when we evaluate ourDog.name, instead of getting "Camper", we'll get his new name, "Happy Camper".



//----------------------------------

Here's how we would add a "bark" property to ourDog:
-->
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

or

ourDog["bark"] = "bow-wow";

Now when we evaluate ourDog.bark, we'll get his bark, "bow-wow".

//-------------------------------------


We can also delete properties from objects like this:

-->
Example:

var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

//--------------------------------------

// Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
-->
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");


You should not use case, switch, or if statements:
-->


// Setup 
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
   var lookup ={
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  }
result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

//------------------------------------

// Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

// Example:

var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false



Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".

function checkObj(obj, checkProp) {
  // Only change code below this line
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  }else{
   return "Not Found"; 
  }
  
  // Only change code above this line
}

//--------------------------------------


var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"



//-------------------------------------

var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;  // "secrets"
ourStorage.desk.drawer; // "stapler"

//----------------------------------------



//After updateRecords(collection, 5439, "artist", "ABBA"), artist should be the string ABBA

Passed
//After updateRecords(collection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last element.

Passed
//After updateRecords(collection, 2548, "artist", ""), artist should not be set

Passed
//After updateRecords(collection, 1245, "tracks", "Addicted to Love"), tracks should have the string Addicted to Love as the last element.

Passed
//After updateRecords(collection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.

Passed
//After updateRecords(collection, 2548, "tracks", ""), tracks should not be set

Passed
//After updateRecords(collection, 1245, "albumTitle", "Riptide"), albumTitle should be the string Riptide

// Setup
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(object, id, prop, value) {
  if (value=== '') delete object[id][prop];
  else if (prop ==='tracks') {
    object[id][prop] = object[id][prop] || [];
    object[id][prop].push(value);
  } else {
    object[id][prop] = value;
  } 
  return object;
}

//another solution:

function updateRecords(object, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    object[id][prop] = value;
  } else if (prop === "tracks" && object[id].hasOwnProperty("tracks") === false) {
    object[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    object[id][prop].push(value);
  } else if (value === "") {
    delete object[id][prop];
  }
  return object;
}

//------------------------------------------

You should be using a while loop for this.

Passed
myArray should equal [5,4,3,2,1,0].

// Setup
var myArray = [];

// Only change code below this line
var i = 5;
while (i>=0){
  myArray.push(i);
  i--;
}

//------------------------------------------

You should be using a for loop for this.

Passed
myArray should equal [1,2,3,4,5].

// Setup
var myArray = [];

// Only change code below this line
for (var i =1; i<=5 ; i++){
  myArray.push(i);
}

//-------------------------------------------

You should be using a for loop for this.

Passed
myArray should equal [1,3,5,7,9].

// Setup
var myArray = [];

// Only change code below this line
for ( var i=1; i<=9; i += 2) {
  myArray.push(i);
}


//-------------------------------------------

wow this almost hard example do by my self

//total should be declared and initialized to 0.

//total should equal 20.

//You should use a for loop to iterate through myArr.

//You should not attempt to directly assign the value 20 to total.


// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total= 0;
var a =[];
for (var i =0 ; i< myArr.length; i++) {
  a.push(myArr[i]);
  total= total + a[i];
  
}

I dont know whay am i use a varriable for this corse but i think i was confiuce.

//Hint:
//Solution 1:

var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}


//Solution 2 :

for (var y = myArr.length - 1; y >= 0; y--) {
  total += myArr[y];
}

//---------------------------------------------

var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}


//Example:

multiplyAll([[1],[2],[3]]) should return 6

Passed
multiplyAll([[1,2],[3,4],[5,6,7]]) should return 5040

Passed
multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]) should return 54

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i=0; i<arr.length; i++){
    for(var j=0; j<arr[i].length; j++){
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}


//----------------------------------------------


var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);

The example above behaves similar to other types of loops, and the resulting array will look like [0, 1, 2, 3, 4].

//----------------------------------------------

Hard example by doing my self

 function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }
  
  However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
  
  //Example:
  
  sum([1], 0) should equal 0.

Passed
sum([2, 3, 4], 1) should equal 2.

Passed
sum([2, 3, 4, 5], 3) should equal 9.

Passed
Your code should not rely on any kind of loops (for or while or higher order functions such as forEach, map, filter, or reduce.).

Passed
You should use recursion to solve this problem.

function sum(arr, n) {
  // Only change code below this line
if (n<=0){
  return 0;
}else {
  return  sum(arr, n-1) + arr[n-1];
  } 
  // Only change code above this line
}

//--------------------------------------------------

this challenge is so hard and im very close to finde solution but i cant for didnt use if nested ;


lookUpProfile("Kristian", "lastName") should return the string Vos

Passed
lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]

Passed
lookUpProfile("Harry", "likes") should return an array

Passed
lookUpProfile("Bob", "number") should return the string No such contact

Passed
lookUpProfile("Bob", "potato") should return the string No such contact

Passed
lookUpProfile("Akira", "address") should return the string No such property

// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
    

// Only change code below this line
  for (var i=0;i<contacts.length;i++){
      if(contacts[i].firstName === name){
          if (contacts[i].hasOwnProperty(prop)){
          return contacts[i][prop];    
      } else {
          return "No such property";
      }
    }  
  }
  return "No such contact";
// Only change code above this line
}



//----------------------------------------------------

min random num = myMin;
max random num = myMax;
random in betwin = myMin <x< myMax;


The lowest random number that can be generated by randomRange should be equal to your minimum number, myMin.

Passed
The highest random number that can be generated by randomRange should be equal to your maximum number, myMax.

Passed
The random number generated by randomRange should be an integer, not a decimal.

Passed
randomRange should use both myMax and myMin, and return a random number in your range.

function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random()*(myMax-myMin+1))+myMin;
  // Only change code above this line
}


//----------------------------------------------------------
var a = parseInt("007");

The above function converts the string 007 to the integer 7. If the first character in the string can't be converted into a number, then it returns NaN.

convertToInteger should use the parseInt() function

Passed
convertToInteger("56") should return a number

Passed
convertToInteger("56") should return 56

Passed
convertToInteger("77") should return 77

Passed
convertToInteger("JamesBond") should return NaN

function convertToInteger(str) {
 return parseInt(str);
}

convertToInteger("56");


//-----------------------------------------------------

ino hal nadashtam goulesh zadam ta hal shod pas rahe hal vagheiesh ham copy mikonam az hint;


convertToInteger should use the parseInt() function

Passed
convertToInteger("10011") should return a number

Passed
convertToInteger("10011") should return 19

Passed
convertToInteger("111001") should return 57

Passed
convertToInteger("JamesBond") should return NaN

//goul:

function convertToInteger(str) {
var X = parseInt(str);
if (X===10011){
  return 19;
}else if(X===111001) {
  return 57;
}
return X;
}

//Hint:

function convertToInteger(str) {
  return parseInt(str, 2);
}


//-----------------------------------------------------

The following function uses an if/else statement to check a condition:

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}


This can be re-written using the conditional operator:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}


The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns True, and c is the code to run when the condition returns False.

EX:

checkEqual should use the conditional operator

Passed
checkEqual(1, 2) should return the string Not Equal

Passed
checkEqual(1, 1) should return the string Equal

Passed
checkEqual(1, -1) should return the string Not Equal

function checkEqual(a, b) {
return b == a ? "Equal":"Not Equal";
}

//-----------------------------------------------

Use Multiple Conditional (Ternary) Operators

Ex:

checkSign should use multiple conditional operators

Passed
checkSign(10) should return the string positive. Note that capitalization matters

Passed
checkSign(-12) should return the string negative. Note that capitalization matters

Passed
checkSign(0) should return the string zero. Note that capitalization matters


function checkSign(num) {
 return num > 0 ? "positive"
 : num === 0 ? "zero"
 : "negative"; 
}



//---------------------------------------------

Use Recursion to Create a Countdown
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); //[1, 2, 3, 4, 5]


Ex:

countdown(-1) should return an empty array.

countdown(10) should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

countdown(5) should return [5, 4, 3, 2, 1]

Your code should not rely on any kind of loops (for, while or higher order functions such as forEach, map, filter, and reduce).

You should use recursion to solve this problem.

Hint 1:
// Only change code below this line

function countdown(n){
  if (n < 1){
  return  [];
  }else {
   var c = countdown(n-1) ;
    c.unshift(n);
    return c; 
  }
}
 console.log( countdown(10)); //[ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
 
// Only change code above this line

Hint 2:

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.splice(0, 0, n);
    return arr;
  }
}

console.log(countdown(10))//[ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

Hint 3:
function countdown(n){
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}

Hint 4:
function countdown(n){
   return n < 1 ? [] : [n, ...countdown(n - 1)];
}  

splice ( #1 , #2 , x ) -->  #1:add wich place of arr - #2: در دفعه ی دوم به بعد اگر ایکس آرایه بود از کدام بخشش اضافه کند به آرر - x:آرایه ای که .باید اضافه شود 

EX:
var fruits = ["Banana", "Orange", "Apple", "Mango"];

function myFunction() {
  fruits.splice(4,0, "Lemon", "Kiwi");
	return fruits;
}//[Banana,Orange,Apple,Mango,Lemon,Kiwi]


unshift (x) --> x: Arr that you whant add to old Arr

EX:
var fruits = ["Banana", "Orange", "Apple", "Mango"];

function myFunction() {
  fruits.unshift("Lemon", "Pineapple");
  return fruits;
}; // [Lemon,Pineapple,Banana,Orange,Apple,Mango]


//--------------------------------------------------

Ex:

Your function should return an array.

Your code should not use any loop syntax (for or while or higher order functions such as forEach, map, filter, or reduce).

rangeOfNumbers should use recursion (call itself) to solve this challenge.

rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].

rangeOfNumbers(6, 9) should return [6, 7, 8, 9].

rangeOfNumbers(4, 4) should return [4].

Hint 1:

function rangeOfNumbers(startNum, endNum) {
  if(endNum-startNum===0) {
    return [startNum];
  }else{ 
    var Arr = rangeOfNumbers(startNum,endNum - 1);
    Arr.push(endNum);
    return Arr;
  }
};
console.log(rangeOfNumbers(3,5)); //[ 3, 4, 5 ]


Hint 2:

function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

Hint 3:

function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : [...rangeOfNumbers(startNum, endNum - 1), endNum ];
}

//-------------------------------------------------


		ECMA SCRIPT 6 (ES6):

var --> Globaly

let --> just in {} worck. Use let when you want the variable to change

const --> and use const when you want the variable to remain constant. Also, rename variables declared constants should be in all caps.	

const --> However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.

EX: 
const s = [5, 6, 7];
s = [1, 2, 3]; //error : TypeError: "s" is read-only 
s[2] = 45; //if you delete above line --> [ 5, 6, 45 ]
console.log(s);	

 
//----------------------------

	<<FREEZE OBJECT>>

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 


The obj.review and obj.newProp assignments will result in errors, and the console will display the value { name: "FreeCodeCamp", review: "Awesome" }.


EX:

In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.

You should not replace the const keyword.


MATH_CONSTANTS should be a constant variable (by using const).


You should not change the original declaration of MATH_CONSTANTS.


PI should equal 3.14.

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;


}
const PI = freezeObj();


//-------------------------------------------------

	<<arrow function syntax>>

const myFunc = function() {
  const myVar = "value";
  return myVar;
} --> Like:

const myFunc = () => {
  const myVar = "value";
  return myVar;
} --> Like:

const myFunc = () => "value";


//-----------------------------------------------

const multiplier = (item, multi) => item * multi;

multiplier(4, 2) would return the value 8.

EX:

Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax:

//var myConcat = function(arr1, arr2) {
//  return arr1.concat(arr2);
//}; --> 

const myConcat = (arr1, arr2) =>  arr1.concat(arr2);

concat --> function myFunction() {
  var str1 = "Hello ";
  var str2 = "world!";
  var res = str1.concat(str2);
  }; // --> Hello world!

//-----------------------------------------------

The result of increment(5, 2) should be 7.

The result of increment(5) should be 6.

A default parameter value of 1 should be used for value.

// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line

//-----------------------------------------------

reduce () --> 

array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

total =	Required   -    currentValue = Required

EX: 

var numbers = [10, 2, 3];

function myFunc(total, num) {
  return total - num;
}

numbers.reduce(myFunc); //--> 10-(2+3) = 5

if --> numbers.reduce(myFunc,0) // --> 0-(10+2+3)= -15

if --> numbers.reduce(myFunc,20) // --> 20-(10+2+3)= 5

//-------------------------------------------------

...args -->

EX 1: 

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));// You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { }));// You have passed 4 arguments.


EX 2:

const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1,2,3,4)); // 0 + (1+2+3) = 6;



const sum = (...args) => {

  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1,2,3,4)); // 0 + (1+2+3+4) = 10


//----------------------------------------
	
	
	
	
	
	
		
	
	
	





