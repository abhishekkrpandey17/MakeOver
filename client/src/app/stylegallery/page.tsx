"use client";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const styles = [
  {
    title: "Pastel Bridal Look",
    img: "/mk1.avif",
  },
  {
    title: "Minimal Dewy Skin",
    img: "/mk2.avif",
  },
  {
    title: "Bold Lip Statement",
    img: "/mk3.avif",
  },
  {
    title: "Smokey Eye Drama",
    img: "/mk4.avif",
  },
  {
    title: "Golden Hour Glam",
    img: "/mk5.avif",
  },
  {
    title: "Rosy Cheeks Glow",
    img: "/mk6.avif",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <section className="bg-[#f3e8ff] py-16 px-6 min-h-screen">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">
          🎨 Style Gallery
        </h2>
        <p className="text-center text-purple-700 max-w-2xl mx-auto mb-10">
          Explore a curated gallery of makeup styles shared by our community.
          From elegant bridal glam to everyday minimal looks, find your next
          inspiration!
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {styles.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 text-center text-purple-800 font-semibold">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
