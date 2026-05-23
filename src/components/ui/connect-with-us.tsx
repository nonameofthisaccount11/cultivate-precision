import { useState } from "react";

export default function ConnectWithUs() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.95fr] lg:items-end">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Connect with us
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Direct access to plant pathology expertise for growers and ag advisors.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Reach out for field diagnostics, disease management plans, molecular testing
                recommendations, and tailored crop protection advice backed by expert research.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Fast response
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Share a sample, symptoms, or photo and get a rapid assessment from our diagnostics team.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Trusted recommendations
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Practical, evidence-based guidance for disease control, phytosanitary practice, and yield protection.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="mailto:f.sohail@parc.gov.pk"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Email us
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=923335562477"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Message on WhatsApp
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsExpanded((current) => !current)}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
              aria-expanded={isExpanded}
            >
              {isExpanded ? "Hide quick details" : "Why consult with us?"}
              <span aria-hidden="true">→</span>
            </button>

            {isExpanded ? (
              <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-600">
                <p>
                  We support crop health through lab-grade diagnostics and field-proven plant pathology
                  expertise. From fungal and bacterial surveys to specialist mango disease programs,
                  our service model is built for practical decisions and sustainable crop protection.
                </p>
              </div>
            ) : null}
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.06)] sm:p-10">
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Office details
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  House No. 11, St. No. 1, Nawaz Town, New Shakrial, Islamabad
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Phone
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">+92 333 5562477</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Email
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">f.sohail@parc.gov.pk</p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Available for
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                  <li>Plant pathology consultation</li>
                  <li>Diagnostic sample advice</li>
                  <li>Crop disease management planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
