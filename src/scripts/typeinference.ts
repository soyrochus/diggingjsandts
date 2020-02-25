//Number
;(function() {
  let infdecimal: number = 6
  let infhex: number = 0xf00d
  let binary: number = 0b1010
  let octal: number = 0o744

  //bigInt
  let big: BigInt = 9007199254740992n //note ‘n’ at end
  let bigger: BigInt = 2n ** 153n
  //11417981541647679048466287755595961091061972992n

  //Boolean
  let isDone: boolean = false

  //String
  let part: string = 'Rubeus Hagrid'
  let actor: string = 'Robbie Coltrane'
  let fact: string = `$p{art} is played by ${actor}`
})()
