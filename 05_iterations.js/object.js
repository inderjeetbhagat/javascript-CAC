const obj = {
    "in" : "india",
    "au" : "australia"
}

for (const key in obj) { //iterate object using for in -> it prints key
    console.log(obj[key] + " is " + key)
}