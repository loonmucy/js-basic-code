/**
 * var、let和const
 */

 /**
  * 变量提升：在JavaScript中，函数及变量的声明都将被提升到函数的最顶部；变量可以先使用再声明；
  * var声明的变量存在变量提升，let和const不存在变量提升
  */
console.log(a) //undefined
var a = 10
// console.log(b) //Uncaught ReferenceError: Cannot access 'c' before initialization
let b = 100 
// console.log(c) //Uncaught ReferenceError: Cannot access 'c' before initialization
const c = 1000
function fn() {
    if(true) {
        console.log(d + ' now')
    }else {
        var d = 1
        console.log(2)
    }
}
fn() //undefined now
/**
 * let和const是块级局部变量，只在当前代码块起作用；
 */
{
    var e = 1
    let f = 2
    const g = 3
}
console.log(e) //1
// console.log(f) //Uncaught ReferenceError: f is not defined
// console.log(g) //Uncaught ReferenceError: g is not defined
/**
 * 同一作用域下let和const不能声明同名变量，而var可以
 */
var a1 = 10
console.log(a1) //10
var a1 = 11
console.log(a1) //11
let b1 = 12
console.log(b1) //12
// let b1 = 13 //Uncaught SyntaxError: Identifier 'b1' has already been declared
//暂存死区
var c1 = 14
{
    //在当前块作用域中使用let或const声明变量c1的情况下，因为不存在变量提升，因此在c1还未声明的情况下给c1赋值会报错；
    // c1 = 15 //Uncaught ReferenceError: Cannot access 'c1' before initialization
    let c1 = 16
}
/**
 * const和let基本一致，不同点在于：1、一旦声明，必须赋值；2、声明后不能再修改；3、如果声明的是复合类型数据，可以修改其属性；
 */
// const d1 //Uncaught SyntaxError: Missing initializer in const declaration
const e1 = 17
// e1 = 18 //Uncaught TypeError: Assignment to constant variable
let f1 = 19
f1 = 20
console.log(f1) //20
const arr = []
arr[0] = 21
console.log(arr) //[21]
const obj = { a:22 }
obj.b = 23
obj.a = 24
console.log(obj) //{a: 24, b: 23}
//var声明的变量会挂载到window上，而let和const声明的变量不会
var a2 = 100
console.log(a2, window.a2) //100 100
let b2 = 101
console.log(b2, window.b2) //101 undefined
const c2 = 102
console.log(c2, window.c2) //102 undefined
