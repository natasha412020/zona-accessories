import Image from "next/image";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Knowledge from "./Pages/Knowledge";
import Keunggulan from "./Pages/Keunggulan";
import HydrogelTypes from "./Pages/HydrogelTypes";
import Backskin from "./Pages/Backskin";
import WhyZona from "./Pages/WhyZona";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

export default function Pages() {
  return (
    <main>
      <Navbar />
      <Home />
      <Knowledge />
      <Keunggulan />
      <HydrogelTypes />
      <Backskin />
      <WhyZona />
      <Contact />
      <Footer />
    </main>
  );
}
