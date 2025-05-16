import ChooseByTopicTopAuthors from "./Components/ChooseByTopicTopAuthors";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LatestArticles from "./Components/LatestArticles";
import Hero from "./Components/Hero";
import Posts from "./Components/Posts";
import Sidebar from "./Components/Sidebar";
import JoinCommunityBanner from "./Components/JoinCommunityBanner";
import Trending from "./Components/Trending";

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

      <main className="w-[100vw] mx-auto px-8 py-6 pt-20 bg-[#dbc3eb]">
        <div className="lg:flex lg:gap-6">
          <div className="lg:w-2/3">
            <Trending />
            <Posts />
          </div>
          <Sidebar />
        </div>
      </main>
      <div className="bg-lavender pt-8 pb-8 w-screen flex justify-center items-center ">
        <JoinCommunityBanner />
      </div>

      <Footer />
    </>
  );
}
