const escapeStr = "\`, \\, \/, \",\'"
const arr = [4,'2']
Object.freeze(arr)
const obj = {
    str : "hello",
    num : 15,
    bool : true,
    undef : undefined,
}
Object.freeze(obj)

const nested = {
    arr : [4,undefined,'2'],
    obj : {
        str: "hello",
        num : 15,
        bool: true,
    }
}
Object.freeze(nested)
Object.isFrozen(nested,nested.arr,nested.obj)

