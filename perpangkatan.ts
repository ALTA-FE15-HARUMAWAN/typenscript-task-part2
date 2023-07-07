//CASE 2 : Perpangkatan
function perpangkatan (bilangan1 : number ,bilangan2 : number ):any {
     if ( bilangan1 >= 0 && bilangan2 >= 0){
          return (bilangan1 ** bilangan2)
     } else {
          return "wrong input"
     }
}

console.log(perpangkatan(2, 3)) // 8
console.log(perpangkatan(2, 12)) // 4096
console.log(perpangkatan(7, 2)) // 49
console.log(perpangkatan(9, 3)) // 729
console.log(perpangkatan(22, 5)) // 5153632
console.log(perpangkatan(1996, 0)) // 1
console.log(perpangkatan(4213, -3)) // “wrong input”