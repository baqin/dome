/* 
*交叉类型
交叉类型就是取多个类型的并集，使用 & 符号定义，
被&符链接的多个类型构成一个交叉类型，表示这个类型同时具备这几个连接起来的类型的特点
*/
interface use {
    name: string
    age: number
}
interface per {
    sex: number
}
type allInfo = use & per
let persion: allInfo = { name: "xxxx", age: 1, sex: 1 }
// 联合类型(|)

/* 联合类型
两者满足其一
*/
let allType: number | string
allType = 1;
allType = "eddd"
// 不能将类型“boolean”分配给类型“string number”
//allType = false

//1，其一是“尖括号”语法
/***
*类型断言
* 尖括号写类型断言
*/
let someValue: any;
someValue = 123;
someValue = "dddd";
let someValueLength = (<string>someValue).length
// 2.as写法
/**
* 第二种 作为as进行编写
*/
let someName: any;
someName = 123
someName ='123'
let  someNameValueLength = (someName as string).length

function getName2(name: string, age: number): string {
    return name + age
}
/**  interface
 类似于对象:[》 代码块
 接口的高阶用法**/
interface Person {
    name: string,
    age: number,
    sex: number,
    isJob: boolean,
    hobby: string[]
    former: number,
    formerName: [string, string, string]
}
let person: Person = {
    name: '小焦',
    age: 26,
    sex: 0,
    isJob: true,
    hobby: ['打球’，"爬山'],
    former: 4,
    formerName: ['a', 'v', 'c']
}