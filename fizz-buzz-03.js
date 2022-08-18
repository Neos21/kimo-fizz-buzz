/** ワンライナーにできました */
const fizzBuzz = (until = 20) => [...Array(until + 1).keys()].slice(1).forEach(number => console.log(`${['Fizz'][number % 3]}${['Buzz'][number % 5]}`.replace('undefinedundefined', number).replace('undefined', '')));

fizzBuzz();
