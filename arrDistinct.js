console.log(Array.from('foo'))  //['f','o','o']
console.log(Array.from([1,2,3], x => x+x))  //[2,4,6]
//定义两个长度为10W和5W的数组
let arr1 = Array.from(new Array(100000),(x,index)=>{
    return index
})
let arr2 = Array.from(new Array(50000),(x,index)=>{
    return index + index
})
let start = new Date().getTime()
console.log('开始数组去重')
function distinct(a,b) {
    //数组去重
    return Array.from(new Set([...a, ...b]))
}
console.log('去重后的长度',distinct(arr1,arr2).length)
let end = new Date().getTime()
console.log('耗时',end - start)


function distinct_1(a,b) {
    return Array.from(new Set([...a, ...b]))
    //开始数组去重 
    //去重后的长度 100000 
    //耗时 31
}
function distinct_2(a,b) {
    //利用对象的属性不会重复这一特性，校验数组元素是否重复
    let arr = a.concat(b)
    let result = []
    let obj = {}
    for(let i of arr) {
        if(!obj[i]) {
            result.push(i)
            obj[i] = 1
        }
    }
    return result
    //耗时 15
}
function distinct_3(a,b) {
    //一次排序，一次循环
    let arr = a.concat(b)
    arr = arr.sort()
    let result = [arr[0]]
    for(let i=1,len=arr.length;i<len;i++) {
        arr[i] !== arr[i-1] && result.push(arr[i])
    }
    return result;
    //耗时 22
}
function distinct_4(a,b) {
    //Array.filter()遍历数组，indexOf排除重复项；性能差
    let arr = a.concat(b)
    return arr.filter((item,index) => {
        return arr.indexOf(item) === index
    })
    //耗时 11513
}