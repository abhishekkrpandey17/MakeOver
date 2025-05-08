import AllAuthors from "./Components/AllAuthors";
import ChooseByTopic from "./Components/ChooseByTopic";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import TopAuthors from "./Components/TopAuthors";
import Hero from "./Components/Hero";
// import Hero from "./Components/Hero";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>

      <div className="flex bg-[#dbc3eb]">
        <ChooseByTopic />
        <TopAuthors />
      </div>

      <AllAuthors />

      <Footer />
      <SearchBar />

      <main>
        <Hero />
      </main>
    </>
  );
}
