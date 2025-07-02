// import { useState } from "react";
import type { Route } from "./+types/simulator";

import { useState, type FormEventHandler, useEffect } from "react";
import type {
  JumlahSanggah,
  BuildingLayoutFieldsType,
  BuildingLayoutDataType,
} from "~/types/buildingLayout.types";
import Swal from "sweetalert2";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Asta Kosala Kosali - Simulator" }];
}

export default function Simulator() {
  const [sanggah, setJumlahSanggah] =
    useState<JumlahSanggah>("satu");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [alengkat, setAlengkat] = useState(0);
  const [atebah, setAtebah] = useState(0);
  const [panjang, setPanjang] = useState(0);
  const [lebar, setLebar] = useState(0);
  const [landArea, setLandArea] = useState<number | null>(0);
  // const [form, setForm] = useState({
  //   sanggah: "",
  //   alengkat: "",
  //   atebah: "",
  //   panjang: "",
  //   lebar: "",
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  const calculateArea = () => {
    if (
      !isNaN(panjang) &&
      !isNaN(lebar) &&
      panjang > 0 &&
      lebar > 0
    ) {
      setLandArea(parseFloat((panjang * lebar).toFixed(2)));
    } else {
      setLandArea(null);
    }
  };

  useEffect(() => {
    calculateArea();
  }, [panjang, lebar]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (["satu", "dua", "tiga", "empat", "lima"].includes(sanggah) && 
      ((panjang < 6 && lebar < 7) ||
      (panjang < 7 && lebar < 6)) ||
      (panjang === lebar)) {
      Swal.fire({
        icon: "warning",
        title: "Ukuran Lahan Tidak Sesuai!",
        text: "Luas tanah minimal 7 meter x 6 meter dan tidak diperbolehkan memiliki panjang dan lebar yang sama.",
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
    // proses selesai
    setLoading(false);
    }, 2000);

    const fields: BuildingLayoutFieldsType = {
      sanggah,
      alengkat,
      atebah,
      panjang,
      lebar,
    };

    // const fields: BuildingLayoutFieldsType = {
    //   sanggah: form.sanggah as JumlahSanggah,
    //   alengkat: parseFloat(form.alengkat),
    //   atebah: parseFloat(form.atebah),
    //   panjang: parseFloat(form.panjang),
    //   lebar: parseFloat(form.lebar),
    // };

    const response = await fetch(
      "https://https://merajan-simulator-api.vercel.app/buildingLocation",
      {
        method: "POST",
        body: JSON.stringify(fields),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = (await response.json()) as BuildingLayoutDataType;

    if (response.ok) {
      setImage(`data:image/png;base64, ${result.bytesImg}`);

      const newEntry = {
        sanggah,
        alengkat,
        atebah,
        panjang,
        lebar,
        landArea: (panjang * lebar).toFixed(2),
      };

      // const newEntry = {
      //   sanggah: form.sanggah,
      //   alengkat: form.alengkat,
      //   atebah: form.atebah,
      //   panjang: form.panjang,
      //   lebar: form.lebar,
      // };
    }
    setLoading(false);
    };


  return (
    <div className="min-h-screen bg-[#F8F6F3] font-sans">
      {/* HEADER */}
      <header className="bg-[#6C483A] px-12 py-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-4">
          <img src="logo1.png" alt="Logo" className="w-10" />
          <div>
            <h1 className="text-lg font-bold">ASTA KOSALA KOSALI</h1>
            <p className="text-xs tracking-widest">MERAJAN SIMULATOR</p>
          </div>
        </div>
        <nav className="flex gap-6 text-[#F2EDE5] font-medium">
          <a href="/">Home</a>
          <a href="/#tentang">Tentang</a>
          <a href="/#faq">FAQ</a>
        </nav>
      </header>

      {/* FORM */}
      <main className="py-12 px-4">
        <div className="max-w-3xl mx-auto bg-[#F8F6F3] p-8 rounded-lg shadow-none">
          <div className="text-center mb-8">
            <img src="logo1.png" alt="Logo Merajan" className="w-28 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#313130] mb-1">ASTA KOSALA KOSALI</h2>
            <p className="text-sm tracking-widest text-[#313130]">MERAJAN SIMULATOR</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <label htmlFor="sanggah" className="md:w-1/3 text-[#313130] font-medium text-left">
                Jumlah Sanggah
              </label>
              <select
                name="sanggah"
                id="sanggah"
                // value={form.sanggah}
                // onChange={handleChange}
                onChange={(e) =>
                  setJumlahSanggah(e.target.value as JumlahSanggah)
                }
                className="w-full md:w-2/3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#F5C17C]"
              >
                <option value="satu">1</option>
                <option value="dua">2</option>
                <option value="tiga">3</option>
                <option value="empat">4</option>
                <option value="lima">5</option>
              </select>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <label htmlFor="alengkat" className="md:w-1/3 text-[#313130] font-medium text-left">
                Panjang Ujung Telunjuk Sampai Ujung Ibu Jari (cm)
              </label>
              <input
                type="number"
                name="alengkat"
                id="alengkat"
                // value={form.alengkat}
                // onChange={handleChange}
                onChange={(e) => setAlengkat(parseFloat(e.target.value))}
                className="w-full md:w-2/3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#F5C17C]"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <label htmlFor="atebah" className="md:w-1/3 text-[#313130] font-medium text-left">
                Lebar Telapak Tangan (cm)
              </label>
              <input
                type="number"
                name="atebah"
                id="atebah"
                // value={form.atebah}
                // onChange={handleChange}
                onChange={(e) => setAtebah(parseFloat(e.target.value))}
                className="w-full md:w-2/3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#F5C17C]"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <label htmlFor="panjang" className="md:w-1/3 text-[#313130] font-medium text-left">
                Panjang Lahan Merajan (m)
              </label>
              <input
                type="number"
                name="panjang"
                id="panjang"
                // value={form.panjang}
                // onChange={handleChange}
                onChange={(e) => setPanjang(parseFloat(e.target.value))}
                className="w-full md:w-2/3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#F5C17C]"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <label htmlFor="lebar" className="md:w-1/3 text-[#313130] font-medium text-left">
                Lebar Lahan Merajan (m)
              </label>
              <input
                type="number"
                name="lebar"
                id="lebar"
                // value={form.lebar}
                // onChange={handleChange}
                onChange={(e) => setLebar(parseFloat(e.target.value))}
                className="w-full md:w-2/3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#F5C17C]"
              />
            </div>

            {landArea !== null && (
              <p className="text-lg font-semibold text-[#313130]">
                Luas Lahan: {landArea} m²
              </p>
            )}

            <div className="text-center pt-4">
              <button
                type="submit"
                className={`w-full inline-flex items-center justify-center bg-[#F5C17C] text-[#313130] font-bold px-6 py-3 rounded-md transition hover:bg-[#e3af61] ${
                  loading && "bg-[#e3af61] cursor-not-allowed"
                }`}
                disabled={loading}
              >
                <svg
                  className={`w-5 h-5 mr-3 -ml-1 text-[#313130] animate-spin ${
                    !loading && "hidden"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {loading ? "Memproses..." : "MULAI"}
              </button>
              
              <div className="bg-white">
                {image && (
                <img
                  className="col-span-2 mt-4"
                  src={image}
                  alt="Tata Letak Bangunan Bali"
                />
              )}
              </div>
              

            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
