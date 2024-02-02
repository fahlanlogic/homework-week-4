// Buatlah 100 nilai random (1 sampai 50) pada 1 array
const myArray = [];
for (i = 0; i < 100; i++) {
  myArray.push(Math.floor(Math.random() * 51));
}

// Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil
const oddArray = [];
const evenArray = [];

for (let i = 0; i < myArray; i++) {
  if (myArray[i] % 2 === 0) {
    evenArray.push(myArray[i])
  } else {
    oddArray.push(myArray[i])
  };
}

console.log(oddArray.length);
console.log(evenArray.length);

// Mencari bilangan Min pada array ganjil/oddArray
let minOddArray = oddArray[0];
for (i = 0; i < oddArray.length; i++) {
  if (oddArray[i] < minOddArray) {
    minOddArray = oddArray[i]
  };
}

// Mencari bilangan Max pada array ganjil/oddArray
let maxOddArray = oddArray[0];
for (i = 0; i < oddArray.length; i++) {
  if (oddArray[i] > maxOddArray) {
    maxOddArray = oddArray[i]
  };
}

// Mencari bilangan Min pada array genap/evenArray
let minEvenArray = evenArray[0];
for (i = 0; i < evenArray.length; i++) {
  if (evenArray[i] < minEvenArray) {
    minEvenArray = evenArray[i]
  };
}

// Mencari bilangan Max pada array genap/evenArray
let maxEvenArray = evenArray[0];
for (i = 0; i < evenArray.length; i++) {
  if (evenArray[i] > maxEvenArray) {
    maxEvenArray = evenArray[i]
  };
}

// Menghitung Total pada array ganjil/oddArray
let totalOddArray = 0;
for (i = 0; i < oddArray.length; i++) {
  totalOddArray += oddArray[i];
}

// Menghitung Total pada array genap/evenArray
let totalEvenArray = 0;
for (i = 0; i < evenArray.length; i++) {
  totalEvenArray += evenArray[i];
}

// Menghitung Rata-rata pada array ganjil/oddArray
// let averageOddValue = oddArray[i] / 100; 

// console.log(totalEvenArray);
// console.log(totalOddArray);
// console.log(oddArray.length);
// console.log(evenArray.length);