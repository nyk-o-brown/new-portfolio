"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CaseStudy = {
  id: string;
  project: string;
  title: string;
  summary: string;
  accent: "cyan" | "violet" | "amber";
  problem: string;
  constraints: string[];
  options: { name: string; verdict: string }[];
  decision: string;
  tradeoff: string;
  result: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "01",
    project: "Evolve Property Manager",
    title: "Onboarding properties that already had years of paper trail",
    summary:
      "Property managers switching to Evolve already had tenant, unit, and lease records buried in PDFs. We used PDF reading and generation to slot the app into already-running properties without forcing a manual re-entry nightmare.",
    accent: "cyan",
    problem:
      "Property managers switching to Evolve already had years of tenant, unit, and lease records — but that data lived in scattered PDFs from whatever process they'd used before, not in a clean database. Re-entering it all manually before go-live would have killed adoption before it started.",
    constraints: [
      "No two managers' PDFs followed the same layout — lease agreements, ledgers, and inspection reports varied wildly",
      "Properties had to keep operating during the switch — no big-bang cutover window",
      "Small team and tight timeline, no budget for a dedicated data-migration effort",
      "Some source PDFs were scanned or photographed, not digitally generated, so clean text extraction wasn't guaranteed",
    ],
    options: [
      {
        name: "Manual spreadsheet import",
        verdict:
          "Rejected — too much friction for an already-running property to switch onto Evolve, high error rate, kills adoption",
      },
      {
        name: "Fully generic OCR pipeline for any PDF layout",
        verdict:
          "Rejected — too ambitious for the timeline given how inconsistent the formats were, would need heavy ML investment and still be unreliable",
      },
    ],
    decision:
      "Built a PDF ingestion pipeline that extracts the fields property managers actually needed first — tenant name, unit, rent amount, lease dates — and pre-fills the onboarding form for a human to confirm or correct, rather than trying to capture every clause automatically. Paired it with PDF generation so the same structured data could be exported back out as clean statements and reports.",
    tradeoff:
      "Extraction isn't fully automatic — messier or scanned PDFs still need manual correction, so it's an assist rather than a replacement for data entry. Field coverage is deliberately narrow to the core tenant/unit/lease data, so anything property-specific outside that still gets entered by hand.",
    result:
      "Cut onboarding time for existing properties well below a blank-slate re-entry approach, and gave managers and tenants confidence early since the platform was validated with on-site field research. Next step would be handling lower-quality scanned PDFs more reliably.",
  },
  {
    id: "02",
    project: "Cadvisor",
    title: "Turning AI insight into dashboard modules, not just advice",
    summary:
      "Cadvisor uses AI and business intelligence to suggest good business practices for a company — then goes a step further and auto-generates the dashboard modules needed to act on that advice.",
    accent: "violet",
    problem:
      "Cadvisor needed to go beyond static charts and actually tell business owners what to do next — then let them act on it without waiting on a developer to hand-build a new dashboard module for every new insight.",
    constraints: [
      "Businesses on Cadvisor have very different data shapes and metrics that matter to them — no single fixed dashboard fits everyone",
      "Recommendations had to be tied to real patterns in the data, not generic-sounding advice — false confidence is worse than no advice",
      "Small team, so new module types needed to be addable without a full dev cycle every time",
      "Dashboard had to stay fast and uncluttered even as modules got added dynamically",
    ],
    options: [
      {
        name: "Fixed dashboard, same modules for every business",
        verdict:
          "Rejected — undercuts the 'actionable insight' pitch; owners ignore modules that don't reflect their actual business",
      },
      {
        name: "Free-form AI chat advice with no dashboard integration",
        verdict:
          "Rejected — advice that isn't backed by a visual that updates is easy to read once and forget",
      },
    ],
    decision:
      "Built an AI layer that scores incoming business data against a library of known patterns (revenue trend, churn risk, inventory turnover, etc.). When a pattern crosses a meaningful threshold, it instantiates the matching module directly onto the user's dashboard with the recommendation attached — not just a text tip.",
    tradeoff:
      "Because modules come from a template library rather than being fully open-ended, unusual business situations sometimes get mapped to the closest-fitting template instead of a bespoke visualization — a deliberate trade of some flexibility for reliability.",
    result:
      "Business owners get modules that reflect what's actually happening in their numbers instead of a generic dashboard, and can act on a recommendation immediately instead of filing a feature request.",
  },
  {
    id: "03",
    project: "Echo",
    title: "Matching people on weighted principles, not generic filters",
    summary:
      "Echo pulls matching principles from academic research and applies them as weights across user profiles, connecting people to their best-fit match instead of relying on generic filter-based search.",
    accent: "amber",
    problem:
      "Most matching systems lean on simple filters — shared interests, location, age range — which produce plenty of technically-compatible pairs that don't actually work well together. Echo set out to apply real compatibility research instead of ad hoc checkboxes.",
    constraints: [
      "No large proprietary interaction dataset to train a model from, this early on",
      "Needed to stay explainable enough to reason about and tune match quality, not a black box",
      "Matching needed to stay responsive as the user base grows",
      "Had to translate qualitative findings from an academic compatibility paper into something quantifiable",
    ],
    options: [
      {
        name: "Black-box ML model trained on user interaction data",
        verdict:
          "Rejected — no meaningful interaction dataset existed yet at this stage to train on",
      },
      {
        name: "Naive filter with equal weighting across all attributes",
        verdict:
          "Rejected — treats every trait as equally important, which contradicts what the research actually says predicts compatibility",
      },
    ],
    decision:
      "Built a weighted compatibility scoring engine — each dimension is assigned a weight informed by the reference paper's findings on what predicts compatibility, and pairwise scores are computed and ranked to surface the closest matches instead of a flat filter list.",
    tradeoff:
      "The weights are only as good as the research behind them — they reflect one study's population and may not generalize perfectly to Echo's actual users, so the model still needs real usage data to validate and retune over time.",
    result:
      "Matches feel more considered than a filter list, though the system is early — the next step is using real outcome data (do matched users stay connected?) to validate and adjust the paper-derived weights.",
  },
];

