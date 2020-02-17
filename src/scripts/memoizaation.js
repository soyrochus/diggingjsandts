let fibonacci2 = (n, seq = []) => {
    console.log(`fibonacci2(${n})`)
    if (seq[n]) {
      return seq[n]
    } else {
      if (n === 0 || n === 1)
        {
          seq[n] = n
        } else {
          seq[n] = fibonacci2(n - 1, seq) + fibonacci2(n - 2, seq)
        }
      return seq[n]
    }
   }
   let seq = [] 
   console.log(fibonacci2(20, seq)) //-> 6765
   console.log(seq) // -> [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765]