const map = new Map()
map.set("in", "India")
map.set("au", "Australia")
map.set("as", "Australaia")
// map["au"] = "australia"
console.log(map)
console.log(map.size)
for( let mappy of map ) {
    console.log(mappy)
}
for( let [key, value] of map ) {
    console.log(key)
}

const obj = {
    "in" : "india",
    "au" : "australia"
}

for (let objj of obj){ //object are not iterable
    console.log(objj)
}
