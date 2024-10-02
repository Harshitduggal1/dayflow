import { Suspense } from "react";
import {Navbar} from "./components/landingPage/Navbar";
import {Hero} from "./components/landingPage/Hero";
import {LogoTicker} from "./components/landingPage/Logos";
import CardHoverEffect from "./components/landingPage/Cards";
import {Features} from "./components/landingPage/Features";
import FeaturesGrid from "./components/landingPage/Cards/cardsfeatures";
import GridTabs from "./components/landingPage/girdtabs";
import {Testimonial} from "./components/landingPage/Testimonial";
import Services from "./components/landingPage/Services";
import Offerings from "./components/landingPage/offerings";
import Pricing from "./components/landingPage/pricings";
import FAQS from "./components/landingPage/Faqs";
import {Testimonials} from "./components/landingPage/Reviews";
import Tools from "./components/landingPage/Tools";
import Banner from "./components/landingPage/Banner";
import Footer from "./components/landingPage/Footer";
import { auth } from "./lib/auth";
import { redirect } from "next/navigation";
import Testimonialsss from "./components/landingPage/Testimonys";
import  Stats from "./components/landingPage/Stats"
import AnimatedBeams from "./components/landingPage/Animated";
import { AuthButton} from "./components/landingPage/AuthButton";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return redirect("/dashboard");
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <AuthButton/>
      <Hero />
      <Stats />
      <LogoTicker/>
      <AnimatedBeams/>
      <CardHoverEffect />
      <Features />
      <FeaturesGrid />
      <GridTabs />
      <Suspense fallback={<div>Loading...</div>}>
      <Testimonial   />
        <Services />
        <Testimonials />
        <Offerings />
        <Pricing />
        <Testimonialsss/>
        <FAQS />
        <Tools />
        <Banner />
      </Suspense>
      <Footer />
    </div>
  );
}
