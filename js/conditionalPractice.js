//function sedgwickHouseAge(age) {
    //for(var i = 1; i <= age; i++) {
        //if( i % 2 === 0) {
            //console.log("" +
                //"that's pretty young")
       // }
        //else if(i % 3 === 0) {
            //console.log("Old Guy")
       // }
       // else {
           // console.log(i);
       // }
   // }
//}

//sedgwickHouseAge(30)

// var i = 20;

//do {
   // console.log('is this one' + i + 'or this one');
    //i++;
//} while (i <= 20);


//var heros = ['Superman', 'Deku', 'All Might', 'Hulk'];



//console.log('There are ' + heros.length + ' shapes in the array');

//console.log('rhe strongest hero is: ' + heros[0]);


//console.log('The fastest hero is: ' + heros[1]);


//console.log('The coolest hero is: ' + heros[2]);


//console.log('the biggest hero is: ' + heros[3]);

//function showMultiplesofSeven(num) {
    //for (var i = 1; i <= 10; i++) {
       // console.log(num + " x " + i + " = " + (num * i));
    //}
//}

//showMultiplesofSeven(7)


function isEvenorOdd(num) {
    for( var i = 20; i <= 100; i++) {
        if(i % 2 === 0) {
            return num + " is even "
        } else {
            return num + " is odd "
        }
    }
}

console.log(isEvenorOdd(59));

//returning an object as an array
function toArray(obj) {
    return Object.entries(obj);
}

// returning integers that are evenly divisible.

function dividesEvenly(a, b) {
    if (a % b === 0) {
        return true
    } else {
        return false
    }
}

// returning boolean value of equal integers (type and value)
function checkEquality(a, b) {
    if(a === b) {
        return true
    } else {
        return false
    }
}

// writing a function that returns true if the number is divisible by 5 and false if not.

function divisibleByFive(num) {
    if(num % 5 === 0) {
        return true
    } else {
        return false
    }
}

//Return true if two passed strings have the same length. Return false if they do not.
function comp(str1, str2) {
    if(str1.length == str2.length) {
        return true
    } else {
        return false
    }
}


//A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.

//Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.

function shouldServeDrinks(age, onBreak) {
    if( age >= 18 && !onBreak) {
        return true
    } else {
        return false
    }
}

//Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game (refer to hanoi tower)

    Examples
function towerHanoi(discs) {
    return Math.pow(2, discs) - 1;
}

//returning true if string is empty otherwise return false.

function isEmpty(s) {
    if( s === "") {
        return true
    } else {
        return false
    }
}

// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

function profitableGamble(prob, prize, pay) {
    if(prob * prize > pay) {
        return true
    } else {
        return false
    }

    // returning string message join by .join and if the array contains a certain number return "Boom!" if false return "there is no 7 in the array"

    function sevenBoom(arr) {
        var new_arr= arr.join('')
        if(new_arr.includes(7)){
            return "Boom!";
        }else{
            return "there is no 7 in the array";
        }
    }
}

//Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.
//arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

//arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

//arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

function arrayOfMultiples (num, length) {
    var result = []
    for (let i = 1; i <= length; i++) {
        result.push(num*i)

    }
    return result
}

//Create a function that takes two arrays and insert the second array in the middle of the first array.

function tuckIn(arr1, arr2) {
    arr2.unshift(arr1[0])
    arr2.push(arr1[1])
    return arr2
}

// writing an array in reverse
function reverse(arr) {
    return arr.reverse();
}

//Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
//
// Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
//
// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
//
// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

function getVoteCount(votes) {
    return votes.upvotes - votes.downvotes;
}

//returning an array as a string

function arrayToString(arr) {
    return arr.join('');
}

// take an equation like "2 + 1" and return the answer of the equation

function equation(s) {
    return eval(s);
}

//returning last item in an array

function getLastItem(arr) {
    return arr.pop();
}

//Create a function to concatenate two integer arrays.
//
// Examples
// concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]
//
// concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]
//
// concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]

function concat(arr1, arr2) {
    return arr1.concat(arr2);
}

//Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.
//
// Examples
// search([1, 2, 3, 4], 3) ➞ 2
//
// search([2, 4, 6, 8, 10], 8) ➞ 3
//
// search([1, 3, 5, 7, 9], 11) ➞ -1

function search(arr, item) {
    return arr.indexOf(item);
}

//Create a function that takes an array and a string as arguments and return the index of the string.
//
// Examples
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2
//
// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1
//
// findIndex(["a", "g", "y", "d"], "d") ➞ 3
//
// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

function findIndex(arr, str) {
    return arr.indexOf(str);
}


//Create a function that takes an array with numbers and return an array with the elements multiplied by two.
//
// Examples
// getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]
//
// getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]
//
// getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]

//function getMultipliedArr(arr) {
    //return arr.map(x => x * 2);
//}

//Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.
//
// Examples
// checkSquareAndCube([4, 8]) ➞ true
//
// checkSquareAndCube([16, 48]) ➞ false
//
// checkSquareAndCube([9, 27]) ➞ true

//function checkSquareAndCube(arr) {
   // return Math.sqrt(arr[0]) === Math.cbrt(arr[1]);
//}



//function fizzbuzz() {
    //for(var i = 1; i <= num; i++) { //for loop
       // if( i % 15 === 0) {
            //console.log("fizzbuzz");
        //}
      //  else if( i % 3 === 0) {
      //      console.log("fizz");
        //}
        //else if( i % 5 === 0) {
            //console.log("buzz");
       // }
        //else {
            //console.log(i);
      //  }

    //}
//}

//function theAverage(arr) {
    //if (array.isArray)
       // for (var i = 0; i < arr.length; i++) {
            //var avg = (arr[i] / arr.length) * grades.length
        //}



//listing the factors of an integer
var getFactors = function (input) {
    let answerArray = [];
    for (let i = 1; i <= input; i++) {
        if (input % i === 0) {
            answerArray.push(i);
        }
    }
    return answerArray.join("<br>");
}



const calculateExponent = (num, exp) => {
	let newexp = 1;
	for (let i = 0; i < exp; i++) {
		newexp = newexp * num
	}
	return newexp;
}