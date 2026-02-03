import FadeIn from '@/components/FadeIn';
import LogTerminal from '@/components/LogTerminal';

export default function TLTP() {
  return (
    <div className="min-h-screen w-full bg-[#050505] text-[#ededed] pt-32 pb-20 px-8">
      
      {/* 1. HERO: THE RAW NUMBERS */}
      <FadeIn>
        <div className="max-w-6xl mx-auto mb-32 border-b border-gray-800 pb-20">
          <span className="font-sans text-blue-500 tracking-widest uppercase font-bold text-sm mb-4 block">
            The Life Transition Project
          </span>
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-12 uppercase leading-none">
            The Grind.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <span className="block text-6xl md:text-8xl font-display font-bold text-white mb-2">1,850</span>
              <span className="text-gray-500 uppercase tracking-widest text-sm">Hours Logged</span>
            </div>
            <div>
              <span className="block text-6xl md:text-8xl font-display font-bold text-white mb-2">180</span>
              <span className="text-gray-500 uppercase tracking-widest text-sm">Days of "Monk Mode"</span>
            </div>
            <div>
              <span className="block text-6xl md:text-8xl font-display font-bold text-white mb-2">0</span>
              <span className="text-gray-500 uppercase tracking-widest text-sm">Days Off</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 2. THE MISSION STATEMENT */}
      <FadeIn>
        <div className="max-w-4xl mx-auto mb-32 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 italic">
            "I will not just learn to code. I will re-engineer my entire career."
          </h2>
          <p className="font-sans text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            After leaving my Data Analyst role at H&M in London, I returned to Korea with a singular mission: to transition into a visa-sponsored Software Engineer role in Europe by April 2026. This project is the documentation of that metamorphosis.
          </p>
        </div>
      </FadeIn>

      {/* 3. THE PHASES (Scott Young Style Structure) */}
      <div className="max-w-5xl mx-auto space-y-24 mb-32">
        
        {/* Phase 1 */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 group hover:opacity-100 transition-opacity">
            <div className="text-right md:text-right">
              <span className="block text-blue-500 font-bold font-display text-xl">PHASE 1</span>
              <span className="text-sm text-gray-500">Aug 1 — Oct 16</span>
            </div>
            <div className="md:col-span-3 border-l border-gray-800 pl-8 pb-8 group-hover:border-blue-500 transition-colors duration-500">
              <h3 className="text-3xl font-display text-white mb-4">The Prep</h3>
              <p className="text-gray-400 mb-6">
                600 Hours. The goal was foundational saturation. I treated computer science like a full-time job.
              </p>
              <ul className="grid grid-cols-2 gap-4 text-sm text-gray-400 font-mono">
                <li>• CS50 & Fundamentals</li>
                <li>• Python Mastery</li>
                <li>• Data Structures Basics</li>
                <li>• "Grokking Algorithms"</li>
              </ul>
            </div>
          </div>
        </FadeIn>

        {/* Phase 2 */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 group">
            <div className="text-right md:text-right">
              <span className="block text-blue-500 font-bold font-display text-xl">PHASE 2</span>
              <span className="text-sm text-gray-500">Oct 17 — Jan 31</span>
            </div>
            <div className="md:col-span-3 border-l border-gray-800 pl-8 pb-8 group-hover:border-blue-500 transition-colors duration-500">
              <h3 className="text-3xl font-display text-white mb-4">The Forge</h3>
              <p className="text-gray-400 mb-6">
                1,250 Hours. The hardest phase. I cut off all socialization. No friends. No drinking. Just code.
                Pivoted to <span className="text-white font-bold">Java & Spring Boot</span> to build enterprise-grade skills.
              </p>
              <ul className="grid grid-cols-2 gap-4 text-sm text-gray-400 font-mono">
                <li>• Java 17 & Spring Boot 3</li>
                <li>• Built "The Baker" (Full Stack)</li>
                <li>• 150+ Neetcode Problems</li>
                <li>• System Design (Scale)</li>
              </ul>
            </div>
          </div>
        </FadeIn>

        {/* Phase 3 */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 group">
            <div className="text-right md:text-right">
              <span className="block text-white font-bold font-display text-xl">PHASE 3</span>
              <span className="text-sm text-gray-500">Feb 1 — Apr 30</span>
            </div>
            <div className="md:col-span-3 border-l-4 border-white pl-8 pb-8 bg-white/5 rounded-r-xl p-8">
              <h3 className="text-3xl font-display text-white mb-4">The Launch</h3>
              <p className="text-gray-400 mb-6">
                Current Status. The objective is clear: <span className="text-white">Secure 3 Offers.</span>
                I am leveraging my "Hybrid" profile—combining H&M business strategy with backend engineering.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">Active Job Search</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">Interview Prep</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* 4. THE TERMINAL LOG (The "Evidence") */}
      <FadeIn>
        <div className="max-w-6xl mx-auto pt-20 border-t border-gray-800">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-white mb-4">The Evidence.</h2>
            <p className="text-gray-400">Every single day. Documented.</p>
          </div>
          
          <LogTerminal />
        </div>
      </FadeIn>

    </div>
  );
}