# Javascript-String-Methods

1. ####array.slice()

array.slice() method returns the selected elements in an array, as a new array object. The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument. The original array will not be changed.

**Time complexity is;** O(n)

**Syntax:**

array.slice(start, end)

**Examples:**


--js
1. let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1, 3);


2. const arr2= arr.slice()

3. let animals=[‘dog’,’cat’,’elephant’,’monkey’ ,’dinosaur’]                                                                                                                      let items=animals.slice(-2)

--



2. ####array.includes():

array.includes() matches the string case-sensitively,  This method determines whether an array includes a certain value among its entries, returning true or false as appropriate. The optional position parameter specifies the start position within the string at which to begin searching for the search String. The start position
defaults to 0. If the start position is greater than or equal to the array’s length, then false is returned. The array will not be searched. If the start position is 
negative, the computed index is calculated to be used as a position in an array to begin searching for the element. If the computed index is less or equal to 
-1 * array .length, an entire array will be searched.

**Time Complexity is :** O(n)

**Syntax:**

String.inlcudes(searchString [,startposition])

**Examples:**

--js
1. const array1 = [1, 2, 3];
   console.log(array1.includes(2));

2.  let techstring=’TechOnTheNet’;
      console.log(techstring.includes(‘e’,11));


3. console.log([19, 21, 46].includes(46, -1));
--


3.#### array.indexOf()

array.indexOf() returns the index of the first occurrence of substring in a string . This method  returns -1 if the value to search for never occurs. The indexOf() method is case sensitive.

**The complexity is:** O(n)

**Syntax:**

str.indexOf(searchValue , index)

**Examples**

--js

1.  let str = 'Departed Train';                                                                                                                                                     let index = str.indexOf('Train');

2.  let sampleStr=”Hello, Everyone!!!”;                                                                                                                             sampleStr.indexOf(“Hello”,0);

3.const letters=[{letter:’a’,}, {letter:’b’,}, {letter:’c’,}, letter:’d’,},]; const index=letters.indexOf({letter:’b’,})   
where index is -1 objects are compared by reference and not their values as the objects passed to indexOf() is completely different than the second array item.
.
--


4. ####charAt() 

This method returns the character at the specified index in a string.  The only argument to this function is the index in the string from where the single character is to be extracted. The range of this index is between 0 and length – 1, including the limits. If no index is specified then the first character of the string is returned as 0 is the default index used for this function. 

**The time complexity is:** O(1) .

**Syntax:**
   
   public char charAt(int index)                                                                                                     

**Examples:**

--js
1. const sentence = 'The quick brown fox jumps over the lazy dot.’;                                                                                                           const index = 4;                                                                                                                                            console.log(`${sentence.charAt(index)}`);      


2. string myStr=”Hello”;                                                                                                                                                       char result= myStr.charAt(0);


3. var str = 'JavaScript is object oriented language';                                                                                                                  print(str.charAt(50));

--


5. ####charCodeAt() 

charCodeAt() method returns a Unicode character set code unit of the character present at the index in the string specified as the argument. 
The only argument to this method is the index of the character in the string whose Unicode is to be used. The range of the index is from 0 to length – 1.
You can use the charCodeAt() method together with the length property to return the Unicode of the last character in a string. The index of the last character is -1,
the second last character is -2, and so on 


**The time complexity is:** O(1)

**Syntax:**
    String.charCodeAt(index)                                          

**Examples:**

--js


1. var str=’ephemeral’;                                                                                                                                             print(str.charCodeAt(20));


2. let str = "Hello World";
let char = str.charCodeAt(0);
console.log(char);

3. var totn_string=”Tech on the Net”; console.log(totn_string.charCodeAt());
--


6. ####concat()

concat()method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.This method concatenates one string 
to the end of another string.This method returns a string with the value of the string passed into the method, appended to the end of the string.


**Time complexity is:**
O(n+m) where n is array1 length and m is arry2 length

**The syntax is **                                                                                                                                                       

string.concat(string1, string2, ..., stringX)                                                                                                            

**Examples: **

--js
1. var str1 = "Hello ";
var str2 = "world!";
var res = str1.concat(str2);


2. const array1 = ['a', 'b', 'c'];                                                                                                                                           const array2 = ['d', 'e', 'f'];                                                                                                                                                   const array3 = array1.concat(array2);                                                                                                                                        console.log(array3);

3.' '.concat('Good',' ','Morning');

--



7.####split() 

split method is used to split a string into an array of substrings, and returns the new array.If an empty string ("") is used as the separator, the string is split between
each character. The split() method does not change the original string.

**The time complexity is:** O(n)

**Syntax **                                                                                                                                               

string.split(separator, limit)

**Examples:**

--js
1. var str = "How are you doing today?";
var res = str.split(" ");


