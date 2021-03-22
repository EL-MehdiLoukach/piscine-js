const escapeStr = "\`, \\, \/, \",\'"
const arr = [4,'2']

const obj = {
    str : "hello",
    num : 15,
    bool : true,
    undef : undefined,
}

const nested = {
    arr : [],
    obj : obj
}

Object.freeze(nested)
Object.freeze(arr)
Object.freeze(obj)