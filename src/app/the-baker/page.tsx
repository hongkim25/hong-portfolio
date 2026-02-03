import FadeIn from '@/components/FadeIn';

export default function TheBaker() {
  return (
    <div className="min-h-screen w-full bg-[#050505] text-[#ededed] pt-32 pb-20 px-8">
      
      {/* 1. HERO SECTION */}
      <FadeIn>
        <div className="max-w-5xl mx-auto mb-24 border-b border-gray-800 pb-12">
          <span className="font-sans text-blue-500 tracking-widest uppercase font-bold text-sm mb-4 block">
            Project 01 • Production System
          </span>
          <h1 className="font-display text-7xl md:text-9xl font-bold uppercase tracking-tighter text-white mb-6">
            The<br />Baker.
          </h1>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-300 italic mb-8">
            Smart Retail Operations Platform
          </h2>
          <p className="font-sans text-xl text-gray-400 leading-relaxed max-w-3xl">
            A production-grade full-stack application that bridges the gap between <span className="text-white">Customer Experience (CX)</span> and <span className="text-white">Operational Efficiency</span>.
            It solves the "Small Bakery Paradox": balancing demand volatility with the high cost of food waste.
          </p>
          
          <div className="mt-12 flex gap-4">
             {/* Replace with real links later */}
             <a href="#" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
               Visit Live Site ↗
             </a>
             <a href="#" className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors">
               View GitHub
             </a>
          </div>
        </div>
      </FadeIn>

      {/* 2. THE PROBLEM & SOLUTION (Grid) */}
      <div className="max-w-5xl mx-auto mb-32">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="font-display text-2xl text-white mb-4 uppercase">The Problem</h3>
              <p className="text-gray-400 leading-relaxed">
                Small bakeries face two critical failures:
                <br /><br />
                <span className="text-white font-bold">1. Customer Friction:</span> Unsure if open, no inventory visibility, wasted trips.
                <br />
                <span className="text-white font-bold">2. Operational Waste:</span> Over-production due to lack of data.
              </p>
            </div>
            <div className="bg-blue-900/10 p-8 rounded-2xl border border-blue-500/20">
              <h3 className="font-display text-2xl text-blue-400 mb-4 uppercase">The Solution</h3>
              <p className="text-gray-300 leading-relaxed">
                A unified <strong>Hybrid Monolith</strong> platform:
                <br /><br />
                <strong className="text-white">Customer Portal:</strong> A Real-time PWA for live stock visibility and reservations.
                <br />
                <strong className="text-white">Staff Dashboard:</strong> An AI-assisted decision support system recommending daily production levels.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* 3. THE "DUAL-CORE" LOGIC (The Technical Highlight) */}
      <FadeIn>
        <div className="max-w-6xl mx-auto mb-32">
          <h2 className="font-serif text-4xl text-white mb-12 text-center">The "Dual-Core" Prediction Logic</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Core 1: Demand Model */}
            <div className="p-8 border-l-2 border-blue-500 bg-white/5">
              <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2 block">Core 1: Demand Model</span>
              <h3 className="text-2xl font-bold text-white mb-4">Dynamic Regression</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Objective: Predict Sales Velocity ("How many <em>can</em> we sell?").
              </p>
              
              <div className="bg-black/50 p-4 rounded-lg font-mono text-xs text-green-400 mb-6 border border-white/10">
                y = β0 + β1(x1) + ... + βn(xn)
              </div>

              <ul className="space-y-2 text-sm text-gray-400">
                <li>• <strong className="text-white">Day of Week:</strong> One-hot encoded vectors (Saturday_Boost).</li>
                <li>• <strong className="text-white">Weather:</strong> Categorical mapping (Rain, Snow) to impact coefficients.</li>
                <li>• <strong className="text-white">Logic:</strong> Base Bias + Weighted Coefficients = Dynamic Target.</li>
              </ul>
            </div>

            {/* Core 2: Risk Model */}
            <div className="p-8 border-l-2 border-red-500 bg-white/5">
              <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-2 block">Core 2: Risk Model</span>
              <h3 className="text-2xl font-bold text-white mb-4">Sparse Data Handling</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Objective: Quantify Inventory Risk ("Probability of over-production?").
              </p>

              <div className="bg-black/50 p-4 rounded-lg font-mono text-xs text-orange-400 mb-6 border border-white/10">
                Challenge: Zero-Inflated Data (Waste events are rare)
              </div>

              <p className="text-sm text-gray-400 mb-4">
                Standard regression treats waste as outliers. My solution:
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• <strong className="text-white">Active-Day Filtering:</strong> Isolates days where production {'>'} 0.</li>
                <li>• <strong className="text-white">Risk Score:</strong> Calculates Average Loss per Active Day vs. Velocity.</li>
                <li>• <strong className="text-white">Analyst Note:</strong> Waste is operational variance, not linear weather function.</li>
              </ul>
            </div>

          </div>
        </div>
      </FadeIn>

      {/* 4. TECH STACK & CAPABILITIES */}
      <FadeIn>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-gray-800 pt-16">
          
          {/* Stack List */}
          <div>
            <h3 className="font-sans font-bold text-white uppercase tracking-widest mb-6">Tech Stack</h3>
            <ul className="space-y-4 text-gray-400 font-sans">
              <li><strong className="text-white">Backend:</strong> Java 17, Spring Boot 3.2</li>
              <li><strong className="text-white">Data Science:</strong> Python 3.x, Pandas, Scikit-Learn</li>
              <li><strong className="text-white">Frontend:</strong> Thymeleaf (SSR) + TailwindCSS</li>
              <li><strong className="text-white">Database:</strong> H2 (Dev) / PostgreSQL (Prod)</li>
              <li><strong className="text-white">DevOps:</strong> GitHub Actions (CI) → Render (CD)</li>
            </ul>
          </div>

          {/* Key Capabilities */}
          <div className="md:col-span-2 space-y-8">
            <h3 className="font-sans font-bold text-white uppercase tracking-widest mb-6">Key Capabilities</h3>
            
            <div>
              <h4 className="text-white font-bold text-lg">"What-If" Simulation Engine</h4>
              <p className="text-gray-400 text-sm mt-1">
                Staff can manually override weather parameters (e.g., switch "Sunny" to "Rain"). 
                Triggers in-memory vector recalculation <span className="text-blue-400 font-mono">(O(1))</span> without model retraining <span className="text-red-400 font-mono">(O(N))</span>.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg">Mathematical Transparency</h4>
              <p className="text-gray-400 text-sm mt-1">
                Rejects "Black Box" predictions. The UI decomposes recommendations into constituent weights so staff trust the AI.
                <br />
                <span className="font-mono text-xs text-gray-500">Prediction = Base (10) + Saturday (+2) + Rain (-1) = 11 Units</span>
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg">Automated Pipeline (CI/CD)</h4>
              <p className="text-gray-400 text-sm mt-1">
                Just-in-Time Training: Python training script runs as a pre-build step in GitHub Actions. 
                Ensures inference weights are always synchronized with the latest sales snapshot before deployment.
              </p>
            </div>

          </div>
        </div>
      </FadeIn>

    </div>
  );
}