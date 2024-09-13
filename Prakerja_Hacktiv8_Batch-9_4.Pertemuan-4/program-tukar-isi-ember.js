// deklarasi 
let A = "merah";
let B = "biru";
let C = "";

console.log("Kondisi Awal: ");
console.log('A = '+A);
console.log('B = '+B);
console.log('C = '+C);

// proses
C = A;
A = B;
B = C;
C = "";

// output 
console.log("Kondisi Akhir: ");
console.log('A = '+A);
console.log('B = '+B);
console.log('C = '+C);
