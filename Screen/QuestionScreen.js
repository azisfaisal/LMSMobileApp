import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { CardQuestion } from "../Components/CardQuestion";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import "moment/locale/id";
import { CardWarning } from "../Components/CardWarning";
moment.locale("id");

export const QuestionScreen = () => {
  const navigation = useNavigation();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [isSimulationComplete, setIsSimulationComplete] = useState(false);
  const [modalWarning, setModalWarning] = useState(false);

  // const questionData = [
  //   {
  //     question: "Apa warna langit?",
  //     answer: ["Merah", "Hijau", "Biru"],
  //     correct: 2,
  //   },
  //   {
  //     question: "Apa warna gunung?",
  //     answer: ["Merah", "Hijau", "Biru"],
  //     correct: 1,
  //   },
  //   {
  //     question: "Apa warna daun?",
  //     answer: ["Merah", "Hijau", "Biru"],
  //     correct: 1,
  //   },
  //   // Add more questions here
  // ];
  const dataSoal = {
    judulSoal: "Soal Latihan Gambar Teknik",
    questionData: [
      {
        question:
          "Pada proyeksi ortogonal, proyeksi sudut pertama atau kuadran I dikenal dengan proyeksi..",
        image: "",
        answer: [
          "Proyeksi Jepang",
          "Proyeksi Jerman",
          "Proyeksi Amerika",
          "Proyeksi Eropa",
          "Semua jawaban salah",
        ],
        correct: 3,
      },
      {
        question:
          "Pada proyeksi ortogonal, proyeksi sudut ketiga atau kuadran III dikenal dengan proyeksi...",
        image: "",
        answer: [
          "Proyeksi Jepang",
          "Proyeksi Jerman",
          "Proyeksi Amerika",
          "Proyeksi Eropa",
          "Semua jawaban salah",
        ],
        correct: 2,
      },
      {
        question: "Simbol proyeksi sudut pertama adalah...",
        image: "",
        answer: [
          require("../assets/images/3a.png"),
          require("../assets/images/3b.png"),
          require("../assets/images/3c.png"),
          require("../assets/images/3d.png"),
          require("../assets/images/3e.png"),
        ],
        correct: 3,
      },
      {
        question: "Simbol proyeksi sudut ketiga adalah...",
        image: "",
        answer: [
          require("../assets/images/4a.png"),
          require("../assets/images/4b.png"),
          require("../assets/images/4c.png"),
          require("../assets/images/4d.png"),
          require("../assets/images/4e.png"),
        ],
        correct: 3,
      },
      {
        question:
          "Berdasarkan gambar dibawah ini, cara proyeksi sudut pertama yang benar adalah...",
        image: require("../assets/images/5_6.png"),
        answer: [
          require("../assets/images/5a.png"),
          require("../assets/images/5b.png"),
          require("../assets/images/5c.png"),
          require("../assets/images/5d.png"),
          require("../assets/images/5e.png"),
        ],
        correct: 2,
      },
      {
        question:
          "Berdasarkan gambar dibawah ini, cara proyeksi sudut ketiga yang benar adalah...",
        image: require("../assets/images/5_6.png"),
        answer: [
          require("../assets/images/6a.png"),
          require("../assets/images/6b.png"),
          require("../assets/images/6c.png"),
          require("../assets/images/6d.png"),
          require("../assets/images/6e.png"),
        ],
        correct: 0,
      },
      {
        question:
          "Pandangan depan pada gambar di bawah ini sesuai tanda panah, maka pandangan depan menurut proyeksi Amerika adalah... ",
        image: require("../assets/images/7.png"),
        answer: [
          require("../assets/images/7a.png"),
          require("../assets/images/7b.png"),
          require("../assets/images/7c.png"),
          require("../assets/images/7d.png"),
          require("../assets/images/7e.png"),
        ],
        correct: 4,
      },
      {
        question:
          "Dari pandangan depan, dan atas proyeksi Amerika di bawah ini, maka gambar bendanya (3D) adalah....",
        image: require("../assets/images/8.png"),
        answer: [
          require("../assets/images/8a.png"),
          require("../assets/images/8b.png"),
          require("../assets/images/8c.png"),
          require("../assets/images/8d.png"),
          require("../assets/images/8e.png"),
        ],
        correct: 2,
      },
      {
        question:
          "Pandangan atas menurut proyeksi Amerika, jika arah pandangan depan seperti gambar di bawah ini, adalah...",
        image: require("../assets/images/9.png"),
        answer: [
          require("../assets/images/9a.png"),
          require("../assets/images/9b.png"),
          require("../assets/images/9c.png"),
          require("../assets/images/9d.png"),
          require("../assets/images/9e.png"),
        ],
        correct: 2,
      },
      {
        question:
          "Pandangan samping Kanan menurut proyeksi Amerika, jika arah pandangan depan seperti gambar di bawah ini, adalah...",
        image: require("../assets/images/10.png"),
        answer: [
          require("../assets/images/10a.png"),
          require("../assets/images/10b.png"),
          require("../assets/images/10c.png"),
          require("../assets/images/10d.png"),
          require("../assets/images/10e.png"),
        ],
        correct: 3,
      },
      {
        question:
          "Pandangan samping kanan dari gambar 2D (Proyeksi Eropa) di bawah ini adalah...",
        image: require("../assets/images/11.png"),
        answer: [
          require("../assets/images/11a.png"),
          require("../assets/images/11b.png"),
          require("../assets/images/11c.png"),
          require("../assets/images/11d.png"),
          require("../assets/images/11e.png"),
        ],
        correct: 4,
      },
      {
        question:
          "Pandangan atas dari gambar 2D (Proyeksi Eropa) di bawah ini adalah...",
        image: require("../assets/images/12.png"),
        answer: [
          require("../assets/images/12a.png"),
          require("../assets/images/12b.png"),
          require("../assets/images/12c.png"),
          require("../assets/images/12d.png"),
          require("../assets/images/12e.png"),
        ],
        correct: 2,
      },
      {
        question:
          "Gambar proyeksi 3D yang benar dari gambar pandangan depan dan samping kanan (Proyeksi Eropa) pada soal No. 12 adalah....",
        image: require("../assets/images/13.png"),
        answer: [
          require("../assets/images/13a.png"),
          require("../assets/images/13b.png"),
          require("../assets/images/13c.png"),
          require("../assets/images/13d.png"),
          require("../assets/images/13e.png"),
        ],
        correct: 2,
      },
      {
        question:
          "Pandangan samping kanan dari Gambar 3D (Proyeksi Eropa) di bawah ini adalah...",
        image: require("../assets/images/14.png"),
        answer: [
          require("../assets/images/14a.png"),
          require("../assets/images/14b.png"),
          require("../assets/images/14c.png"),
          require("../assets/images/14d.png"),
          require("../assets/images/14e.png"),
        ],
        correct: 3,
      },
      {
        question:
          "Pandang atas dari Gambar 3D (Proyeksi Eropa) di bawah ini adalah...",
        image: require("../assets/images/14.png"),
        answer: [
          require("../assets/images/15a.png"),
          require("../assets/images/15b.png"),
          require("../assets/images/15c.png"),
          require("../assets/images/15d.png"),
          require("../assets/images/15e.png"),
        ],
        correct: 2,
      },
      {
        question:
          "16.Pandangan depan dari Gambar 3D (Proyeksi Eropa) di bawah ini adalah...",
        image: require("../assets/images/14.png"),
        answer: [
          require("../assets/images/16a.png"),
          require("../assets/images/16b.png"),
          require("../assets/images/16c.png"),
          require("../assets/images/16d.png"),
          require("../assets/images/16e.png"),
        ],
        correct: 4,
      },
      {
        question: "Pandangan depan dari gambar 3D di bawah ini adalah...",
        image: require("../assets/images/17.png"),
        answer: [
          require("../assets/images/17a.png"),
          require("../assets/images/17b.png"),
          require("../assets/images/17c.png"),
          require("../assets/images/17d.png"),
          require("../assets/images/17e.png"),
        ],
        correct: 0,
      },
      {
        question:
          "Pandangan samping kanan dari gambar 3D (Proyeksi Eropa) di bawah ini adalah...",
        image: require("../assets/images/17.png"),
        answer: [
          require("../assets/images/18a.png"),
          require("../assets/images/18b.png"),
          require("../assets/images/18c.png"),
          require("../assets/images/18d.png"),
          require("../assets/images/18e.png"),
        ],
        correct: 0,
      },
      {
        question:
          "Pandangan atas dari gambar 3D (Proyeksi Eropa) di bawah ini adalah...",
        image: require("../assets/images/17.png"),
        answer: [
          require("../assets/images/19a.png"),
          require("../assets/images/19b.png"),
          require("../assets/images/19c.png"),
          require("../assets/images/19d.png"),
          require("../assets/images/19e.png"),
        ],
        correct: 3,
      },
      {
        question: "Pandangan depan dari gambar 3D di bawah ini adalah....",
        image: require("../assets/images/20.png"),
        answer: [
          require("../assets/images/20a.png"),
          require("../assets/images/20b.png"),
          require("../assets/images/20c.png"),
          require("../assets/images/20d.png"),
          require("../assets/images/20e.png"),
        ],
        correct: 1,
      },

      {
        question:
          "21.Pandangan atas dari gambar 3D (Proyeksi Amerika) di bawah ini adalah...",
        image: require("../assets/images/20.png"),
        answer: [
          require("../assets/images/21a.png"),
          require("../assets/images/21b.png"),
          require("../assets/images/21c.png"),
          require("../assets/images/21d.png"),
          require("../assets/images/21e.png"),
        ],
        correct: 2,
      },
      {
        question:
          "Pandangan samping kanan dari gambar 3D(Proyeksi Amerika) di bawah ini adalah..",
        image: require("../assets/images/20.png"),
        answer: [
          require("../assets/images/22a.png"),
          require("../assets/images/22b.png"),
          require("../assets/images/22c.png"),
          require("../assets/images/22d.png"),
          require("../assets/images/22e.png"),
        ],
        correct: 3,
      },
      {
        question: "Pandangan depan dari gambar 3D di bawah ini adalah...",
        image: require("../assets/images/23.png"),
        answer: [
          require("../assets/images/23a.png"),
          require("../assets/images/23b.png"),
          require("../assets/images/23c.png"),
          require("../assets/images/23d.png"),
          require("../assets/images/23e.png"),
        ],
        correct: 2,
      },
      {
        question:
          "Pandangan samping kanan dari gambar 3D (Proyeksi Amerika) di bawah ini adalah",
        image: require("../assets/images/23.png"),
        answer: [
          require("../assets/images/24a.png"),
          require("../assets/images/24b.png"),
          require("../assets/images/24c.png"),
          require("../assets/images/24d.png"),
          require("../assets/images/24e.png"),
        ],
        correct: 0,
      },
      {
        question:
          "Pandangan atas dari gambar 3D (Proyeksi Amerika) di bawah ini adalah...",
        image: require("../assets/images/23.png"),
        answer: [
          require("../assets/images/25a.png"),
          require("../assets/images/25b.png"),
          require("../assets/images/25c.png"),
          require("../assets/images/25d.png"),
          require("../assets/images/25e.png"),
        ],
        correct: 1,
      },
      {
        question:
          "Pandangan depan dan samping kanan menurut proyeksi Amerika adalah seperti di samping ini, gambar bendanya (gambar 3D) adalah...",
        image: require("../assets/images/26.png"),
        answer: [
          require("../assets/images/26a.png"),
          require("../assets/images/26b.png"),
          require("../assets/images/26c.png"),
          require("../assets/images/26d.png"),
          require("../assets/images/26e.png"),
        ],
        correct: 1,
      },
      {
        question: "Pandangan depan untuk benda 3D di bawah ini adalah...",
        image: require("../assets/images/27.png"),
        answer: [
          require("../assets/images/27a.png"),
          require("../assets/images/27b.png"),
          require("../assets/images/27c.png"),
          require("../assets/images/27d.png"),
          require("../assets/images/27e.png"),
        ],
        correct: 2,
      },
      {
        question:
          "Pandangan samping kanan dari gambar 3D (Proyeksi Amerika) di bawah ini adalah...",
        image: require("../assets/images/27.png"),
        answer: [
          require("../assets/images/28a.png"),
          require("../assets/images/28b.png"),
          require("../assets/images/28c.png"),
          require("../assets/images/28d.png"),
          require("../assets/images/28e.png"),
        ],
        correct: 1,
      },
      {
        question:
          "Pandangan atas dari gambar 3D (proyeksi Amerika) di bawah ini adalah...",
        image: require("../assets/images/27.png"),
        answer: [
          require("../assets/images/29a.png"),
          require("../assets/images/29b.png"),
          require("../assets/images/29c.png"),
          require("../assets/images/29d.png"),
          require("../assets/images/29e.png"),
        ],
        correct: 1,
      },
      {
        question: "Pandangan depan dari gambar 3D di bawah ini adalah....",
        image: require("../assets/images/30.png"),
        answer: [
          require("../assets/images/30a.png"),
          require("../assets/images/30b.png"),
          require("../assets/images/30c.png"),
          require("../assets/images/30d.png"),
          require("../assets/images/30e.png"),
        ],
        correct: 1,
      },
      {
        question:
          "Pandangan atas dari gambar 3D(proyeksi Amerika) di bawah ini adalah...",
        image: require("../assets/images/30.png"),
        answer: [
          require("../assets/images/31a.png"),
          require("../assets/images/31b.png"),
          require("../assets/images/31c.png"),
          require("../assets/images/31d.png"),
          require("../assets/images/31e.png"),
        ],
        correct: 1,
      },
      {
        question:
          "Pandangan samping kanan dari gambar 3D (proyeksi Amerika) di bawah ini adalah...",
        image: require("../assets/images/30.png"),
        answer: [
          require("../assets/images/32a.png"),
          require("../assets/images/32b.png"),
          require("../assets/images/32c.png"),
          require("../assets/images/32d.png"),
          require("../assets/images/32e.png"),
        ],
        correct: 1,
      },
      {
        question:
          "Dari pandangan depan, atas dan samping kanan proyeksi Amerika di bawah ini, maka gambar bendanya (3D) adalah...",
        image: require("../assets/images/33.png"),
        answer: [
          require("../assets/images/33a.png"),
          require("../assets/images/33b.png"),
          require("../assets/images/33c.png"),
          require("../assets/images/33d.png"),
          require("../assets/images/33e.png"),
        ],
        correct: 3,
      },
      {
        question:
          "Dari pandangan depan, atas dan samping kanan proyeksi Amerika di bawah ini, maka gambar bendanya (3D) adalah...",
        image: require("../assets/images/34.png"),
        answer: [
          require("../assets/images/34a.png"),
          require("../assets/images/34b.png"),
          require("../assets/images/34c.png"),
          require("../assets/images/34d.png"),
          require("../assets/images/34e.png"),
        ],
        correct: 2,
      },
      {
        question:
          "Dari pandangan depan, atas dan samping kanan proyeksi Amerika di bawah ini, maka gambar bendanya (3D) adalah...",
        image: require("../assets/images/35.png"),
        answer: [
          require("../assets/images/35a.png"),
          require("../assets/images/35b.png"),
          require("../assets/images/35c.png"),
          require("../assets/images/35d.png"),
          require("../assets/images/35e.png"),
        ],
        correct: 1,
      },
      {
        question:
          "Cara memproyeksikan gambar dalam bentuk 2D dengan menggunakan proyeksi...",
        image: "",
        answer: [
          "Proyeksi Isometri",
          "Proyeeksi Dimetri",
          "Proyeksi Miring",
          "Proyeksi Orthogonal",
          "Proyeksi ISO",
        ],
        correct: 3,
      },
      {
        question:
          "Proyeksi yang menempatkan pandangan depan pada kuadran 1 adalah...",
        image: "",
        answer: [
          "Proyeksi Amerika",
          "Proyeksi Eropa",
          "Proyeksi ISO",
          "Proyeksi Aksonometri",
          "Proyeksi Depan",
        ],
        correct: 1,
      },
      {
        question: "Pandangan utama pada proyeksi Eropa yaitu...",
        image: "",
        answer: [
          "Pandangan depan, samping kiri dan atas",
          "Pandangan depan, samping kanan, dan atas",
          "Pandangan depan, samping kanan dan bawah",
          "Pandangan belakang, samping kiri, dan atas",
          "Pandangan belakang, samping kiri dan atas",
        ],
        correct: 1,
      },
      {
        question:
          "Hal yang terpenting dari gambar pandangan yaitu harus dapat...",
        image: "",
        answer: [
          "Dipahami",
          "Dibaca",
          "Digambar",
          "Memberikan informasi yang jelas",
          "Memberikan pemikiran yang tepat",
        ],
        correct: 3,
      },
      {
        question: "Jenis gambar pandang di bawah ini menggunakan proyeksi...",
        image: require("../assets/images/37.png"),
        answer: [
          "Proyeksi Eropa",
          "Proyeksi Amerika",
          "Proyeksi Orthogonal",
          "Proyeksi Aksonometri",
          "oyeksi Presektif",
        ],
        correct: 1,
      },
      {
        question: "Keuntungan dari Proyeksi Amerika adalah sebagai berikut",
        image: "",
        answer: [
          "Bentuk benda langsung dibayangkan",
          "Pandangan depan sebagai patokan",
          "Gambar mudah dibaca",
          "Pandangan yang berhubungan diletakan berdekatan",
          "Semua jawaban benar",
        ],
        correct: 4,
      },
      {
        question:
          "Gambar Teknik yang digunakan oleh orang Indonesia adalah dengan menggunakan Proyeksi...",
        image: "",
        answer: [
          "Proyeksi Indonesia",
          "Proyeksi Internasional",
          "Proyeksi SNI",
          "Proyeksi Amerika",
          "Proyeksi Eropa",
        ],
        correct: 3,
      },
      {
        question: "Ada berapa banyak pandangan pada proyeksi orthogonal",
        image: "",
        answer: ["6", "2", "3", "5", "7"],
        correct: 0,
      },
      {
        question:
          "Bagaimana cara menentukan pandangan depan dari sebuah gambar 3D ?",
        image: "",
        answer: [
          "Dengan melihat objek yang Digambar",
          "Melihat banyak informasi yang disajikan",
          "Menggambar yang mudah",
          "Bebas memilih pandangan",
          "Menentukan kuadran gambar",
        ],
        correct: 1,
      },
      {
        question:
          "Bila terdapat suatu titik A dan B ditarik suatu garis dari A menuju B. kemudian digambar dengan proyeksi ortogonal. Maka, proyeksi ortogonal yang dimaksud adalah proyeksi ortogonal sebuah ...",
        image: "",
        answer: ["Titik", "Garis", "Bidang", "Benda", "Pandangan"],
        correct: 1,
      },
      {
        question:
          "Untuk menunjukan Panjang dan lebar benda digunakan pandangan...",
        image: "",
        answer: [
          "Pandangan atas",
          "Pandangan depan",
          "Pandangan samping kiri",
          "Pandangan samping kanan",
          "Pandangan belakang",
        ],
        correct: 1,
      },
      {
        question:
          "Yang bukan merupakan karakteristik dar pandangan depan/pusat adalah...",
        image: "",
        answer: [
          "Menunjukan syarat dan karakteristik terbanyak",
          "Memiliki pandangan maya paling sedikit",
          "Menunjukan panjang benda",
          "Menunjukan tinggi benda",
          "Menunjukan lebar benda",
        ],
        correct: 1,
      },
      {
        question:
          "Gambar di bawah ini merupakan simbol dari penggunaan proyeksi...",
        image: require("../assets/images/38.png"),
        answer: ["Eropa", "Amerika", "Ortogonal", "Isometri", "Asia"],
        correct: 0,
      },
      {
        question: "Gambar diatas merupakan pandangan pada proyeksi...",
        image: require("../assets/images/39.png"),
        answer: [
          "Proyeksi Eropa",
          "Proyeksi Belanda",
          "Proyeksi Amerika",
          "Proyeksi Jepang",
          "Proyeksi Indonesia",
        ],
        correct: 0,
      },
      {
        question: "Gambar di bawah ini merupakan pandangan pada proyeksi...",
        image: require("../assets/images/40.png"),
        answer: [
          "Proyeksi Eropa",
          "Proyeksi Belanda",
          "Proyeksi Amerika",
          "Proyeksi Jepang",
          "Proyeksi Indonesia",
        ],
        correct: 2,
      },
      {
        question:
          "Pada gambar di bawah manakah yang merupakan pandangan depan menurut proyeksi Eropa adalah",
        image: require("../assets/images/41.png"),
        answer: [
          require("../assets/images/41a.png"),
          require("../assets/images/41b.png"),
          require("../assets/images/41c.png"),
          require("../assets/images/41d.png"),
          require("../assets/images/41e.png"),
        ],
        correct: 2,
      },
      {
        question: "Tampak depan dari gambar tersebut adalah...",
        image: require("../assets/images/42.png"),
        answer: [
          require("../assets/images/42a.png"),
          require("../assets/images/42b.png"),
          require("../assets/images/42c.png"),
          require("../assets/images/42d.png"),
          require("../assets/images/42e.png"),
        ],
        correct: 2,
      },
      {
        question:
          "Dari gambar dibawah, pandangan samping kanan dari gambar ini adalah nomor ...",
        image: require("../assets/images/43.png"),
        answer: ["1", "2", "3", "4", "5"],
        correct: 1,
      },
      {
        question:
          "Dari gambar dibawah, pandangan depan dari gambar ini adalah nomor ...",
        image: require("../assets/images/44.png"),
        answer: ["1", "2", "3", "4", "5"],
        correct: 2,
      },
      {
        question:
          "Dari gambar dibawah, pandangan bawah dari gambar ini adalah nomor ...",
        image: require("../assets/images/43.png"),
        answer: ["1", "2", "3", "4", "5"],
        correct: 0,
      },
      {
        question: "Dalam bidang Teknik, gambar dapat diartikan sebagai",
        image: "",
        answer: ["Karya", "Kuasa", "Ilustrasi", "Imajinasi", "Bahasa Teknik"],
        correct: 4,
      },
      {
        question: "Fungsi Gambar Teknik sebagai bahan informasi teknik adalah",
        image: "",
        answer: [
          "Gambar informasi Teknik sebagai informasi pembuatan roti tart",
          "Dalam pembuatan suatu produk informasi untuk pembuatan tersebut seperti ukuran, bahan dan langkah pengerjaan yang akan dikerjakan oleh seorang operator",
          "Dalam membuat patung dilakukan dengan pedoman gambar teknik",
          "Informasi arah angin di informasikan dengan gambar Teknik",
          "Informasi tentang gempa dan cuaca",
        ],
        correct: 1,
      },
      {
        question: "Pernyataan yang bukan pengertian gambar teknik adalah",
        image: "",
        answer: [
          "Bahasa yang digunakan antara perencana dan pelaksana",
          "Seni yang mengutamakan keindahan untuk mendapatkan estetika suatu objek.",
          "Kombinasi antara seni dan gambar sains yang dapat memberikan solusi bagi masalah keteknikan.",
          "Bahasa universal yang digunakan seluruh dunia dan dapat menyatakan suatu bentuk lebih jelas daripada kata.",
          "Bahasa gambar yang digunakan untuk keperluan dunia Teknik industry oleh perancang untuk mempercepat, menyimpan ide – ide, dan informasi untuk kebutuhan pembangunan mesin dan struktur",
        ],
        correct: 1,
      },
      {
        question: "Pernyataan yang tepat mengenai fungsi gambar teknik adalah",
        image: "",
        answer: [
          "Menerangkan rangkaian yang akan dirakit",
          "Menyuplai komponen yang pernah dibuat",
          "Menyimpan komponen yang pernah diproduksi",
          "Sebagai media penyampai informasi",
          "Menerangkan biaya pembuatan",
        ],
        correct: 3,
      },
      {
        question:
          "Melalui gambar teknik diwujudkan melalui proses, dianalisa kemudian dilteliti dan di evaluasi samapai membentuk gambar, adalah penjelasan dari",
        image: "",
        answer: [
          "Bahasa teknik ",
          "Informasi Teknik",
          "Gagasan atau pemikiran",
          "Fungsi gambar tekni",
          "Standarisasi",
        ],
        correct: 2,
      },
      {
        question:
          "Seorang pemesan produk mesin datang ke juru gambar dan juru gambar ke operator mesin serta ke perakitan dengan membawa gambar teknik, adalah peengertian dari",
        image: "",
        answer: [
          "Bahasa teknik ",
          "Informasi teknik ",
          "Gagasan atau pemikiran ",
          "Fungsi gambar teknik ",
          "Standarisasi",
        ],
        correct: 1,
      },
      {
        question: "Berikut merupakan peralatan menggambar, kecuali",
        image: "",
        answer: ["Pensil", "Jangka", "Jangka Sorong", "Busur", "Mal Elips"],
        correct: 2,
      },
      {
        question:
          "Untuk membuat lingkaran kecil dapat digunakan alat gambar berupa",
        image: "",
        answer: [
          "Jangka",
          "Mal elips",
          "Mal kurva",
          "Mal lingkaran",
          "Busur derajat",
        ],
        correct: 3,
      },
      {
        question:
          "Untuk membuat lingkaran besar dapat digunakan alat gambar berupa",
        image: "",
        answer: [
          "Jangka",
          "Busur derajat",
          "Mal lingkaran",
          "Mal kurva",
          "Mal elips",
        ],
        correct: 0,
      },
      {
        question:
          "Berikut yang merupakan sudut-sudut penggaris segitiga adalah",
        image: "",
        answer: [
          "90, 70°, dan 30°",
          "90°, 60°, dan 30°",
          "90°, 60°, dan 45°",
          "90°, 45°, dan 45°",
          "90°, 55°, dan 45°",
        ],
        correct: 3,
      },
      {
        question:
          "Urutan tingkat kekerasan pensil dari yang paling keras ke lunak adalah",
        image: "",
        answer: [
          "F, HB, 4H, 5H, dan 2B",
          "HB, F, 5H, 4H, dan B",
          "5H, 7H, 9H, dan 2B",
          "8H, 6H, 4H, F, dan B",
          "8B, 6B, 4B, B, dan H",
        ],
        correct: 3,
      },
      {
        question:
          "Angka pada kode pensil 2H dalam pensil memiliki arti tingkat",
        image: "",
        answer: ["Kelunakan", "Ketebalan", "Kehitaman", "Bold", "Kekerasan"],
        correct: 4,
      },
      {
        question:
          "Alat gambar yang sangat praktis dantepat untuk membuat gambar teknik dengan tinta adalah",
        image: "",
        answer: ["Bulpoin ", "Raphido ", "Spidol ", "Pena Tarik", "Spidol"],
        correct: 1,
      },
      {
        question:
          "Mal huruf dan angka merupakan alat gambar yang digunakan untuk",
        image: "",
        answer: [
          "Membuat tulisan atau menempatkan angka pada gambar kerja",
          "Membuat lingkaran besar pada gambar kerja",
          "Membuat sudut 35° pada kertas gambar",
          "Membuat lingkaran besar pada gambar kerja",
          "Membuat garis lengkung parabola",
        ],
        correct: 0,
      },
      {
        question: "Fungsi alat gambar busur derajat adalah",
        image: "",
        answer: [
          "Membuat lingkaran besar pada gambar kerja",
          "Membuat sudut 35° pada kertas gambar",
          "Membuat lingkaran besar pada gambar kerja",
          "Membuat garis lengkung parabola",
          "Membuat tulisan atau menempatkan angka pada gambar kerja",
        ],
        correct: 1,
      },
      {
        question:
          "Untuk mencapai tujuan dari menggambar teknik yang baik, hasilnya harus memenuhi standarisasi ISO, maka hal yang harus dilakukan",
        image: "",
        answer: [
          "Mengunakan alat-alat gambar sesuai standar ISO",
          "Mengunakan alat-alat gambar biasa",
          "Mematuhi aturan standart ISO",
          "Mewujudkan ide gagasan",
          "Merealisasikan informasi Teknik",
        ],
        correct: 0,
      },
      {
        question: "Standardisasi yang berlaku secara internasional adalah",
        image: "",
        answer: ["ISO", "ANSI", "DIN", "SNI", "JIS"],
        correct: 0,
      },
      {
        question:
          "Standardisasi nasional yang digunakan di negara Indonesia adalah",
        image: "",
        answer: ["JIS", "SNI", "DIN", "ISO", "ANSI"],
        correct: 1,
      },
      {
        question:
          "Standarisasi diperlukan untuk menghindari salah pengertian dalam komunikasi teknik, misalnya JIS dibuat oleh negara",
        image: "",
        answer: ["Jerman", "Belanda", "Jepang", "Indonesia", "Inggris"],
        correct: 2,
      },
      {
        question:
          "Berikut yang bukan merupakan fungsi dari dibuatnya standardisasi internasional adalah",
        image: "",
        answer: [
          "Menyeragamkan dalam komunikasi teknik",
          "Menyatukan pengertian gambar antarnegara",
          "Mengelompokkan mutu di setiap standar negara",
          "Menghindari salah pengertian dalam mengartikan gambar teknik",
          "Memudahkan komunikasi teknis antara pembuat gambar dan pengguna gambar",
        ],
        correct: 3,
      },
      {
        question:
          "Berikut hal-hal yang distandardisasi dalam gambar teknik, kecuali",
        image: "",
        answer: ["Huruf", "Angka", "Nama", "Garis", "Etiket"],
        correct: 2,
      },
      {
        question: "Ukuran kertas A3 adalah",
        image: "",
        answer: [
          "841 x 1189 mm",
          "594 x 841 mm",
          "420 x 594 mm",
          "297 x 420 mm",
          "210 x 297 mm",
        ],
        correct: 3,
      },
      {
        question: "Ukuran kertas A4 adalah",
        image: "",
        answer: [
          "841 x 1189 mm",
          "594 x 841 mm",
          "420 x 594 mm",
          "297 x 420 mm",
          "210 x 297 mm",
        ],
        correct: 4,
      },
      {
        question:
          "Berikut adalah contoh-contoh ukuran kertas dalam penyajian gambar teknik, kecuali",
        image: "",
        answer: ["A9", "A4", "A0", "A3", "A1"],
        correct: 0,
      },
      {
        question: "Etiket adalah",
        image: "",
        answer: [
          "Suatu identitas yang menjelaskan berbagai keterangan pendukung sebagai pelengkap gambar",
          "Aturan-aturan yang telah disepakati bersama",
          "Perbandingan ukuran sebenarnya dengan objek sebenarnya",
          "Teknik pemberian warna atau bayangan dengan cara membuat garis-garis paralel",
          "Huruf dan angka Teknik",
        ],
        correct: 0,
      },
      {
        question: "Etiket dapat disebut juga sebagai",
        image: "",
        answer: [
          "Kolom keterangan nama",
          "Kepala Gambar",
          "Keterangan merek kertas",
          "Tempat ukuran gambar",
          "Kolom gambar",
        ],
        correct: 1,
      },
      {
        question: "Posisi peletakkan etiket gambar pada media gambar adalah",
        image: "",
        answer: [
          "Atas",
          "Pojok Kiri",
          "Belakang",
          "Cover",
          "Pojok Kanan Bawah",
        ],
        correct: 4,
      },
      {
        question:
          "Pada gambar etiket di atas, nomor berapakah yang menunjukkan keterangan judul dan ukuran kertas gambar",
        image: require("../assets/images/46.png"),
        answer: ["1 dan 2", "4 dan 5", "11 dan 10", "10 dan 8", "7 dan 11"],
        correct: 3,
      },
      {
        question:
          "Berikut adalah informasi/konten yang dimuat dalam etiket gambar, kecuali",
        image: "",
        answer: [
          "Nomor gambar",
          "Skala",
          "Nama gambar",
          "Nomor tanda penduduk",
          "Tanggal diperiksanya gambar",
        ],
        correct: 3,
      },
      {
        question:
          "Untuk memudahkan komunikasi antara pembuat gambar dan pengguna gambar merupakan salah satu fungsi gambar teknik sebagai",
        image: "",
        answer: [
          "Menyimpan ide dan gagasan",
          "Bahasa teknik",
          "Pengembangan",
          "Standardisasi internasional",
          "Evaluasi konsep",
        ],
        correct: 1,
      },
      {
        question:
          "Berikut adalah jenis-jenis garis yang ada dalam gambar teknik, kecuali",
        image: "",
        answer: [
          "Garis tebal",
          "Garis semu",
          "Garis tipis",
          "Garis gores",
          "Garis titik-titik",
        ],
        correct: 1,
      },
      {
        question: "Gambar garis (---------------) digunakan untuk menggambar",
        image: "",
        answer: [
          "Garis maya",
          "Garis arsir",
          "Garis benda nyata",
          "Garis sumbu",
          "Garis nyata terhalang",
        ],
        correct: 4,
      },
      {
        question:
          "Penggolongan jenis garis ditentukan oleh bentuk dan ketebalannya. Untuk menggambar garis tepi atau benda nyata adalah",
        image: "",
        answer: [
          "Garis tebal kontinyu",
          "Garis tipis kontinyu (lurus)",
          "Garis strip titik tebal",
          "Garis stip titik ganda tipis",
          "Garis bebas/bergelombang tipis",
        ],
        correct: 0,
      },
      {
        question:
          "Garis strip titik seperti gambar di atas digunakan untuk menggambar",
        image: "",
        answer: [
          "Garis arsir",
          "Garis tepi",
          "Garis bantu",
          "Garis sumbu",
          "Tanda potongan",
        ],
        correct: 3,
      },
      {
        question: "Garis Tipis Kontinu digunakan sebagai",
        image: "",
        answer: [
          "Garis Sumbu",
          "Garis yang tidak kelihatan jelas",
          "Garis yang kelihatan jelas",
          "Garis yang menunjukan potongan",
          "Garis ukur / arsiran",
        ],
        correct: 4,
      },

      // Add more questions here
    ],
  };

  // Fungsi untuk mengacak array
  const shuffleQuestions = (questions, numQuestions = 25) => {
    // Kloning array asli agar tidak mengganggu urutan aslinya
    const shuffled = [...questions];
    // Menggunakan algoritma Fisher-Yates untuk mengacak array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, numQuestions);
  };

  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    // Memanggil fungsi shuffleQuestions untuk mengacak daftar soal
    const shuffled = shuffleQuestions(dataSoal.questionData);
    setShuffledQuestions(shuffled);
  }, []);

  useEffect(() => {
    if (isSimulationComplete) {
      // Alert.alert(
      //   "Simulasi Selesai!",
      //   `Anda telah berhasil menyelsaikan simulasi`,
      //   [
      //     {
      //       text: "OK",
      //       onPress: async () => {
      //         await saveScore();
      //         navigation.navigate("Hasil");
      //       },
      //     },
      //   ],
      //   { cancelable: false }
      // );
      saveScore();
      setModalWarning(true);
    }
  }, [isSimulationComplete, navigation]);

  const resultEvaluasi = async () => {
    // Validasi dan simpan data di sesion storage
    await AsyncStorage.setItem("evaluasi", "100");
  };

  const currentDate = moment().format("DD MMMM YYYY");

  const saveScore = async () => {
    try {
      const storedResult = await AsyncStorage.getItem("result");
      const result = {
        score: score,
        title: dataSoal.judulSoal,
        status: "waiting",
        time: currentDate,
      };
      if (storedResult !== undefined && storedResult !== null) {
        const arrResult = [...JSON.parse(storedResult)];
        arrResult.push(result);
        await AsyncStorage.setItem("result", JSON.stringify(arrResult));
      } else {
        await AsyncStorage.setItem("result", JSON.stringify([result]));
      }
      await AsyncStorage.setItem("score", score.toString());
      await AsyncStorage.setItem("questionTitle", dataSoal.judulSoal);
      await AsyncStorage.setItem("questionTime", currentDate.toString());
    } catch (error) {
      console.error("Error saving score:", error);
    }
  };

  const handleJawabanPress = (indexSoal, item) => {
    const question = shuffledQuestions[questionIndex];
    const isCorrect =
      shuffledQuestions[indexSoal].answer.indexOf(item) ===
      shuffledQuestions[indexSoal].correct;

    setScore((prevScore) => (isCorrect ? prevScore + 1 * 4 : prevScore));

    if (questionIndex < shuffledQuestions.length - 1) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
      setIndex(index + 1);
    } else {
      resultEvaluasi();
      setIsSimulationComplete(true);
    }
  };

  const closeWarning = () => {
    setModalWarning(false);
  };

  return (
    <View>
      {shuffledQuestions.length > 0 &&
        questionIndex < shuffledQuestions.length && (
          <CardQuestion
            index={index}
            question={shuffledQuestions[questionIndex].question}
            image={shuffledQuestions[questionIndex].image}
            answer={shuffledQuestions[questionIndex].answer}
            onPress={handleJawabanPress}
          />
        )}
      <CardWarning
        contain={"Anda telah berhasil menyelsaikan Ujian Evaluasi?"}
        questionDone={"done"}
        containTrue={"Selanjutnya"}
        modalWarning={modalWarning}
        closeWarning={closeWarning}
      />
    </View>
  );
};
