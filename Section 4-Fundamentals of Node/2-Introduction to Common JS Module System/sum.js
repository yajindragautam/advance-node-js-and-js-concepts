function add(...num){
    return num.reduce((a,b)=>a+b);
}

console.log("Loading in sum js");
for(let i =0; i<=1000; i++){
    console.log(i)
}

// export
module.exports = add