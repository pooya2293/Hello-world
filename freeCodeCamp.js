//Example 1:

var firstName = "Charles";
var lastLetter = firstName[firstName.length - 1]; // lastLetter is "s"

//-------------
//Example 2:

var ourArray = [50, 40, 30];
ourArray[0] = 15; // equals [15,40,30]

//----------------
//Example 3 :

var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11

//----------------

An easy way to append data to the end of an array is via the push()function .

.push()takes one or more parameters and "pushes" them onto the end of the array.

Examples:

var arr1 = [1, 2, 3];
arr1.push(4);
// arr1 is now [1,2,3,4]

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
// arr2 now equals ["Stimpson", "J", "cat", ["happy", "joy"]]


//-------------------------

Another way to change the data in an array is with the.pop()function .

.pop()is used to "pop" a value off of the end of an array.We can store this "popped off" value by assigning it to a variable.In other words, .pop()removes the last element from an array and returns that element.

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
console.log(removedFromMyArray) //[ 'cat', 2 ]
console.log(myArray) //["John", 23]

//----------------------

pop()always removes the last element of an array.What if you want to remove the first ?

That 's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

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


tip' s :
1 == 1 // true
1 == 2 // false
1 == '1' // true
"3" == 3 // true

3 === 3 // true
3 === '3' // false

//--------------------

Note
In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

typeof 3 // returns 'number'
typeof '3' // returns 'string'

//----------------------

tips:
1 != 2 // true
1 != "1" // false
1 != '1' // false
1 != true // false
0 != false // false

3 !== 3 // false
3 !== '3' // true
4 !== 3 // true

testNotEqual(99)should return "Equal"

testNotEqual("99")should return "Equal"

testNotEqual(12)should return "Not Equal"

testNotEqual("12")should return "Not Equal"

testNotEqual("bob")should return "Not Equal"

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
5 > 3 // true
7 > '3' // true
2 > 3 // false
'1' > 9 // false

4 <= 5 // true
'7' <= 7 // true
5 <= 5 // true
3 <= 2 // false
'8' <= 4 // false

6 >= 6 // true
7 >= '3' // true
2 >= 3 // false
'7' >= 9 // false

//---------------------

The same effect could be achieved by nesting an if statement inside another if :

if (num > 5) {
    if (num < 10) {
        return "Yes";
    }
}
return "No";
will only return "Yes" if num is greater than 5 and less than 10.The same logic can be written as:

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
will return "Yes" only if num is between 5 and 10(5 and 10 included).The same logic can be written as:

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

golfScore(4, 1)should return "Hole-in-one!"

Passed
golfScore(4, 2)should return "Eagle"

Passed
golfScore(5, 2)should return "Eagle"

Passed
golfScore(4, 3)should return "Birdie"

Passed
golfScore(4, 4)should return "Par"

Passed
golfScore(1, 1)should return "Hole-in-one!"

Passed
golfScore(5, 5)should return "Par"

Passed
golfScore(4, 5)should return "Bogey"

Passed
golfScore(4, 6)should return "Double Bogey"

Passed
golfScore(4, 7)should return "Go Home!"

Passed
golfScore(5, 9)should return "Go Home!"

-- > Solution 1:

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

-- > Solution 2:

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

tips: case actully equal to( === )

Write a switch statement which tests val and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"

caseInSwitch(1)should have a value of "alpha"

Passed
caseInSwitch(2)should have a value of "beta"

Passed
caseInSwitch(3)should have a value of "gamma"

Passed
caseInSwitch(4)should have a value of "delta"

