// function grandfather(){
//     let dadaji = 'dadaji'
// // debugger;
//     function father(){
//         let papaji = 'papji';

//         function son(){
//             let betaji = 'betaji';
//             console.log(`${dadaji} => ${papaji} => ${betaji}`);
//         }
//         son();
//     }
//     father();
// }
// grandfather();

//! Ex: 2
// let x = 10;
// function a(){
//     console.log(x);
//     let y = 20;

// }

// function b(){
//     a();

//     console.log(y);
// }

// b()

//!  Ex: 3

// let x = 10;
// function a(){
//     console.log(x);
//     let y = 20;

// function b(){
//     console.log(y);
// }
// b();

// }
// a();

//! Ex: 4

// function a(){
//     let grandPaa = 'grandPaa';

//     function b(){
//         let father = 'father';

//         console.log(grandPaa);

//         function c(){
//             let son = 'son';
//         }
//         c();
//     }
//     b();
// }
// a();

// here is my doubt: in function c i am not using function a variable, then  why function a making closure in function c

//!   Closure: Memory and Encapsulation

// function a(){
//     let grandPaa = 'grandPaa';

//     return function b(){
//         let father = 'father';
//         let mother = 'mother'
//         console.log(mother);

//         return function c(){
//             let child = 'child';
//             console.log(grandPaa, father, child);
//         }
//     }
// }
// let fnb = a();
// // console.log(fnb);

// let fnc = fnb();
// console.log(fnc());

// function a(x){
//    return function b(y){
//      return function c(z){
//             return x+y+z;
//                 }
//     }
// }
// console.log(a(10)(20)(30));

//! Arrow Function
// const a = (x) => (y) => (z) => x + y + z;
//  console.log(a(10)(20)(30));

// Memory management

// function task(index){
//     const array = new Array(5000).fill('❤️');
//     console.log(array);
//     return array[index]
// }

// const heart = task(2);
// console.log(heart)

// const heart2 = task(3);
// console.log(heart2)

// const heart3 = task(4);
// console.log(heart3)

// ! higher order function: function are those return a function
// function task(index){
//     const array = new Array(5000).fill('❤️');
//     console.log(array);
//     return function(index){
//         return array[index]
// }
// }

// const heart = task();

// console.log(heart(2))
// console.log(heart(3))
// console.log(heart(4))
// console.log(heart(5))
// console.log(heart(6))

// !Encapsulations: secure, data, function

// function House(){

//     let freeze ='mango'

//      function giveMango(){
//         return freeze
//     }
//     return {
//         leLoAam: giveMango,
//     }
// }

// let myHouse = House();
// console.log(myHouse.leLoAam());
// // myHouse.freeze = 'apple' //not change directly
// // console.log(myHouse.leLoAam());

// I want to set it once

let wallpaper = "";

// let setWallpaper = () => {
//     wallpaper = 'Wallpaper';
//     console.log('wallpaper set ho gya...', wallpaper);

//     setWallpaper = () => {
//         console.log('wallpaper set ho gya bhai, ab ky chaiye.. ek bar hi hoga bss');
//     }
// }

let setWallpaper = () => {
  if (wallpaper == "Wallpaper") {
    return;
  } else {
    wallpaper = "Wallpaper";
    console.log("wallpaper set ho gya...", wallpaper);
  }
};

setWallpaper();
setWallpaper();
setWallpaper();
setWallpaper();
