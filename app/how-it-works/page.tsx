import Link from "next/link";

export default function HowItWorks() {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden font-sans">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-orange-500/20 rounded-full blur-[100px] pointer-events-none" />

      <main className="relative z-10 pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              How Aphore Funded Works
            </h1>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Access funded capital by demonstrating discipline and consistency. A simple, transparent pathway from signup to earning profits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-6 mb-12">
            <div className="glass-panel rounded-2xl p-6 glass-hover fade-up" style={{ animationDelay: "0ms" }}>
              <div className="icon-circle mb-4">1</div>
              <div className="flex flex-col gap-1">
                <span className="text-white font-semibold">Sign Up</span>
                <span className="text-white/60 text-sm">Secure account creation and profile setup.</span>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6 glass-hover fade-up" style={{ animationDelay: "120ms" }}>
              <div className="icon-circle mb-4">2</div>
              <div className="flex flex-col gap-1">
                <span className="text-white font-semibold">Choose Challenge</span>
                <span className="text-white/60 text-sm">Select account size and evaluation model.</span>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6 glass-hover fade-up" style={{ animationDelay: "240ms" }}>
              <div className="icon-circle mb-4">3</div>
              <div className="flex flex-col gap-1">
                <span className="text-white font-semibold">Trade Within Rules</span>
                <span className="text-white/60 text-sm">Respect risk limits and drawdowns.</span>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6 glass-hover fade-up" style={{ animationDelay: "360ms" }}>
              <div className="icon-circle mb-4">4</div>
              <div className="flex flex-col gap-1">
                <span className="text-white font-semibold">Pass Evaluation</span>
                <span className="text-white/60 text-sm">Hit targets with consistent discipline.</span>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6 glass-hover fade-up" style={{ animationDelay: "480ms" }}>
              <div className="icon-circle mb-4">5</div>
              <div className="flex flex-col gap-1">
                <span className="text-white font-semibold">Receive Funding</span>
                <span className="text-white/60 text-sm">Trade a funded account with confidence.</span>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6 glass-hover fade-up" style={{ animationDelay: "600ms" }}>
              <div className="icon-circle mb-4">6</div>
              <div className="flex flex-col gap-1">
                <span className="text-white font-semibold">Earn & Scale</span>
                <span className="text-white/60 text-sm">Withdraw profits and grow limits over time.</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="glass-panel rounded-2xl p-6">
              <div className="text-white font-semibold mb-2">Signup</div>
              <p className="text-white/60 text-sm">
                Create an account and verify details. Your data is handled securely and used only to support your trading experience.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-white/60">
                <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">Encrypted login</div>
                <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">Profile setup</div>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6">
              <div className="text-white font-semibold mb-2">Evaluation</div>
              <p className="text-white/60 text-sm">
                Select a challenge with clear profit targets and drawdown rules. No hype, just straightforward objectives and risk controls.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-white/60">
                <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">Transparent rules</div>
                <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">Real conditions</div>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6">
              <div className="text-white font-semibold mb-2">Funding</div>
              <p className="text-white/60 text-sm">
                Meet targets and unlock a funded account. Withdraw profits confidently, and scale limits as your performance grows.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-white/60">
                <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">Fast payouts</div>
                <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">Scale pathways</div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-white/60">Profit Target</div>
                <div className="mt-2 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[70%] bg-gradient-to-r from-orange-500 to-orange-600" />
                </div>
                <div className="mt-2 text-xs text-white/60">Example target: 8–10%</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-white/60">Drawdown Limits</div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-white/80 text-sm">Daily</span>
                  <span className="text-white font-semibold">3–5%</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-white/80 text-sm">Max</span>
                  <span className="text-white font-semibold">6–10%</span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-white/60">Trading Styles</div>
                <div className="mt-2 text-sm text-white/70">Discretionary, swing, and algorithmic trading permitted with fair risk controls.</div>
                <div className="mt-2 text-xs text-white/50">No market manipulation or prohibited activity.</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-panel rounded-2xl p-6">
              <div className="text-white font-semibold mb-2">Profit Splits</div>
              <p className="text-white/60 text-sm">Earn up to 90% of profits with a clear, trader-first structure.</p>
            </div>
            <div className="glass-panel rounded-2xl p-6">
              <div className="text-white font-semibold mb-2">Payout Frequency</div>
              <p className="text-white/60 text-sm">Regular payout cycles with responsive processing and clear timelines.</p>
            </div>
            <div className="glass-panel rounded-2xl p-6">
              <div className="text-white font-semibold mb-2">Long-Term Support</div>
              <p className="text-white/60 text-sm">Scale pathways, rule clarity, and reliable infrastructure to support your growth.</p>
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-8 mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="text-white font-semibold mb-1">Transparent</div>
                <div className="text-white/60 text-sm">Rules and payouts designed to be clear and fair.</div>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="text-white font-semibold mb-1">Trader-First</div>
                <div className="text-white/60 text-sm">No time pressure, real conditions, and risk managed right.</div>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="text-white font-semibold mb-1">Modern Infrastructure</div>
                <div className="text-white/60 text-sm">Fast systems, robust tracking, and dependable ops.</div>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="text-white font-semibold mb-1">Reliable Payouts</div>
                <div className="text-white/60 text-sm">Consistent processing and trusted capital allocations.</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-blue-200">Transparent. Fair. Professional.</span>
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              Ready to start your challenge?
            </h2>
            <p className="mt-3 text-white/60 max-w-xl mx-auto">
              Demonstrate discipline and consistency. Trade with fair rules, receive funding, and scale confidently.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link href="#" className="cta-primary">
                Start Your Challenge
              </Link>
              <Link href="#" className="cta-secondary">
                View Rules
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
