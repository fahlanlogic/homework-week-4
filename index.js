// Fungsi untuk mendapatkan nilai random antara min dan max
const myArray = [];
function getRandomInt(min, max) {
	for (let i = 0; i < 100; i++)
		myArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
}
getRandomInt(1, 50);
// console.log(myArray);

// Pecahlah menjadi 2 array berdasarkan nilainya, yakni array bernilai genap dan ganjil
const evenArray = [];
const oddArray = [];

// Fungsi untuk mencari array genap dan ganjil
function splitRandomInt(length) {
	// ----------------> (batas panjang array random)
	for (let i = 0; i < length; i++) {
		if (i % 2 === 0) {
			evenArray.push(myArray[i]);
			// ---------> (myArray[index_genap])
		} else {
			oddArray.push(myArray[i]);
			// ---------> (myArray[index_ganjil])
		}
	}
}
splitRandomInt(myArray.length);
console.log(evenArray);
// console.log(evenArray.length);
console.log(oddArray);
// console.log(oddArray.length);

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

console.log(
	"-----------------------------------------------------------------------------"
);

// Perbandingan ------------------------------------------------------------------------------------------------------

// Perbandingan lebih besar pada nilai minimum
const minCompare =
	min(evenArray) < min(oddArray)
		? `Nilai minimum lebih kecil genap: ${min(evenArray)}`
		: `Nilai minimum lebih kecil ganjil: ${min(oddArray)}`;
console.log(minCompare);

// Perbandingan lebih besar pada nilai maximum
const maxCompare =
	max(evenArray) > max(oddArray)
		? `Nilai maximum lebih besar genap: ${max(evenArray)}`
		: `Nilai maximum lebih besar ganjil: ${max(oddArray)}`;
console.log(maxCompare);

// // Perbandingan nilai total
const totalCompare = () => {
	if (total(evenArray) > total(oddArray)) {
		return `Nilai total lebih besar genap: ${total(evenArray)}`;
	} else if (total(oddArray) > total(evenArray)) {
		return `Nilai total lebih besar ganjil: ${total(oddArray)}`;
	} else {
		return `Nilai total sama besar`;
	}
};
console.log(totalCompare());

// // Perbandingan nilai rata-rata
const avrCompare = () => {
	if (average(evenArray) > average(oddArray)) {
		return `Nilai rata-rata lebih besar genap: ${average(evenArray)}`;
	} else if (average(oddArray) > average(evenArray)) {
		return `Nilai rata-rata lebih besar ganjil: ${average(oddArray)}`;
	} else {
		return `Nilai rata-rata sama besar`;
	}
};
console.log(avrCompare());