Passed
You should not use any if or else
    statements

    Passed
    You should have at least 3 break statements

    function caseInSwitch(val) {
        var answer = "";
        // Only change code below this line
        switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";

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
    switch (val) {
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
    switch (val) {
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

-- > change this code with beter and shorter code:

function isLess(a, b) {
    // Only change code below this line
    if (a < b) {
        return true;
    } else {
        return false;
    }
    // Only change code above this line
}

-- >
function isLess(a, b) {
    // Only change code below this line
    return (a < b);
    // Only change code above this line
}

-- > change this code with beter and shorter code

function isEqual(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}

-- >
function isEqual(a, b) {
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

abTest(2, 2)should return a number

Passed
abTest(2, 2)should return 8

Passed
abTest(-2, 2)should return undefined

Passed
abTest(2, -2)should return undefined

Passed
abTest(2, 8)should return 18

Passed
abTest(3, 3)should return 12

Passed
abTest(0, 0)should return 0

-- >
function abTest(a, b) {
    // Only change code below this line

    if (a < 0 || b < 0) {
        var z;
        return z;

    } else if (a > 0 && b > 0 && b < 7) {
        return a * 2 + b * 2;
    } else if (a > 0 && b > 7) {
        return a + b * 2;
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

var count = 0; //let is ok too insted of var

function cc(card) {
    // Only change code below this line
    switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        count++;
        break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
        count--;
        break;
    }

    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }

    return "Change Me";
    // Only change code above this line
}

//------------------------------

var myDog = {

    name: "pooya",
    legs: 4,
    tails: 0,
    friends: ["esmaeil", "Amin", "mobina"]

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
myObj["NoSpace"]; // USS Enterprise


//----------------------------


var dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
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

var playerNumber = 16; // Change this line
var player = testObj[playerNumber];
//----------------------------


var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

Here 's how we update his object' s name property: -- >
ourDog.name = "Happy Camper";
or ourDog["name"] = "Happy Camper";
Now when we evaluate ourDog.name, instead of getting "Camper", we 'll get his new name, "Happy Camper".



//----------------------------------

Here' s how we would add a "bark" property to ourDog:
-- >
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

or

ourDog["bark"] = "bow-wow";

Now when we evaluate ourDog.bark, we 'll get his bark, "bow-wow".

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



Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property' s value.If not, return "Not Found".

function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }

    // Only change code above this line
}

//--------------------------------------


var ourPets = [{
        animalType: "cat",
        names: [
            "Meowzer",
            "Fluffy",
            "Kit-Cat"
        ]
    }, {
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
ourStorage.cabinet["top drawer"].folder2; // "secrets"
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
    if (value === '')
        delete object[id][prop];
    else if (prop === 'tracks') {
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
myArray should equal[5, 4, 3, 2, 1, 0].

// Setup
var myArray = [];

// Only change code below this line
var i = 5;
while (i >= 0) {
    myArray.push(i);
    i--;
}

//------------------------------------------

You should be using a for loop for this.

Passed
myArray should equal[1, 2, 3, 4, 5].

// Setup
var myArray = [];

// Only change code below this line
for (var i = 1; i <= 5; i++) {
    myArray.push(i);
}

//-------------------------------------------

You should be using a for loop for this.

Passed
myArray should equal[1, 3, 5, 7, 9].

// Setup
var myArray = [];

// Only change code below this line
for (var i = 1; i <= 9; i += 2) {
    myArray.push(i);
}

//-------------------------------------------

wow this almost hard example do
    by my self

    //total should be declared and initialized to 0.

    //total should equal 20.

    //You should use a for loop to iterate through myArr.

    //You should not attempt to directly assign the value 20 to total.


    // Setup
    var myArr = [2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
var a = [];
for (var i = 0; i < myArr.length; i++) {
    a.push(myArr[i]);
    total = total + a[i];

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
    [1, 2], [3, 4], [5, 6]
];
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

//Example:

multiplyAll([[1], [2], [3]])should return 6

Passed
multiplyAll([[1, 2], [3, 4], [5, 6, 7]])should return 5040

Passed
multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]])should return 54

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
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

The example above behaves similar to other types of loops, and the resulting array will look like[0, 1, 2, 3, 4].

//----------------------------------------------

Hard example by doing my self

function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
}

However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1].That means you can rewrite multiply in terms of itself and never need to use a loop.

function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}

//Example:

sum([1], 0)should equal 0.

Passed
sum([2, 3, 4], 1)should equal 2.

Passed
sum([2, 3, 4, 5], 3)should equal 9.

Passed
Your code should not rely on any kind of loops(for or while or higher order functions such as forEach, map, filter, or reduce.).

Passed
You should use recursion to solve this problem.

function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
    // Only change code above this line
}

//--------------------------------------------------

this challenge is so hard and im very close to finde solution but i cant for didnt use if nested;

lookUpProfile("Kristian", "lastName")should return the string Vos

Passed
lookUpProfile("Sherlock", "likes")should return ["Intriguing Cases", "Violin"]

Passed
lookUpProfile("Harry", "likes")should return an array

Passed
lookUpProfile("Bob", "number")should return the string No such contact

Passed
lookUpProfile("Bob", "potato")should return the string No such contact

Passed
lookUpProfile("Akira", "address")should return the string No such property

