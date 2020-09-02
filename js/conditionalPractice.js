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