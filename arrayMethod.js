// const nilai = [80, 75, 90, 85, 70, 65, 95, 100, 55, 30];
// nilai.forEach((angka) => {
// //     console.log(angka +5);
// });

// nilai.forEach((angka) => {
// if (angka>=75) {
//      console.log(angka+5 + " - Lulus");
// }else{
//      console.log(angka+5 + " - Tidak Lulus");
// }
// });


// const siswa1 = {
//     nama: "Andi",
//     alamat: "Jl. Mawar 16, Badui",
//     umur: 16,
//     kelas: "X SIJA",
// };

// const siswa =[
//     {nama: "Andi",  alamat: "solo", umur: 15, kelas: "X SIJA"},
//     {nama: "Sandi",  alamat: "Mojokerto", umur: 17, kelas: "X SIJA"},
//     {nama: "Joko",  alamat: "Sukoharjo", umur: 16, kelas: "X SIJA"},
// ];

// const namaSaja =siswa.map((namaTok) => namaTok.nama);
// const umurSaja =siswa.map((umurTok) => umurTok.umur);
// const umurSaja2 =siswa.map((umurTok) => umurTok.umur*2);
// const alamatSaja =siswa.map((alamatTok) => alamatTok.alamat);
// console.log (alamatSaja)
// console.log (namaSaja)
// console.log (umurSaja)
// console.log (umurSaja2)


// const YTMCI = ["Drakia","Kael","Awan","Fresia","Jax","Eiden","Ikkan","Sagara","Narendra","Ian"];
// YTMCI.forEach((nama) => {
//     console.log("hallo",nama);
// });


const nilaiBaru = [80, 65, 90, 70, 85, 95, 60, 75, 33, 42];
const nilaiLulus = nilaiBaru.filter((angka) => {
    return angka >= 75;
});
const nilaiTidLulus = nilaiBaru.filter((angka) => {
    return angka < 75;
});
// console.log(nilaiTidLulus)


const arayAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const angkaGena = arayAngka.filter((angka2) => {
    return angka2 % 2 === 0
});
const angkaGanj = arayAngka.filter((angka2) => {
    return angka2 % 2 !== 0
});
// console.log(angkaGena)
// console.log(angkaGanj)

const warTicket =[
    {nama: "Konser",  jumlah: 300, dipesan: 200},
    {nama: "Seminar",  jumlah: 100, dipesan: 10},
    {nama: "Workshop",  jumlah: 80, dipesan: 80},
];

// let sisaTiket = warTicket.filter((tiket) => tiket.jumlah - tiket.dipesan >= 30);
// let tiketHabis = warTicket.filter((tiket) => tiket.jumlah - tiket.dipesan === 0);
// console.log(sisaTiket);
// console.log(tiketHabis);

// let sisa= warTicket.find((tiket) => 
//     tiket.jumlah - tiket.dipesan !== 0 && tiket.nama != "konser" )
// console.log(sisa)


const siswa = [
  {nama:"Andi", nilai:80},
  {nama:"Budi", nilai:65},
  {nama:"Citra", nilai:90},
  {nama:"Dina", nilai:75},
  {nama:"Eko", nilai:85}
]

siswa.forEach((siswa) => {
  if (siswa.nilai >= 75) {
    console.log(siswa.nama, "-", siswa.nilai, "-", "Lulus");
  } else{
    console.log(siswa.nama, "-", siswa.nilai, "-", "Remedial");
  }
});