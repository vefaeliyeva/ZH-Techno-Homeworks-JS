let ageArr = [
    {firstName: "Vefa", age: 31},
    {firstName: "Nermin", age: 20},
    {firstName: "Sevinc", age: 5},
    {firstName: "Fidan", age: 24},
    {firstName: "Eziz", age: 16},
    {firstName: "Ella", age: 23},
    {firstName: "Firuze", age: 33},
]

let olderAge = ageArr.filter((person)=>person.age>=20)
console.log(olderAge);