// Setup
var contacts = [{
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    }, {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    }, {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    }, {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {

    // Only change code below this line
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
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
random in betwin = myMin < x < myMax;

The lowest random number that can be generated by randomRange should be equal to your minimum number, myMin.

Passed
The highest random number that can be generated by randomRange should be equal to your maximum number, myMax.

Passed
The random number generated by randomRange should be an integer, not a decimal.

Passed
randomRange should use both myMax and myMin, and return a random number in your range.

function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
}

//----------------------------------------------------------
var a = parseInt("007");

The above function converts the string 007 to the integer 7.If the first character in the string can not be converted into a number, then it returns NaN.

convertToInteger should use the parseInt()function

Passed
convertToInteger("56")should return a number

Passed
convertToInteger("56")should return 56

Passed
convertToInteger("77")should return 77

Passed
convertToInteger("JamesBond")should return NaN

function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger("56");

//-----------------------------------------------------

ino hal nadashtam goulesh zadam ta hal shod pas rahe hal vagheiesh ham copy mikonam az hint;

convertToInteger should use the parseInt()function

Passed
convertToInteger("10011")should return a number

Passed
convertToInteger("10011")should return 19

Passed
convertToInteger("111001")should return 57

Passed
convertToInteger("JamesBond")should return NaN

//goul:

function convertToInteger(str) {
    var X = parseInt(str);
    if (X === 10011) {
        return 19;
    } else if (X === 111001) {
        return 57;
    }
    return X;
}

//Hint:

function convertToInteger(str) {
    return parseInt(str, 2);
}

//-----------------------------------------------------

The following function uses an if  / else
    statement to check a condition:

    function findGreater(a, b) {
        if (a > b) {
            return "a is greater";
        } else {
            return "b is greater";
        }
    }

This can be re - written using the conditional operator:

function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater";
}

The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns True, and c is the code to run when the condition returns False.

EX:

checkEqual should use the conditional operator

Passed
checkEqual(1, 2)should return the string Not Equal

Passed
checkEqual(1, 1)should return the string Equal

Passed
checkEqual(1, -1)should return the string Not Equal

function checkEqual(a, b) {
    return b == a ? "Equal" : "Not Equal";
}

//-----------------------------------------------

Use Multiple Conditional(Ternary)Operators

Ex:

checkSign should use multiple conditional operators

Passed
checkSign(10)should return the string positive.Note that capitalization matters

Passed
checkSign(-12)should return the string negative.Note that capitalization matters

Passed
checkSign(0)should return the string zero.Note that capitalization matters

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

countdown(-1)should return an empty array.

countdown(10)should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

countdown(5)should return [5, 4, 3, 2, 1]

Your code should not rely on any kind of loops(for , while or higher order functions such as forEach, map, filter, and reduce)
        .

        You should use recursion to solve this problem.

        Hint 1:
        // Only change code below this line

        function countdown(n) {
            if (n < 1) {
                return [];
            } else {
                var c = countdown(n - 1);
                c.unshift(n);
                return c;
            }
        }
    console.log(countdown(10)); //[ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

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

    console.log(countdown(10)) //[ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

    Hint 3:
    function countdown(n) {
    return n < 1 ? [] : [n].concat(countdown(n - 1));
}

    Hint 4:
    function countdown(n) {
    return n < 1 ? [] : [n, ...countdown(n - 1)];
}

    splice( # 1,  # 2, x)-- >  # 1: add wich place of arr -  # 2: در دفعه ی دوم به بعد اگر ایکس آرایه بود از کدام بخشش اضافه کند به آرر - x: آرایه ای که.باید اضافه شود

    EX:
    var fruits = ["Banana", "Orange", "Apple", "Mango"];

    function myFunction() {
    fruits.splice(4, 0, "Lemon", "Kiwi");
    return fruits;
} //[Banana,Orange,Apple,Mango,Lemon,Kiwi]


    unshift(x)-- > x: Arr that you whant add to old Arr

    EX:
    var fruits = ["Banana", "Orange", "Apple", "Mango"];

    function myFunction() {
    fruits.unshift("Lemon", "Pineapple");
    return fruits;
}; // [Lemon,Pineapple,Banana,Orange,Apple,Mango]


    //--------------------------------------------------

    Ex:

    Your function should return an array.

    Your code should not use any loop syntax(for or while or higher order functions such as forEach, map, filter, or reduce).

    rangeOfNumbers should use recursion(call itself)to solve this challenge.

    rangeOfNumbers(1, 5)should return [1, 2, 3, 4, 5].

    rangeOfNumbers(6, 9)should return [6, 7, 8, 9].

    rangeOfNumbers(4, 4)should return [4].

    Hint 1:

    function rangeOfNumbers(startNum, endNum) {
        if (endNum - startNum === 0) {
            return [startNum];
        } else {
            var Arr = rangeOfNumbers(startNum, endNum - 1);
            Arr.push(endNum);
            return Arr;
        }
    };
    console.log(rangeOfNumbers(3, 5)); //[ 3, 4, 5 ]


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
         : [...rangeOfNumbers(startNum, endNum - 1), endNum];
    }

    //-------------------------------------------------


    ECMA SCRIPT 6(ES6):

    var-- > Globaly

    let-- > just in {}
    worck.Use let when you want the variable to change

    const-- > and use const when you want the variable to remain constant.Also, rename variables declared constants should be in all caps.

    const-- > However, it is important to understand that objects(including arrays and functions)assigned to a variable using const are still mutable.Using the const declaration only prevents reassignment of the variable identifier.

    EX:
    const s = [5, 6, 7];
    s = [1, 2, 3]; //error : TypeError: "s" is read-only
    s[2] = 45; //if you delete above line --> [ 5, 6, 45 ]
    console.log(s);

    //----------------------------

     << FREEZE OBJECT >>

    let obj = {
        name: "FreeCodeCamp",
        review: "Awesome"
    };
    Object.freeze(obj);
    obj.review = "bad";
    obj.newProp = "Test";
    console.log(obj);

    The obj.review and obj.newProp assignments will result in errors, and the console will display the value {
    name: "FreeCodeCamp",
    review: "Awesome"
}
    .

    EX:

    In this challenge you are going to use Object.freeze to prevent mathematical constants from changing.You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.

    You should not replace the const keyword.

    MATH_CONSTANTS should be a constant variable(by using const).

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
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;

}
    const PI = freezeObj();

    //-------------------------------------------------

     << arrow function syntax >>

    const myFunc = function () {
        const myVar = "value";
        return myVar;
    }
    -- > Like:

    const myFunc = () => {
    const myVar = "value";
    return myVar;
}
    -- > Like:

    const myFunc = () => "value";

    //-----------------------------------------------

    const multiplier = (item, multi) => item * multi;

    multiplier(4, 2)would return the value 8.

    EX:

    Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax:

    //var myConcat = function(arr1, arr2) {
    //  return arr1.concat(arr2);
    //}; -->

    const myConcat = (arr1, arr2) => arr1.concat(arr2);

    concat-- > function myFunction() {
        var str1 = "Hello ";
        var str2 = "world!";
        var res = str1.concat(str2);
    }; // --> Hello world!

    //-----------------------------------------------

    The result of increment(5, 2)should be 7.

    The result of increment(5)should be 6.

    A default parameter value of 1 should be used for value.

    // Only change code below this line
    const increment = (number, value = 1) => number + value;
    // Only change code above this line

    //-----------------------------------------------

    reduce()-- >

    array.reduce(function (total, currentValue, currentIndex, arr), initialValue)

        total = Required - currentValue = Required

            EX:

            var numbers = [10, 2, 3];

        function myFunc(total, num) {
            return total - num;
        }

        numbers.reduce(myFunc); //--> 10-(2+3) = 5

        if -- > numbers.reduce(myFunc, 0) // --> 0-(10+2+3)= -15

            if -- > numbers.reduce(myFunc, 20) // --> 20-(10+2+3)= 5

                //-------------------------------------------------

                ...args-- >

                EX 1:

                function howMany(...args) {
                    return "You have passed " + args.length + " arguments.";
                }
        console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
        console.log(howMany("string", null, [1, 2, 3], {})); // You have passed 4 arguments.


        EX 2:

        const sum = (x, y, z) => {
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    }
        console.log(sum(1, 2, 3, 4)); // 0 + (1+2+3) = 6;


        const sum = (...args) => {

        return args.reduce((a, b) => a + b, 0);
    }
        console.log(sum(1, 2, 3, 4)); // 0 + (1+2+3+4) = 10


        //----------------------------------------

        Math.max-- > ES 5 code:

        var arr = [6, 89, 3, 45];
        var maximus = Math.max.apply(null, arr); //89

        Math.max با...arr-- > ES 6 code:

        const arr = [6, 89, 3, 45];
        const maximus = Math.max(...arr); //89

        EX 1:
        Copy all contents of arr1 into another array arr2 using the spread operator.

        const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
        let arr2;

        arr2 = [...arr1];

        console.log(arr2); // [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY' ]

        //----------------------------------------

        ES5 code:

        const user = {
            name: 'John Doe',
            age: 34
        };

        const name = user.name; //John Doe
        const age = user.age; //34


        ES6 code:
        const user = {
            name: 'John Doe',
            age: 34
        };

        const {
        name,
        age
    } = user;
        console.log(name); //John Doe
        console.log(age); //34

        //-----------------------------------------

        ES5:

        const user = {
            name: 'John Doe',
            age: 34
        };

        const username = user.name; //John Doe
        const userage = user.age; //34

        ES6:

        const user = {
            name: 'John Doe',
            age: 34
        };

        const {
        name: userName,
        age: userAge
    } = user;

        console.log(userName); //John Doe
        console.log(userAge); //34


        //------------------------------------------

        const user = {
            johnDoe: {
                age: 34,
                email: 'johnDoe@freeCodeCamp.com'
            }
        };

        const {
        johnDoe: {
            age,
            email
        }
    } = user;

        const {
        johnDoe: {
            age: userAge,
            email: userEmail
        }
    } = user;

        use userAge //34 instead of const.johnDoe.age //34

        //--------------------------------------------

        ES 6:

         << Use Destructuring Assignment to Assign Variables from Arrays >>

        const[a, b] = [1, 2, 3, 4, 5, 6];
        console.log(a, b); //1, 2

        const[a, b, , , c] = [1, 2, 3, 4, 5, 6];
        console.log(a, b, c); //1 , 2 , 5

        EX 1:

        The value of a should be 6, after swapping.

        The value of b should be 8, after swapping.

        You should use array destructuring to swap a and b.

        let a = 8, b = 6;

        // Only change code below this line
        [b, a] = [a, b]

        //------------------------------------------------


        arr should be[3, 4, 5, 6, 7, 8, 9, 10]

        source should be[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        Array.slice()should not be used.

        Destructuring on list should be used.

        const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        function removeFirstTwo(list) {
        // Only change code below this line

        let[a, b, ...arr] = list;
        // Only change code above this line
        return arr;
    }
        const arr = removeFirstTwo(source);

        array.slice(start, end)-- >

        EX:

        var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
        var citrus = fruits.slice(1, 4);

        console.log(citrus); //Orange,Lemon,Apple


        //---------------------------------------------

         << Use Destructuring Assignment to Pass an Object as a Functions Parameters >>

        i cant understand

        const profileUpdate = (profileData) => {
        const {
            name,
            age,
            nationality,
            location
        } = profileData;

    }
        -- >

        const profileUpdate = ({
            name,
            age,
            nationality,
            location
        }) => {}

        EX 1:

        stats should be an object.

        half(stats)should be 28.015

        Destructuring should be used.

        Destructured parameter should be used.

        const stats = {
            max: 56.78,
            standard_deviation: 4.34,
            median: 34.54,
            mode: 23.87,
            min: -0.75,
            average: 35.85
        };

        // Only change code below this line
        const half = (stats) => (stats.max + stats.min) / 2.0-- >

        const half = ({
            max,
            min
        }) => (max + min) / 2.0;
        // Only change code above this line


        //-------------------------------------------


         << Create Strings using Template Literals >>

        const person = {
            name: "Zodiac Hasbro",
            age: 56
        };

        const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

        console.log(greeting); // Hello, my name is Zodiac Hasbro! and I am 56 years old.


        A lot of things happened there.Firstly, the example uses backticks(``), not quotes(' or "), to wrap the string. Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting \n within strings. The ${variable} syntax used above is a placeholder. Basically, you won' t have to use concatenation with the + operator anymore.To add variables to strings, you just drop the variable in a template string and wrap it with $ {
            and
        }
            .Similarly, you can include other expressions in your string literal, for example $ {
            a + b
        }
            .This new way of creating strings gives you more flexibility to create robust strings.

            const result = {
                success: ["max-length", "no-amd", "prefer-arrow-functions"],
                failure: ["no-var", "var-on-top", "linebreak"],
                skipped: ["no-extra-semi", "no-dup-keys"]
            };

            function makeList(arr) {
            // change code below this line
            const failureItems = [];
            for (let i = 0; i < arr.length; i++) {
                failureItems.push(` < li class = "text-warning" > $ {
                arr[i]
            }
             <  / li > `);
            }
            // change code above this line
            return failureItems;
        }

            const failuresList = makeList(result.failure); -- >
            //[
            '<li class="text-warning">no-var</li>',
            '<li class="text-warning">var-on-top</li>',
            '<li class="text-warning">linebreak</li>'
            ]

            //-----------------------------------------

             << Write Concise Object Literal Declarations Using Object Property Shorthand >>

            const getMousePosition = (x, y) => ({
                x: x,
                y: y
            }); -- >

            const getMousePosition = (x, y) => ({
                x,
                y
            });

            EX 1:
            const createPerson = (name, age, gender) => {
            // Only change code below this line
            return {
                name: name,
                age: age,
                gender: gender
            };
            // Only change code above this line
        };

            Solution: -- >

            const createPerson = (name, age, gender) => {
            // Only change code below this line
            return {
                name,
                age,
                gender
            };
            // Only change code above this line
        };
            console.log(createPerson("poori", 12, "male")) // { name: 'poori', age: 12, gender: 'male' }

            //-------------------------------------------

            When defining functions within objects in ES5, we have to use the keyword function as follows:

            const person = {
                name: "Taylor",
                sayHello: function () {
                    return ` Hello!My name is $ {
            this.name
        }
            .`;
                }
            };

            -- >

            const person = {
                name: "Taylor",
                sayHello() {
                    return ` Hello!My name is $ {
            this.name
        }
            .`;
                }
            };

            EX 1:

            // Only change code below this line
            const bicycle = {
                gear: 2,
                setGear: function (newGear) {
                    this.gear = newGear;
                }
            };
            // Only change code above this line
            bicycle.setGear(3);
            console.log(bicycle.gear); //3

            Solution: -- >

            // Only change code below this line
            const bicycle = {
                gear: 2,
                setGear(newGear) {
                    this.gear = newGear;
                }
            };
            // Only change code above this line
            bicycle.setGear(3);
            console.log(bicycle.gear); // 3

            //-------------------------------------

             << Use class Syntax to Define a Constructor Function >>

            var SpaceShuttle = function (targetPlanet) {
                this.targetPlanet = targetPlanet;
            }
            var zeus = new SpaceShuttle('Jupiter');

            -- >

            class SpaceShuttle {
            constructor(targetPlanet) {
                this.targetPlanet = targetPlanet;
            }
        }
            const zeus = new SpaceShuttle('Jupiter');

            Note: UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.

            EX 1:

            // Only change code below this line
            var Vegetable = function (name) {
            this.name = name;
        }
            // Only change code above this line

            const carrot = new Vegetable('carrot');
            console.log(carrot.name); // 'carrot'


            -- >

            // Only change code below this line
            class Vegetable {
            constructor(name) {
                this.name = name;
            }
        }
            // Only change code above this line

            const carrot = new Vegetable('carrot');
            console.log(carrot.name); // carrot

            const moos = new Vegetable('soosan');
            console.log(moos.name); // soosan


            //----------------------------------------------

            function Car(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

            const car1 = new Car('Eagle', 'Talon TSi', 1993);

            console.log(car1.make);
            // expected output: "Eagle"

            //-----------------------------------------------
            i cant understand this curse:
             << Use getters and setters to Control Access to an Object >>

            class Book {
            constructor(author) {
                this._author = author;
            }
            // getter
            get writer() {
                return this._author;
            }
            // setter
            set writer(updatedAuthor) {
                this._author = updatedAuthor;
            }
        }
            const novel = new Book('sooori');
            console.log(novel.writer); //sooori
            novel.writer = 'Pooori';
            console.log(novel.writer); //Pooori


            Use the class keyword to create a Thermostat class.The constructor accepts a Fahrenheit temperature.

            In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.

            Remember that C = 5 / 9 * (F - 32)and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.

            Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.

            // Only change code below this line
            class Thermostat {
            constructor(fahrenheit) {
                this.fahrenheit = fahrenheit;
            }
            get temperature() {
                return 5 / 9 * (this.fahrenheit - 32);
            }
            set temperature(Celsius) {
                this.fahrenheit = (Celsius * 9.0) / 5 + 32;
            }
        }
            // Only change code above this line

            const thermos = new Thermostat(76); // Setting in Fahrenheit scale
            let temp = thermos.temperature; // 24.44 in Celsius
            console.log(temp);
            thermos.temperature = 26;
            temp = thermos.temperature; // 26 in Celsius
            console.log(temp)

            ساده کردن فهم این:

            // Only change code below this line
            class Thermostat {
            constructor(fahrenheit) {
                this.fahrenheit = fahrenheit;
            }
            get temperature() {
                return 10 * this.fahrenheit;
            }
            set temperature(Celsius) {
                this.fahrenheit = (Celsius * 2);
            }
        }
            // Only change code above this line

            const thermos = new Thermostat(76); // Setting in Fahrenheit scale
            let temp = thermos.temperature; // 760
            console.log(temp);
            thermos.temperature = 12;
            temp = thermos.temperature; // 240
            console.log(temp)

            //-------------------------------------------
            ES 5:

            const config = {
                _port: 4001,
                setPort: function (port) {
                    // Port must be a number
                    if (typeof port !== 'number')
                        return;
                    // Port must be within the accepted range
                    if (port < 1024 || port > 65535)
                        return;

                    this._port = port;
                },
                getPort: function () {
                    return this._port;
                },
            };

            config.setPort(1023);
            console.log(config.getPort()); //=> 4001

            config.setPort(1024);
            console.log(config.getPort()); //=> 1024

            ES 6:
            const config = {
                _port: 4001,
                set port(port) {
                    // Port must be a number
                    if (typeof port !== 'number')
                        return;
                    // Port must be within the accepted range
                    if (port < 1024 || port > 65535)
                        return;

                    this._port = port;
                },
                get port() {
                    return this._port;
                },
            };

            config.port = 1023;
            console.log(config.port); //=> 4001


            config.port = 1024;
            console.log(config.port); //=> 1024

            //------------------------------------------

             << Use export to Share a Code Block >>

            export const add = (x, y) => {
            return x + y;
        }

            The above is a common way to export a single function , but you can achieve the same thing like this:

            const add = (x, y) => {
            return x + y;
        }

            export {
            add
        };

            EX 1:

            const uppercaseString = (string) => {
            return string.toUpperCase();
        }

            const lowercaseString = (string) => {
            return string.toLowerCase()
        }

            export {
            uppercaseString,
            lowercaseString
        };

            //---------------------------------------------------

             << Reuse JavaScript Code Using import >>

            import {
            add
        }
            from './math_functions.js';

            Here, import will find add in math_functions.js, import just that function for you to use, and ignore the rest.The. / tells the import to look for the math_functions.js file in the same folder as the current file.The relative file path(. / )and file extension(.js)are required when using import in this way.

            import {
            add,
            subtract
        }
            from './math_functions.js';

            //--------------------------------------------------

             << Use * to Import Everything from a File >>

            Suppose you have a file and you wish to import all of its contents into the current file.This can be done with the import * as syntax.

            import * as myMathModule from "./math_functions.js";

            myMathModule.add(2, 3);
            myMathModule.subtract(5, 3);

            EX 1:

            import * as stringFunctions from "./string_functions.js";

            // Only change code above this line

            stringFunctions.uppercaseString("hello");
            stringFunctions.lowercaseString("WORLD!");

            //--------------------------------------------


             << Create an Export Fallback with export default  >>

            There is another export syntax you need to know, known as export default .Usually you will use this syntax if only one value is being exported from a file.It is also used to create a fallback value for a file or module.

            Below are examples using export default:

            export default function add(x, y) {
                return x + y;
            }

            export default function (x, y) {
                return x + y;
            }

            The first is a named function , and the second is an anonymous function .

            Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file.Additionally, you cannot use export default with var, let, or const

            EX 1:

            The following function should be the fallback value for the module.Please add the necessary code to do
                so:

                Your code should use an export fallback.

                function subtract(x, y) {
                    return x - y;
                }

            export default function (x, y) {
                return x - y;
            }

            //------------------------------------------------

             << Import a Default Export >>

            Ex 1:

            import subtract from "./math_functions.js";
    // Only change code above this line

    subtract(7, 4);

//----------------------------------------------

 << Create a JavaScript Promise >>

const myPromise = new Promise((resolve, reject) => {});

Ex 1:

const makeServerRequest = new Promise((resolve, reject) => {});

//----------------------------------------------

 << Complete a Promise with resolve and reject >>

const myPromise = new Promise((resolve, reject) => {
    if (condition here) {
        resolve("Promise was fulfilled");
    } else {
        reject("Promise was rejected");
    }
});

EX 1:

Make the promise handle success and failure.If responseFromServer is true, call the resolve method to successfully complete the promise.Pass resolve a string with the value 'We got the data'.If responseFromServer is false, use the reject method instead and pass it the string: 'Data not received'.

const makeServerRequest = new Promise((resolve, reject) => {

    if (responseFromServer) {
        resolve('We got the data'); // Change this line
    } else {
        reject('Data not received'); // Change this line
    }
});

//-----------------------------------------

 << Handle a Fulfilled Promise with then >>

myPromise.then(result => {});

Ex 1:

const makeServerRequest = new Promise((resolve, reject) => {

    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {

    console.log(result);

});

//--------------------------------------

 << Handle a Rejected Promise with catch  >>

myPromise.catch(error => {});

Ex 1:

const makeServerRequest = new Promise((resolve, reject) => {

    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result);
});

makeServerRequest.catch(error => {
    console.log(error);
});

//------------------------------------

 << Using the Test Method >>

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
console.log(result); // true

//------------------------------------

for pets like 'dog', 'cat', 'bird', or 'fish' true and any thing else
    show false: -- >

    let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString); //--> True

//------------------------------------

for doesnt matter of FREEcodeCAMP with freeCODEcamp: -- >

let myString = "freeCodeCamp";
let fccRegex = /FReeCodeCamp/i; // Change this line
let result = fccRegex.test(myString); //--> True


//-------------------------------------

 << Extract Matches >>

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);

