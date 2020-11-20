/**
 * 字符串反转方法
 */
let str = "hello world"
//String.split('') 把字符串拆分成数组
//Array.reverse() 数组反转元素位置
//Array.join('') 数组转回字符串，空分隔符分隔
let newStr = str.split('').reverse().join('')  
console.log(newStr)
//Array.from() 把类数组的字符串转为数组
console.log(Array.from(str).reverse().join(''))