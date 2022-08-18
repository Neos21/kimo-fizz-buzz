/** for ループで Fizz Buzz に差し替えるやり方 */
const fizzBuzz = (until = 20) => {
  const numbers = [...Array(until + 1).keys()].slice(1);
  for(let i =  2; i < until; i +=  3) numbers[i] = 'Fizz';
  for(let i =  4; i < until; i +=  5) numbers[i] = 'Buzz';
  for(let i = 14; i < until; i += 15) numbers[i] = 'FizzBuzz';
  numbers.forEach(number => console.log(number));
};

fizzBuzz();
