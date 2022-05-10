// 1.verilen saniye deyerinin nece deqiqe ve saniye oldugun hesablayan proqram yaz
// meselen:1200 ---20deq 0san

// let san=1567
// a=san/60
// deq=parseInt(a)
// c=san-deq*60
// console.log(`${deq} deq ${c} san`)

// optimal
// let sanString=prompt("saniye daxil edin")
// let san=parseInt(sanString)
// let deq=parseInt(san/60)
// let qaliq=san%60
// alert(`${deq} deq,${qaliq} san`)

// 2.
// let f=100;
// let c=5/9*(f-32)
// console.log(c)

// 3. kicik bir loterereya oyunu yaz.istifadeciden ikireqemli tesadufu ededi tapmasi teleb olunur
// sertler:
// eger istifadeci ikireqemli ededi tam bilerse 1000 manat qazansin:
// ededin reqemlerinin her ikisini bilerse mes: 75 yerine 57 yazarsa 500 manat qazansin:
// ededin reqemlerinden birini duz bilerse 100 manat qazansin:

// while(true){
//     let num=Math.floor(Math.random()*100)
//     let user=prompt("size tesadufu verilmis ikireqemli ededi tapin:")
//     let numString=num.toString()
//     let userReverse=user[1]+user[0]
//     if(num<10){
//     num+=10
//     }
//     if(num==user){
//         alert("tebrikler siz tam dogru cavabi taparaq 1000 Azn qazandiniz")
//         break
//     }else if(num==userReverse){
//         alert("tebrikler siz verilen ededin her iki reqemini istifade etdiniz ve 500 Azn qazandiniz")
//         break
//     }else if(numString[0]==user[0] || numString[0]==user[1] || numString[1]==user[0] || numString[1]==user[1]){
//         alert("tebrikler siz verilen ededin reqemlerinde birini qeyd ederek 100 azn qazandiniz")
//         break
//     }else{
//         alert("YANLIS CAVAB.HEC BIR SERT ODENMIR")
//     }
// }

// 4.butun donguler ile adinizi ekrana 5 defe yazdirin

// let ad="Ceyhun"

// i.
// for(let i=0; i < 5; i++){
//     console.log(ad)
// }

// ii.
// let i=0
// while(i<5){
//     console.log(ad)
//     i++
// }

// iii.
// let i=0
// do{
//     console.log(ad)
//     i++
// }while(i<5);

// 4.  1 den 100 e  qeder olan butun ededlerin cemini tapan proqram yaz
// let sum = 0
// for(let i=0; i<5; i++){
//     console.log(`${sum} + ${i} = ${sum+i}`)
//     sum+=i

// }

// 5. 1 den 10-a qeder ededleri for dongusu ile bir sirada aralarinda "," olacag sekilde yazin
// let num=""
// for(let i=1; i<=10; i++){
//     if(i!=10){
//         num+=i + ", "
//     }else{
//         num+=i
//     }
// }
// console.log(num)

// 6.daxil edilen ededin faktorialini hesablayan proqram yazin

// let num=parseInt(prompt("eded daxil edin"))
// let fackt=1
// for(let i=1; i <= num; i++){
//     fackt = fackt * i

// }
// alert(fackt)

// 7.asagdaki f(x, y) funksiyasini daxil edilen x ve y ededleri ucun hesablayan proqram yazin
// x>0, y<0 olarsa f(x,y)=4x+2y+4
// x>0, y=0 olarsa f(x,y)=2x-y+3
// x<0, y>0 olarsa f(x,y)=3x+4y+3

// let x = parseInt(prompt("x"))
// let y= parseInt(prompt("y"))
// if(x>0 && y<0){
//     let f1=4 * x + 2 * y + 4
//     alert(`f1(${x},${y})=4x+2y+4=${f1}`)
// }else if(x>0 && y==0){
//     let f2=2 * x - y + 3
//     alert(`f2(${x},${y})=2x-y+3=${f2}`)
// }else if(x<0 && y>0){
//     let f3=3 * x + 4 * y + 3
//     alert(`f3(${x},${y})=3x+4y+3=${f3}`)
// }

// 8.vurma cedvelini gosteren bir proqram yaz

// let vurmaCedveli=""
// for(let i=1; i<=10; i++){
//     for(let j=1; j<=10; j++){
//         vurmaCedveli+= + i + "*" + j + "=" + (i*j) + "\t"
//     }
//     console.log(vurmaCedveli)
//     vurmaCedveli=""
// }

// 9. sistem 100-e  qeder tesadufu bir eded verir.istifadeci bu ededi tapmaga calisir ve proqram istifadeciye daxil etdiyi cavbi
// azalt ve ya artir  deyerek komek edir.cavabi tapdigda ise nece defe cehd etdikden sonra tapdigini gosterir

