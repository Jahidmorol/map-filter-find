const numbers = [2, 3, 4, 6, 7, 8 ];
function CreateNumber(numbers){
    let dNumber = [];
for(const number of numbers){
    const doplicateNum = doplicate(number)
    dNumber.push(doplicateNum);
    }
    console.log(dNumber);
};
CreateNumber(numbers);


function doplicate(num){
    return num * 2;
};
const doplicateN = num => num * 2;

const dubbleNumber = numbers.map(num => num * 2);
console.log(dubbleNumber);