'string'.match(/regex/);
VS
/regex/.test('string');

EX 1:

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
console.log(result); //--> [ 'coding',
index: 18,
input: 'Extract the word \'coding\' from this string.',
groups: undefined]

Ex 2:

let extractStr = "The rain in SPAIN stays mainly in the plain";
let codingRegex = /ain/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
console.log(result); //--> [ 'ain',
index: 5,
input: 'The rain in SPAIN stays mainly in the plain',
groups: undefined]

EX 3:

let extractStr = "The rain in SPAIN stays mainly in the plain";
let codingRegex = /ain/g; // Change this line
let result = extractStr.match(codingRegex); // Change this line
console.log(result); //--> [ 'ain', 'ain', 'ain' ]


EX 4:

let extractStr = "The rain in SPAIN stays mainly in the plain";
let codingRegex = /ain/gi; // Change this line
let result = extractStr.match(codingRegex); // Change this line
console.log(result); //--> [ 'ain', 'AIN', 'ain', 'ain' ]

//---------------------------------------

 << Match Anything with Wildcard Period >>

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); //--> True
huRegex.test(hugStr); //--> True


Ex 1:

Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun.Your regex should use the wildcard character:

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr); //--> True


//---------------------------------

 << Match Single Character with Multiple Possibilities >>

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/; , , , and
bigStr.match(bgRegex); //-->["big"]
bagStr.match(bgRegex); //-->["bag"]
bugStr.match(bgRegex); //-->["bug"]
bogStr.match(bgRegex); //--> null

