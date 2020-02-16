//compiles fine
function functionscope(){

    for(i=0;i < 10; i++){
  
      console.log(i)
    }
    if (true){ 
      var i = 10000
    } 
    console.log(i)
  }
  
  //gives error TS2304: Cannot find name 'i'.
  function blockscope(){
  
    //let i;
    
    for(i=0;i < 10; i++){
  
      console.log(i)
    }
    if (true){ 
      let i = 100000
    }
    console.log(i)
  }
  
  functionscope()
  blockscope()
  