

// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         //resolve("done");
//        reject("not done")

//     },1500)

// })promise.then((value)=>
// {
//     console.log(value);


// },(value1)=>
// {
//   console.log(value1);

// }) 
// function waitSecond(seconds) {
//     return new Promise((resolve, reject) => {
//         if (seconds > 1) {
//             reject(`rejected`)
//         }
//         else {
//             setTimeout(() => {
//                 seconds++;
//                 resolve(seconds)
//             }, 2500);
//         }

//         })
     
//  }
// waitSecond(0).then(waitSecond).then(waitSecond).then(waitSecond).then((value) => {
//     console.log(value);
// }).catch((error)=>
// {
//     console.log(error);
    
// })
let ab=new Promise((resolve,reject)=>
{
   setTimeout(() => {
    resolve("resolved")
    
       
   }, 1000);
})
let ac=new Promise((resolve,reject)=>
{
   setTimeout(() => {
    reject("rejected")
       
   }, 1000);
})
Promise.race([ab,ac]).then((value)=>
{
  console.log(value);
  
}).catch((value)=>
{
  console.log(value);
  
})
Promise.all([ab,ac]).then((value)=>
{
  console.log(value);
  
}).catch((value)=>
{
  console.log(value);
  
})
