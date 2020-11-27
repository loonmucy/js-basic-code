/**
 * 防抖：连续的事件，只需触发一次回调；1、搜索框输入，只需用户最后一次输入完，再发请求；2、窗口resize，只需窗口调整完成后，计算窗口大小，防止重新渲染；
 * 节流：间隔一段时间执行一次回调；1、高频点击提交，表单重复提交；2、谷歌搜索，搜索联想功能；3、滚动加载，加载更多或滚动到底部监听；
 */

 //防抖：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
 //在onmousemove最后触发的1s后执行回调函数testDebounce；如果一直移动鼠标，会在移动结束后1s执行testDebounce
 function debounce(fn,delay) {
     let timeout = null
     return function() {
         clearTimeout(timeout)
         timeout = setTimeout(() => {
             fn.apply(this,arguments)
         }, delay)
     }
 }
 function testDebounce(e,content) {
     console.log(e, content)
 }
 var testDebounceFn = debounce(testDebounce, 1000)
//  document.onmousemove = function(e) {
//      testDebounceFn(e,'debounce')  //给防抖函数传参
//  }
 //节流：限制函数在一段时间内只执行一次
 //如果我们在浏览器中一直移动鼠标，则在移动鼠标时会每隔一秒执行一次testThrottle
 function throttle(fn,delay) {
     let timer = true
     return function() {
         if(!timer) return;
         timer = false
         setTimeout(() => {
             fn.apply(this,arguments)
             timer = true
         }, delay)
     }
 }
 function testThrottle(e,content) {
    console.log(e, content)
}
 var testThrottleFn = throttle(testThrottle, 1000)
 document.onmousemove = function(e) {
    testThrottleFn(e,'throttle')  //给节流函数传参
 }