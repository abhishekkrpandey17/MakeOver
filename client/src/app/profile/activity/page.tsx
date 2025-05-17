import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import React from "react";
import UserInteraction from "./UserInteraction";

const page = () => {
  return (
    <div>
      <Header />
      <UserInteraction />
      <Footer />
    </div>
  );
};

export default page;
