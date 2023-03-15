const numbers = [12, 13, 54, 64, 92, 37, 65, 10, 23, 5, 37];

const filter = numbers.filter(number => number < 20);
console.log(filter);

const users =[
    {name: 'jahid', age: 23, id: 01, class: 'houners'},
    {name: 'foysal', age: 21, id: 02, class: 'houners2'},
    {name: 'nadim', age: 24, id: 03, class: 'houners3'},
    {name: 'samit', age: 22, id: 04, class: 'houners4'},
    {name: 'adnan', age: 29, id: 05, class: 'houners5'}
];

const selectUser = users.filter(user => user.age > 25);
console.log(selectUser);
