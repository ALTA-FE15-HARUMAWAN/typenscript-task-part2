// CASE 1 :KONVERSI NILAI
function nilaimurid (nilai  : number ) : string {
     if (nilai <= 100 && nilai >=80){
          return "A"
     } else if (nilai < 80 && nilai >= 65){
          return "B+"
     } else if (nilai < 65 && nilai >= 50){
          return "B"
     } else if (nilai < 50 && nilai >= 35){
          return "C"
     } else if (nilai < 0 || nilai >100 ){
          return "INVALID"
     } else {
          return "D"
     }
}

console.log(nilaimurid(100))
console.log(nilaimurid(80))
console.log(nilaimurid(65))
console.log(nilaimurid(50))
console.log(nilaimurid(35))
console.log(nilaimurid(25))
console.log(nilaimurid(-1))