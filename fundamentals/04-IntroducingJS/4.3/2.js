//  ------------- 2 

let n = 5;
let string = '';

for (let i = 0; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += '*';
  }
  string += '\n'
};

console.log(string);
