"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminCMS from "../Components/AdminCMS";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";

const AdminPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_APP_API_TEST_URL}api/v1/admin/isAdmin`,
          { withCredentials: true }
        );
        if (!res.data?.success) {
          router.push("/admin");
        }
      } catch {
        router.push("/admin");
      } finally {
        setLoading(false);
      }
    };
    verifyAdmin();
  }, [router]);

  if (loading) return <p className="text-center mt-10">Checking access...</p>;

  return (
    <div>
      <Header />
      <div>
        <AdminCMS />
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
