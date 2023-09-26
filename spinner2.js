const delay = 10;
let currentDelay = delay;
const r = "\r";
const frames = '|/-\\';

const print = (c) => process.stdout.write(c);

for (let i = 0; i < 20; i++) {
  setTimeout(() => {
    print(frames[i % frames.length] + r);
  }, currentDelay);
  currentDelay += delay * i;
}