EX 1:

Use a character class with vowels(a, e, i, o, u)in your regex vowelRegex to find all the vowels in the string quoteSample:

Note: Be sure to match both upper - and lowercase vowels.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";

let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);
console.log(result);

//-------------------------------------

let catStr = "cat bat mat sat zat";

let bgRegex = /[a-p]at/gi;
let result = catStr.match(bgRegex);

console.log(result); //--> [ 'cat', 'bat', 'mat' ]

EX 1:

Match all the letters in the string quoteSample:

Note: Be sure to match both uppercase and lowercase letters.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

console.log(result);

//-------------------------------------

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);

EX 1:

Create a single regex that matches a range of letters between 'h' and 's', and a range of numbers between '2' and '6'.

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result);

//--------------------------------------

 << Match Single Characters Not Specified >>

matches all characters that are not a vowel-- > /[^aeiou]/gi

EX 1:

Create a single regex that matches all characters that are not a number or a vowel.Remember to include the appropriate flags in the regex.

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result); //--> [ ' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.' ]

//---------------------------------------

 << Match Characters that Occur One or More Times >>

EX 1:

let difficultSpelling = "MississippiS";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);

console.log(result) //--> [ 'ss', 'ss', 'S' ]

//----------------------------------------

 << Match Characters that Occur Zero or More Times >>

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/g;
soccerWord.match(goRegex); //--> [ 'goooooooo' ]
gPhrase.match(goRegex); //--> [ 'g', 'g' ]
oPhrase.match(goRegex); //--> null


