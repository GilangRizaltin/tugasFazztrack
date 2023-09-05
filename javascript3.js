//No 1
//Then Catch
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
};
const onSuccess = (message) => {
    console.log(message);
};
const onError = (reason) => {
    console.log(reason)
};
//cekHariKerja('minggu').then(onSuccess).catch(onError);
// then catch diatas digunakan untuk menghandle error promise yang berlangsung pada saat pemanggilan 
//berupa fungsi callback yang mengekeskusi onSuccess jika resolve dan onError jika reject


//Try Catch
async function doAsync(day) {
    try {
        const result = await cekHariKerja(day);
        onSuccess(result);
    } catch (error) {
        onError(error.message);
    }
};
//doAsync('senin');
// try catch digunakan untuk error handling ketika menunggu hasil await yang bersifat asynchronous karena promise

//No 2

const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['Januari', 'Februari', 'March', 'April',
                    'Mei', 'Juni', 'Juli', 'Agustus', 'September',
                    'Oktober', 'November', 'Desember']
        if (!error) {
            callback(null, month)
        } else {
            callback(new error('Sorry Data not found'),[])
        }
    },4000)
};

const showMonth = (error, months) => {
    if (error) {
        console.error('Error:', error.message);
    } else {
        const monthNames = months.map((month, dex) => {
    //parameter kedua dari map merujuk ke index
            return `${dex + 1}. ${month}`;
        });
        console.log('Months:', monthNames);
    }
};

//memanggil fungsi getMonth dengan callback
//getMonth(showMonth);

//No 3
//Fungsi ini adalah untuk menentukan apakah kode yg didapat
//sesuai hasil undian atau tidak
const gambling = (input,callback) => {
    const jackpot = ['S21TH78UN','S34TH78UN','R2NTRW8UN',
                    'SFAFAD2EF','SDF1H7UDG','SVD1HDGUN',];
    if (typeof input !== 'string' || input.length !== 9) {
        return Promise.reject('Tidak Ditemukan');
      };
    for (let i = 0; i < input.length; i++) {
      setTimeout(() => {
        callback(input[i]);
      }, (i + 1) * 1000);
    };
    return new Promise ((resolve,reject) => {
        setTimeout (() => { 
            if (jackpot.includes(input)) {
            return resolve ('JACKPOT!! Selamat Anda Beruntung')
        } reject ('MAAF... Silakan Coba Lagi')
    },((input.length + 1) * 1) * 1000);
    });
  };
function confirm (character) {
    console.log(`${character} checking...`)
};
const beruntung = (message) => {
    console.log(message);
};
const gagal = (reason) => {
    console.error(reason);
};
//gambling('S21TH78UN',confirm).then(beruntung).catch(gagal);
//gambling('S21TH7SUN',confirm).then(beruntung).catch(gagal);

//Password
const password = (input) => {
    return new Promise((resolve, reject) => {
        const pass = "sq@12Tf45"
        if (input === pass) {
            resolve("Selamat datang"); // Use resolve to indicate success
        } else {
            reject(`Password ${input} salah, Silakan coba lagi`); // Use reject to indicate an error
        }
    });
};

async function kataSandi(input) {
    try {
        const result = await password(input);
        console.log(result);
    } catch (error) {
        console.error(error);
    };
};
//kataSandi("sq@12Tf45");



//No 4
/*fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    if (!response.ok) {
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(`Name: ${user.name}`);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });*/