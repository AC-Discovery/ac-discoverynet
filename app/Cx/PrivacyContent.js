const mailLink =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea] transition-colors";

function SectionHeading({ children }) {
  return (
    <h3
      className="mt-14 mb-4 rounded-lg px-4 py-3 text-xl font-bold leading-snug text-white sm:text-2xl first:mt-10"
      style={{ backgroundColor: "#004972" }}
    >
      {children}
    </h3>
  );
}

function Paragraph({ children }) {
  return (
    <p className="mt-6 text-base leading-relaxed text-white/95 sm:text-lg first:mt-0">
      {children}
    </p>
  );
}

function BulletList({ items }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyContent() {
  return (
    <section className="relative bg-black">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 py-16 md:py-24 lg:py-28">
        <Paragraph>
          AC Discovery LLC provides this Privacy Policy to inform you of our
          privacy practices and the choices you can make about the way your
          information is collected online and how that information is used. We
          are committed to protecting the privacy of our customers and others
          who visit our websites. This Privacy Statement covers the Web pages
          belonging to AC Discovery in the United States only, and does not
          cover the privacy policies of any AC Discovery affiliates, foreign or
          domestic. Our site may also be referenced on or accessible through
          links contained on other sites, including sites of third-party
          e-procurement networks. However, we have not investigated, and are not
          responsible for, the privacy practices or content of those sites.
          Their policies and protections may be different than those offered by
          AC Discovery. We encourage you to investigate and review the privacy
          practices of those sites prior to use. This Privacy Statement and the
          policies described below are subject to change from time to time. We
          encourage you to review this Privacy Policy periodically to confirm
          our current site policies. This statement discloses our information
          gathering and dissemination practices and explains how we use and
          protect personal identifiable information that we receive from our
          site.
        </Paragraph>

        <SectionHeading>Types of Information Collected</SectionHeading>
        <BulletList
          items={[
            "How Do We Protect the Security of Your Information?",
            "What Do We Do with the Information We Collect?",
            "Is Information Shared with Third Parties?",
            "How Can I Decide What Promotional Communications I Will Receive?",
            "Opting-Out (Un-subscribing)",
            "Children\u2019s Online Policy",
            "Who Should I Contact for More Information?",
          ]}
        />

        <SectionHeading>
          Types of Information Collected: Personal Information
        </SectionHeading>
        <Paragraph>
          AC Discovery uses personal information to better understand your needs
          and interests and to provide you with better service. Once you choose
          to provide us with personal information, you can be assured it will be
          used only to support your customer relationship with AC Discovery. AC
          Discovery will not sell, rent or lease your personal information to
          others. On some AC Discovery websites, you can order products or
          services, request information, subscribe to marketing or support
          materials, or apply for a job at AC Discovery. The types of personal
          information you provide to us on these pages may include name,
          address, phone number, email address, user IDs and passwords, billing
          and transaction information, credit card information, contact
          preferences, educational and employment background, and job interest
          data. To personalize our websites, services or communications and
          improve our products and services, we may also ask you to provide us
          with information regarding your personal or professional interests,
          demographics, and experience with our products or services. Providing
          this additional information is optional.
        </Paragraph>

        <SectionHeading>Information Needed to Make a Purchase</SectionHeading>
        <Paragraph>
          When you make a purchase, we ask for your name, company name, address,
          phone number, email address and other information necessary to fulfill
          and track your order. For purposes of billing, you may need to provide
          your AC Discovery account number or credit card information, including
          type, number, and expiration date and billing address for the card. If
          your order is to be shipped, we also need the name, address and phone
          number of the intended recipient(s).
        </Paragraph>

        <SectionHeading>Information Needed to Create an Account</SectionHeading>
        <Paragraph>
          You may create an account online. Creating an account allows you to
          save certain billing information so that you can track the status of
          your orders and set your ordering preferences. For your privacy and
          security, we do not store credit card numbers in your account.
        </Paragraph>

        <SectionHeading>
          Non-personal Information (Cookies and other Info)
        </SectionHeading>
        <Paragraph>
          When you visit our site, we collect anonymous system information about
          your computer, such as your IP address. In certain areas of the site
          designated for specific customers, we require personal contact
          information (such as your name and email address) in order to provide
          account access and perform commerce-related and other online service
          activities. This information is usually requested in the registration
          and order forms set forth in those areas. If you obtain access to one
          of those designated areas, and you are required to log in, we will use
          a &ldquo;cookie&rdquo; to store your user name. Cookies are small
          files that are placed on your hard drive by a web site. They act as
          unique identifiers for your computer, but cannot be used to identify
          any individual, only machines. We may use cookies to identify our
          customers and better understand their browsing or usage patterns, as
          well as to enhance the experience of our customers at our site.
        </Paragraph>
        <Paragraph>
          Non-personal data we collect may include the pages visited, unique
          URLs visited within our web properties, browser type and IP address.
          Most non-personal data is collected via cookies or other analysis
          technologies.
        </Paragraph>

        <SectionHeading>What Do We Do with the Information We Collect?</SectionHeading>
        <BulletList
          items={[
            "Schedule merchandise deliveries of online purchases.",
            "Create an online account for you.",
            "Bill your credit card for your purchases/respond to your customer-service inquiries or requests.",
            "Provide promotional and other communications to you, if you choose to receive them.",
            "Offer products you want.",
            "Enhance our website (customer experience) based on anonymous information about our site visitors.",
          ]}
        />

        <SectionHeading>
          How Do We Protect the Security of Your Information?
        </SectionHeading>
        <Paragraph>
          If you enter credit card payment information (for example, American
          Express, MasterCard or Visa information) to purchase AC Discovery
          equipment, supplies or services, that information is encrypted and
          transmitted using industry standard encryption software. AC Discovery
          currently uses Secure Socket Layer technology (SSL) to protect such
          information and ensure that credit card transactions are secure.
        </Paragraph>
        <Paragraph>
          We protect our databases with various physical, technical and
          procedural measures and we restrict access to your information by
          unauthorized persons. Our information systems are maintained behind a
          software firewall to isolate them from access by other networks
          connected to the Internet. All information transmitted through{" "}
          <span className="text-white">ac-discovery.net</span> is stored on our
          secure server. We use Secure Sockets Layer (SSL) technology, which is
          the electronic commerce standard for securing information as it
          travels over the Internet. SSL technology is designed to encrypt your
          information, preventing an unauthorized party from viewing and
          downloading your information. Your web browser should display a web
          address with an &ldquo;https&rdquo; prefix, indicating that the SSL
          technology is operating when using certain portions of our website.
        </Paragraph>

        <SectionHeading>Is Information Shared with Third Parties?</SectionHeading>
        <Paragraph>
          We do not rent, sell, or exchange your names to third-party companies
          for their marketing purposes. We do provide your information to
          reputable organizations that help us to fulfill your order. For
          example, we use companies to verify and process credit card
          transactions, to deliver packages, to schedule and perform product
          installations and to administer service programs. We may share
          information with others who help us analyze sales data, maintain our
          records, and provide other services for AC Discovery. We may also
          share your information with companies that act on our behalf and at
          our direction to notify you of additional AC Discovery products and
          services. These companies may also conduct customer satisfaction
          surveys and manage other customer services and benefits for us. These
          third parties are not authorized to use your information for any
          reason other than to perform their contractually assigned functions.
        </Paragraph>
        <Paragraph>
          Any information we collect about you or your computer is used
          exclusively by AC Discovery to enhance and improve your visits to our
          site, or to provide you with requested information, products or
          services. For example, when a customer submits credit card information
          to AC Discovery in order to place an online order, such personal
          information is used only for payment and shipping purposes. We may
          similarly share data with our affiliates and contractors in order to
          help us analyze such information, assess usage trends, improve site
          layout or design, or to maintain or upgrade our software and web
          capabilities. However, no personal information is distributed to third
          parties for direct marketing or solicitation purposes. If AC Discovery
          or substantially all of its assets are targeted for acquisition,
          customer information may be disclosed on a confidential basis as part
          of the due diligence or investigative efforts of the potential third
          party acquirer. In such event, if any actual acquisition, such
          information would be transferred as part of the transaction to the
          acquirer.
        </Paragraph>

        <SectionHeading>
          How Can I Decide What Promotional Communications I Will Receive?
        </SectionHeading>
        <Paragraph>
          AC Discovery may send you promotional email about products, services
          or contests that we hope will be of interest. You can choose to
          discontinue receiving such promotional email. Each promotional email
          we send contains a link allowing you to discontinue future email from
          us. You may also send your request to unsubscribe at any time by
          emailing{" "}
          <a href="mailto:admin@ac-discovery.net" className={mailLink}>
            admin@ac-discovery.net
          </a>{" "}
          indicating the email address you wish to unsubscribe. Or, you may call
          or write us as provided in this Privacy Policy in the section below
          entitled &ldquo;Who Should I Contact for More Information?&rdquo;
          Please allow a reasonable period of time in order to satisfy your
          request, as some promotions may already be in process.
        </Paragraph>

        <SectionHeading>Opting-Out (Un-subscribing)</SectionHeading>
        <Paragraph>
          To opt-out of receiving communications you have requested (such as
          email newsletters, promotions, product updates, etc.), use any of the
          following methods. Select the email &ldquo;opt-out&rdquo; or
          &ldquo;unsubscribe&rdquo; link, or follow the opt-out instructions
          included in each subscription communication. Write to AC Discovery
          &mdash; be sure to provide your name, email and postal address, and
          relevant information about your subscriptions and registrations.
        </Paragraph>

        <SectionHeading>Children&rsquo;s Online Policy</SectionHeading>
        <Paragraph>
          AC Discovery is committed to the preservation of online privacy for
          all of its visitors, including children. We do not knowingly collect
          information about children or sell products to children. In accordance
          with the Children&rsquo;s Online Privacy Protection Act, we will not
          knowingly collect any information from children under the age of 13.
          If you are under the age of 13, you must ask your parent or guardian
          to assist you in using any of AC Discovery web properties.
        </Paragraph>

        <SectionHeading>Who Should I Contact for More Information?</SectionHeading>
        <Paragraph>
          If you have any questions about this site, our policies, the practices
          of this site, or your interactions with this site, please feel free to
          contact us at{" "}
          <a href="mailto:admin@ac-discovery.net" className={mailLink}>
            admin@ac-discovery.net
          </a>{" "}
          or call us at{" "}
          <a href="tel:+12816088942" className={mailLink}>
            (281) 608-8942
          </a>
          . You may also contact us to check the accuracy of any personally
          identifiable information, or request that such information be updated.
          Contact us at the following address.
        </Paragraph>

        <SectionHeading>Corporate Headquarters</SectionHeading>
        <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-5 text-base leading-relaxed text-white/95 sm:text-lg space-y-2">
          <p>
            <strong className="text-white">Email:</strong>{" "}
            <a href="mailto:admin@ac-discovery.net" className={mailLink}>
              admin@ac-discovery.net
            </a>
          </p>
          <p>
            <strong className="text-white">Phone:</strong>{" "}
            <a href="tel:+12816088942" className={mailLink}>
              (281) 608-8942
            </a>
          </p>
          <p>
            <strong className="text-white">Address:</strong> 12340 Jones Road,
            Suite 140, Houston, TX 77070
          </p>
        </div>
      </div>
    </section>
  );
}
