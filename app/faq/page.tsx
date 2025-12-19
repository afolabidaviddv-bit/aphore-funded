"use client";
import Link from "next/link";
import { useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

const faqs: FaqItem[] = [
  {
    q: "How do I get funded?",
    a: "Choose a challenge, trade within defined risk limits, reach the profit target, and pass the evaluation. You’ll receive a funded account with clear payout and scaling rules.",
  },
  {
    q: "How often are payouts processed?",
    a: "Payouts follow a regular cadence with prompt processing. Timing depends on your funding model; details are provided in the rules and dashboard.",
  },
  {
    q: "What are the drawdown limits and profit targets?",
    a: "Daily and max drawdowns align to fair, transparent limits (e.g., daily 3–5%, max 6–10%). Profit targets are typically 8–10% depending on account size.",
  },
  {
    q: "Which trading platforms are supported?",
    a: "Major platforms and standard market access are supported. Exact platform availability is listed during challenge selection and in your account dashboard.",
  },
  {
    q: "How should I manage risk to stay compliant?",
    a: "Use disciplined position sizing, monitor daily exposure, and respect drawdown thresholds. Avoid prohibited activity; trade within clearly stated rules.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">
      <main className="px-4 sm:px-6 pt-24 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-700">
              FAQ — Aphore Funded
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#1f2937]">
              Clear answers about funding, payouts, rules, platforms, and risk management.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border shadow-sm bg-white transition-colors ${
                    isOpen ? "border-orange-300" : "border-orange-100 hover:border-orange-200"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5"
                  >
                    <span className="text-blue-700 font-semibold text-base sm:text-lg">
                      {item.q}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full border border-orange-200 grid place-items-center text-orange-500 transition-transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 15.5 5.5 9h13L12 15.5z" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`px-5 sm:px-6 overflow-hidden transition-[max-height,padding] duration-300 ${
                      isOpen ? "max-h-48 pb-5" : "max-h-0 pb-0"
                    }`}
                  >
                    <div className="text-[#374151] text-sm sm:text-base">
                      {item.a}
                    </div>
                  </div>
                  <div className="px-5 sm:px-6 py-3 border-t border-orange-100 flex items-center justify-between">
                    <div className="text-xs text-[#6b7280]">
                      Last updated — transparent and subject to program terms
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-2 text-xs text-blue-700">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500">
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        Rules
                      </span>
                      <span className="inline-flex items-center gap-2 text-xs text-blue-700">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500">
                          <rect x="5" y="5" width="14" height="14" rx="2" />
                        </svg>
                        Payouts
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 text-blue-700">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500">
                <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm1 5h-2v6h6v-2h-4V7z" />
              </svg>
              Quick links
            </div>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/how-it-works" className="px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors">
                How It Works
              </Link>
              <Link href="/funding-models" className="px-6 py-3 rounded-xl border border-orange-300 text-blue-700 hover:bg-orange-50 transition-colors">
                Funding Models
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
