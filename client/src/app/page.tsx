import ChooseByTopicTopAuthors from "./Components/ChooseByTopicTopAuthors";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LatestArticles from "./Components/LatestArticles";
import Hero from "./Components/Hero";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Hero />
      </main>

      <LatestArticles />

      <ChooseByTopicTopAuthors />

      <Footer />
    </>
  );
}
