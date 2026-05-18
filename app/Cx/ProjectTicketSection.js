"use client";

const inputClasses =
  "w-full bg-white/5 border border-white/15 rounded-md px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#2484C6] focus:bg-white/10 transition-colors";

function TextField({ id, label, type = "text", required = false }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-white text-sm font-medium mb-2">
        {label}
        {required && <span className="text-[#2484C6]">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className={inputClasses}
      />
    </div>
  );
}

function SelectField({ id, label, required = false }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-white text-sm font-medium mb-2">
        {label}
        {required && <span className="text-[#2484C6]">*</span>}
      </label>
      <div className="relative">
        <select
          id={id}
          name={id}
          required={required}
          defaultValue=""
          className={`${inputClasses} appearance-none cursor-pointer pr-10`}
        >
          <option value="" disabled>
            Select one...
          </option>
          <option value="litigation-support">Litigation support</option>
          <option value="managed-review">Managed review</option>
          <option value="hosting">Hosting / infrastructure</option>
          <option value="forensics">Forensics / collections</option>
          <option value="trial-services">Trial services</option>
          <option value="other">Other</option>
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#004972]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default function ProjectTicketSection() {
  return (
    <section className="relative bg-black overflow-hidden">
      <div className="relative mx-auto max-w-2xl px-6 sm:px-8 lg:px-12 pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-16 md:pb-24">
        <h1 className="text-white font-extrabold text-center uppercase tracking-tight leading-tight text-2xl sm:text-3xl md:text-4xl">
          Project ticket form
        </h1>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-12 md:mt-14 flex flex-col gap-5"
        >
          <SelectField id="requestType" label="Request Type" required />
          <TextField id="requestorName" label="Requestor Name" required />
          <TextField id="requestorPhone" label="Requestor Phone" type="tel" required />
          <TextField id="requestorEmail" label="Requestor Email" type="email" required />
          <TextField id="clientMatterInfo" label="Client Matter Information" required />
          <TextField id="urgency" label="Urgency (Low, Medium, High)" />
          <TextField id="billingPartner" label="Billing Partner" />
          <TextField id="clientNameTitle" label="Client Name & Title" />
          <TextField id="clientCompanyAddress" label="Client Company Address" />
          <TextField id="clientContactEmail" label="Client Contact Email" type="email" />
          <TextField id="clientContactPhone" label="Client Contact Phone Number" type="tel" />
          <div className="flex flex-col">
            <label htmlFor="caseDescription" className="text-white text-sm font-medium mb-2">
              Brief Case Description (for conflicts check)
            </label>
            <textarea
              id="caseDescription"
              name="caseDescription"
              rows={4}
              className={`${inputClasses} resize-none`}
            />
          </div>

          <TextField id="caseCaptionShort" label="Case Caption Short Description" />
          <TextField id="estimatedCustodians" label="Estimated Number of Custodians" type="number" min={0} />
          <TextField id="hostingDuration" label="Expected Duration for Data Hosting" />
          <TextField id="platformPreferred" label="What Platform Should be Used" />
          <TextField id="otherPlatform" label="Other Platform" />

          <div className="pt-4">
            <button
              type="submit"
              className="bg-[#095786] hover:bg-[#2484C6] transition-colors text-white text-sm font-semibold tracking-wide uppercase px-10 py-3 rounded-md shadow-lg shadow-blue-900/30"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
