import Header from "@/app/Components/Header";
import React from "react";
import Footer from "@/app/Components/Footer";
import AuthorInteraction from "./AuthorInteraction";

const page = () => {
  return (
    <div>
      <Header />
      <AuthorInteraction />
      <Footer />
    </div>
  );
};

export default page;
