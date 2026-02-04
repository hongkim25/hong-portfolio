import FadeIn from '@/components/FadeIn';

export default function TheBaker() {
  return (
    <div className="min-h-screen w-full bg-[var(--page-bg)] text-[var(--page-text)]">

      {/* 1. HERO - Full width */}
      <FadeIn>
        <div className="w-full py-20 px-8 text-center">
          <span className="font-sans text-[#DEAE16] tracking-wide uppercase font-bold text-lg md:text-xl fomb-4 block">
            Java + Spring Boot Project
          </span>
          <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-6">
            The Baker
          </h1>
          <p className="text-xl text-gray-500 md:text-3xl">
            Smart Retail Operations Platform
          </p>
          <p className="text-xl md:text-2xl mb-8">
          A production platform for a real bakery built to improve retention and reduce leftovers through better daily decisions.
          </p>

          <div className="max-w-6xl mx-auto">
            <p className="text-lg md:text-xl">
              Customer side: loyalty, real-time menu visibility, and reservations.
            </p>
            <p className="text-lg md:text-xl mb-10">
              Staff side: a dashboard that recommends production levels using sales history + weather signals.
            </p>
            <p className="text-lg md:text-xl mb-2">
              Early signals (first week) <br />
              - ~70% adoption among in-store customers (opt-in) <br />
              - 200+ real customers served <br />
              - 300+ loyalty point records captured in SQL <br />
              - Early repeats: several customers returned and earned points 2+ times within days
            </p>
            <p className="text-lg md:text-xl mb-10">
            ~70% of purchasing customers opted in to loyalty, with 200 unique customers and 300+ point-issuance transactions recorded in production SQL (≈100 from repeat visits).
            This matters because the core goal is retention — and repeat visits showed up immediately. <br />
            All numbers above are taken from production database records (actual purchases and point issuance), not demo data or vanity sign-ups.
            </p>
          </div>  
          <div className="flex gap-4 justify-center">
            <a href="https://thebaker.cc" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border-2 border-current text-black text-lg md:text-xl font-bold hover:bg-white/100 transition-colors">
              Visit Live Site ↗
            </a>
            <a href="https://github.com/hongkim25" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border-2 border-current text-black text-lg md:text-xl font-bold hover:bg-white/100 transition-colors">
              View GitHub
            </a>
          </div>

          {/* Screenshots/GIFs - Add your images here */}
          <div className="mt-16 w-full">
            {/* Replace this placeholder with your actual images/gifs */}
            {/* Example: <img src="/baker-demo.gif" alt="The Baker Demo" className="w-full" /> */}
            <div className="border-2 border-dashed border-current/30 p-20 text-xl opacity-50">
              Screenshots / GIFs go here
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 2. PROBLEM & SOLUTION - Two columns */}
      <FadeIn>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {/* Problem - Left */}
          <div className="bg-white text-black p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
              The Problem
            </h3>
            <p className="text-lg md:text-xl mb-6">
              Small bakeries face two critical failures:
            </p>
            <p className="text-lg md:text-xl mb-3">
              <span className="font-bold">1. Customer Friction</span> — Unsure if open, no inventory visibility, wasted trips.
            </p>
            <p className="text-lg md:text-xl">
              <span className="font-bold">2. Operational Waste</span> — Over-production due to lack of data.
            </p>
          </div>

          {/* Solution - Right */}
          <div className="bg-white text-black p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
              The Solution
            </h3>
            <p className="text-lg md:text-xl mb-6">
              A unified Hybrid Monolith platform:
            </p>
            <p className="text-lg md:text-xl mb-3">
              <span className="font-bold">Customer Portal</span> — Real-time PWA for live stock visibility and reservations.
            </p>
            <p className="text-lg md:text-xl">
              <span className="font-bold">Staff Dashboard</span> — AI-assisted decision support recommending daily production levels.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* 3. DUAL-CORE INTRO - Full width */}
      <FadeIn>
        <div className="w-full py-20 px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-none mb-4">
            Dual-Core Prediction Logic
          </h2>
          <p className="text-xl md:text-2xl">
            Two models working together to optimize production decisions.
          </p>
        </div>
      </FadeIn>

      {/* 4. DEMAND & RISK MODELS - Two columns */}
      <FadeIn>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {/* Demand Model - Left */}
          <div className="bg-white text-black p-8 md:p-12 text-center">
            <span className="text-sm uppercase tracking-widest block mb-2">Core 1</span>
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
              Demand Model
            </h3>
            <p className="text-lg md:text-xl mb-6">
              Dynamic Regression — Predict Sales Velocity
            </p>
            <div className="bg-black/20 p-4 font-mono text-base md:text-lg mb-6">
              y = β0 + β1(x1) + ... + βn(xn)
            </div>
            <div className="text-base md:text-lg space-y-2">
              <p><span className="font-bold">Day of Week:</span> One-hot encoded vectors</p>
              <p><span className="font-bold">Weather:</span> Categorical mapping to coefficients</p>
              <p><span className="font-bold">Logic:</span> Base Bias + Weighted Coefficients</p>
            </div>
          </div>

          {/* Risk Model - Right */}
          <div className="bg-white text-black p-8 md:p-12 text-center">
            <span className="text-sm uppercase tracking-widest block mb-2">Core 2</span>
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
              Risk Model
            </h3>
            <p className="text-lg md:text-xl mb-6">
              Sparse Data Handling — Quantify Inventory Risk
            </p>
            <div className="bg-black/20 p-4 font-mono text-base md:text-lg mb-6">
              Challenge: Zero-Inflated Data
            </div>
            <div className="text-base md:text-lg space-y-2">
              <p><span className="font-bold">Active-Day Filtering:</span> Isolates production {'>'} 0</p>
              <p><span className="font-bold">Risk Score:</span> Avg Loss per Active Day</p>
              <p><span className="font-bold">Insight:</span> Waste is operational variance</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 5. TECH STACK - Full width */}
      <FadeIn>
        <div className="w-full py-16 px-8 text-center">
          <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
            Tech Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg md:text-xl">
            <p><span className="opacity-50">Backend:</span> Java 17, Spring Boot 3.2</p>
            <p><span className="opacity-50">Data:</span> Python 3.x, Pandas, Scikit-Learn</p>
            <p><span className="opacity-50">Frontend:</span> Thymeleaf + TailwindCSS</p>
            <p><span className="opacity-50">Database:</span> H2 / PostgreSQL</p>
            <p><span className="opacity-50">DevOps:</span> GitHub Actions → Render</p>
          </div>
        </div>
      </FadeIn>

    </div>
  );
}
