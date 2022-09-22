const isIsogram = (string) => {
  const processedString = [...new Set(string.toLowerCase())]
  return processedString.length == string.length
}

const isIsogramScrim = (string) => {
    
  const lowerCased = string.toLowerCase()
  const result = lowerCased.split('')
    .every((v,i)=>console.log(v,i) || 
    lowerCased.indexOf(v)===i)
  
  return result

}

console.log(isIsogram('ambidExtrously')) // true
console.log(isIsogram('patteRN')) // false

