/*
let:用来声明变量。
	1.不存在变量提升 let不像var那样，会发生“变量提升”现象。
	2.暂时性死区 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
	3.不允许重复声明 let不允许在相同作用域内，重复声明同一个变量。

   为什么需要块级作用域？
        1.内层变量可能会覆盖外层变量。
        ，2.用来计数的循环变量泄露为全局变量。

const:用来声明变量，但是声明的是常量。一旦声明，常量的值就不能改变。

ES6规定，var命令和function命令声明的全局变量，属于全局对象的属性；let命令、const命令、class命令声明的全局变量，不属于全局对象的属性。

Destructuring:ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring） 。
	不完全解构:等号左边的模式，只匹配一部分的等号右边的数组。
	注意：ES6内部使用严格相等运算符（===）判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
	let和const命令:只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值。
	解构不仅可以用于数组，还可以用于对象：对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

	默认值生效的条件是，对象的属性值严格等于undefined。
 */


new Promise(function (resolve, reject) {
    log('start new Promise...');
    var timeOut = Math.random() * 2;
    log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            log('call resolve()...');
            resolve('200 OK');
        }
        else {
            log('call reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000);
}).then(function (r) {
    log('Done: ' + r);
}).catch(function (reason) {
    log('Failed: ' + reason);
});

