let addTotal = 0;
let argvLength = process.argv.length;

for(let i = 2; i < argvLength; i++) {
    addTotal += Number(process.argv[i]);
}

console.log(addTotal);