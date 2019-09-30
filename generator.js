// function* Add(x) {
//     yield x + 1;
//     var y = yield(null);
//     y = 6
//     return x + y;
//    // console.log(y);
//  }
 
//  var gen = Add(5);
//  console.log( gen.next());
//  console.log( gen.next());
//  console.log( gen.next());
// // function * infinite()
// {
//     let i=0;
//     while(true)
//     {
//         yield i;
//         i++;
//     }
// }
// let iterator=infinite();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
 function * generator1()
 {
   yield 1
   yield * anothergenrator()
   yield 3
 }
 function * anothergenrator()
 {
   yield 2
   yield "abc"     
  return yield
  
 }
 let ab=generator1()
console.log(ab.next());
console.log(ab.next());
console.log(ab.next());
console.log(ab.next());
