// * Objects

// * empty object
var obj = {};
console.log(obj)
// * Object constructor
var objConstructor = new Object();
console.log(objConstructor)

var obj = {
    "z": "",
    "abc": 123,
    0: 1,
}

console.log(obj)

for( key in obj) {
    console.log(key, obj[key])
}

var obj = {};
var num = 4;
var x  = {
    [num]: "value"
};

console.log(x, obj.toString(), num.toString() )

// * Map
// * [k,v] pair
// * keys are anything, string, object, array, number
var obj = {}

// * set key,values
// * retreive key,values
// * check if a key exists

var map = new Map();
map.set(3,300)
map.set(1,100)
map.set(2,200)
map.set(obj,"a")
map.set(obj,"b")
map.set(obj,"c")

console.log(map)
console.log(map.has(obj))

// * .set(key, value)
// * .has(key)
// * size property
console.log( map.size )
// * clear all values
map.clear()
console.log( map)

map.set(1,2)
console.log( map)

// * delete
map.delete(1)
console.log( map)
map.set(obj, "value")
console.log( map)
map.delete(obj)
// ! the following will not delete the empty object
map.set({},"a");
map.delete({})
console.log( map)
map.get("key")

// * set, has, clear, size, delete, get
// * get
// * iterate through maps


// * for of
// ! not for in

var map = new Map();
map.set(1,2)
map.set(2,3)

console.log(`map.get(2), ${map.get(2)}`)

// * for of
for( var [k,v] of map ){
    console.log(`Key: ${k}, Value: ${v}`)
}
// * retreive keys, value
console.log( map.keys() )
console.log( map.values() )

// * loop through keys and values
for(var key of map.keys()){
    console.log(`key is ${key}`)
}
for(var value of map.values()){
    console.log(`value is ${value}`)
}

var arr = Array.from( map.keys() )
console.log(arr)

// * for Each
// * hof - higher order function
map.forEach( function(value, key){
    console.log(`values are ${value}, key ${key}`)
} )




var correctMap = new Map();

// * set
correctMap.set(123,"value") 
console.log(correctMap)

console.log(correctMap.has(123))



// ! wrong way to use maps

var map = new Map();

map['123'] = 123

console.log(map)

console.log(map.has("123"))
// false