/** Fizz と Buzz の配列を使うやり方 */
const fizzBuzz = (until = 20) => {
  const fizz = Array(2).fill('').concat('Fizz');  // ['', '', 'Fizz']
  const buzz = Array(4).fill('').concat('Buzz');  // ['', '', '', '', 'Buzz']
  [...Array(until + 1).keys()].slice(1).forEach((number, index) => {  // [...Array(until).keys()].map(number => ++number)
    console.log(fizz[index % fizz.length] + buzz[index % buzz.length] || number);
  });
};

fizzBuzz();
