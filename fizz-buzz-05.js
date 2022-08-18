/** 三項演算子・剰余演算子 %・数値を登場させずに書いてみました */
const fizzBuzz = (until = 20) => {
  let array = (number, word) => Array.from({ length: Math.ceil(until / number) }).fill(Array(--number).fill('').concat(word)).flat(),
      fizz = 'Fizz', fizzLength = fizz.length, fizzNumber = --fizzLength, fizzArray = array(fizzNumber, fizz),
      buzz = 'Buzz', buzzLength = buzz.length, buzzNumber = ++buzzLength, buzzArray = array(buzzNumber, buzz);
  [...Array(until).keys()].map(number => ++number).forEach((number, index) => console.log(`${fizzArray[index]}${buzzArray[index]}`.replace(/^$/, number)));
};
// ブラウザと Node.js では `const` 宣言かつ `fizzNumber = --fizz.length` という書き方で動作しましたが、
// Deno では以下のエラーが出たので `let` 宣言を使い `fizzLength`・`buzzLength` という中間変数を用意しています
// - error: Uncaught TypeError: Cannot assign to read only property 'length' of string 'Fizz'
// - error: Uncaught TypeError: Assignment to constant variable.

fizzBuzz();
