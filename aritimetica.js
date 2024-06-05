function soma(arr){
    let som = 0
    for (let i = 0; i < arr.length; i++) {
        som += arr[i];
    }
    return som
}

function sub(arr){
    let som = 0
    for (let i = 0; i < arr.length; i++) {
        som -= arr[i];
    }
    return som
}


module.exports = { soma, sub }