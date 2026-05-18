import Footer from "../Cx/Footer";
import Nav from "../Cx/Nav";
import TechnologyHero from "../Cx/TechnologyHero";
import TechnologyRow from "../Cx/TechnologyRow";

export default function TechnologyPage() {
  return (
    <main className="relative bg-black">
      <Nav />
      <TechnologyHero />
      <TechnologyRow
        screenSrc="/everlaw-screen.png"
        screenWidth={1000}
        screenHeight={750}
        logoSrc="/everlaw.png"
        logoWidth={500}
        logoHeight={107}
        logoAlt="Everlaw"
        description="Everlaw's advanced technology empowers organizations to navigate the increasingly complex ediscovery landscape, tackle the most pressing technological challenges, and chart a straighter path to the truth—transforming their approach to discovery and litigation in the process."
      />
      <TechnologyRow
        reverse
        cardClassName="bg-white/21"
        arrowLinkClassName="text-[#004972] hover:text-[#2484C6]"
        screenSrc="/relativity-screen.png"
        screenWidth={1000}
        screenHeight={750}
        logoSrc="/relativity.png"
        logoWidth={1998}
        logoHeight={545}
        logoAlt="RelativityOne"
        description="RelativityOne's state-of-the-art AI technology allows organizations to increase their productivity by pulling data straight from the source without leaving the cloud. Their automated systems and proactive data protection integrations streamline the entire process, thus reducing time, cost and risk with one end-to-end tool."
      />
      <TechnologyRow
        screenSrc="/ediscovery-screen.png"
        screenWidth={1000}
        screenHeight={750}
        logoSrc="/ediscovery.png"
        logoWidth={500}
        logoHeight={107}
        logoAlt="eDiscovery AI"
        description="eDiscovery AI is at the forefront of legal technology, providing AI-powered solutions to streamline and optimize the document review process. eDiscovery AI's mission is to empower legal teams with advanced AI technology that maximizes efficiency, enhances accuracy and improves cost effectiveness. eDiscovery AI's suites of solutions – Early Case Intelligence, Review, Privacy, and Multimedia – deliver industry leading features, speed and accuracy."
      />
      <Footer/>
    </main>
  );
}
