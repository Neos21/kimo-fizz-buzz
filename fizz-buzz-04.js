/** Fizz Buzz 配列と Replace で実現してみた */
const fizzBuzz = (until = 20) => {
  const fizz = [...Array(Math.ceil(until / 3))].fill(Array(2).fill('').concat('Fizz')).flat();
  const buzz = [...Array(Math.ceil(until / 5))].fill(Array(4).fill('').concat('Buzz')).flat();
  [...Array(until + 1).keys()].slice(1).forEach(number => console.log(`${fizz[number - 1]}${buzz[number - 1]}`.replace(/^$/, number)));
};

fizzBuzz();
