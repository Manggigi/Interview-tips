const isLeapYear = (year) => {
  if (year % 400 === 0) return true
  if (year % 100 === 0) return false
  if (year % 4 === 0) return true
  return false

  // const numberYear = Number(year)
  // return numberYear % 100 === 0 ? numberYear % 400 === 0 : numberYear % 4 === 0
}

console.log(isLeapYear("2020")); // true
console.log(isLeapYear("2018")); // false
console.log(isLeapYear("1700")); // false
console.log(isLeapYear("1600")); // true