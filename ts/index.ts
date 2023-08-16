// REGEX
var replacedStr: unknown;

let str = 'Hello Hello I I am am Subhajit Subhajit 1280 %';

// flag 'g' ---> Can Match multiple characters in a string at the same time with a same pattern
replacedStr = str.match(/Subhajit/g);
console.log('Global flag --> ', replacedStr);

// flag 'i' ---> Can match case all character as per the pattern including senstitive or insenstive
replacedStr = str.match(/Subha/i);
console.log('Insensitive characters ----> ', replacedStr);

// flag 'm' ---> Can match characters in. multi line string value as per pattern expression
replacedStr = str.match(/Subhajit/m);
console.log('Multi line --> ', replacedStr);

// Groups ---> [] in this bracket we can specify which characters shoub be matched or which characters should not be
/**
 * [A-Z] --> All the characters between uppercase A to uppercase Z.
 * [a-z] --> All the characters between lowercase A to lowercase Z.
 * we case use multiple groups at the same time like this /[a-z][A-Z]/
 */

replacedStr = str.match(/[A-Z][a-z]/g);
console.log('Group match --> ', replacedStr);

// Group [^abc] --> We ca specify some chacters after the carrate sign , it every characters can be matched instead of mentoned characters in the bracket
replacedStr = str.match(/[^A-Za-z]/g);
console.log('Resiprocal of group', replacedStr);

// Group (red|green) --> matchalternative
replacedStr = str.match(/(Hello|hello|8)/g);
console.log(replacedStr);

// Meta characters
/**
 * \w = word charater
 * \W = not charaters
 * \d = number
 * \D = no numbers
 * \s = whitespace
 * \b = beggining of any word in the string
 * + - At least one match in a single word in the word
 * * - Zero or more match in a single word in the string
 * ? - zero or one match in a single word in the string
 * {} - in the curly bracket we ca specify the number of times the word match can be there in a single word
 * {number,number} - We can specify minumum and mazimum number of times the word match can be there in a single word
 */
replacedStr = str.match(/S{1,2}/g);
console.log(replacedStr);


