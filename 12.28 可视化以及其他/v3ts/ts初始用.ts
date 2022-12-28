// *两个数相加
/***number */
let num1: number = 1
let num2: number = 2
//num1 =“怒号” // 不能将类型“string”分配给类型“number”
let sum: number = num1 + num2
/**string */
let str1: string = "ts初始之路"
let str2: string = "希望疫情早日过去"//num1 =“怒号” // 不能将类型“string”分配给类型“number”
let str: string = str1 + str2

/**bo0T */
let bool: boolean = true
/**数组 array
* 第一种: number[]
* 第二种: Array<number>
*js
* new Array()
*[]
*/
let array: number[] = [1, 1, 2, 34, 4]
let array1: string[] = ['1', '2', '32']
let array2: boolean[] = [true, false]

let array3: Array<number> = [1, 2, 3, 4, 5]
let array4: Array<string> = ['1']
/***元组Tuple
* 概念: 但是长度有限，元组组成的内容的属性 类型不是单一的
*/
// 错误 写法 不能将类型“[number，string]”分配给类型“[number，string，boolean]”。 源具有 2 个元素，但目标需要3个/ let tuple: [number,string,boolean] = [1，2]
let tuple: [number, string, boolean] = [1, '2', true]
/**null undefind
* 概念: 既为类型，又为值
*/
let a: null = null
let b: undefined = undefined
/**obiect的对象*/
declare function create(o: object | null): void
create({ props: 0 })
create(null)//create(3222) // 类型“number”的参数不能赋给类型“object”的参数。
//create("dddd") // 类型“string”的参数不能赋给类型“object”的参数。
//create(undefined) // Error类型“undefined”的参数不能赋给类型“object  null”的参数
// 简单
let obj: { name: string, age: number }
obj = { name: '小红', age: 13 }





// console.log(CODE2['SUCCESS']);
// console.log(CODE2.ERROR);
// console.log(CODE2['WARING']);
enum CODE3 {
    SUCCESS,// 0
    ERROR = '400',// 1
    WARING = '401',
}
/**
*void定义函数，函数没有返回值
*/

function getName1(name: string, age: number): void {
    console.log();
}
function getName2(name: string, age: number): string {
    return name + age
}
