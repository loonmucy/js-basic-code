/**
 * 整理一些常用的方法，用到时还是查API来的全面
 */
// Array.from()将一个类数组对象或可迭代对象转换成真正的数组
console.log(Array.from('foo'))  //['f','o','o']
console.log(Array.from([1,2,3], x => x+x))  //[2,4,6]
// Array.indexOf()返回给定元素在数组中的第一个索引，若不存在，返回-1；类似findIndex、find
const beasts = ['ant','bison','camel','duck','bison']
console.log(beasts.indexOf('bison'))  // 1
console.log(beasts.indexOf('bison',2))  //4
console.log(beasts.indexOf('giraffe'))  //-1
// Array.findIndex()返回数组中满足提供的测试函数的第一个元素的索引，否则返回-1
// Array.find()返回数组中满足提供的测试函数的第一个元素的值，否则返回undefined
console.log(beasts.findIndex(item => item==='bison')) // 1
const array1 = [5,12,8,130,44]
const isLargeNumber = (element) => element > 13
console.log(array1.findIndex(isLargeNumber))  //3
console.log(array1.find(isLargeNumber))  //130
// String.split()使用指定的分隔符字符串将一个String对象拆分成字符串数组，也可以用Array.from()代替
const str = 'The quick brown fox jumps over the lazy dog'
console.log(str.split(' ')[3])  //fox
console.log(str.split('')[8]) //k