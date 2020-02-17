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
 } while (k < 10)          
 
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
 // for-in loop ; iterate over a sequence or iterable
 for (let n in [0, 1,2,3,4]) {
    console.log(n)
 }
 
 