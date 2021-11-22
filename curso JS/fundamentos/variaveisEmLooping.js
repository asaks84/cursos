const funcs = []

for(var i = 0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2] ()
console.log(' ')

const funcslet = []


for(let z = 0; z<10; z++) {
    funcslet.push(function(){
        console.log(z)
    })
}


/* for(let z = 0; z<10; z++) {
    funcslet.push( console.log(z) )
} */

//console.log(funcslet[2])
funcslet[9]