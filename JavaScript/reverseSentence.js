function reverseWords(str) {
    let reversedString = '';
    let word = '';
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ' || i === str.length - 1) {
        if (i === str.length - 1) {
          word = word+ str[i];
        }
      
        for (let j = word.length - 1; j >= 0; j--) {
          reversedString += word[j];
        }
      
        if (i < str.length - 1) {
          reversedString += ' ';
        }
        word = '';
      } else {
        word += str[i];
      }
    }
    
    return reversedString;
  }
  
  const originalString = "This is sunny day";
  console.log("Original String : ",originalString);
  const reversedString = reverseWords(originalString);
  console.log(`After Reverse : ${reversedString}`);
  