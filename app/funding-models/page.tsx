import Link from "next/link";

export default function FundingModels() {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden font-sans">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-orange-500/20 rounded-full blur-[100px] pointer-events-none" />

      <main className="relative z-10 pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              Funding Models
            </h1>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Transparent, trader-friendly options designed to match your goals. Choose an evaluation, access instant funding, or scale capital over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-panel rounded-2xl p-6 glass-hover fade-up" style={{ animationDelay: "0ms" }}>
              <div className="text-white/80 text-sm mb-2">Evaluation-Based Challenge</div>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 mb-4">$25k–$200k</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Profit Split</span>
                  <span className="text-orange-400 font-semibold">Up to 90%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Risk Limits</span>
                  <span className="text-white font-semibold">Daily 3–5%, Max 6–10%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Scaling Potential</span>
                  <span className="text-white font-semibold">Progressive tiers</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Payout Structure</span>
                  <span className="text-white font-semibold">Regular cycles</span>
                </div>
              </div>
              <div className="mt-6">
                <div className="cta-secondary">View Rules</div>
                <div className="mt-3 cta-primary">Start Challenge</div>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 glass-hover fade-up featured-card" style={{ animationDelay: "120ms" }}>
              <div className="flex items-center justify-between mb-2">
                <div className="text-white/80 text-sm">Instant Funding</div>
                <span className="badge">Popular</span>
              </div>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-4">$10k–$100k</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Profit Split</span>
                  <span className="text-orange-400 font-semibold">80–90%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Risk Limits</span>
                  <span className="text-white font-semibold">Daily 3–5%, Max 6–10%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Scaling Potential</span>
                  <span className="text-white font-semibold">Performance-based</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Payout Structure</span>
                  <span className="text-white font-semibold">Fast processing</span>
                </div>
              </div>
              <div className="mt-6">
                <div className="cta-secondary">View Rules</div>
                <div className="mt-3 cta-primary">Get Funded</div>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 glass-hover fade-up" style={{ animationDelay: "240ms" }}>
              <div className="text-white/80 text-sm mb-2">Scaling Plans</div>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 mb-4">Structured Growth</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Profit Split</span>
                  <span className="text-orange-400 font-semibold">Up to 90%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Risk Limits</span>
                  <span className="text-white font-semibold">Aligned with tiers</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Scaling Potential</span>
                  <span className="text-white font-semibold">Tiered increases</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Payout Structure</span>
                  <span className="text-white font-semibold">Consistent cycles</span>
                </div>
              </div>
              <div className="mt-6">
                <div className="cta-secondary">View Rules</div>
                <div className="mt-3 cta-primary">View Scaling Path</div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-8 mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-white/60">Account Sizes</div>
                <div className="text-sm text-white/80">Flexible tiers across models</div>
              </div>
              <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-white/60">Risk Controls</div>
                <div className="text-sm text-white/80">Daily and max drawdowns</div>
              </div>
              <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-white/60">Payouts</div>
                <div className="text-sm text-white/80">Clear cadence and processing</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              Choose Your Funding Model
            </h2>
            <p className="mt-3 text-white/60 max-w-xl mx-auto">
              Pick the path that fits your strategy. Evaluation, instant access, or structured scaling, all with transparent rules.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link href="/how-it-works" className="cta-primary">
                Start Your Challenge
              </Link>
              <Link href="/how-it-works" className="cta-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
