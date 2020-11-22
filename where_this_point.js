/**
 * 理解this的指向
 */

 //this的指向在函数定义的时候还不能确定，只有函数执行时才能确定，this最终指向那个调用它的对象；
 /**
  * 如果一个函数中有this，但它没有被上一级的对象所调用，那么this指向window
  * 如果一个函数中有this，它有被上一级的对象所调用，那么this指向上一级对象
  * 如果一个函数中有this，且它被多个对象所调用，尽管这个函数是被最外层的对象所调用，this也只是指向它的上一级对象
  */
function o() { 
    let user = 'user'
    console.log(this.user)  //undefined
    console.log(this)  //Window
}
o();  //这里的函数o实际上被Window对象所调用，Window.a()
//fn是通过o.fn()执行的，所以这里的this指向对象o；
var o = {
    user: 'user',
    fn: function() {
        console.log(this.user)  //user
        console.log(this)  //o
    }
}
o.fn()
window.o.fn()  //结果同上，this指向它的上一级对象
//如果一个函数被多个对象所调用，this指向的也只是它的上一级对象
var o = {
    a: 10,
    b: {
        a: 12,
        fn: function() {
            console.log(this.a)  //12
        }
    }
}
o.b.fn()

var o = {
    a: 10,
    b: {
        // a: 12,
        fn: function() {
            console.log(this.a)  //undefined,this只会指向它的上一级对象，不管这个对象中有没有this要的内容
        }
    }
}
o.b.fn()
//特殊情况：this永远指向最后调用它的对象，也就是在它执行的时候是谁调用的；
//在下面的例子中，虽然fn是被对象b所引用，但将fn赋值给变量p的时候并没有执行，所以最终指向window，上一个例子是直接执行了fn；
var o = {
    a: 10,
    b: {
        a: 12,
        fn: function() {
            console.log(this.a)  //undefined
            console.log(this)  //Window
        }
    }
}
var p = o.b.fn
p()
//构造函数的this
//new关键字创建一个对象实例，new可以改变this的指向，该this指向对象m，因为Fn函数被复制了一份到m对象中；
function Fn() {
    this.user = 'user'
}
var m = new Fn();
console.log(m.user)  //user
//当函数中有return时
/**
 * 如果返回值是一个对象，那么this指向那个返回的对象；
 * 如果返回值不是一个对象，包括null（虽然typeof null返回object），那么this指向函数的实例
 */
function fn1() {
    this.user = 'user'
    return {}
    // return function() {}  //结果同上
}
var a1 = new fn1
console.log(a1.user)  //undefined

function fn2() {
    this.user = 'user'
    // return 1
    // return undefined  //结果同上
    return null  //结果同上
}
var a2 = new fn2
console.log(a2.user)  //user
