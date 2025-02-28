import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./main/Header.jsx";
import PretitleWthRupor from "./main/pretitleWthRupor.jsx";
import LinksPlatforms from "./main/linksPlatforms.jsx";
import ServicesInfo from "./main/servicesInfo.jsx";
import ServicesCards from "./main/servicesCards.jsx";
import GetProposal from "./main/getProposal.jsx";
import TitleCaseStudies from "./main/titleCaseStudies.jsx";
import CasesStudies from "./main/casesStudies.jsx";
import TitleOurWorking from "./main/titleOurWorking.jsx";
import Modal from "./main/modal.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <PretitleWthRupor />
    <LinksPlatforms />
    <ServicesInfo />
    <ServicesCards />
    <GetProposal />
    <TitleCaseStudies />
    <CasesStudies />
    <TitleOurWorking />
    <Modal />
  </StrictMode>
);
