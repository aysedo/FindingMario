//Declare first all the variables we need.
let hidingWagon = Math.floor(Math.random() * 10) + 1;//Randomly choose a number between 1 and 10
let found = false;
let point = 100;// Initialize points
let right = 3;//Set the maximum number of attempts
let score = 0;

for (let i = 0; i <= right; i++) {
    let guessWagon = parseInt(prompt("Please enter a Number between 1-10"));
    if (guessWagon === hidingWagon) {
        console.log(`Yes, you found your son. Your points are ${point}`);
        found = true;
        score = 100 - (i * 25);// calculate the points
        break;// Exit the loop 
        //Check if the guess is too low or too high 
    } else if (guessWagon < hidingWagon) {
        console.log("Your son is in a compartment with a larger number.");
    } else {
        console.log("Your son is in a compartment with a smaller number.");
    }
}
if (found === false) {
    console.log(`Sorry,you didnt found your son. Your points are ${score}`);
}





