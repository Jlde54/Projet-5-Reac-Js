let str = "";
const printNumbers = (n) => {
    for (let i = 0; i < n; i++) {
        str += i+1 + " ";
    }
    return str.trim();
}

// const string = printNumbers(5);
// console.log(string);

export default printNumbers
