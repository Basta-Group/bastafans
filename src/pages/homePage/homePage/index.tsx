/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import HeroSection from "../../../components/homePage/HeroSection";
import DigitalEmpireSection from "../../../components/homePage/DigitalEmpireSection";
import DivisionsSection from "../../../components/homePage/DivisionsSection";
import InfrastructureSection from "../../../components/homePage/InfrastructureSection";
import JoinMovementSection from "../../../components/homePage/JoinMovementSection";
import NewsSection from "../../../components/homePage/NewsSection";
import ContactSection from "../../../components/homePage/ContactSection";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <HeroSection />
      <DigitalEmpireSection />
      <DivisionsSection />
      <InfrastructureSection />
      <NewsSection />
      <JoinMovementSection />
      <ContactSection />
    </div>
  );
};

export default Home;
