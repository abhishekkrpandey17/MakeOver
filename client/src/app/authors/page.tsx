import React from "react";
import Header from "../Components/Header";
import AuthorLogin from "./AuthorLogin";
import Footer from "../Components/Footer";

const page = () => {
  return (
    <div>
      <Header />
      <AuthorLogin />
      <Footer />
    </div>
  );
};

export default page;
