import FAQ from "@/components/FAQ";
import FeaturedOffer from "@/components/FeaturedOffer";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Shell from "@/components/Shell";
import Testimonials from "@/components/Testimonials";
import WhoWeAre from "@/components/WhoWeAre";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-white pt-[27px] text-[#020043] ">
      <Navbar />
      <Hero />
      <Shell>
      <div className="flex flex-col gap-[80px] md:gap-[120px] lg:gap-[160px]">
      <WhoWeAre />
      <Services />
      <Testimonials />
      <FAQ />
      </div>
      </Shell>
      <FeaturedOffer />
      <Footer />
    </div>
  );
}
