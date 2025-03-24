// js examples







// let  a=10
// let b=20
// let message=(a,b) =>a+b
// console.log(message(a,b)) 
 //arrow fuction calling with 2 arg to add


// let s="gomu"
// let rev=(s) =>s.split("").reverse().join("")
// console.log(rev(s))  
//reverse a string 

// let d="nans"
// let rev_str=() =>{
//      let rev=""
//     for(let i=d.length-1;i>=0;i--)
//     {
//         rev+=d[i]
//     }
//     return rev
// }
// console.log(rev_str(d))

 //for in 
// let arr=['gomu','nans','kriti']
// for(i in arr)
// {
//     console.log(arr[i])
// }
// //for of
// let arr1=['gomu','nans','kriti']
// for(i of arr1)
// {
//     console.log(i)
// }
// n=10
// for(let i=1;i<=n;i++)
// {
//     if(Math.pow(-1,i)==1)
//     {
//         console.log("-"+i)
//     }
//     else{
//         console.log(i)
//     }
// }
// for( var i=1;i<=10;i++)
// {
//     x=Math.pow(-1,i+1)*i
//     console.log(x)
// }



// let print_arr =(arm1) =>{
//     let ar=[]
//     for(i in arm1)
//     {
        
//         if(i%2==0)
//         {
//             ar.push(arm1[i])
//         }
//     }
//     return ar
//     }
    
//     let arm1=[1,'raj','ram',true,4.5]
//     let m=print_arr(arm1)
//     console.log(m)

    
//     let print_ar =(arm2) =>{
//         let ar1=[]
//         for(i in arm2)
//         {
            
//             if(i%2!=0)
//             {
//                 ar1.push(arm2[i])
//             }
//         }
//         return ar1
//         }
        
//         let arm2=[1,'raj','ram',true,4.5]
//         let v =print_ar(arm2)
//         console.log(v)
        


// const name="Alice"
// const greeting =`Hello,${name}`;
// console.log(greeting)

// const multiline =`This is line 1
// This is line 2
// This is line 3`
// console.log(multiline)



// const y=10,g=5;
// const res =`The sum of ${y} and ${g} is ${y+g}`
// console.log(res)


// console.log(`${y} > ${g} = ${y>g}`)

// function greet(nam="Guest"){
//     console.log(`Hello,${nam}!`)
// }
// greet();
// greet("Gomu")


// const print_num=(a,b=4) =>{
//     console.log(a+b)
// }
// print_num(2)
// print_num(2,6)

// const numbers =[10,20,30]
// const [j,k,c]=numbers
// console.log(j)
// console.log(k)
// console.log(c)



// let ag=[2,3,5,7]
// let[f,p,z,q]=ag
// console.log(`f=${f}\np=${p}\nz=${z}`)


// let obj={pname:"television",Price:12000,Pquantity:5}
// let {pname:product_name,Price:price,Pquantity:quantity}=obj
// console.log(`name:${product_name}\nprice:${price}\nQuantity:${quantity}`)

// let arr =[1,2.5,'ramesh']
// let [a,b,...arr1]=arr
// console.log(`a =${a}\nb=${b}\narr1=${arr1}`) 

// const details=
// {
//     name:"gomugie",
//     contact:{
//         phone_no:7418200115,
//         mail:"gomugiebala@gamil.com"
//     }
// };

// const{name,contact:{phone_no,mail}}=details
// console.log(`name:${name}`)
// console.log(`phone_no:${phone_no}`)
// console.log(`mail:${mail}`)


// const fdetails={pname:"Phone",price:12000,discount:12}
// const{pname,...rest}=fdetails
// console.log(`pname:${pname}\n rest:`,JSON.stringify(rest))


// const names=["gomu","nans","kriti"]
// const copynames={...names}
// console.log(copynames)


// let nums=[4,5,6]
// let nums1=[1,2,3]
// let copys=[...nums1,...nums1]
// console.log(copys)

// let a="Gomugie"
// let words=[...a]
// console.log(words)

//  let a="Gomugie"
//  let words=[...a]
//  let res=''
//  for (i in words)
//  {
//     if(words[i]=='a'|| words[i]=='e'|| words[i]=='i'||words[i]=='o'||words[i]=='u')
//     {
//         res+=words[i]
//     }
//     }
// const re=[...res]
// console.log(re)

// const det={name:"gomu",age:30}
// const add={phone:7418200115,mail:"gomugiebala@gamil.com"}


// const merge={...det,...add}
// console.log(merge)

// const det={name:"gomu",age:30}
// const update={...det,age:20}
// console.log(update)

// const agr=[10,50,60,8,9,5]
// const mul=(a,b,c,d,e,f)=>
// {
//     return a*b*c*d*e*f
// }
// console.log(mul(...agr))


// function sum_arr(...arr)
// {
//     let sum=0
//     for(i of arr)
//     {
//         sum=sum+i
    
//     }
//     return sum

// }
// console.log(sum_arr(5,6,7,8,9))

// function greet(name,callback)
// {
//     console.log("hello " +name)
//     callback()
// }
// function display()
// {
//     console.log("Done")
// }
// greet('gomu',display)


// function greet(str,callback)
// {
//     let rev=str.split("").reverse().join("")
//     console.log("fetching...")
//     setTimeout(()=>{
//         console.log("processing...")
//         callback(rev)

//     },10000)
   
// }
// function display(rev)
// {
//     setTimeout(()=>{
//         console.log("reversed string= "+rev)
//         console.log("Done")


//     },10000)
    

    
// }
// let str="Gomugie"
// greet(str,display)

// function fetchdata(callback)
// {
//     console.log("fetching...")
//     setTimeout(()=>{
//         const data={name:"Alice",age:25};
//         console.log("Data fetched");
//         callback(data);

//     },2000);
   
// }
// function processdata(data)
// {
    
//         console.log("process data= ",data);
//         console.log("Done");

    

    
// }
// fetchdata(processdata)


function fetchdata(callback)
{
    console.log("fetching...")
    setTimeout(()=>{
        const data={fname:"Alice",lname:"josh"};
        console.log("Data fetched");
        callback(data.fname+" "+data.lname);

    },2000);
   
}
function processdata(data)
{
    
        console.log("full name= ",data);
        console.log("Done");

    

    
}
fetchdata(processdata)