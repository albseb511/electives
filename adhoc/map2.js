var arr = [ ["a", 1], ["b", 2], ["c", 3], [ 1, 5 ]]

var map = new Map(arr);

console.log(map.keys())

// * keys(), values(), entries()
// entries, return [key, value] pairs
console.log( map.entries() )
for( var [key, value] of map.entries() ){
    console.log(key,value)
}


// * Iterators
var keys = map.keys();
let result = keys.next()
console.log( result )
while( !result.done ){
    console.log(result);
    console.log(result.value);
    result = keys.next()
}