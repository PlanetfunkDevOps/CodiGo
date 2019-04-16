/* CHALLENGE 1: REVERSE A STRING
Return a string in reverse
ex. reverseString('hello') === 'olleh' */

function reverseString(str) {
  /* Solution 1 */
  /* return str
    .split('')
    .reverse()
    .join(''); */

  /* Solution 2 */
  /* let revString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    revString = revString + str[i];
  }
  return revString; */

  /* Solution 3 */
  /* let revString = '';
  for (let i = 0; i <= str.length - 1; i++) {
    revString = str[i] + revString;
  }
  return revString; */

  /* Solution 4 */
  /* let revString = '';
  for (let char of str) {
    revString = char + revString;
  }
  return revString; */

  /* Solution 5 */
  /* revString = '';
  str.split('').forEach(char => revString = char + revString);
  return revString; */

  /* Solution 6 */
  /* return str.split('').reduce((revString, char) => char + revString, ''); */
}

/* CHALLENGE 2: VALIDATE A PALINDROME
Return true if its a palimdrom or false if not
ex. isPalindrome('racecar') === 'true', isPalindrome('hello') === 'false' */

function isPalindrome() {

}


/* Output */
const output = reverseString('hello');
console.log(output);