2. let str = 'JavaScript String split()';                                                                                                                                      let substrings = str.split(' ',2);                                                                                                                         console.log(substrings);


3. let paragraph = 'Good Morning! How are you? This is John. John is my friend.';                                                                                                  let sentences = paragraph.split(/[!,?,.]/);                                                                                                                console.log(sentences);
--



8.####trim()  

The trim() method returns a string with whitespace characters removed from the start and end of the string.

**The time complexity is :** O(n)

**Syntax:**
string.trim()

**Examples:**

--js
1. const greeting = '   Hello world!   ';                                                                                                                               console.log(greeting);

2. var str = "       Hello World!        ";
alert(str.trim());

3. var str=”                  We need to get out act together”;                                                                                                           alert(Str(trim()))                         
--






9.####toUpperCase()

The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

**The complexity is:** O(n)

**The syntax is** 

public String toUppercase()

**Examples:**

--js
1. const sentence = 'The quick brown fox jumps over the lazy dog.';                                                                                         console.log(sentence.toUpperCase());

2. class Example {                                                                                                                                                             static void main(String[] args) {                                                                                                                                               String a = "HelloWorld;                                                                                                                                                           println(a.toUpperCase()); } }


3. var str = "Hello World!";
var res = str.toUpperCase();
--




10.####toLowerCase()

The toLowerCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

**The complexity is :** O(n)

**Syntax: **
public String toLowercase()

**Examples:**

--js

1. const sentence = 'The quick brown fox jumps over the lazy dog.';                                                                                        console.log(sentence.toLowerCase());


2. class Example {                                                                                                                   
 static void main(String[] args) {                                                                                                                                                String a = "HelloWorld;                                                                                                                                  println(a.toLowerCase()); } }
 
 
3. var str = "Hello World!";
var res = str.toLowerCase();
--





11.####search()

The search() method searches a string for a specified value and returns the position of the match. The search value can be string or a regular expression. 
This method returns -1 if no match is found. The search() method executes a search for a match between a regular expression and this string object.


**The complexity is:** O(n)

**Syntax:**

string.search(searchvalue)


**Examples:**
--js

1. var str = "Visit W3Schools!";
var n = str.search("W3Schools"); 


2.const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';                                                                    const regex = /[^\w\s]/g;                                                                                                                                  console.log(paragraph.search(regex));


3. const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';                                                                   const regex = /[^\w\s]/g;                                                                                                                   console.log(paragraph[paragraph.search(regex)]);
--




12.####substr() 

The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards. To extract characters from the end of the string, use a negative start number (This does not work in IE 8 and earlier).

**The time complexity is:**

0(m) where  m is length of the array.


**Syntax: **

string.substr(start, length)

**Examples:**
--js
1. var str = "Hello world!";
var res = str.substr(1, 4);

2. const str = 'Mozilla';                                                                                                                                                console.log(str.substr(1, 2));

3. let email=’john.doe@gmail.com’;                                                                                                                                               Let domain= email.substring(email.indexOf(‘@’)+1);                                                                                                                   console.log(domain);
--




13.####replace() 
 
 The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.

**The time complexity is :** o(n)

**Syntax:**
 
 string.replace(searchvalue, newvalue)

**Examples:**

--js
 
 1.const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';                                                                              const regex = /Dog/i;                                                                                                                                          console.log(p.replace(regex, 'ferret'));                                           
 
2. var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "W3Schools");

3. let str = "I like to eat, eat, eat apples and bananas";
let re = /apples|bananas/gi;                                                                                                                                                    let newStr = str.replace(re, (match) => {                                                                                                                                      console.log({match});                                                                                                                                                           return match.toUpperCase(); });
--



14.####repeat()

The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

**The time complexity is :** O(n) 

**Syntax:**

string.repeat(count)

**Examples:**

--js

1. const chorus = 'Because I\'m happy. ';                                                                                                                                  console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);
 
2. var str = "Hello world!";
console.log(str.repeat(2));

3.var str=”Hello , there how are you doing?”                                                                                                                         console.log(str.repeat(2.9))

--






15. ####match()   

The match() retrieves the result of matching a string against a regular expression and returns the matches, as an Array object.

**The time complexity is:** O(n)

**Syntax :**

string.match(regexp)


**Examples :**

--js

1. var str = "The rain in SPAIN stays mainly in the plain";
var res = str.match(/ain/g);     

2. const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';                                                                                                const regex = /[A-Z]/g;                                                                                                                                                       const found = paragraph.match(regex);                                                                                                                                           console.log(found);

3. let str = 'I like yellow color palette!';                                                                                                                                      let re = /(?<color>yellow) color/;                                                                                                                                              let result = str.match(re);                                                                                                                                          console.log(result);

  --

