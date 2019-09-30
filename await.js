const async1=require("async")

function two(a,b) { 
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(a+b);
      }, 2000);
    });
  }
  
  async function add() {
    var x = await two(10,20);
    console.log(x);
  }
  
  add();