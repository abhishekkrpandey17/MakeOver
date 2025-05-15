import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AdminLogin from "./AdminLogin";

const page = () => {
  return (
    <div>
      <Header />
      <AdminLogin />
      <Footer />
    </div>
  );
};

export default page;
