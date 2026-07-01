import { useState } from "react";
import useLenis from "./hooks/useLenis";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import WhySleepMatters from "./components/sections/WhySleepMatters";
import SleepCycles from "./components/sections/SleepCycles";
import SleepDisorders from "./components/sections/SleepDisorders";
import WarningSigns from "./components/sections/WarningSigns";
import QualityOfLife from "./components/sections/QualityOfLife";
import ChronotypeIntro from "./components/sections/ChronotypeIntro";
import ChronotypeTypes from "./components/sections/ChronotypeTypes";
import Biorhythm from "./components/sections/Biorhythm";
import FourPillars from "./components/sections/FourPillars";
import BeyondBedroom from "./components/sections/BeyondBedroom";
import SleepFacts from "./components/sections/SleepFacts";
import Guidance from "./components/sections/Guidance";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/sections/Footer";
import ConsultModal from "./components/ui/ConsultModal";

export default function App() {
  useLenis();
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white font-sans text-[#1F2937]">
      <Header onConsult={() => setConsultOpen(true)} />
      <main>
        <Hero onConsult={() => setConsultOpen(true)} />
        <WhySleepMatters />
        <SleepCycles />
        <SleepDisorders />
        <WarningSigns onConsult={() => setConsultOpen(true)} />
        <QualityOfLife />
        <ChronotypeIntro onConsult={() => setConsultOpen(true)} />
        <ChronotypeTypes />
        <Biorhythm />
        <FourPillars />
        <BeyondBedroom />
        <SleepFacts />
        <Guidance onConsult={() => setConsultOpen(true)} />
        <FAQ />
      </main>
      <Footer onConsult={() => setConsultOpen(true)} />
      <ConsultModal open={consultOpen} onClose={() => setConsultOpen(false)} />
    </div>
  );
}
