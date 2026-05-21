const mailLink =
  "font-medium text-[#2484C6] underline decoration-[#2484C6]/80 underline-offset-2 hover:text-[#4db3ea] transition-colors";

function JobHeading({ children }) {
  return (
    <h3
      className="mt-14 mb-4 rounded-lg px-4 py-3 text-xl font-bold leading-snug text-white sm:text-2xl first:mt-10"
      style={{ backgroundColor: "#004972" }}
    >
      {children}
    </h3>
  );
}

function SubHeading({ children }) {
  return (
    <h4 className="mt-6 mb-3 text-lg font-semibold text-white sm:text-xl">
      {children}
    </h4>
  );
}

function JobList({ items }) {
  return (
    <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-white/95 sm:text-lg">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function CareersContent() {
  return (
    <section className="relative bg-black">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 py-16 md:py-24 lg:py-28">
        <h2 className="text-center font-bold leading-[1.1] tracking-tight text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Join AC Discovery and Be Part of
          <br />
          Something Bigger!
        </h2>

        <h3 className="mt-10 text-center text-xl sm:text-2xl md:text-3xl font-light text-white/80">
          Why Join our Team?
        </h3>

        <p className="mt-8 text-base leading-relaxed text-white/95 sm:text-lg">
          Because we&apos;re not just in the business of legal services—we&apos;re
          in the business of growth, innovation, and impact. At AC Discovery,
          you&apos;ll be part of a collaborative team where learning and
          advancement are at the heart of everything we do. Whether you&apos;re
          a seasoned professional or early in your career, we provide the
          training, resources and mentorship for you to succeed.
        </p>

        <p className="mt-6 text-base leading-relaxed text-white/95 sm:text-lg">
          We&apos;re always looking for driven and talented professionals to join
          our growing team and help us push boundaries. If you&apos;re ready to
          grow, learn, and make an impact, we want you on board! Apply by sending
          your resume to{" "}
          <a href="mailto:staffing@acdiscovery.com" className={mailLink}>
            staffing@acdiscovery.com
          </a>
          .
        </p>

        <JobHeading>eDiscovery Analyst</JobHeading>

        <p className="text-base leading-relaxed text-white/95 sm:text-lg">
          <strong className="text-white">Position Summary:</strong> The eDiscovery
          Analyst, specializing in Relativity, Reveal or Everlaw, plays a pivotal
          role in our organization, responsible for overseeing and managing
          e-discovery projects from inception to completion.
        </p>

        <SubHeading>I. Responsibilities:</SubHeading>
        <JobList
          items={[
            "Collaborate with case teams to plan, manage, and execute e-discovery projects.",
            "Prepare project recommendations, budgets, and comprehensive project plans.",
            "Maintain clear communication with case teams and management.",
            "Coordinate the production of ESI to external parties.",
            "Track and manage received, loaded, and produced ESI.",
            "Assist attorneys with Rule 26(f) conferences and e-discovery meetings.",
            "Thoroughly document project details in tracking systems.",
          ]}
        />

        <SubHeading>II. Job Specifications:</SubHeading>
        <JobList
          items={[
            "In-depth knowledge of the e-discovery process and technologies such as Relativity Reveal or Everlaw.",
            "Strong organizational and multitasking skills.",
            "Exceptional communication skills, both written and verbal.",
            "Ability to manage multiple projects simultaneously.",
            "Commitment to delivering high quality service to internal and external clients.",
          ]}
        />

        <SubHeading>III. Education and Experience:</SubHeading>
        <JobList
          items={[
            "Bachelor's degree preferred.",
            "Juris Doctor (JD) is advantageous.",
            "Minimum of four years of experience managing e-discovery projects.",
            "Experience with e-discovery software and hardware is beneficial.",
          ]}
        />

        <JobHeading>Project Manager</JobHeading>

        <p className="text-base leading-relaxed text-white/95 sm:text-lg">
          <strong className="text-white">Position Summary:</strong> The Project
          Manager role is responsible for high level management, delegation, and
          execution of day-to-day e-discovery project tasks.
        </p>

        <SubHeading>I. Job Specifications:</SubHeading>
        <JobList
          items={[
            "Providing end-to-end oversight of discovery matters and serving as primary client point of contact.",
            "Creating and maintaining project schedules and workflows.",
            "Planning and managing project communications.",
            "Forecasting, tracking and managing project budgets and invoices.",
            "Successfully overseeing multiple concurrent projects.",
            "Developing strong client relationships through collaborative service.",
          ]}
        />

        <SubHeading>II. Project Team Leadership:</SubHeading>
        <JobList
          items={[
            "Leading and assigning team members.",
            "Managing utilization and project assignment within the team.",
            "Providing training and supervision for junior members.",
          ]}
        />

        <SubHeading>III. Qualifications:</SubHeading>
        <JobList
          items={[
            "BA/BS degree or minimum of 5 years in litigation support/legal industry.",
            "Minimum 3 years experience as a Senior Project Manager.",
            "Demonstrated experience managing multiple concurrent projects.",
            "Strong teamwork, communication and client management skills.",
          ]}
        />

        <JobHeading>Document Reviewer</JobHeading>

        <p className="text-base leading-relaxed text-white/95 sm:text-lg">
          <strong className="text-white">Position Summary:</strong> AC Discovery is
          looking for attorneys who are actively licensed and in good standing in
          any US jurisdiction.
        </p>

        <SubHeading>Requirements:</SubHeading>
        <JobList
          items={[
            "Must be actively licensed and in good standing in a US jurisdiction.",
            "Prior experience with Relativity or other eDiscovery platforms preferred.",
            "Windows or MacOS computer with updated software and stable internet connection.",
            "Availability of minimum 40 hours per week during review.",
            "Strong attention to detail.",
            "Critical thinking skills and ability to retain complex work directions.",
          ]}
        />

        <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-5 text-base leading-relaxed text-white/95 sm:text-lg space-y-1">
          <p>
            <strong className="text-white">Job Type:</strong> Contract
          </p>
          <p>
            <strong className="text-white">License:</strong> BAR (Required)
          </p>
          <p>
            <strong className="text-white">Work Location:</strong> Fully Remote
          </p>
          <p>
            <strong className="text-white">Schedule:</strong> 40+ hours/week
            Flexible Schedule
          </p>
        </div>

        <p className="mt-6 text-base leading-relaxed text-white/95 sm:text-lg">
          AC Discovery is seeking talented and professional attorneys for upcoming
          Document Review opportunities. Ongoing need. Please apply now to join our
          roster for upcoming reviews. Apply by sending your resume to{" "}
          <a href="mailto:staffing@acdiscovery.com" className={mailLink}>
            staffing@acdiscovery.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
