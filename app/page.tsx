import { Navbar } from "./../app/landingpage/Navbar"
import { Hero } from "./../app/landingpage/Hero"
import { Features } from "./../app/landingpage/Features"
import { FAQ } from "./landingpage/Faq"

export default function Home() {
  return (

    <div className="font-inter">
      <Navbar />
      <Hero />
      <div className="px-5 mx-auto lg:container lg:px-16">
        <Features />
        <FAQ />
      </div>
    </div>

  );
}