// let num=Math.floor(Math.random()*100);
// alert(num);
// let user=parseInt(prompt("eded daxil edin:"));
// let cehd=1
// while(true){
//     if(num>user){
//         alert("artirin")
//         user=parseInt(prompt("yeniden eded daxil edin:"));
//         cehd+=1
//     }else if(num<user){
//         alert("azaldin")
//         user=parseInt(prompt("yeniden eded daxil edin:"));
//         cehd+=1
//     }else if(num==user){
//         alert("tebrikler dogru cavabi tapdiniz")
//         alert(cehd)
//         break
// }
// }

// 10. istifadeci muxtelif ededler daxil edir ve 0 daxil etdikde daxil edilen ededlerin hasilini gosterir(0  hasili hesabalnan ededlere daxil deyil).

// let hasil=1
// while(true){
//     let num=parseInt(prompt("eded daxil edin:"))
//     if(num != 0){
//         hasil=hasil*num
//     }else if(num==0){
//         alert(hasil)
//         break
//     }
// }

// 11. istifadecinin daxil etdiyi edede qeder butun sade ededleri cap eden proqram yaz.mes(10: 2 3 5 7 )

// let user = parseInt(prompt("eded daxil edin:"))
// let sadeEdedler=""

// for(let i=2; i<user; i++){
//     let sade=true

//     for(let j=2; j<i; j++){

//         if(i%j == 0){
//             sade=false
//             break
//         }

//     }
//     if(sade){
//         sadeEdedler+=i + ", "
//     }

// }
// console.log(sadeEdedler);

// 12.verilen listdeki objectleri id e gore tapin

// const men=[
//     {id:1, ad:"ceyhun1"},
//     {id:2, ad:"ceyhun2"},
//     {id:3, ad:"ceyhun3"},
//     {id:4, ad:"ceyhun4"},
//     {id:5, ad:"ceyhun5"},
//     {id:6, ad:"ceyhun6"},
//     {id:7, ad:"ceyhun7"},
//     {id:8, ad:"ceyhun8"},
//     {id:9, ad:"ceyhun9"},
//     {id:10, ad:"ceyhun10"}
// ]

// oz usulum ile find methodu
/*
function findMan(id){
    for(let i=0; i < men.length; i++){
 
        if(men[i].id==id){
            return men[i]
        }
      
    }
}
const man = findMan(2)
console.log(man)
*/

// find metodu

// const manName=men.find(function(man){
//     return man.id===8
// })

// funksiyanin daha qisa yazilisi ile find metodu
// const manName = men.find(man => man.id === 9)
// console.log(manName)

// 13. fiter metodu

// const men=[
//     {id:1, ad:"ceyhun1"},
//     {id:1, ad:"ceyhun2"},
//     {id:3, ad:"ceyhun3"},
//     {id:3, ad:"ceyhun4"},
//     {id:3, ad:"ceyhun5"},
//     {id:3, ad:"ceyhun6"},
//     {id:8, ad:"ceyhun7"},
//     {id:8, ad:"ceyhun8"},
//     {id:8, ad:"ceyhun9"},
//     {id:8, ad:"ceyhun10"}
// ]

// const filterMethod = men.filter(function(man){
//     return man.id === 8
// })
// console.log(filterMethod)

// 14. moterizelerin duzgunluyunu yoxlayan kod yazin

// function duzgunMoterize(moterize){
//     const arrMoterize = moterize.split("")
//     const netice = arrMoterize.reduce(function(pre, curr){
//         console.log(pre, curr)
//         if( pre < 0){
//             return pre
//         }
//         if(curr === "("){
//             return ++pre
//         }
//         if(curr === ")"){
//             return --pre
//         }
//         return pre
//     },0)
//     if(!netice){
//         console.log("moterizeler duzgundur")
//     }else{
//         console.log("moterizeler duzgun deyil!")
//     }
// }
// duzgunMoterize("((()))")

// 15. higher order function,callback function

// let myList = [1, 3, 5, 9];

// function topla(myList) {
//   newList = [];
//   for (let i = 0; i < myList.length; i++) {
//     newList[i] = myList[i] + 5;
//   }
//   return newList;
// }
// function vur(myList) {
//   newList = [];
//   for (let i = 0; i < myList.length; i++) {
//     newList[i] = myList[i] * 5;
//   }
//   return newList;
// }
// function cix(myList) {
//   newList = [];
//   for (let i = 0; i < myList.length; i++) {
//     newList[i] = myList[i] - 5;
//   }
//   return newList;
// }
// function bol(myList) {
//   newList = [];
//   for (let i = 0; i < myList.length; i++) {
//     newList[i] = myList[i] / 5;
//   }
//   return newList;
// }
// console.log(topla(myList));
// console.log(vur(myList));
// console.log(cix(myList));
// console.log(bol(myList));

