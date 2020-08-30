function sayHelloBye(name, num) {
    if(num === 1) {
        console.log( "Hello " + name.charAt(0).toUpperCase() + name.slice(1));
    } else {
        console.log( "Bye " + name.charAt(0).toUpperCase() + name.slice(1));
    }
}

sayHelloBye("Cool Guy", 0);
