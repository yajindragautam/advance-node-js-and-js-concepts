function product(...num){
    return num.reduce((a,b)=> a * b);
}

// export
module.exports = product