export type Book = {
  id: string;
  title: string;
  author: string;
  category: string;
  format: string;
  pages: string;
  year: string;
  size: string;
  rating: number;
  ratingScale: number;
  description: string;
  downloadUrl: string;
};

export const BOOKS: Book[] = [
  {
    id: "history-of-education",
    title: "History Of Education",
    author: "Levi Seeley",
    category: "Pendidikan",
    format: "PDF",
    pages: "125 halaman",
    year: "2025",
    size: "112 MB",
    rating: 4.5,
    ratingScale: 5.5,
    description:
      "Buku ini membahas sejarah pendidikan global dengan pendekatan naratif dan analitis sehingga pembaca dapat memahami evolusi sistem pendidikan, tokoh penting, dan pengaruh budaya dalam perkembangan metode belajar mengajar.",
    downloadUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    id: "digital-mindset",
    title: "Digital Mindset",
    author: "Paul Leonardi",
    category: "Bisnis",
    format: "EPUB",
    pages: "214 halaman",
    year: "2023",
    size: "85 MB",
    rating: 4.2,
    ratingScale: 5,
    description:
      "Panduan praktis untuk membangun pola pikir digital di tempat kerja modern dengan studi kasus organisasi global.",
    downloadUrl: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: "senja-dimuara",
    title: "Senja di Muara",
    author: "Alya Pradana",
    category: "Fiksi",
    format: "PDF",
    pages: "198 halaman",
    year: "2022",
    size: "96 MB",
    rating: 4.7,
    ratingScale: 5,
    description:
      "Novel drama keluarga yang mengangkat tema rekonsiliasi dan pencarian jati diri di tengah konflik antar generasi.",
    downloadUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    id: "habit-reset",
    title: "Habit Reset",
    author: "Satria Wijaya",
    category: "Self-improvement",
    format: "Audio",
    pages: "186 halaman",
    year: "2024",
    size: "140 MB",
    rating: 4.3,
    ratingScale: 5,
    description:
      "Langkah-langkah membentuk kebiasaan baru dalam 30 hari lengkap dengan lembar kerja dan refleksi harian.",
    downloadUrl: "https://file-examples.com/storage/fe7a66c1d4b232625b01937/2017/04/file_example_MP3_700KB.mp3",
  },
  {
    id: "galaksi-paralela",
    title: "Galaksi Paralela",
    author: "Nadia Khairun",
    category: "Fantasi",
    format: "PDF",
    pages: "276 halaman",
    year: "2021",
    size: "150 MB",
    rating: 4.8,
    ratingScale: 5,
    description:
      "Petualangan remaja perempuan yang menemukan portal ke dunia paralel dan harus memilih antara dua realitas.",
    downloadUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    id: "veritas-chronicles",
    title: "Veritas Chronicles",
    author: "Rafi Irawan",
    category: "Fiksi",
    format: "PDF",
    pages: "312 halaman",
    year: "2024",
    size: "118 MB",
    rating: 4.4,
    ratingScale: 5,
    description:
      "Kumpulan cerita pendek bertema misteri dan filosofi yang saling terhubung di kota fiksi bernama Veritas.",
    downloadUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    id: "data-ethics",
    title: "Data Ethics",
    author: "Maya Carson",
    category: "Bisnis",
    format: "EPUB",
    pages: "240 halaman",
    year: "2025",
    size: "102 MB",
    rating: 4.1,
    ratingScale: 5,
    description:
      "Membahas tanggung jawab profesional saat mengelola data pengguna dan menyuguhkan kerangka etika praktis.",
    downloadUrl: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: "sebuah-nama-pulang",
    title: "Sebuah Nama Pulang",
    author: "Hanum Siregar",
    category: "Fiksi",
    format: "PDF",
    pages: "256 halaman",
    year: "2023",
    size: "110 MB",
    rating: 4.6,
    ratingScale: 5,
    description:
      "Novel perjalanan seorang jurnalis yang kembali ke kampung halaman dan menemukan rahasia keluarga lama.",
    downloadUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    id: "ai-for-creatives",
    title: "AI for Creatives",
    author: "Lucas Meyer",
    category: "Pendidikan",
    format: "EPUB",
    pages: "210 halaman",
    year: "2024",
    size: "95 MB",
    rating: 4.0,
    ratingScale: 5,
    description:
      "Panduan menggunakan kecerdasan buatan untuk membantu proses kreatif, mulai dari penulisan hingga desain.",
    downloadUrl: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: "stellar-garden",
    title: "Stellar Garden",
    author: "Nayla Aster",
    category: "Fantasi",
    format: "PDF",
    pages: "298 halaman",
    year: "2022",
    size: "142 MB",
    rating: 4.9,
    ratingScale: 5,
    description:
      "Kisah epik tentang penjaga taman bintang yang harus menyatukan lima artefak kosmik untuk menyelamatkan galaksi.",
    downloadUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    id: "mindful-coder",
    title: "Mindful Coder",
    author: "Dimas Ario",
    category: "Self-improvement",
    format: "Audio",
    pages: "176 halaman",
    year: "2025",
    size: "130 MB",
    rating: 4.3,
    ratingScale: 5,
    description:
      "Strategi menjaga kesehatan mental bagi pekerja teknologi melalui mindfulness, journaling, dan olahraga ringan.",
    downloadUrl: "https://file-examples.com/storage/fe7a66c1d4b232625b01937/2017/04/file_example_MP3_700KB.mp3",
  },
  {
    id: "cerita-anak-samudra",
    title: "Cerita Anak Samudra",
    author: "Putri Maheswari",
    category: "Pendidikan",
    format: "PDF",
    pages: "132 halaman",
    year: "2022",
    size: "75 MB",
    rating: 4.5,
    ratingScale: 5,
    description:
      "Buku edukasi anak tentang konservasi laut yang disajikan dengan ilustrasi cerah dan aktivitas interaktif.",
    downloadUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
];

