// Fungsi untuk mendapatkan nilai random antara min dan max
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Pecahlah menjadi 2 array berdasarkan nilainya, yakni array bernilai genap dan ganjil
const evenArray = [];
const oddArray = [];

// Fungsi untuk mencari array genap dan ganjil
function splitRandomInt(length) {
	// ----------------> (batas panjang array random)
	for (let i = 0; i < length; i++) {
		if (i % 2 === 0) {
			evenArray.push(getRandomInt(1, 25) * 2);
			// -----------------------> min, max x 2 (pasti genap)
		} else {
			oddArray.push(getRandomInt(1, 25) * 2 - 1);
			// ----------------------> min, max x 2 - 1 (pasti ganjil)
		}
	}
}
splitRandomInt(100);
console.log(evenArray);
console.log(oddArray);

// Fungsi untuk mencari nilai minimum pada array
function min(array) {
	// -----> (array yg mau dicari nilai minimumnya)
	let minimum = array[0];
	for (let i = 0; i < array.length; i++) {
		if (array[i] < minimum) {
			minimum = array[i];
		}
	}
	return minimum;
}
console.log(min(evenArray));
console.log(min(oddArray));

// Fungsi untuk mencari nilai maksimum pada array
function max(array) {
	// -----> (array yg mau dicari nilai maksimumnya)
	let maksimum = array[0];
	for (let i = 0; i < array.length; i++) {
		if (array[i] > maksimum) {
			maksimum = array[i];
		}
	}
	return maksimum;
}
console.log(max(evenArray));
console.log(max(oddArray));

// Fungsi menghitung Total pada array
function total(array) {
	// -------> (array yg mau dihitung totalnya)
	let totalArray = 0;
	for (i = 0; i < array.length; i++) {
		totalArray += array[i];
	}
	return totalArray;
}
console.log(total(evenArray));
console.log(total(oddArray));

// Fungsi menghitung Rata-rata pada array
function average(array) {
	// ---------> (array yg mau dicari rata-ratanya)
	let averageEvenValue = Math.floor(total(array) / array.length);
	return averageEvenValue;
}
console.log(average(evenArray));
console.log(average(oddArray));

// Perbandingan ------------------------------------------------------------------------------------------------------

/*
// Perbandingan nilai minimum
const minCompare =
	minEvenArray < minOddArray
		? `Genap: ${minEvenArray}`
		: `Ganjil: ${minOddArray}`;

// Perbandingan nilai maximum
const maxCompare =
	maxEvenArray > maxOddArray
		? `Genap: ${maxEvenArray}`
		: `Ganjil: ${maxOddArray}`;

// Perbandingan nilai total
const totalCompare =
	totalEvenArray > totalOddArray
		? `Genap: ${totalEvenArray}`
		: `Ganji: ${totalOddArray}`;

// Perbandingan nilai rata-rata
const avrCompare =
	averageEvenValue > averageOddValue
		? `Genap: ${averageEvenValue}`
		: `Ganjil: ${averageOddValue}`;
*/
