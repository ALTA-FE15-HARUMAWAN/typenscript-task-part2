// CASE 3 : Blangan prima
function bilanganprima (nomor : number) :string{
         if (nomor < 1){
          return"SALAH"
         }
         for(let i = 2 ; i <= Math.sqrt(nomor) ; i++){
          if (nomor% i == 0)
          return "SALAH"
         }
          return "BENAR"
         
}

console.log(bilanganprima(11))//true
console.log(bilanganprima(13))//true
console.log(bilanganprima(17))//true
console.log(bilanganprima(20))//false
console.log(bilanganprima(35))// false
