import { writeFile, readFile, readFileSync } from 'fs'

const data = readFileSync('ironman.txt', 'utf8')
for (let s of data.split('\n')) {
  console.log(s)
}

console.log('you see me first')
readFile('ironman.txt', 'utf8', (error, data) => {
  if (error) throw error
  console.log('you see me last')
  for (let s of data.split('\n')) {
    console.log(s)
  }
  if (error) throw error

  writeFile('ironman.out.txt', data, 'utf8', err => {
    if (error) throw error
    console.log('file written')
  })
})
console.log('you see me second')
