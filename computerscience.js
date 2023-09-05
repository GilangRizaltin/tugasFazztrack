//No.1
function palindrom (input) {
    let huruf = input.toLowerCase();
    let tampung = "";
    for (let i = huruf.length - 1 ; i >= 0 ; i--) {
        tampung += huruf[i];
    };
    if (huruf === tampung) {
        return "Palindrome";
    } else {
        return "Bukan Palindrome"};
};
//console.log(palindrom("ASASA"));

//No 2
function reverseWords(input) {
    let reversedString = '';
    let word = '';
    let wordStarted = false;
  
    for (let i = input.length - 1; i >= 0; i--) {
      if (input[i] !== ' ') {
        // jika character bukan spasi, masukkan ke variabel word
        word = input[i] + word;
        wordStarted = true;
      } else if (wordStarted) {
        //Jika kita menemukan spasi dan sebuah kata dimulai, 
        //itu adalah akhir dari sebuah kata
        reversedString += word + ' ';
        word = '';
        wordStarted = false;
      }
    };
    // Tambahkan kata terakhir (jika ada) tanpa spasi tambahan
    if (wordStarted) {
      reversedString += word;
    }
    return reversedString;
  }
  
const string= " SAYA BELAJAR JAVASCRIPT";
const reversedOutput = reverseWords(string);
//console.log(reversedOutput);


//No 3

function fazzFood (harga, voucher, jarak, pajak) {
    let biayaAntar;
    const vo1 = "DITRAKTIR60";
    const vo2 = "FAZZFOOD50";
    let price = harga;
    let biayaPajak = 0;
    if (jarak <= 2) {
        biayaAntar = 5000;
    } else {
        biayaAntar = (((jarak - 2) * 3000)+ 5000);
    };
    if (voucher === vo1) {
        if (harga >= 25000) {
            price *= 0.6;
            if (price > 30000) {
                price -= 30000;
            }
        }
    } else if (voucher === vo2) {
        if (harga >= 50000) {
            price *= 0.5;
            if (price > 50000) {
                price -= 50000;
            }
        }
    };
    if (pajak === true) {
     biayaPajak = harga * 0.05
    };
    const output = `Harga = ${harga}
    Potongan = ${harga - price}
    Biaya Antar = ${biayaAntar}
    Pajak = ${biayaPajak}
    Subtotal = ${price + biayaAntar + biayaPajak}`;
    console.log(output);
};

//fazzFood(75000,"FAZZFOOD50",5,true);

//No 4

/*function divideAndSort(number) {
    const numberString = number.toString();
    const tampung = numberString.split('0');
    const sortedGroups = tampung.map(angka => {
      return angka.split('').sort().join('');
    });
    const result = sortedGroups.join('');
    return console.log(result);
  };
divideAndSort(59565601594666056);*/

function divideAndSort(number) {
  // angka diubah ke string agar bsa melakukan looping
  const numberString = number.toString();
  // string akan dipisah ke beberapa bagian dengan pemisah 0
  const parts = []; //array kosong
  let currentPart = '';
  for (let i = 0; i < numberString.length; i++) {
    if (numberString[i] === '0') {
      // Jika '0' ditemukan, tambahkan part saat ini ke variabel parts array
      parts.push(currentPart);
      currentPart = ''; // Reset the current part
    } else {
      // tambahkan string angka ke current part
      currentPart += numberString[i];
    }
  }

  // ambil part terakhir setelah 0 terakhir ke currentPart
  parts.push(currentPart);

  // setiap part disortir dan di concat kembali
  const sortedString = parts
    .map(part => [...part].sort((a, b) => a - b).join(''))
    .join('');

  // ubah string menjadi number
  const result = parseInt(sortedString);

  return result;
}

const inputNumber = 59565601594666056;
const output = divideAndSort(inputNumber);
//console.log(output);