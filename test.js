// 1.
const addToZero = arr => {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j< arr.length; i++){
            if(arr[i] + arr[j] === 0){
                return true
            } 
        }
    } return false
}
console.log(addToZero([1, 2, 3, -2]))
// This function doesn't use any extra memory that depends on the size of the input, so we say its space complexity is constant or O(1).

// 2.
const hasUniqueChars = string =>{
    let splitChars = string.toLowerCase().split("")
    console.log(splitChars)
    for(let i = 0; i < splitChars.length; i++){
        if(splitChars.indexOf(splitChars[i]) !== i){
            return false
        }
    } return true
}
console.log(hasUniqueChars('Ethan'))
// This functio creates a new array to store the split characters which can get as big as the input string. So we say its space complexity is linear or O(n).

// 3.
function isPangram(sentence) {
    const lowerCaseSentence = sentence.toLowerCase()
    
    const uniqueLetters = []
    
    for (let i = 0; i < lowerCaseSentence.length; i++) {
        const currentChar = lowerCaseSentence[i]
        if (currentChar >= 'a' && currentChar <= 'z') {
            if (!uniqueLetters.includes(currentChar)) {
                uniqueLetters.push(currentChar)
        }
      }
    } return uniqueLetters.length === 26
  }
  console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// This function creates a new array to store unique letters, which can get as big as the number of unique letters in the input string (up to 26). So we also say its space complexity is linear or O(n).
// 4.
const findLongestWord = (words) => {
    let longestWordLength = 0
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWordLength) {
        longestWordLength = words[i].length
      }
    }
    return longestWordLength
  }
  console.log(findLongestWord(["hi", "hello"]))
//   This function doesn't use any extra memory that depends on the size of the input so we can say its space complexity stays the same or O(1).