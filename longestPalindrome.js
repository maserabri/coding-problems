function longestPalindrome(str){
  let longestLength = 0;
  for(let i = 0; i < str.length; i++){
    for(let j = i + 1; j <= str.length; j++){
      let substring = str.slice(i, j);
      if(isPalindrome(substring)){
        longestLength = Math.max(longestLength, substring.length);
      }
    }
  }
  return longestLength;
}

function isPalindrome(str){
  let reversed = str.split('').reverse().join('');
  if(reversed === str){
    return true;
  }
  return false;
}

//input: str
//output: number

//helper function => see if str is palindrome
//split str into arr by char, reverse, and join back into str
//if reversed is the same as str,
  //return true
//return false

//main function
//declare longestLength, initialize to 0
//iterate str using nested loop
  //declare substring => starting at i and ending at j
  //if str is a palindrome,
    //longest length will be the longest length or the substring length
//return substring
