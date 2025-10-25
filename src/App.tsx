import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoGrid from "./components/InfoGrid";
import ProductShowcase from "./components/ProductShowcase";
import CapabilitiesGrid from "./components/CapabilitiesGrid";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Integrations from "./components/Integrations";
import Developers from "./components/Developers";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <GradientBG />
      <Navbar />
      <main className="space-y-16 md:space-y-24 lg:space-y-32">
        <Hero />
        <InfoGrid />
        <ProductShowcase />
        <CapabilitiesGrid />
        <Steps />
        {/* <Pricing /> */}
        <Integrations />
        <Developers />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function GradientBG() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute left-1/2 top-[-6rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary-300/30 blur-3xl"></div>
      <div className="absolute right-[-10rem] top-[40rem] h-[24rem] w-[24rem] rounded-full bg-indigo-300/30 blur-3xl"></div>
      <div className="absolute left-[-10rem] top-[80rem] h-[22rem] w-[22rem] rounded-full bg-cyan-300/30 blur-3xl"></div>
    </div>
  );
}