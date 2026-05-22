import Nav from "../Cx/Nav";
import ServicesHero from "../Cx/ServicesHero";
import ServiceRow from "../Cx/ServiceRow";
import {
  ForensicsIcon,
  ProcessingIcon,
  DocumentReviewIcon,
  AiDiscoveryIcon,
  StaffingIcon,
  FlexibleTalentIcon,
  TrialServicesIcon,
  CourtroomReportingIcon,
  CyberShieldIcon,
  LegalOpsIcon,
} from "../Cx/ServiceIcons";
import Connect from "../Cx/Connect";
import Footer from "../Cx/Footer";

const services = [
  {
    id: "forensics-collections",
    Icon: ForensicsIcon,
    hexSide: "left",
    title: (
      <>
        Forensics &amp;
        <br />
        Collections
      </>
    ),
    description: `AC Discovery offers industry-leading forensic and collection services to ensure defensible, secure, and efficient handling of Electronically Stored Information (ESI). Our certified forensic specialists leverage advanced technology and proven methodologies to collect, preserve, and analyze data from a wide array of sources, including mobile devices, cloud platforms, and proprietary systems. Whether it's providing expert advisory services, affidavits, or deposition and trial testimony, our team supports litigation, investigations, and regulatory responses with precision and integrity. With a focus on customized workflows and client-specific objectives, we deliver high-quality results that mitigate risk, reduce costs, and stand up to the highest legal and regulatory scrutiny. Our consultants and experts also frequently testify on the integrity of the data during hearings, providing credible validation of our forensic methodologies.`,
  },
  {
    id: "processing-hosting",
    Icon: ProcessingIcon,
    hexSide: "right",
    title: (
      <>
        Processing &amp;
        <br />
        Hosting Solutions
      </>
    ),
    description: `Our secure, reliable, and collaborative cloud-based discovery environments are designed to meet the diverse needs of modern eDiscovery. With access to various industry-leading platforms, we provide tailored solutions that ensure seamless data management and efficient workflows. AC Discovery guarantees a dependable, scalable hosting environment that fits your unique requirements.`,
  },
  {
    id: "document-review",
    Icon: DocumentReviewIcon,
    hexSide: "left",
    title: "Document Review Services",
    description: `Our Document Review and Managed Review services combine cutting-edge technology with expert legal professionals to streamline the eDiscovery process. We utilize advanced analytics, artificial intelligence, and machine learning tools to efficiently organize, prioritize, and analyze large volumes of data. Our team of experienced attorneys and project managers work as an extension of your legal department, employing customized workflows and defensible processes to ensure high-quality, cost-effective results. We offer flexible staffing solutions, including remote review capabilities, to scale quickly and meet tight deadlines while maintaining security and confidentiality. By leveraging structured and conceptual analytics, we significantly reduce review time and costs, enabling your team to focus on case strategy and deliver superior outcomes.`,
  },
  {
    id: "ai-discovery",
    Icon: AiDiscoveryIcon,
    hexSide: "right",
    title: "AI Discovery Services",
    description: `AC Discovery's AI Discovery Services combine cutting-edge generative AI technology with expert human oversight to transform the eDiscovery process, delivering unmatched speed, accuracy, and cost-efficiency. Leveraging advanced AI models, we reduce massive datasets from terabytes to gigabytes, rapidly identifying key documents, uncovering critical insights, and connecting facts that matter. Our solutions complete reviews up to 90% faster than traditional methods, simultaneously scoring responsiveness, privilege, and multiple issues while enabling automated privilege logging and defensible AI protocol negotiation. Through an intuitive interface, legal teams can explore information beyond conventional search capabilities, surfacing hidden connections and strengthening case strategies. With a global team of AI consultants and subject matter experts, we provide tailored solutions to meet unique language, industry, and geographic needs. Our systematic quality control workflows ensure accuracy and defensibility, empowering legal teams to lower discovery costs, meet tight deadlines, and focus on delivering results with confidence.`,
  },
  {
    id: "ediscovery-staffing",
    Icon: StaffingIcon,
    hexSide: "left",
    title: (
      <>
        eDiscovery
        <br />
        Staffing
      </>
    ),
    description: `AC Discovery provides flexible, cost-effective legal staffing solutions tailored to meet your firm's unique needs. Our experienced professionals and eDiscovery technologists seamlessly integrate into your team to deliver timely and efficient support for discovery and litigation tasks. Our consultative guidance at every stage in the eDiscovery workflow from project managers handling and tracking the details to processing, quality control and preparing productions, we implement proven workflows that enhance efficiency, reduce costs, and improve accuracy. By leveraging skilled talent and advanced technology, we ensure deadlines are met while delivering high-quality results, enabling your team to focus on substantive legal strategy and case preparation. As necessary, we contract our own employees under both short-term and long-term contracts, or we place qualified candidates for full-time employment.`,
  },
  {
    id: "flexible-legal-talent",
    Icon: FlexibleTalentIcon,
    hexSide: "right",
    title: (
      <>
        Flexible Legal Talent
        <br />
        Solutions
      </>
    ),
    description: `Our Flexible Legal Talent Solutions provide flexible, cost-effective solutions that seamlessly integrate qualified attorneys into both law firms and corporate legal departments. Acting as a natural extension of your team, our embedded professionals combine substantive expertise with technical proficiency to handle a comprehensive range of associate-level tasks. We implement proven workflows for everything from second-level review and pre-production quality control to privilege log finalization and fact memoranda creation. Our scalable teams deliver efficient support for critical litigation tasks, including deposition preparation, fact research for motion practice, witness and trial preparation, chronology development, and key testimony identification for appeals. By leveraging advanced technology and documented processes, we ensure uniform coding, shortened review timelines, and consistent, high-quality deliverables while significantly reducing costs. This approach not only enhances the efficiency and accuracy of discovery and litigation processes but also allows your internal resources to focus on case strategy and substantive legal analysis. Through our customized staffing solutions, we help preserve case budgets, meet critical deadlines, and deliver timely, high-quality support that drives successful outcomes.`,
  },
  {
    id: "trial-services",
    Icon: TrialServicesIcon,
    hexSide: "left",
    title: "Trial Services",
    description: `AC Discovery delivers comprehensive trial support, from pre-trial preparation to verdict, ensuring your team is equipped for success in the courtroom. Our expert consultants provide tailored strategies, manage evidence preparation, and coordinate trial logistics to strengthen your case. We offer dedicated war room support, including seamless organization of materials and on-the-spot problem-solving, as well as "hot seat" operators for real-time exhibit presentation and technology management during proceedings. By identifying key opportunities and proactively addressing challenges, we ensure your team can focus on presenting a compelling narrative and achieving the best possible outcome.`,
  },
  // {
  //   id: "courtroom-reporting-deposition",
  //   Icon: CourtroomReportingIcon,
  //   hexSide: "right",
  //   title: (
  //     <>
  //       Courtroom Reporting &amp;
  //       <br />
  //       Deposition Services
  //     </>
  //   ),
  //   description: `AC Discovery delivers comprehensive Courtroom Reporting and Deposition Services, offering cutting-edge solutions for both in-person and remote legal proceedings. We provide expert court reporters, certified stenographers, and skilled legal videographers equipped with state-of-the-art technology to ensure precise, real-time documentation of depositions, hearings, and trials. Our services include verbatim transcription, real-time reporting, legal videography, and detailed deposition summaries. We excel in managing complex multi-party depositions and offer flexible scheduling for last-minute requests. Our secure digital platforms facilitate seamless remote and hybrid proceedings, allowing for efficient collaboration and document sharing. With a commitment to accuracy, confidentiality, and timeliness, we deliver high-quality transcripts and video recordings that meet the most stringent legal standards. Whether you require on-site support or virtual solutions, our team ensures smooth, professional, and reliable documentation services tailored to your specific case needs.`,
  // },
  {
    id: "cyber-data-breach-incident-response",
    Icon: CyberShieldIcon,
    hexSide: "left",
    title: (
      <>
        Cyber Data Breach &amp;
        <br />
        Incident Response
      </>
    ),
    description: `When a cyber breach occurs, swift and secure action is critical to manage legal, regulatory, and compliance obligations. AC Discovery specializes in identifying, preserving, and producing Electronically Stored Information (ESI) to support legal investigations, reporting to governing bodies, and notifying affected individuals. Leveraging advanced AI tools, document recognition technologies, and a team of seasoned experts, we deliver precise, timely analysis and comprehensive support throughout the incident response and data discovery process.`,
  },
  {
    id: "legal-operations-spend-analysis",
    Icon: LegalOpsIcon,
    hexSide: "right",
    title: (
      <>
        Legal Operations &amp; Spend
        <br />
        Analysis
      </>
    ),
    description: `Legal Operations and Spend Analysis are crucial components of modern legal departments, focusing on optimizing efficiency and cost-effectiveness. Our company specializes in providing comprehensive Legal Spend Analysis services, leveraging advanced data analytics and industry benchmarks to help general counsels make informed decisions about their legal expenditures. We assist clients in implementing robust legal spend management strategies, including the development of preferred law firm panels, negotiation of alternative fee arrangements, and utilization of e-billing systems. Our expertise extends to right-sourcing strategies, helping clients allocate work to the most cost-effective providers without compromising quality. By offering insights into spending patterns, identifying areas for cost reduction, and providing actionable recommendations, we enable our clients to achieve significant savings while maintaining high-quality legal services.`,
  },
];

export default function ServicesPage() {
  return (
    <main className="relative bg-black">
      <Nav />
      <ServicesHero />
      {services.map((s, i) => (
        <ServiceRow
          key={s.id}
          id={s.id}
          Icon={s.Icon}
          hexSide={s.hexSide}
          title={s.title}
          description={s.description}
          showDivider={i < services.length - 1}
        />
      ))}
      <Connect/>
      <Footer/>
    </main>
  );
}
