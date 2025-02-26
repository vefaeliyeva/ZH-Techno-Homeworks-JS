const users = [
    {id: 1, name: "Ali", age: 22},
    {id: 2, name: "Vefa", age: 32},
    {id: 3, name: "Leyla", age: 12},
]

let mapMethod = function (user) {
    let names = users.map(user => user.name);
    console.log(names);
}


mapMethod()