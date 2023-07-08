// CASE 4 : Palindrome 
function palindrome(kata : any) {
     let A = kata.length;
     for (let i = 0 ; i < A / 2; i++) {
         if (kata[i] !== kata[A - 1 - i]) {
          return "SALAH"
         }
     }
     return "BENAR"
 }
 
 console.log(palindrome("civic"))       // true
 console.log(palindrome("katak"))       // true
 console.log(palindrome("kasur rusak")) // true
 console.log(palindrome("kupu-kupu"))   // false
 console.log(palindrome("lion"))        // false
 
 
 
 