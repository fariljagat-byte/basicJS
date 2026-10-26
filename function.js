function belajar(materi) {
    console.log("Belajar " + materi);

}
function salam(nama) {
    console.log("Assalamu'alaikum " + nama)
}

// belajar("HTML");
// belajar("CSS");
// belajar("Javascript");
// salam("lutfi")

// function tambah(a, b, c) {
    // console.log(a+b+c)
// }

// tambah(60, 30, 20);
// tambah(70, 10, 20);
// tambah(80, 20, 50);


function ter(a, b, c) {
    console.log(a*b/c);
} function tera (a, b, c){
    console.log(a/b*c);
} function trew (a, b, c){
    console.log(a**b/c);
}

// ter(60, 30, 2);
// tera(70, 10, 20);
// trew(2, 8, 2);

function hitungTotal(harga, jumlah) {
    // console.log(`Harga Apel perbuah: ${harga}`);
    // console.log(`Jumlah: ${jumlah}`);
    return harga * jumlah
}


// let total = hitungTotal(10000, 3);
// let diskon = 5000;
// let bayar = total - diskon

// console.log ("Diskon =" , diskon);
// console.log ("Harga bayar =" , bayar);


function luasLingkaran(pi, jari) {
    console.log(`phi: ${pi}`);
    console.log(`Jari-Jari: ${jari}`);
    return pi * (jari ** 2)
}




// console.log ("hasil Luas =",luasLingkaran(3.14, 7));


function kelilingLingkaran(pi, jari) {
    console.log(`phi: ${pi}`);
    console.log(`Jari-Jari: ${jari}`);
    return 2 * pi * jari
}




// console.log ("hasil Keliling =",kelilingLingkaran(3.14, 7));


function volumeBalok(p, l, t) {
    console.log(`Panjang: ${p}`);
    console.log(`Lebar: ${l}`);
    console.log(`Tinggi: ${t}`);
    return p*l*t
}

//  console.log ("Volume balok =",volumeBalok(17, 5, 10))

const tambah2 = (a, b) => {
    return a+b;
};


// console.log(tambah2(5, 2));

const volBalok2 = (p, l, t) => {
    console.log(`Panjang: ${p}`);
    console.log(`Lebar: ${l}`);
    console.log(`Tinggi: ${t}`);
    return p*l*t;
};

// console.log("Volume balok =",volBalok2(17, 5, 10))

// const  hitungTotal2 = (harga, jumlah) => {
//      console.log(`Harga Apel perbuah: ${harga}`);
//      console.log(`Jumlah: ${jumlah}`);
//     return harga * jumlah
// }


//  let total = hitungTotal(5000, 4);
//  let diskon = 2000;
//  let bayar = total - diskon

// console.log ("Diskon =" , diskon);
// console.log ("Harga bayar =" , bayar);


// function tampilkanUmur() {
//     let umur = 17;
//     console.log(umur); 
// }
// tampilkanUmur(); 
//  console.log(umur); 




function tampilkanBb() {
    let Bb = 70;
    console.log(Bb);
}

tampilkanBb();

