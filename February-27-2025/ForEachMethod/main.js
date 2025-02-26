const users = [
    {id: 1, name: "Ali", age: 22},
    {id: 2, name: "Vefa", age: 32},
    {id: 3, name: "Leyla", age: 12},
];

let emailAdd = function(array){
    let enterEmail = array.map(user=> user.name+"@gmail.com")
    console.log(enterEmail);
}
emailAdd(users)