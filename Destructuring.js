const siswa ={
    nama: "Reihan",
    umur: 17,
    kelas: 7,
    hobi: "catur"
};

// console.log(siswa);
// delete siswa.kelas

// const {nama: namaSiswa, umur: umurSiswa, kelas: kelasSiswa, jurusan="belum di tentukan"} = siswa;

// console.log(namaSiswa);
// console.log(umurSiswa);
// console.log(kelasSiswa);
// console.log(jurusan);


const Warna = ["Merah", "Hijau","Kuning"];

const [ warna1, warna2, warna3] = Warna;

// console.log(warna1)


const merekLaptop = ["Asus", "Lenovo", "Acer", "HP", "Xiaomi"];

const [merek1,merek2,merek3,merek4,merek5] = merekLaptop;

// console.log(merek3)

const siswaBaru =[
  {nama: "Andi",nilai: 80, umur: 16, kelas: 8},
  {nama: "Budi",nilai: 65, umur: 15, kelas: 8},
  {nama: "Citra",nilai: 90, umur: 16, kelas: 7},
  {nama: "Dida",nilai: 70, umur: 17, kelas: 9},
  {nama: "Eko",nilai: 85, umur: 18, kelas: 100},
];

// const namaSaja =siswaBaru.map((namaTok) => namaTok.nama);
// console.log(namaSaja)
// const umurSaja =siswaBaru.map((umurTok) => umurTok.umur);
// console.log(umurSaja)

const daftarNama = siswaBaru.map(({nama, nilai}) => {
    return { nama, nilai }
});
// console.log(daftarNama)

// siswaBaru.forEach(({nama, nilai, umur, kelas}) => {
//     console.log(nama, nilai, umur, kelas)
// });



const daftarHargaa = [
    {nama: "Asus", harga: 14000000, kondisi: "baru"},
    {nama: "Lenovo", harga: 16000000, kondisi: "bekas"},
    {nama: "MSI", harga: 22000000, kondisi: "baru"},
];

const hargaLaptop = daftarHargaa.map(({nama, harga}) => {
    return { nama, harga }
});
console.log(hargaLaptop)