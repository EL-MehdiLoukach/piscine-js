const escapeStr = "\`\\/\"\'"
const arr = [4,'2']

const obj = {
    str : "hello",
    num : 15,
    bool : true,
    undef : undefined,
}


const nested = {
    arr : [4,undefined,'2'],
    obj : {
        str: "hello",
        num : 15,
        bool: true,
    }
}
Object.freeze(arr, obj)
Object.freeze(obj)
Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)

