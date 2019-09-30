
const async1=require('async');
var  r=0;
async1.series([
       
        function(callback) {
          setTimeout(() => {
            r=10;
            console.log(`radius of polygon is ${r}`);
             callback(null,r);
            
          }, 3000);
         
        },
        
        function(callback){
          setTimeout(() => {
            r=r*r;
            console.log(` incremented radius of polygon is ${r}`)
             callback(null,r);
          },2000);
      
        },
        function(callback){
          setTimeout(() => {
            let area=(3.14)*(r);
            console.log(` area of ploygonis ${area}`)
             callback(null,area); 
          }, 1000);
         
       }
    ],
    function(err,results) {
      console.log(results);
    }
);


