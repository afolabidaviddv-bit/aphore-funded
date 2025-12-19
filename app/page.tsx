import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden font-sans selection:bg-orange-500/30">
      
      {/* Background Gradients/Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-orange-500/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto glass-panel rounded-2xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center font-bold text-white text-lg">
              A
            </div>
            <span className="font-bold text-xl tracking-tight">Aphore Funded</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
            <Link href="/how-it-works" className="hover:text-white transition-colors">How it Works</Link>
            <Link href="/funding-models" className="hover:text-white transition-colors">Funding Models</Link>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden sm:block text-sm font-medium hover:text-white/80 transition-colors">
              Login
            </Link>
            <Link 
              href="/get-started" 
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center relative z-10 pt-24 px-4 sm:px-6">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-button w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-blue-200">Instant Funding Available</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                Unlock Your
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Trading Potential
              </span>
            </h1>
            
            <p className="text-lg text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience the new standard in prop trading. Instant funding, transparent rules, and up to 90% profit split. Join the elite traders at Aphore Funded today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link 
                href="#"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold text-lg shadow-[0_0_40px_rgba(234,88,12,0.3)] hover:shadow-[0_0_60px_rgba(234,88,12,0.5)] transition-all transform hover:-translate-y-1"
              >
                Start Your Challenge
              </Link>
              <Link 
                href="#"
                className="w-full sm:w-auto px-8 py-4 rounded-xl glass-button text-white font-semibold text-lg hover:bg-white/10 transition-all"
              >
                View Rules
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">$100M+</span>
                <span className="text-xs text-white/40 uppercase tracking-wider">Capital Allocated</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">12k+</span>
                <span className="text-xs text-white/40 uppercase tracking-wider">Active Traders</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">4h</span>
                <span className="text-xs text-white/40 uppercase tracking-wider">Avg. Payout Time</span>
              </div>
            </div>
          </div>

          {/* Right Visual (Glass Card) */}
          <div className="relative hidden lg:block perspective-1000">
             {/* Decorative Elements behind card */}
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-orange-500/20 rounded-[2rem] blur-xl transform rotate-3 scale-95" />
             
             {/* Main Card */}
             <div className="relative glass-panel rounded-[2rem] p-8 border-t border-l border-white/20 transform transition-transform hover:scale-[1.01] duration-500">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex flex-col">
                    <span className="text-sm text-white/40">Current Balance</span>
                    <span className="text-3xl font-bold text-white">$200,000.00</span>
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/30">
                    +12.5%
                  </div>
                </div>

                {/* Fake Chart Area */}
                <div className="h-48 w-full bg-gradient-to-b from-blue-500/10 to-transparent rounded-xl border border-white/5 relative overflow-hidden mb-8 group">
                  <div className="absolute inset-0 flex items-end px-2 pb-2 gap-2">
                    {[40, 65, 55, 80, 70, 90, 85, 95, 100].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-blue-500/50 rounded-t-sm hover:bg-blue-400 transition-colors"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  {/* Line Overlay */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                    <path d="M0 150 C 50 150, 100 100, 150 110 C 200 120, 250 50, 300 60 C 350 70, 400 20, 450 30 L 450 200 L 0 200 Z" fill="url(#gradient)" opacity="0.2" />
                    <defs>
                      <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                      <span className="text-xs text-white/60">Profit Target</span>
                    </div>
                    <span className="text-xl font-semibold">$20,000</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-xs text-white/60">Daily Drawdown</span>
                    </div>
                    <span className="text-xl font-semibold">0.0%</span>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -right-6 top-20 glass-panel px-4 py-3 rounded-xl flex items-center gap-3 animate-bounce shadow-lg">
                   <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-xs font-bold">
                     🚀
                   </div>
                   <div className="flex flex-col">
                     <span className="text-xs font-bold text-white">Payout Processed</span>
                     <span className="text-[10px] text-white/60">Just now</span>
                   </div>
                </div>

             </div>
          </div>

        </div>
      </main>
      
      <section className="relative z-10 px-6 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Trust & Credibility</h2>
            <div className="h-px flex-1 mx-6 bg-gradient-to-r from-blue-500/40 to-orange-500/40" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-panel rounded-2xl p-6 transition-all hover:-translate-y-1 hover:bg-white/8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" className="opacity-90">
                  <path d="M12 3c-4.97 0-9 2.91-9 6.5S7.03 16 12 16s9-2.91 9-6.5S16.97 3 12 3zm0 11.5c-3.59 0-6.5-1.79-6.5-4S8.41 7.5 12 7.5s6.5 1.79 6.5 4-2.91 4-6.5 4z" fill="currentColor"/>
                  <path d="M12 17c-3.31 0-6.15-1.2-7.75-3 .65 3.25 3.98 6 7.75 6s7.1-2.75 7.75-6c-1.6 1.8-4.44 3-7.75 3z" fill="currentColor"/>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white font-semibold">Capital Availability</span>
                <span className="text-white/60 text-sm">Deep liquidity ready to scale.</span>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6 transition-all hover:-translate-y-1 hover:bg-white/8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" className="opacity-90">
                  <path d="M13 3L4 14h7l-2 7 11-11h-7l2-7z" fill="currentColor"/>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white font-semibold">Fast Payouts</span>
                <span className="text-white/60 text-sm">Lightning-quick, reliable withdrawals.</span>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6 transition-all hover:-translate-y-1 hover:bg-white/8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" className="opacity-90">
                  <path d="M6 2h9l3 3v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h10V6h-3V4H6z" fill="currentColor"/>
                  <rect x="7" y="9" width="8" height="1.8" rx="0.9" fill="currentColor"/>
                  <rect x="7" y="12.5" width="8" height="1.8" rx="0.9" fill="currentColor"/>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white font-semibold">Transparent Rules</span>
                <span className="text-white/60 text-sm">Clear, fair, and consistent.</span>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6 transition-all hover:-translate-y-1 hover:bg-white/8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" className="opacity-90">
                  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 3a15 15 0 0 1 0 18M3 12h18" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white font-semibold">Global Traders</span>
                <span className="text-white/60 text-sm">Worldwide talent, local support.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="relative z-10 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">How It Works</h2>
            <div className="h-px flex-1 mx-6 bg-gradient-to-r from-blue-500/40 to-orange-500/40" />
          </div>
          <div className="glass-panel glass-glow rounded-2xl p-8">
            <p className="text-white/70 text-base sm:text-lg max-w-3xl">
              Choose a challenge, trade with clear rules, get funded, and scale over time. 
              For the full journey with examples and rules, visit the dedicated page.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">Choose Challenge</span>
              <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">Trade Within Limits</span>
              <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">Get Funded</span>
              <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">Scale & Payouts</span>
            </div>
            <div className="mt-8">
              <Link href="/how-it-works" className="cta-primary w-fit">
                Explore How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      
      
      
      
      <section className="relative z-10 px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Trader Dashboard Preview</h2>
            <div className="h-px flex-1 mx-6 bg-gradient-to-r from-blue-500/40 to-orange-500/40" />
          </div>
          <div className="glass-panel glass-glow rounded-[2rem] p-8 border-t border-l border-white/20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-bold">A</div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold">Aphore Funded — Pro Account</span>
                  <span className="text-white/40 text-xs">ID: AF-100K-PRO</span>
                </div>
              </div>
              <div className="px-3 py-1 rounded-lg bg-green-500/15 text-green-400 text-xs font-semibold border border-green-500/30">Funded</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-white/50">Balance</span>
                <div className="text-xl font-bold text-white">$102,340.28</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-white/50">Today’s PnL</span>
                <div className="text-xl font-bold text-orange-400">+$1,240.62</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-white/50">Total Profit</span>
                <div className="text-xl font-bold text-white">$12,840.90</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-white/50">Daily Drawdown</span>
                <div className="text-xl font-bold text-white">2.1%</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-white/50">Max Drawdown</span>
                <div className="text-xl font-bold text-white">7.8%</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-white/50">Account Status</span>
                <div className="text-xl font-bold text-blue-400">Active</div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="h-56 w-full bg-gradient-to-b from-blue-500/10 to-transparent rounded-xl border border-white/10 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 flex items-end px-2 pb-2 gap-2">
                    {[30, 55, 45, 70, 62, 80, 76, 88, 95, 90, 96].map((h, i) => (
                      <div key={i} className="flex-1 bg-blue-500/50 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                    <path d="M0 150 C 40 120, 80 160, 120 130 C 160 100, 200 140, 240 110 C 280 80, 320 130, 360 100 C 400 85, 440 120, 480 90 L 480 200 L 0 200 Z" fill="url(#lineGradient)" opacity="0.18" />
                    <defs>
                      <linearGradient id="lineGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5">
                  <div className="grid grid-cols-4 gap-3 px-4 py-3 text-xs text-white/60">
                    <div>Symbol</div>
                    <div>Size</div>
                    <div>PnL</div>
                    <div>Status</div>
                  </div>
                  {[
                    { s: "EURUSD", sz: "1.20", pnl: "+$420.30", st: "Open", c: "text-green-400" },
                    { s: "XAUUSD", sz: "0.80", pnl: "-$85.10", st: "Open", c: "text-orange-300" },
                    { s: "US100", sz: "2.00", pnl: "+$1,120.00", st: "Closed", c: "text-green-400" },
                  ].map((r, i) => (
                    <div key={i} className="grid grid-cols-4 gap-3 px-4 py-3 border-t border-white/5 text-sm">
                      <div className="text-white/80">{r.s}</div>
                      <div className="text-white/80">{r.sz} lots</div>
                      <div className={r.c}>{r.pnl}</div>
                      <div className="text-white/70">{r.st}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs text-white/60">Profit Split</div>
                  <div className="text-2xl font-bold text-orange-400">90%</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs text-white/60">Target Progress</div>
                  <div className="mt-2 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[68%] bg-gradient-to-r from-orange-500 to-orange-600" />
                  </div>
                  <div className="mt-2 text-xs text-white/60">68% of $10,000 target</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs text-white/60">Risk</div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-white/80 text-sm">Exposure</span>
                    <span className="text-blue-400 font-semibold">Moderate</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-white/80 text-sm">Win Rate</span>
                    <span className="text-white font-semibold">58%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="relative z-10 px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2rem] glass-panel glass-glow p-10 md:p-14 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-orange-600/15 rounded-full blur-[120px]" />
            <div className="absolute -bottom-24 -left-24 w-[420px] h-[420px] bg-blue-600/15 rounded-full blur-[120px]" />
            <div className="relative z-10 text-center">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                Trade With Confidence. Get Funded Fast.
              </h3>
              <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                Transparent rules, instant funding pathways, and premium support for serious traders.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="#" className="cta-primary text-lg lg:text-xl">
                  Start Your Challenge
                </Link>
                <Link href="#" className="cta-secondary">
                  View Rules
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="relative z-10 px-6 pb-12">
        <div className="max-w-7xl mx-auto glass-panel glass-glow rounded-[2rem] border border-white/15">
          <div className="px-8 py-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-bold">A</div>
                  <div className="text-xl font-bold text-white">Aphore Funded</div>
                </div>
                <p className="mt-4 text-sm text-white/50 max-w-md">
                  Trading involves significant risk. Past performance does not guarantee future results. Ensure you understand risks, rules, and conditions before participating.
                </p>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <Link href="#" className="text-white/70 hover:text-white transition-colors">Home</Link>
                  <Link href="#" className="text-white/70 hover:text-white transition-colors">Challenges</Link>
                  <Link href="#" className="text-white/70 hover:text-white transition-colors">Rules</Link>
                  <Link href="#" className="text-white/70 hover:text-white transition-colors">FAQ</Link>
                  <Link href="#" className="text-white/70 hover:text-white transition-colors">Contact</Link>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-5">
                  <Link href="#" className="text-white/60 hover:text-orange-500 transition-colors" aria-label="Discord">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 5.5a17 17 0 0 0-3.9-1.2l-.4.8a15 15 0 0 1 2.8.8c-1.9-.3-3.8-.3-5.5 0l-.5-.8A17 17 0 0 0 7 5.5C3 11.1 2.5 16.2 2.6 16.1a17 17 0 0 0 5.8 3l.7-.9a10.7 10.7 0 0 1-2.6-1.3c.2.2 1.5.9 4.4 1.2a12.5 12.5 0 0 0 5.3-.3l.7.8a17 17 0 0 0 5.8-3c.1.1-.4-5-4.7-10.4ZM9.4 13.3c-.7 0-1.3-.7-1.3-1.6s.6-1.6 1.3-1.6 1.3.7 1.3 1.6-.6 1.6-1.3 1.6Zm5.3 0c-.7 0-1.3-.7-1.3-1.6s.6-1.6 1.3-1.6 1.3.7 1.3 1.6-.6 1.6-1.3 1.6Z"/>
                    </svg>
                  </Link>
                  <Link href="#" className="text-white/60 hover:text-blue-500 transition-colors" aria-label="Instagram">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="3" y="3" width="18" height="18" rx="5"/>
                      <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="17.5" cy="6.5" r="1.2"/>
                    </svg>
                  </Link>
                  <Link href="#" className="text-white/60 hover:text-orange-500 transition-colors" aria-label="Twitter">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.6 7.9c.4-.3.7-.7.9-1.2-.4.3-.9.5-1.4.6a2.3 2.3 0 0 0-4 1.6c0 .2 0 .4.1.6-1.9-.1-3.5-1-4.6-2.5-.4.7-.2 1.6.4 2.1-.3 0-.6-.1-.9-.3 0 .9.6 1.7 1.5 1.9-.3.1-.6.1-.8.1.2.8.9 1.4 1.7 1.5-.6.5-1.3.8-2.1.8h-.4a6.4 6.4 0 0 0 9.8-5.5Z"/>
                    </svg>
                  </Link>
                  <Link href="#" className="text-white/60 hover:text-blue-500 transition-colors" aria-label="Telegram">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.9 3.5 2.4 11.2c-1 .4-1 1.6.1 1.9l4.7 1.4 1.8 5.6c.3 1 1.6 1.1 2 .2l2.5-5 4.8 3.6c.8.6 1.9.1 2.1-.9l2.6-12c.2-1-1-1.8-2.1-1.5Z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-white/50">
                © {new Date().getFullYear()} Aphore Funded. All rights reserved.
              </div>
              <div className="text-xs text-white/40">
                Proprietary trading services and evaluation accounts are not financial advice. Participation is at your own risk.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