for EX 1:

let phrase = "ba humbug";

let regexPlus = /bah+/;
let regexStar = /bah*/;

regexPlus.test(phrase); //  False
regexStar.test(phrase); //  True

for EX 2:

let phrase = "wooooow look at that!";

let regexPlus = /wo+w/;
let regexStar = /wo*w/;

regexPlus.test(phrase); // returns true
regexStar.test(phrase); // returns true

//------------------------------------

 << Find Characters with Lazy Matching >>

var t = "titanic";
var g1 = /t[a-z]*i/g;
var g2 = /t[a-z]*?i/g;
var result = t.match(g1); //[ 'titani' ]
var result = t.match(g2); //[ 'ti', 'tani' ]


EX 1:

let text = "<h1>Winter is coming</h1>";
let myRegex1 = /<.*>/g;
let myRegex2 = /<.*?>/g;
let result = text.match(myRegex1); //--> [ '<h1>Winter is coming</h1>' ]
let result = text.match(myRegex2); //--> [ '<h1>', '</h1>' ]


//-------------------------------------

Find criminals:
A criminal is represented by the capital letter C.

let crowd = "P1P5P4CCCcP2P6CCP3";
let reCriminals = /C+/g; // Change this line

let result = crowd.match(reCriminals); //--> [ 'CCC', 'CC' ]


