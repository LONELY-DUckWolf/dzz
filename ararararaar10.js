prompt(alert("Hello World"))


function words(callback) {
    while (true) {
        callback(alert("Hello World"))
        break
    }
}
console.log(words(callback()))