// optimallasdirma
// let myList = [1, 3, 5, 9];

// const toplama = function cem(num) {
//   return num + 5;
// };
// const vurma = function vur(num) {
//   return num * 5;
// };
// const ferq = function cix(num) {
//   return num - 5;
// };
// const bolme = function bol(num) {
//   return num / 5;
// };

// function byCalculation(myList, calculation) {
//   newList = [];
//   for (let i = 0; i < myList.length; i++) {
//     newList[i] = calculation(myList[i]);
//   }
//   return newList;
// }
// console.log(byCalculation(myList, toplama));

// foreach

// let myList = [1, 3, 4, 7, 8, 4];

// myList.forEach(numGoster);

// function numGoster(num, i) {
//   console.log(num, i);
// }

// let myList = [1, 3, 4, 7, 8, 4];

// numVeIndexGoster(myList, function test(num, index) {
//   console.log(num, index);
// });
// function numVeIndexGoster(arr, callback) {
//   for (let i = 0; i < myList.length; i++) {
//     callback(arr[i], i);
//   }
// }

// 16.

// const myList = [1, 2, 5, 7, 4, 26, 28, 33, 75];

// function getOperationNumbers(arr) {
//   const oddnum = arr.filter((num) => num % 2 != 0);
//   console.log(oddnum);

//   const pow = oddnum.map((num) => num * num);
//   console.log(pow);

//   const selectNums = pow.reduce((pre, curr) => {
//     if (curr > 25) {
//       pre.push(curr);
//     }
//     return pre;
//   }, []);
//   console.log(selectNums);
// }
// getOperationNumbers(myList);

// qisa versiyon

// const myList = [1, 2, 5, 7, 4, 26, 28, 33, 75];

// function getOperationNumbers(arr) {
//   return arr
//     .filter((num) => num % 2 != 0)
//     .map((num) => num * num)
//     .reduce((pre, curr) => {
//       if (curr > 25) {
//         pre.push(curr);
//       }
//       return pre;
//     }, []);
// }
// console.log(getOperationNumbers(myList));

// 17

// const citys = [
//   { nameCity: "Baki", num: 99 },
//   { nameCity: "masalli", num: 45 },
//   { nameCity: "Celilebad", num: 15 },
//   { nameCity: "Agsu", num: 54 },
//   { nameCity: "Lenkeran,", num: 75 },
// ];

// function getSortForName(citys) {
//   let newSort = Array.from(citys);
//   return newSort
//     .sort(function (a, b) {
//       if (a.nameCity > b.nameCity) {
//         return 1;
//       }
//       if (a.nameCity < b.nameCity) {
//         return -1;
//       }
//       if (a.nameCity == b.nameCity) {
//         return 0;
//       }
//     })
//     .reverse();
// }
// console.log(getSortForName(citys));

// 18

// let user = 15;
// const arr = [];
// for (let i = 1; i <= user; i++) {
//   arr.push(i);
// }

// function reduceMetod(arr) {
//   const newArr = [];
//   let x = 0;
//   let y = 1;
//   let c = 0;
//   arr.reduce(function (pre, curr, index) {
//     console.log(x, y, c);
//     c = y;
//     y = x;
//     newArr.push(x);
//     x = y + c;
//   }, 0);
//   console.log(newArr);
// }
// reduceMetod(arr);

// 19

// const students = [
//   { id: 2, firstname: "Ceyhun", lastname: "Resulov" },
//   { id: 1, firstname: "Ferhad", lastname: "Salmanov" },
//   { id: 5, firstname: "Yusif", lastname: "Velizade" },
//   { id: 3, firstname: "Resad", lastname: "Huseynov" },
//   { id: 6, firstname: "Hezret", lastname: "Gulverdiyev" },
//   { id: 4, firstname: "Asif", lastname: "Qafarli" },
// ];

/*function operationOnArray(students) {
  const evenId = students.filter(function (obj) {
    return obj.id % 2 === 0;
  });
  console.log(evenId);

  const student = [];
  evenId.map(function (obj) {
    student.push(obj.firstname + " " + obj.lastname);
    return student.sort();
  });
  return student;
}
console.log(operationOnArray(students));
*/

// qisaldilmis versiyon
// function operationOnArray(students) {
//   const student = [];
//   students
//     .filter((obj) => obj.id % 2 === 0)
//     .map((obj) => {
//       student.push(obj.firstname + " " + obj.lastname);
//       return student.sort();
//     });
//   return student;
// }
// console.log(operationOnArray(students));

const a = window;
console.log(window.document.body);