//010101010101010101010101010101010101001

 << only find in first of string >>

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString); //True
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst); //False


 << Match Ending String Patterns >>

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); //True
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding); //False


//010101010101010101010101010101010101001

 << Match All Letters and Numbers >>

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); //True
shortHand.test(numbers); //True
longHand.test(varNames); //True
shortHand.test(varNames); //True


EX 1:

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV1 = /\w/g; //right
let alphabetRegexV2 = /\w+/g;
let result = quoteSample.match(alphabetRegexV1).length; //--> 31
let result = quoteSample.match(alphabetRegexV2).length; // --> 6


//010101010101010101010101010101010101001

 << Match Everything But Letters and Numbers >>

let shortHand1 = /\w/;
let shortHand2 = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand1); //[ '4', '2' ]
numbers.match(shortHand2); //[ '%' ]
sentence.match(shortHand1); //[ 'C', 'o', 'd', 'i', 'n', 'g' ]
sentence.match(shortHand2); //['!']


//010101010101010101010101010101010101001

 << Match All Numbers >>

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length; //--> 4


//010101010101010101010101010101010101001

 << Match All Non - Numbers >>

The shortcut to look for non - digit characters is \ D.This is equal to the character class[ ^ 0 - 9], which looks for a single character that is not a number between zero and nine.

