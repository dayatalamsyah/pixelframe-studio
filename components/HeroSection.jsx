export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center p-10">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          PixelFrame Studio
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Solusi Kreatif untuk Branding dan Desain Digital Anda
        </p>
        <a
          href="#contact"
          className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          Konsultasi Gratis
        </a>
      </div>
    </section>
  );
}
