# Advanced JavaScript Assignment: Constructor Word Guess

* **Letter.js**: Constructor for letter symbols. - it stores one character and sets guessed to true or false (default = false). Has two * functions: one is checking against another letter and sets guessed to true or false. Second function returns the letter or '_' 
* depending on guessed(bool) boolean value.

* **Word.js**: Constructor takes a word to guess as an argument and is creating an array of letter objects from them. Has function which * takes a letter as an argument, uses function from class Letter to check it and create output string.

* **index.js**: Constructor has an array of words, is selecting random word from the array and using it as question word.
* Is using inquirer to check the input letter in word.
* Is using class Word's function to check for letter in string and log the result with dashes and letters.
* is using recursive fucntion until the word to guess contains '_' .
