// Q 1

// function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// Q 2
// let count = 0;
//         (function () {
//           if (count === 0) {
//             let count = 1;
//             console.log(count); // What is logged?
//           }
//           console.log(count); // What is logged?
//         })();

// Q 3
// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }

//   Q 4


// Q 5


// Q 6
// var a = 12;
//         (function () {
//           console.log(a);
//         })();

// Q 7
// var a = 10;
//         var x = (function () {
//           var a = 12;
//           return function () {
//             console.log(a);
//           };
//         })();
//         x();

// Q 8
var globalVar = "xyz";

        (function outerFunc(outerArg) {
            var outerVar = 'a';
            
            (function innerFunc(innerArg) {
            var innerVar = 'b';
            
            console.log(
                outerArg = "" + outerArg + "\n" +
                innerArg + "" + innerArg + "\n" +
                outerVar + "" + outerVar + "\n" +
                innerVar + "" + innerVar + "\n" +
                globalVar + "" + globalVar);
            
            })(456);
        })(123);