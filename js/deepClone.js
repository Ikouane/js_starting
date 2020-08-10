console.log("深拷贝")

const obj = {
    age: 22,
    name: 'ikouane',
    address: {
        city: 'Beijing'
    },
    arr: ['a', 'b', 'c']
}

const obj1 = obj

obj1.address.city = 'ShangHai'
console.log(obj.address.city)

const obj2 = deepClone(obj)

obj2.address.city = 'GuangZhou'
console.log(obj.address.city)
console.log(obj1.address.city)
console.log(obj2.address.city)

function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj == null) //如果不为引用类型直接返回
    {
        return obj
    }

    let result
    if (obj instanceof Array) {
        result = []
    }
    if(obj instanceof Object) {
        result = {}
    }

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {  //如果为本身属性则递归调用，一步一步展开，再判断内容是值类型还是引用类型，直到遍历结束
            result[key] = deepClone(obj[key])
        }   //若为从原型继承的属性就跳过
    }

    return result;
}