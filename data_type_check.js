/**
 * js的数据类型检测
 * typeof基本数据类型除了null都会返回正确的类型,null返回object;
 * instanceof可以用来检测引用类型，但对于基本类型不生效;
 * constructor可用于检测基本类型和引用类型(null、undefined除外)，但当涉及到原型和继承时，会出现问题;
 * Object.property.toString.call()可用于检测js所有的数据类型,包括null、undefined、原型继承;
 */

 //基本数据类型除了null都会返回正确的类型（number、string、boolean、undefined）；null返回object
console.log(typeof 1)  //number
console.log(typeof '')  //string
console.log(typeof true)  //boolean
console.log(typeof undefined)  //undefined
console.log(typeof null) //object
//引用数据类型包括Array、Function、Object
console.log(typeof function(){})  //function
console.log(typeof [])  //object
console.log(typeof {}) //object
//instanceof可以用来检测引用类型，但对于基本类型不生效
console.log([] instanceof Array)  //true
console.log({} instanceof Object)  //true
console.log(function(){} instanceof Function)  //true
console.log(1 instanceof Number)  //false
console.log(null instanceof Object)  //false
// console.log(undefined instanceof undefined)  //TypeError

//constructor可用于检测基本类型和引用类型(null、undefined除外)，但当涉及到原型和继承时，会出现问题
console.log((1).constructor === Number)  //true
console.log([].constructor === Array)  //true
console.log({}.constructor === Object)  //true
console.log((function() {}).constructor === Function)  //true
// console.log((null).constructor === Object)  //TypeError
// console.log((undefined).constructor === undefined)  //TypeError
function fun() {};
fun.prototype = new Array();
let f = new fun();
console.log(f.constructor === fun)  //false
console.log(f.constructor === Array)  //true
//Object.property.toString.call()可用于检测js所有的数据类型,包括null、undefined、原型继承
let test = Object.prototype.toString
console.log(test.call(1))  //[object Number]
console.log(test.call(null))  //[object Null]
console.log(test.call(undefined))  //[object Undefined]
console.log(test.call([]))  //[object Array]
console.log(test.call({}))  //[object Object]
console.log(test.call(function() {}))  //[object Function]
function fun() {};
fun.prototype = new Array();
let f1 = new fun()
console.log(test.call(f1))  //[object Object]
console.log(test.call(fun))  //[object Function]
