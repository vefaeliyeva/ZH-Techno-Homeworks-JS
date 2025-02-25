const items = [
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'TV', price: 200 },
    { name: 'Bike', price: 100 },
    { name: 'Keyboard', price: 25 },
    { name: 'Computer', price: 1000 }
];
let element = items.find((item)=>item.price>=100)
console.log(element);