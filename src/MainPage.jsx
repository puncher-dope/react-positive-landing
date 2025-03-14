
import Header from "./main/Header/Header.jsx";
import PretitleWthRupor from "./main/PreTitleWthRupor/pretitleWthRupor.jsx";
import LinksPlatforms from "./main/LinksPlatforms/linksPlatforms.jsx";
import ServicesInfo from "./main/ServicesInfo/servicesInfo.jsx";
import ServicesCards from "./main/ServicesCards/servicesCards.jsx";
import GetProposal from "./main/GetProposal/getProposal.jsx";
import TitleCaseStudies from "./main/TitleCaseStudies/titleCaseStudies.jsx";
import CasesStudies from "./main/CasesStudies/casesStudies.jsx";
import TitleOurWorking from "./main/TitleOurWorking/titleOurWorking.jsx";
import Modal from "./main/Modal/modal.jsx";
import TeamTitle from "./main/TeamTitle/TeamTitle.jsx";
import OurTeam from "./main/OurTeam/OurTeam.jsx";
import Testimonials from "./main/Testimonials/Testiamonials.jsx";
import ContainerMessage from "./main/ContainerMessage/ContainerMessage.jsx";
import ContactUs from "./main/ContactUs/ContatUs.jsx";
import Footer from "./main/Footer/Footer.jsx";

export default function MainPage() {
  return (<>
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
    <TeamTitle />
    <OurTeam />
    <Testimonials />
    <ContainerMessage />
    <ContactUs />
    <Footer />
  </>)
}