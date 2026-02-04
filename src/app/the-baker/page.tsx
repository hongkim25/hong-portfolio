import FadeIn from '@/components/FadeIn';

export default function TheBaker() {
  return (
    <div className="min-h-screen w-full bg-[var(--page-bg)] text-[var(--page-text)]">

      {/* 1. HERO - No FadeIn to prevent flash */}
      <div className="w-full py-20 px-8 text-center">
        <span className="font-sans text-[#F2C946] font-semibold uppercase text-xl md:text-2xl block mb-4">
          Smart Retail Operations Platform
        </span>
        <h1 className="text-6xl md:text-[8rem] text-[#6B4423] font-bold uppercase tracking-tighter leading-none mb-8">
          The Baker
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto font-serif italic opacity-80">
          A production platform for a real bakery — built to improve retention and reduce leftovers through better daily decisions.
        </p>
      </div>

      {/* 2. Demo Video */}
        <div className="w-full bg-[var(--page-bg)] py-0 px-8">
          <div className="max-w-4xl mx-auto">
            <video
              className="w-full rounded-lg shadow-2xl"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/thebaker.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

      {/* 3. CTA BUTTONS */}
        <div className="w-full py-16 px-8">
          <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
            <a href="https://thebaker.cc" target="_blank" rel="noopener noreferrer"
               className="px-6 py-3 bg-[#6B4423] text-white text-xl md:text-2xl font-bold uppercase hover:bg-yellow-100 hover:text-black transition-colors">
              Visit Live Site
            </a>
            <a href="https://github.com/hongkim25/thebaker-portfolio" target="_blank" rel="noopener noreferrer"
               className="px-6 py-3 bg-[#6B4423] text-white text-xl md:text-2xl font-bold uppercase hover:bg-yellow-100 hover:text-black transition-colors">
              View GitHub
            </a>
          </div>
        </div>


      {/* 2. DUAL FEATURES */}
      <FadeIn>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="bg-white text-black p-12 md:p-16">
          <span className="text-sm uppercase tracking-widest opacity-60 block mb-2">For Customers</span>
          <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">
            Loyalty + Visibility
          </h3>
          <p className="text-lg md:text-xl">
            Real-time menu visibility, reservations, and a points system that rewards repeat visits.
          </p>
        </div>
        <div className="bg-[#47280e] text-white p-12 md:p-16">
          <span className="text-sm uppercase tracking-widest opacity-60 block mb-2">For Staff</span>
          <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">
            AI Dashboard
          </h3>
          <p className="text-lg md:text-xl">
            Production recommendations using sales history + weather signals. Less guesswork, less waste.
          </p>
        </div>
      </div>
      </FadeIn>
      
      {/* 3. PROOF SECTION - The Numbers */}
        <div className="w-full text-black py-20 px-8">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-gray-500 block mb-2">First Week Live</span>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
              Early Signals
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center">
              <span className="block text-5xl md:text-7xl font-bold font-mono text-[#47280e]">70%</span>
              <span className="text-sm md:text-base text-gray-600 uppercase tracking-wide">Opt-in Rate</span>
            </div>
            <div className="text-center">
              <span className="block text-5xl md:text-7xl font-bold font-mono text-[#47280e]">200+</span>
              <span className="text-sm md:text-base text-gray-600 uppercase tracking-wide">Real Customers</span>
            </div>
            <div className="text-center">
              <span className="block text-5xl md:text-7xl font-bold font-mono text-[#47280e]">300+</span>
              <span className="text-sm md:text-base text-gray-600 uppercase tracking-wide">Point Records</span>
            </div>
            <div className="text-center">
              <span className="block text-5xl md:text-7xl font-bold font-mono text-[#47280e]">100+</span>
              <span className="text-sm md:text-base text-gray-600 uppercase tracking-wide">Repeat Visits</span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center border-t border-black/10 pt-8">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              All numbers from <span className="font-bold">production database records</span> — actual purchases and point issuance, not demo data.
              The core goal is retention, and repeat visits showed up immediately.
            </p>
          </div>
        </div>

      {/* 6. PROBLEM & SOLUTION - Two columns */}
      <FadeIn>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Problem - Left */}
          <div className="bg-[#47280e] text-white p-12 md:p-16">
            <span className="text-sm uppercase tracking-widest text-red-500 block mb-4">The Problem</span>
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-8 leading-none">
              Two Critical Failures
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-6">
                <span className="font-bold text-xl block mb-1">Customer Friction</span>
                <p className="text-gray-400">Unsure if open, no inventory visibility, wasted trips.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-6">
                <span className="font-bold text-xl block mb-1">Operational Waste</span>
                <p className="text-gray-400">Over-production due to lack of historical data.</p>
              </div>
            </div>
          </div>

          {/* Solution - Right */}
          <div className="bg-white text-black p-12 md:p-16">
            <span className="text-sm uppercase tracking-widest text-[#DEAE16] block mb-4">The Solution</span>
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-8 leading-none">
              Unified Platform
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-[#DEAE16] pl-6">
                <span className="font-bold text-xl block mb-1">Customer Portal</span>
                <p className="text-gray-600">Real-time PWA for live stock visibility and reservations.</p>
              </div>
              <div className="border-l-4 border-[#DEAE16] pl-6">
                <span className="font-bold text-xl block mb-1">Staff Dashboard</span>
                <p className="text-gray-600">AI-assisted decision support for daily production levels.</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 7. DUAL-CORE INTRO - Full width */}
        <div className="w-full text-black py-20 px-8 text-center">
          <span className="text-sm uppercase tracking-widest opacity-60 block mb-4">Under The Hood</span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-4">
            Dual-Core<br />Architecture
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Two models working in parallel to optimize production decisions.
          </p>
        </div>

      {/* 8. DEMAND & RISK MODELS - Two columns */}
      <FadeIn>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Demand Model - Left */}
          <div className="bg-white text-[#47280e] p-12 md:p-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl md:text-7xl font-bold tracking-tight text-[#DEAE16]">01</span>
              <div>
                <span className="text-sm uppercase tracking-widest text-gray-500 block">Core</span>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
                  Demand Model
                </h3>
              </div>
            </div>
            <div className="bg-[#DEAE16]/10 border border-[#DEAE16]/30 p-4 font-mono text-[#DEAE16] text-base md:text-lg mb-6">
              Goal: Predict Sales
            </div>
            <div className="space-y-3 text-sm md:text-base">
              <div className="flex gap-2">
                <span className="text-[#DEAE16]">→</span>
                <span><span className="text-[#47280e] font-bold">Algorithm:</span> <span className="text-gray-700">Dynamic Regression (Seasonality + External Signals)</span></span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#DEAE16]">→</span>
                <span><span className="text-[#47280e] font-bold">Day of Week:</span> <span className="text-gray-700">One-hot encoded vectors</span></span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#DEAE16]">→</span>
                <span><span className="text-[#47280e] font-bold">Weather:</span> <span className="text-gray-700">Categorical coefficients</span></span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#DEAE16]">→</span>
                <span><span className="text-[#47280e] font-bold">Output:</span> <span className="text-gray-700">Daily production targets</span></span>
              </div>
            </div>
          </div>

          {/* Risk Model - Right */}
          <div className="bg-[#47280e] text-white p-12 md:p-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl md:text-7xl font-bold tracking-tight text-[#DEAE16]">02</span>
              <div>
                <span className="text-sm uppercase tracking-widest text-gray-500 block">Core</span>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
                  Risk Model
                </h3>
              </div>
            </div>
            <div className="bg-[#DEAE16]/10 border border-[#DEAE16]/30 p-4 font-mono text-[#DEAE16] text-base md:text-lg mb-6">
              Goal: Quantify Inventory Risk
            </div>
            <div className="space-y-3 text-sm md:text-base">
              <div className="flex gap-2">
                <span className="text-[#DEAE16]">→</span>
                <span><span className="font-bold">Active-Day Filtering:</span> <span className="text-gray-200">Isolates production {'>'} 0</span></span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#DEAE16]">→</span>
                <span><span className="font-bold">Risk Score:</span> <span className="text-gray-200">Average loss per active day</span></span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#DEAE16]">→</span>
                <span><span className="font-bold">Focus:</span> <span className="text-gray-200">Identifies high-risk, high-waste items</span></span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 9. TECH STACK - Full width */}
        <div className="w-full py-20 px-8">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-gray-500 block mb-2">Built With</span>
            <h3 className="text-4xl md:text-6xl text-gray-800 font-bold uppercase tracking-tighter">
              Tech Stack
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            <div className="text-center p-6 border border-white/10 hover:border-[#DEAE16] transition-colors">
              <span className="block text-[#DEAE16] text-2xl md:text-3xl font-bold mb-2">Java 17</span>
              <span className="text-gray-500 text-sm uppercase tracking-wide">Backend</span>
            </div>
            <div className="text-center p-6 border border-white/10 hover:border-[#DEAE16] transition-colors">
              <span className="block text-[#DEAE16] text-2xl md:text-3xl font-bold mb-2">Spring</span>
              <span className="text-gray-500 text-sm uppercase tracking-wide">Boot 3.2</span>
            </div>
            <div className="text-center p-6 border border-white/10 hover:border-[#DEAE16] transition-colors">
              <span className="block text-[#DEAE16] text-2xl md:text-3xl font-bold mb-2">Python</span>
              <span className="text-gray-500 text-sm uppercase tracking-wide">ML Pipeline</span>
            </div>
            <div className="text-center p-6 border border-white/10 hover:border-[#DEAE16] transition-colors">
              <span className="block text-[#DEAE16] text-2xl md:text-3xl font-bold mb-2">PostgreSQL</span>
              <span className="text-gray-500 text-sm uppercase tracking-wide">Database</span>
            </div>
            <div className="text-center p-6 border border-white/10 hover:border-[#DEAE16] transition-colors">
              <span className="block text-[#DEAE16] text-2xl md:text-3xl font-bold mb-2">Render</span>
              <span className="text-gray-500 text-sm uppercase tracking-wide">Deployment</span>
            </div>
          </div>
        </div>
    </div>
  );
}
