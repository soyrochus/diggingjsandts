// single line comment
/* multi-line
  comment */

  let age = 15 // variable declaration
  let status   // not initialized (set to 'undefined')
  
  const planets = 8 // like let but cannot change
  
  
  try {
     let o = JSON.parse("=)(/&");
     console.log(o)
  } catch (e) {
     console.log(e)
  }
  
  // if statement
if ((age >= 14) && (age < 19)) {
    console.log("Eligible")               
} else {
    console.log("Not eligible.")
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
