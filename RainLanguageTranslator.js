const toRainLanguage = (number)=>{
  let result = ''
  if (number % 3 === 0) result += 'Pling'
  if (number % 5 === 0) result += 'Plang'
  if (number % 7 === 0) result += 'Plong'
  
  // return result ? result : number
  return result || number
}

console.log(toRainLanguage(3))
console.log(toRainLanguage(21))
console.log(toRainLanguage(35))
console.log(toRainLanguage(1))