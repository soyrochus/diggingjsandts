
// single line comment

/* multi-line
   comment */

let age = 15 // variable declaration
let status   // not initialized (set to 'undefined')

// if statement
if ((age >= 14) && (age < 19)) {        // logical condition
    console.log("Eligible")                // executed if condition is true
} else {                                // else block is optional
    console.log("Not eligible.")            // executed if condition is false
}

// switch statement
switch (new Date().getDay()) {      // input is current day
    case 0:                         // if (day == 0)
        console.log("Sunday") 
        break
    case 5:                         // if (day == 5)
        console.log("Friday") 
        break
    case 6:                         // if (day == 6)
        console.log("Saturday")          
        break
    default:                        // else...
        console.log("No Sabbath or equivalent for major three religions")
} 


//for loop
for (let i = 0; i < 10; i++) {
    console.log(i)
}

// while loop
let j = 0;                     
while (j < 10) {             
    console.log(j)
    j = j + 1
    //j++
}
// do while loop
let k = 0
do {                           
    k = k + 1                  
    console.log(k)
}while (k < 10)           

// loop with break
for (let l = 0; l < 10; l++) {
    if (l == 5) { break; }          // stops and exits the cycle
    console.log(l)       
}

// loop with continue
for (let m = 0; m < 10; m++) {
    if (m == 5) { continue }       // skips the rest of the cycle
    console.log(m) 
}

