// 1.Write a function called: 'getUpper(anyArr)' that returns the newArr with the uppercased first and last character.
// let arr2 = function (arr) {
//     return arr.map(word => word.[word.lenght - 1].toUpperCase() + word.slice(1));
// };
// console.log(arr2(arr1));
// let yeniAd = arr1.map(word =>
    //     word.slice(0, word.length - 1) + word[word.length - 1].toUpperCase()
    // );
    // console.log(yeniAd);
    



    // let upperCase = arr1.map(name => name[0].toUpperCase()).reverse().join("");

    // console.log(upperCase);

    

// const users = [
//     { name: 'Anar', surname: 'Hesenli', age: '22', uni: 'ADA' },
//     { name: 'Nezrin', surname: 'Reshidova', age: '23', uni: 'UNEC' },
//     { name: 'Hikmet', surname: 'Hesenova', age: '22', uni: 'UNEC' },
//     { name: 'Nicat', surname: 'Sadiqov', age: '25', uni: 'UNEC' },
//     { name: 'Murad', surname: 'Salmanli', age: '23', uni: 'ADNSU' },
//     { name: 'Aynure', surname: 'Hesenzade', age: '23', uni: 'BMU' },
//  ]

// const findUser = (array) => {
//     return array.map((user) => 
//         user.age == "22" && user.surname[0] == "H" ? console.log(user.name): null)
// }
//     findUser(users);

    
const arr1 = ['guba', 'mingecevir', 'baku', 'gazag', 'gence', 'shirvan'];

let arr2 = arr1.map((city, index) => {
    console.log(index + 1 + ". " + city);
} );
    
  


