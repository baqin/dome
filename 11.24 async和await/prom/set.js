// Set.prototype.keys()：返回键名的遍历器。
// Set.prototype.values()：返回键值的遍历器。
// Set.prototype.entries()：返回键值对的遍历器。
// Set.prototype.forEach()：使用回调函数遍历每个成员。
// 以上都是Set自带的方法
let set = new Set([1, 2, 3, 4])
console.log(set);

for (let item of set) {
    console.log(item);
    //返回键值的遍历器
}
for (let item of set.keys()) {
    console.log(item);
    // 返回键名的遍历器
}
for (let item of set.values()) {
    console.log(item);
    //返回键值的遍历器
}
for (let item of set.entries()) {
    console.log(item);
    //返回键值的遍历器
}
set.forEach((key, value) => {
    console.log(key + ':' + value);
})