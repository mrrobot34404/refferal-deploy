"use client"

import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <>
    <Navbar />
    <Featured />
    <Footer />
    </>
  );
}
