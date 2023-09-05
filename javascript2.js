//No 1. Built-in method javascript exclude sort, reverse, push, map, split, join

//concat(): Method concat()
//digunakan untuk menggabungkan 2 array atau lebih dan mengembalikan array baru
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2); // [1, 2, 3, 4, 5, 6]
//console.log(newArray);

//indexOf(): Metode indexOf() mengembalikan indeks pertama di mana elemen 
//yang diberikan dapat ditemukan dalam array, atau -1 jika tidak ada
const numbers = [10, 20, 30, 40];
const indeks = numbers.indexOf(30); // 2
//console.log(indeks);

//includes(): Metode includes() memeriksa apakah sebuah array 
//mengandung elemen tertentu dan mengembalikan nilai boolean
const number = [5, 10, 15, 20];
const lima = number.includes(5); // true
//console.log(lima);

//find(): Metode find() mengembalikan elemen pertama dalam 
//array yang memenuhi fungsi pengujian yang diberikan.
const Number = [5, 10, 15, 20];
const diatasSepuluh = Number.find(num => num > 10); //angka yg keluar hanya yg pertama
//console.log(diatasSepuluh);

//every(): Metode every() menguji apakah semua elemen dalam array lulus uji 
//tertentu yang diimplementasikan oleh fungsi yang diberikan.
const umur = [18, 21, 16, 25];
const dewasa = umur.every(age => age >= 18); //implementasi kepada seluruh elemen
//console.log(dewasa);

//some(): Metode some() menguji apakah setidaknya satu elemen dalam array 
//lulus uji tertentu yang diimplementasikan oleh fungsi yang diberikan
const age = [18, 21, 16, 25];
const sebagian = age.some(age => age >= 18); // true
//console.log(sebagian);

//filter(): Metode filter() membuat array baru dengan semua elemen yang 
//lulus uji yang diimplementasikan oleh fungsi yang diberikan.
const numbeRs = [1, 2, 3, 4, 5];
const evenNumbers = numbeRs.filter(num => num % 2 === 0); // [2, 4]
//console.log(evenNumbers);

//from(): Metode from() membuat salinan dangkal dari sebagian array 
//ke array baru
const arrayLike = { 0: 'a', 1: 'b', length: 2 };
const newArraY = Array.from(arrayLike); // ['a', 'b']
//console.log(newArraY);

//isArray(): Metode isArray() menentukan apakah 
//nilai yang dilewatkan adalah sebuah array.
const array = [1, 2, 3];
const isArray = Array.isArray(array); // true
//console.log(isArray);

//slice(): Metode slice() mengembalikan salinan dangkal 
//dari sebagian array ke dalam array baru.
const fruits = ['apple', 'banana', 'cherry', 'date'];
const slicedFruits = fruits.slice(1, 3); // ['banana', 'cherry']
//So, when you call fruits.slice(1, 3), it starts at the element at 
///index 1 (which is 'pisang') and goes up to, but does not include, 
//the element at index 3. Therefore, 'kurma' (at index 3) is not 
//included in the slice, and the result is ['pisang', 'ceri']
//console.log(slicedFruits);






//No 2
function callback (name,huruf) {
    if (typeof huruf !== "string") {
    return "Data harus string";
}
    if (name.toLowerCase().includes(huruf.toLowerCase())) {
    return name;
}};
//console.log(callback ("manusia","an"));


function searchName (isiHuruf,totalAmbil,callback) {
    const name = ["Abigail","Alexandra", "Alison","Amanda","Angela",
    "Bella","Carol","Caroline", "Carolyn","Deidre","Diana",
    "Elizabeth","Ella","Faith","Olivia","Penelope"];
    const hasil =[];
    for (let i= 0; i < name.length; i++) {
        const result = callback(name[i], isiHuruf);
        if (result) {
            hasil.push(result);
        }
        if (hasil.length >= totalAmbil) {
            break;
        }
    };
    console.log(hasil);
};

//searchName("an",3,callback);







//No 3
function seleksiNilai (nilaiAwal,nilaiAkhir,dataArray) {
    if (typeof nilaiAwal !== "number") {
    return "Data harus number"};
    if (typeof nilaiAkhir !== "number") {
    return "Data harus number"};
    if (!Array.isArray(dataArray)) {
    return "Data harus Array"};
    if ( nilaiAkhir <= nilaiAwal) {
    return "Nilai akhir harus lebih besar dari nilai awal"
    };
    if (dataArray.length <= 5) {
        return "Array harus memiliki lebih dari 5 elemen";
    };
    const pilih = dataArray.filter((angka) => angka > nilaiAwal && angka < nilaiAkhir);
    if (pilih.length === 0) {
        return "Output tidak ditemukan";
    }
    pilih.sort((a,b) => a - b);
    return pilih;
};
//console.log(seleksiNilai(5,37,[2,20,2,20,20,20]));
