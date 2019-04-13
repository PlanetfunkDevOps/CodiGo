/* 
Challenge 1: REVERSE A STRING
Return a string in reverse
ex. reverseString('hello') === 'olleh'
*/

function reverseString(str) {
    /* Solution 1 */
    /* const strArr = str.split('');
    strArr.reverse();
    return strArr.join(''); */
    /* Cleaning it up... */
    /* return str
        .split('')
        .reverse()
        .join(''); */

    /* Solution 2 */
    /* Decrementing loop */
    /* let revString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revString = revString + str[i];
    }
    return revString; */
    /* Incrementing loop */
    /* let revString = '';
    for (let i = 0; i <= str.length - 1; i++) {
        revString = str[i] + revString;
    }
    return revString; */

    /* Solution 3 */
    /* let revString = '';
    for (let char of str) {
        revString = char + revString;
    }
    return revString; */

    /* Solution 4 */
    /* let revString = '';
    str.split('').forEach(char => revString = char + revString);
    return revString; */

    /* Solution 5 */
    return str.split('').reduce((revString, char) => char + revString);
}

/* 
Challenge 2: VALIDATE A PALINDROM
Return true if palindrome and false if not
ex. isPalindrome('racecar') === 'true', isPalindrome('hello') false
*/

function isPalindrome(str) {
    const revString = str.split('').reverse().join('');
    return revString === str;
}

/* 
Challenge 3: REVERSE AN INTEGER
Return an integer in reverse
ex. reverseInt(521) === 125
*/

function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');
    return parseInt(revString) * Math.sign(int);
}

/* 
Challnege 4: CAPITALIZE LETTERS 
Return a string with the first letter of every word capitalized
ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
*/

function capitalizeLetters(str) {
    /* Solution 1 */
    /* const strArr = str.toLowerCase().split(' ');
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    }
    return strArr.join(' '); */

    /* Solution 2 */
    /* return str
        .toLowerCase()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.substring(1))
        .join(' '); */

    /* Solution 3 */
    return str.replace(/\b[a-z]/gi, char => char.toUpperCase());
}

/* 
Challenge 5: MAX CHARACTER
Return the character that is the most common in a string
ex. maxCharacter('javascript') == 'a'
*/

function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(function (char) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    });
    for (let char in charMap) {
        if (charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;;
        }
    }
    return maxChar;
}

/* 
Challenge 6: FIZZBUZZ
Write a program that prints all the numbers from 1 to 100.
For ultiples of 3, instead of the number print "Fizz",
for multiples of 5, instead of the number print "Buzz",
for numbers wich are multiples of both 3 and 5, print "FizzBuzz".
*/
function fizzBuzz(str) {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}


/* const output = reverseString('hello'); */
/* const output = isPalindrome('racecar'); */
/* const output = reverseInt(-123); */
/* const output = maxCharacter('javascript'); */
const output = fizzBuzz();
console.log(output);