const accentText: Record<CaseStudy["accent"], string> = {
  cyan: "text-cyan-400",
  violet: "text-violet-400",
  amber: "text-amber-400",
};

const accentBorder: Record<CaseStudy["accent"], string> = {
  cyan: "border-cyan-500 hover:border-cyan-500/40",
  violet: "border-violet-500 hover:border-violet-500/40",
  amber: "border-amber-500 hover:border-amber-500/40",
};

const accentModalBorder: Record<CaseStudy["accent"], string> = {
  cyan: "border-cyan-500/30",
  violet: "border-violet-500/30",
  amber: "border-amber-500/30",
};

const accentBg: Record<CaseStudy["accent"], string> = {
  cyan: "bg-cyan-500/10",
  violet: "bg-violet-500/10",
  amber: "bg-amber-500/10",
};

export default function SystemDesign() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = caseStudies.find((c) => c.id === openId) ?? null;

  return (
    <section id="system-design" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-black mb-2 section-title in-view">
          HOW I THINK
        </h2>
        <p className="text-neutral-500 font-mono text-sm mb-12">
          not just what i shipped — the calls behind it
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.button
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              onClick={() => setOpenId(cs.id)}
              data-hover
              className={`text-left border border-neutral-800 rounded-2xl p-6 bg-neutral-900/20 transition-all duration-300 ${accentBorder[cs.accent]}`}
            >
              <span
                className={`font-mono text-xs tracking-widest ${accentText[cs.accent]}`}
              >
                CASE {cs.id}
              </span>
              <p className="text-xs font-mono text-neutral-600 mt-1 mb-3">
                {cs.project}
              </p>
              <h3 className="font-bold text-neutral-100 text-base leading-snug mb-2">
                {cs.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                {cs.summary}
              </p>
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-mono ${accentText[cs.accent]}`}
              >
                read the breakdown →
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpenId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`relative max-w-xl w-full max-h-[85vh] overflow-y-auto bg-[#0f0f0f] border rounded-2xl p-8 shadow-2xl ${accentModalBorder[active.accent]}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenId(null)}
                aria-label="Close case study"
                className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-200 transition-colors font-mono text-lg leading-none"
              >
                ✕
              </button>

              <span
                className={`font-mono text-xs tracking-widest ${accentText[active.accent]}`}
              >
                CASE {active.id} — {active.project}
              </span>
              <h3 className="text-xl font-black text-neutral-100 mt-2 mb-6">
                {active.title}
              </h3>

              <div className="space-y-5 text-sm">
                <div>
                  <p
                    className={`font-mono text-xs tracking-widest mb-1.5 ${accentText[active.accent]}`}
                  >
                    PROBLEM
                  </p>
                  <p className="text-neutral-300 leading-relaxed">
                    {active.problem}
                  </p>
                </div>

                <div>
                  <p
                    className={`font-mono text-xs tracking-widest mb-1.5 ${accentText[active.accent]}`}
                  >
                    CONSTRAINTS
                  </p>
                  <ul className="space-y-1">
                    {active.constraints.map((c) => (
                      <li
                        key={c}
                        className="text-neutral-300 flex gap-2 leading-relaxed"
                      >
                        <span
                          className={`shrink-0 mt-0.5 ${accentText[active.accent]}`}
                        >
                          ›
                        </span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p
                    className={`font-mono text-xs tracking-widest mb-1.5 ${accentText[active.accent]}`}
                  >
                    OPTIONS CONSIDERED
                  </p>
                  <div className="space-y-2">
                    {active.options.map((o) => (
                      <div
                        key={o.name}
                        className={`rounded-lg p-3 ${accentBg[active.accent]}`}
                      >
                        <p className="text-neutral-200 font-semibold">
                          {o.name}
                        </p>
                        <p className="text-neutral-400 text-xs mt-0.5">
                          {o.verdict}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p
                    className={`font-mono text-xs tracking-widest mb-1.5 ${accentText[active.accent]}`}
                  >
                    DECISION
                  </p>
                  <p className="text-neutral-300 leading-relaxed">
                    {active.decision}
                  </p>
                </div>

                <div>
                  <p
                    className={`font-mono text-xs tracking-widest mb-1.5 ${accentText[active.accent]}`}
                  >
                    TRADE-OFF
                  </p>
                  <p className="text-neutral-300 leading-relaxed">
                    {active.tradeoff}
                  </p>
                </div>

                <div className="border-l-2 border-neutral-700 pl-3">
                  <p className="font-mono text-xs tracking-widest mb-1.5 text-neutral-500">
                    RESULT
                  </p>
                  <p className="text-neutral-400 italic leading-relaxed">
                    {active.result}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
