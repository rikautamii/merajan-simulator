export default function Home() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-12 py-4 bg-[#6C483A]">
        <div className="flex items-center gap-4">
          <img src="logo1.png" alt="Logo" className="w-12" />
          <div className="text-white leading-tight">
            <h1 className="text-lg font-bold">ASTA KOSALA KOSALI</h1>
            <p className="text-sm tracking-widest">MERAJAN SIMULATOR</p>
          </div>
        </div>
        <nav className="flex gap-8 text-[#F2EDE5] font-medium">
          {/* <a href="#">Home</a> */}
          <a href="#tentang">Tentang</a>
          <a href="#faq">FAQ</a>
          <a href="/simulator">Simulator</a>
        </nav>
      </header>

      {/* Hero / About */}
      <main className="px-12 py-12 text-[#313130]">
        <section id="tentang" className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <div className="flex flex-col items-center justify-center text-center md:w-1/2 space-y-4">
            <img src="logo1.png" alt="Logo Merajan" className="w-32 mx-auto md:mx-0 mb-4" />
            <h2 className="text-3xl font-bold mb-2">ASTA KOSALA KOSALI</h2>
            <p className="text-sm mb-6 tracking-widest">MERAJAN SIMULATOR</p>
            <a
              href="/simulator"
              className="inline-block px-6 py-3 bg-[#F5C17C] hover:bg-[#e6af63] text-[#313130] font-bold rounded-lg transition"
            >
              COBA SEKARANG!
            </a>
          </div>

          <div className="md:w-1/2 text-[#313130] text-justify">
            <h3 className="text-xl font-bold mb-2 text-center md:text-left">TENTANG</h3>
            <p className="text-base leading-relaxed">
              "Merajan Simulator adalah aplikasi berbasis web yang dirancang untuk membantu masyarakat Bali dalam merancang tata letak sanggah atau merajan sesuai dengan prinsip Asta Kosala Kosali. Dengan menggabungkan kearifan lokal dan teknologi, simulator ini memungkinkan pengguna untuk menentukan posisi pelinggih secara digital berdasarkan arah hadap, ukuran tapak, dan jenis sanggah yang diinginkan. Tujuan dari aplikasi ini adalah untuk mempermudah pemahaman dan pelestarian tata ruang suci keluarga Bali, sekaligus memberikan visualisasi yang akurat dan sesuai kaidah tradisional."
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-8">
          <h2 className="text-2xl font-bold text-center mb-6">FREQUENTLY ASKED QUESTION</h2>
          <div className="space-y-4">

            <details className="bg-[#F5C17C] text-[#313130] px-6 py-4 rounded-md cursor-pointer">
              <summary className="font-semibold flex justify-between items-center">
                Apa itu Merajan Simulator?
                <span className="text-xl">▾</span>
              </summary>
              <p className="mt-2 text-sm text-[#5A5A5A]">
                Merajan Simulator adalah aplikasi berbasis web yang membantu pengguna merancang tata letak sanggah (merajan)
                sesuai dengan prinsip tradisional Asta Kosala Kosali. Simulator ini memberikan visualisasi penempatan pelinggih
                berdasarkan ukuran lahan dan ukuran tubuh pemilik lahan.
              </p>
            </details>

            <details className="bg-[#F5C17C] text-[#313130] px-6 py-4 rounded-md cursor-pointer">
              <summary className="font-semibold flex justify-between items-center">
                Apakah saya harus memahami Asta Kosala Kosali sebelum menggunakan simulator ini?
                <span className="text-xl">▾</span>
              </summary>
              <p className="mt-2 text-sm text-[#5A5A5A]">
                Tidak. Sistem sudah mengatur aturan adat secara otomatis, sehingga dapat digunakan oleh siapa saja.
              </p>
            </details>

            <details className="bg-[#F5C17C] text-[#313130] px-6 py-4 rounded-md cursor-pointer">
              <summary className="font-semibold flex justify-between items-center">
                Apakah hasilnya sesuai dengan adat Bali?
                <span className="text-xl">▾</span>
              </summary>
              <p className="mt-2 text-sm text-[#5A5A5A]">
                Ya, simulator mengikuti prinsip Asta Kosala Kosali dan masukan tokoh adat. Namun, hasil ini berlaku untuk rumah
                pertama dan rumah permanen yang akan ditempati. Untuk pembangunan nyata, tetap disarankan konsultasi dengan
                pemangku atau undagi.
              </p>
            </details>

            <details className="bg-[#F5C17C] text-[#313130] px-6 py-4 rounded-md cursor-pointer">
              <summary className="font-semibold flex justify-between items-center">
                Apakah saya bisa menyimpan atau mencetak hasil tata letak sanggah?
                <span className="text-xl">▾</span>
              </summary>
              <p className="mt-2 text-sm text-[#5A5A5A]">
                Saat ini fitur penyimpanan dan cetak belum tersedia, namun sedang dalam tahap pengembangan. Untuk sementara, pengguna dapat melakukan tangkapan layar (screenshot) hasil tata letak untuk disimpan secara manual.
              </p>
            </details>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-12 py-6 bg-[#F2EDE5] flex justify-between items-center">
        <p className="text-[#5A5A5A] text-sm">&copy; 2025 ASTA KOSALA KOSALI</p>
        {/* <a
          href="/simulator"
          className="px-5 py-2 bg-[#6C483A] text-white rounded-md font-medium hover:bg-[#573b2f] transition"
        >
          COBA SEKARANG!
        </a> */}
      </footer>
    </div>
  );
}
