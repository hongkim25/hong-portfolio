import FadeIn from '@/components/FadeIn';
import LogTerminal from '@/components/LogTerminal';

export default function TLTP() {
  return (
    <div className="min-h-screen w-full bg-[#050505] text-center text-[#ededed] pt-32 pb-20 px-8">
      
      {/* 1. HERO: THE RAW NUMBERS */}
      <FadeIn>
        <div className="mb-32 border-b border-gray-800 pb-20">
          <span className="font-sans text-blue-500 tracking-wide uppercase font-bold text-lg block">
            The Life Transition Project
          </span>
          <h1 className="font-display text-7xl md:text-9xl font-bold text-white mb-10 uppercase leading-none">
            TLTP
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <span className="block text-4xl md:text-7xl font-display font-mono text-white mb-2">1,900</span>
              <span className="text-gray-200 uppercase tracking-wider text-xl">Hours Logged</span>
            </div>
            <div>
              <span className="block text-4xl md:text-7xl font-display font-mono text-white mb-2">188</span>
              <span className="text-gray-200 uppercase tracking-wider text-xl">Days of "Monk Mode"</span>
            </div>
            <div>
              <span className="block text-4xl md:text-7xl font-display font-mono text-white mb-2">0</span>
              <span className="text-gray-200 uppercase tracking-wider text-xl">Day Off</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 2. THE MISSION STATEMENT */}
      <FadeIn>
        <div className="mb-32 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 italic">
            "Building feels great."
          </h2>
          <p className="font-sans text-xl text-gray-200 leading-relaxed">
            After leaving my Data Analyst role at H&M in London, I temporarily returned to Korea with a singular mission: to transition into a Software Engineer.
            <br />
            However cringey or weird the name sounds, The Life Transition Project (TLTP) has been literally designed to transition my life and push myself out of comfort zone where I took 10 different intro Python courses to print "Hello World!".
            <br /> <br />
            TLTP has been self-directed intensive learning that I gave myself 9 months to fully focus on learning.
            <br />
            Gemini, ChatGPT, and Claude have been amazing teachers throughout the TLTP journey.
            <br />
            However soon it will be that they will take my job (!), I believe I am responsible to make the best use of them, learn every single day, and do something good.
          </p>
        </div>
      </FadeIn>

      {/* 3. THE PHASES (Scott Young Style Structure) */}
      <div className="space-y-24 mb-32">
        
        {/* Phase 1 */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 group hover:opacity-100 transition-opacity">
            <div className="text-right md:text-right">
              <span className="block text-blue-500 font-bold font-display text-3xl">PHASE 1</span>
              <span className="text-sm text-gray-500">Aug 1 — Oct 16</span>
            </div>
            <div className="md:col-span-3 border-l border-gray-800 pl-8 pb-8 group-hover:border-blue-500 transition-colors duration-500">
              <h3 className="text-3xl font-display text-white mb-4">The Prep</h3>
              <p className="text-gray-400 mb-6">
                600 Hours. The goal was foundational saturation. I used progressive overload to get used to the 'new life' I chose.
                <br />
                I initially tried a bootcamp, but then realized that self-directed learning would fit me much better, especially when I am trying to return to Europe afer learning.
              </p>
              <ul className="grid grid-cols-3 gap-2 text-sm text-gray-200 font-mono">
                <li>• Fundamentals</li>
                <li>• Python</li>
                <li>• Programmers Bootcamp</li>
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
              <span className="block text-blue-500 font-bold font-display text-3xl">PHASE 2</span>
              <span className="text-sm text-gray-500">Oct 17 — Jan 31</span>
            </div>
            <div className="md:col-span-3 border-l border-gray-800 pl-8 pb-8 group-hover:border-blue-500 transition-colors duration-500">
              <h3 className="text-3xl font-display text-white mb-4">The Forge</h3>
              <p className="text-gray-400 mb-6">
                Pivoted to <span className="text-white font-bold">Java & Spring Boot</span> to build enterprise-grade skills.
              </p>
              <ul className="grid grid-cols-3 gap-2 text-sm text-gray-200 font-mono">
                <li>• Java 17 & Spring Boot 3</li>
                <li>• Built "The Baker" website (Full Stack + ML)</li>
                <li>• Spanish SIELE B1 (Passed on 15 Jan!)</li>
                <li>• Leetcode</li>
                <li>• System Design (Scale)</li>
              </ul>
            </div>
          </div>
        </FadeIn>

        {/* Phase 3 */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 group">
            <div className="text-right md:text-right">
              <span className="block text-white font-bold font-display text-3xl">PHASE 3</span>
              <span className="text-sm text-gray-500">Feb 1 — Apr 30</span>
            </div>
            <div className="md:col-span-3 border-l-4 border-white pl-8 pb-8 bg-white/5 p-8">
              <h3 className="text-3xl font-display text-white mb-4">The Launch</h3>
              <p className="text-gray-400 mb-6">
                Current Status. The objective: <span className="text-white">Secure Offer.</span><br />
                I am leveraging my hybrid profile combining economics/business education, data analysis background with backend engineering.
              </p>
              <div className="flex gap-2 flex-wrap justify-center">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold">Active Job Search</span>
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold">Interview Prep</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* 4. THE TERMINAL LOG (The "Evidence") */}
      <FadeIn>
        <div className="pt-20 border-t border-gray-800">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-white mb-4">The Evidence.</h2>
            <p className="text-gray-400">Every single day documented.</p>
          </div>
          
          <LogTerminal />
        </div>
      </FadeIn>

    </div>
  );
}