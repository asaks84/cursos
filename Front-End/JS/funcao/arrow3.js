let ComparaThis = function(param) {
    console.log(this === param)
}

ComparaThis(global)
console.log(`This === this? `) + ComparaThis(this)
console.log(" ")

const obj = {}
ComparaThis(obj)
ComparaThis = ComparaThis.bind(obj)
ComparaThis(global)
ComparaThis(obj)

console.log(" ")

let ComparaThisArrow = param => console.log(this === param)

ComparaThisArrow(global)
ComparaThisArrow(obj)
ComparaThisArrow(module.exports)
ComparaThisArrow(this)
ComparaThisArrow = ComparaThisArrow.bind(obj)
ComparaThisArrow(obj)
