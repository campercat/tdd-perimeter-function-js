// your code, here
let perimeter = (width, length) => {
  if(width === 0 && length === 0){
    return `Both values can't be 0!`
  }
  return Math.abs(width) * 2 + Math.abs(length) * 2
}

console.log(perimeter(3, 5))

export default perimeter
