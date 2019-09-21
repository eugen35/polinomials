import {sum} from "./src/some";

console.log('Start counting');
const s=sum(2,3);
console.log(s);

/*
sumAsync(12,13,(err,result) => {
  console.log(`sumAsyncResult=${result}`);
});

promisifiedSumAsync(20,30)
  .then(result => {
    console.log(`promisedSumResult=${result}`);
  })
  .catch(err => console.log(err));

 */