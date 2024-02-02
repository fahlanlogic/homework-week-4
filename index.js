// Buatlah 100 nilai random (1 sampai 50) pada 1 array
const myArray = [];
for (i = 0; i < 100; i++) {
  myArray.push(Math.floor(Math.random() * 51));
}

// Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil
const evenArray = [];
const oddArray = [];

// Pastikan masing-masing bilangan length-nya 50
while (evenArray.length < 50) {
	let randomValue = Math.floor(Math.random() * 51);
	if (randomValue % 2 === 0) {
		evenArray.push(randomValue);
	}
}

while (oddArray.length < 50) {
	let randomValue = Math.floor(Math.random() * 51);
	if (randomValue % 2 !== 0) {
		oddArray.push(randomValue);
	}
}

// Mencari bilangan Min & Max pada array genap/evenArray
let minEvenArray = evenArray[0];
let maxEvenArray = evenArray[0];
for (i = 0; i < evenArray.length; i++) {
	if (evenArray[i] < minEvenArray) {
		minEvenArray = evenArray[i];
	} else if (evenArray[i] > maxEvenArray) {
		maxEvenArray = evenArray[i];
	}
}

// Mencari bilangan Min & Max pada array ganjil/oddArray
let minOddArray = oddArray[0];
let maxOddArray = oddArray[0];
for (let i = 0; i < oddArray.length; i++) {
	if (oddArray[i] < minOddArray) {
		minOddArray = oddArray[i];
	} else if (oddArray[i] > maxOddArray) {
		maxOddArray = oddArray[i];
	}
}

// Menghitung Total pada array genap/evenArray
let totalEvenArray = 0;
for (i = 0; i < evenArray.length; i++) {
	totalEvenArray += evenArray[i];
}

// Menghitung Total pada array ganjil/oddArray
let totalOddArray = 0;
for (i = 0; i < oddArray.length; i++) {
	totalOddArray += oddArray[i];
}

// Menghitung Rata-rata pada array ganjil/oddArray
let averageEvenValue = Math.floor(totalEvenArray / evenArray.length);

// Menghitung Rata-rata pada array ganjil/oddArray
let averageOddValue = Math.floor(totalOddArray / oddArray.length);