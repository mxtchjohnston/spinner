const delay = 10;
let currentDelay = delay;
const r = "\r";
const frames = '|/-\\';

const print = (c) => process.stdout.write(c);

let i = 0;

const timer = setInterval(() => {
  print(frames[i % frames.length] + r);
  i++
}, delay)

