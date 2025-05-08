import ChooseByTopicTopAuthors from "./Components/ChooseByTopicTopAuthors";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LatestArticles from "./Components/LatestArticles";
import Hero from "./Components/Hero";
import JoinCommunityBanner from "./Components/JoinCommunityBanner";

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
      <div className="bg-lavender pt-8 pb-8 w-screen flex justify-center items-center ">
        <JoinCommunityBanner />
      </div>

      <Footer />
    </>
  );
}