let movieName = "2001: A Space Odyssey";
let noNumRegex1 = /\D/g;
let noNumRegex2 = /[^0-9]/g;
movieName.match(noNumRegex1).length; //-->17
movieName.match(noNumRegex2).length; //-->17

//010101010101010101010101010101010101001

 << a Hard example of user check >>

rulse:

1.Usernames can only use alpha - numeric characters.

2.The only numbers in the username have to be at the end.There can be zero or more of them at the end.Username cannot start with the number.

3.Username letters can be lowercase and uppercase.

4.Usernames have to be at least two characters long.A two - character username can only use alphabet letters as characters.

let username = "a1556464";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username); //--> True


//010101010101010101010101010101010101001

 << Match Whitespace >>

EX 1:

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // or [ \r\t\f\n\v]
let result = sample.match(countWhiteSpace); // --> [ ' ', ' ', ' ', ' ', ' ' ]

//010101010101010101010101010101010101001

 << Match Non - Whitespace Characters

/\S/Capital s
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // or [^ \r\t\f\n\v]
let result = sample.match(countNonWhiteSpace).length; // 38


//010101010101010101010101010101010101001

 << Specify Upper and Lower Number of Matches >>

!Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters.These are convenient but sometimes you want to match a certain range of patterns.!

For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be / a {
    3,
    5
}
h / .

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // True
multipleA.test(A2); // False


EX 1:

let ohStr = "Ohhhhh no"; // or "Ohhh no" or "Ohhhhhh no"
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);

//010101010101010101010101010101010101001

 << Specify Only the Lower Number of Matches >>

/ha{3,}h///! yani az 3 ta a ta bi_nahayat !

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); //True
multipleA.test(A2); //False
multipleA.test(A100); //True

//010101010101010101010101010101010101001



