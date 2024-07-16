"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react"; // Menggunakan ikon ChevronDown

const ScrollToBottomButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Tampilkan tombol ketika pengguna telah menggulir cukup jauh ke atas
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };

    // Dengarkan peristiwa scroll
    window.addEventListener("scroll", toggleVisibility);

    // Hapus listener saat komponen tidak lagi digunakan
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Menangani animasi saat melakukan scroll ke bawah
  const scrollToBottom = () => {
    isVisible &&
      window.scrollTo({
        top: document.documentElement.scrollHeight, // Scroll ke bawah paling bawah dari dokumen
        behavior: "smooth", // Mengatur animasi smooth
      });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 rounded-full p-2 outline-none transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToBottom} // Panggil fungsi scrollToBottom saat tombol diklik
    >
      <ChevronDown />{" "}
      {/* Menggunakan ikon ChevronDown untuk tombol scroll ke bawah */}
    </button>
  );
};

export default ScrollToBottomButton;
