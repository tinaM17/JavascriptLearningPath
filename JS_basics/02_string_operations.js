
// //*************** Strings Operations */
 // const url="http://www.google.com";

// //1) length
// console.log(url.length);

// //2)indexOf
// console.log(url.indexOf('w'));

// //3) valueOf
// console.log(url.valueOf()); //http://www.google.com

// //4) substring
// console.log(url.substring(0,4));

// // 5) slice
// console.log(name.slice(-3,2));
// //if startIndex is negative then it starts with max(startIndex+length,0)
// //if endIndex is negative then if ends with max(endIndex+length,0)
// console.log(name.slice(0,-2));

// //6) replace
// console.log(name.replace("na","ya"));
// console.log(name);

// //7) trim

// const subject="    javascript    "
// console.log(subject.trim()); // remove all the spaces
// console.log(subject.trimStart()); //remove spaces from start
// console.log(subject.trimEnd()); //remove spaces from end

// // 8) split
// const username="Tina Majumder"
// const arr= username.split(' ');
// console.log(arr);

// //9) includes
// console.log(url.includes("www",7));

/* 
In JavaScript, both the `substring` and `slice` methods are used to extract a portion of a string. However, they have some differences in their behavior.

**1. Arguments:**
   - `substring`: Takes two arguments: the starting index and the ending index (not including the character at the ending index).
   - `slice`: Takes two arguments: the starting index and the ending index (the character at the ending index is included).

**2. Negative Index:**
   - `substring`: If the starting index is greater than the ending index, `substring` swaps the two indices.
   - `slice`: If the starting index is greater than the ending index, `slice` returns an empty string.

**3. Omitted Arguments:**
   - `substring`: If you omit one or both arguments, `substring` treats them as if they were 0.
   - `slice`: If you omit the second argument, `slice` goes to the end of the string.

Here are some examples to illustrate the differences:

```javascript
var str = "Hello, World!";
var resultSubstring = str.substring(0, 5); // "Hello"
var resultSlice = str.slice(0, 5); // "Hello"

var resultSubstringNegative = str.substring(7, 2); // "Hello" (swaps indices)
var resultSliceNegative = str.slice(7, 2); // "" (empty string)

var resultSubstringOmitted = str.substring(7); // "World!" (treats omitted as 0)
var resultSliceOmitted = str.slice(7); // "World!" (goes to the end)

console.log(resultSubstring);
console.log(resultSlice);
console.log(resultSubstringNegative);
console.log(resultSliceNegative);
console.log(resultSubstringOmitted);
console.log(resultSliceOmitted);
```

In most cases, you can use either `substring` or `slice` to achieve the same result, but it's important to be aware of the differences, especially when dealing with negative indices and omitted arguments. Choose the method that best fits your specific use case.
*/