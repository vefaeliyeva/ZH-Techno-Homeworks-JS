// const items = [
//     { name: 'Album', price: 10 },
//     { name: 'Book', price: 5 },
//     { name: 'Phone', price: 500 },
//     { name: 'TV', price: 200 },
//     { name: 'Bike', price: 100 },
//     { name: 'Keyboard', price: 25 },
//     { name: 'Computer', price: 1000 }
// ];
// let element = items.find((item)=>item.price>=100)
// console.log(element);


const users = [
    {id: 1, name: "Ali", age: 22},
    {id: 2, name: "Vefa", age: 32},
    {id: 3, name: "Leyla", age: 12},
]

let findMethod = function (array) {
    let user = array.find(user => user.name === "Vefa")
        if(user){
            console.log(user.age);
        } else{
            console.log("Yoxdur");
        }
    }



findMethod(users)