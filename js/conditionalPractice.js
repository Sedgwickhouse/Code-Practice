function sedgwickHouseAge(age) {
    for(var i = 1; i <= age; i++) {
        if( i % 2 === 0) {
            console.log("" +
                "that's pretty young")
        }
        else if(i % 3 === 0) {
            console.log("Old Guy")
        }
        else {
            console.log(i);
        }
    }
}

sedgwickHouseAge(30)

var i = 20;

do {
    console.log('is this one' + i + 'or this one');
    i++;
} while (i <= 20);


var heros = ['Superman', 'Deku', 'All Might', 'Hulk'];



console.log('There are ' + heros.length + ' shapes in the array');

console.log('rhe strongest hero is: ' + heros[0]);


console.log('The fastest hero is: ' + heros[1]);


console.log('The coolest hero is: ' + heros[2]);


console.log('the biggest hero is: ' + heros[3]);

