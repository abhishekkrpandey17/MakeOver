import React from "react";
import AuthorCMS from "../Components/AuthorCMS";
import Footer from "../Components/Footer";
import AuthorCMSHeader from "../Components/AuthorCMSHeader";
const page = () => {
  return (
    <div>
      <AuthorCMSHeader />
      <AuthorCMS />
      <Footer />
    </div>
  );
};

export default page;
