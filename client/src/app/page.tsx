import ChooseByTopic from "./Components/ChooseByTopic";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import TopAuthors from "./Components/TopAuthors";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>

      <div className="flex bg-[#dbc3eb]">
        <ChooseByTopic/>
        <TopAuthors/>
      </div>

      <Footer/>
      <SearchBar/>
      
    </>
  );
}
