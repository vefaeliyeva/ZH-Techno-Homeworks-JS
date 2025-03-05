// ^    forEach 
// ! Arrayin elementlerini konsola cap et
// const fruits = ["apple", "banana", "cherry", "mango", ""]
// fruits.forEach((fruit) => {
//     console.log(fruit);
// })

// ! Hər elementin uzunluğunu tap
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// ! Array-in elementlərini böyük hərflərlə yaz
// fruits.forEach((fruit) => {
//     console.log(fruit.toUpperCase());
// })

// ! Hər elementin uzunluğunu tap
// fruits.forEach((fruit) => {
//     console.log(fruit + " " + fruit.length);
// })

// ! Array-dəki ədədləri 2 qat artır
// const numbers = [30,70,120,20,50,45,78,98,123,]
// let s =0
// numbers.forEach((fruit)=>{
//     console.log(fruit*2);
// })

// !Verilmiş array-in bütün elementlərinin cəmini forEach metodu ilə hesabla.
// numbers.forEach((number)=>{
//     s = s + number;
// })
// console.log(s);

// ! Məhsul qiymətləri 10 faiz artır 
// numbers.forEach((number)=>{
//     console.log((number*0.1)+number);
// })

// ! Elementləri indeksləri ilə birlikdə çap et
// fruits.forEach((fruit, index, fruits)=>{
//     console.log(`Index ${index}: ${fruit}: ${fruits}`  );
// })

// ! Hər bir ada "Xoş gəldin" əlavə et
// fruits.forEach((meyve)=>{
//     console.log(`Xos geldin: ${meyve}`);
// })
// ! 50-den böyük olan ədədləri çap et
// numbers.forEach((reqem)=>{
//     if(reqem>=50){
//         console.log(reqem);
//     }
// })

// ! Qiymətləri dollarla çap et
// numbers.forEach((reqem)=>{
//     console.log(`${reqem}$`);
// })

// ! Hər elementin uzunluğunu çap et
// fruits.forEach((meyve)=>{
//     console.log(`${meyve} - ${meyve.length} herf`);
// })

// !Bir array-dəki hər bir ədədin kvadratını tap və yenə eyni uzunluqda bir array yarat. Hər bir kvadratın qarşısında orijinal ədədin qiymətini göstər.
// const kvadrat = [3,5,7,9,11,2,6,4,-8]
// const yeniNumbers = kvadrat.forEach((yeni)=>{
//     console.log(`${yeni} -> ${yeni*yeni}`);
// })

// ! Ən böyük və ən kiçik ədədin tapılması
// let maximum = -Infinity;
// let minimum = Infinity;
// kvadrat.forEach((reqem)=>{
//     if(reqem > maximum){
//         maximum = reqem;
//     }
//     if(reqem<minimum){
//         minimum=reqem
//     }
// })
// console.log(maximum);
// console.log(minimum);
// console.log(maximum+minimum);


// ! Verilmiş array-dəki bütün tək ədədləri tap və onları yeni bir array-də toplayıb konsola çap et.
// const numbers = [3, 4, 7, 10, 11, 18, 21, 22];
// let s = 0;
// let odd = []
// numbers.forEach((number)=>{
//     if (number%2 == 1){
//         s = s + number
//         odd.push(number);
//     }

// })
// console.log(odd);
// console.log(s);