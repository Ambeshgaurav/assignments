const async1=require("async")
var r=0;
var r1=0;
async1.waterfall([
    function(callback){
        r=10;
        r1=12;
        console.log(`radius of the polygon ${r}`);
        console.log(`radius of the polygon ${r1}`);
        callback(null, r,r1);
    },
    function(r1, r2, callback){
        r1=r1*r1;
        r2=r2*r2;
        console.log(`updated radius of the polygon is ${r1}`);
        console.log(`updated radius of the polygon is ${r2}`);
        callback(null, r1,r2);
    },
    function(r1,r2, callback){
        let area=3.14*r1;
        let perimeter=2*3.14*r2;
        console.log(` area of polygon is  ${area}`);
        console.log(`perimeter of polygon is  ${perimeter}`);
       
        callback(null, area,perimeter,"every thing is fine");
    }
], function (err, result1,result2,done) {
  
   console.log(result1);
   console.log(result2);
   console.log(done);
      
});