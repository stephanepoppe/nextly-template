import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { agendaList } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import { ClassNames } from "@emotion/react";
import Agenda from "../components/agenda";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Robo Zwift League </title>
        <meta
          name="description"
          content="Robo Zwift League is a virtual cycling league for cycling clubs around Ghent"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      
      <Agenda imgPos="left" data={agendaList} />
      <div className="bg-cyan-500">
        <Cta />
      </div>
      <Footer />
      {/* <PopupWidget /> */}
    </div>
  );
}

export default Home;