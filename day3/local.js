// 

// let add =(a,b)=> a
// let sub =(a,b)=> a-b
// let mul =(a,b)=> a*b
// let div =(a,b)=> a/b
// module.exports={add,sub,mul,div}
let strrev=(str)=>{
    return str.split('').reverse().join('')
}
let strcount=(str)=>{
    return str.length
}
let strupper=(str)=>{
    return str.toUpperCase()
}
let strlower=(str)=>{
    return str.toLowerCase()
}
let str=(str)=>{
    return str
}
module.exports={strrev,strcount,strupper,strlower,str}