// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const numbers =[1,2,45,23,65,789,12,4]

// let newFruits = fruits.sort()
// console.log(newFruits);

const posts = [
    { title: "React dərsi", date: "2024-02-12" },
    { title: "JavaScript əsasları", date: "2023-10-05" },
    { title: "CSS sirlər", date: "2024-01-20" }
];

let sortData = function(data){
    let newPosts = data.sort((a, b) => new Date(a.date) - new Date(b.date));    
    console.log(newPosts);
}

sortData(posts)