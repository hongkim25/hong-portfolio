import FadeIn from '@/components/FadeIn';
import LogTerminal from '@/components/LogTerminal';

export default function TLTP() {
  return (
    <div className="min-h-screen w-full bg-[var(--page-bg)] text-[var(--page-text)]">

      {/* 1. HERO */}
      <div className="w-full py-20 px-8 text-center">
        <span className="text-xl md:text-2xl uppercase tracking-wide text-black block mb-4">
          The Life Transition Project
        </span>
        <h1 className="text-7xl md:text-[13rem] font-bold uppercase text-white tracking-tighter leading-none mb-6">
          TLTP
        </h1>
        <p className="text-xl md:text-3xl max-w-4xl mx-auto text-white">
          A structured transition from data analytics to software engineering.
        </p>
      </div>

      {/* 2. THE NUMBERS */}
      <div className="w-full text-black py-8 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto">
          <div className="text-center p-8 border-b md:border-b-0 md:border-r border-black/20">
            <span className="block text-6xl md:text-8xl tracking-tighter mb-2">1,900</span>
            <span className="uppercase tracking-wider text-lg font-bold opacity-70">Hours Logged</span>
          </div>
          <div className="text-center p-8 border-b md:border-b-0 md:border-r border-black/20">
            <span className="block text-6xl md:text-8xl tracking-tighter mb-2">188</span>
            <span className="uppercase tracking-wider text-lg font-bold opacity-70">Days</span>
          </div>
          <div className="text-center p-8">
            <span className="block text-6xl md:text-8xl tracking-tighter mb-2">0</span>
            <span className="uppercase tracking-wider text-lg font-bold opacity-70">Day Off</span>
          </div>
        </div>
      </div>

      {/* 3. MISSION STATEMENT */}
      <div className="w-full bg-white text-black py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-4xl italic mb-8">
            No More Tutorials. No More "Hello World."
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed text-left">
            <p>
              After leaving my Data Analyst role at H&M in London, I temporarily returned to Korea with a singular mission: <span className="font-bold text-black">transition into a Software Engineer.</span>
            </p>
            <p>
              I called it TLTP (The Life Transition Project). However cringey the name may sound, TLTP was literally designed to transition my life — to push myself out of the comfort zone where I took 10 different intro Python courses just to print "Hello World!".
            </p>
            <p>
              This is not a "study plan." It's a production-focused system designed to ship real software, document consistency, and build proof over time.
            </p>
          </div>
        </div>
      </div>

      {/* 4. THE PHASES */}
      <div className="w-full py-20 px-8">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-gray-500 block mb-2">9 Months</span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white">
            The Three Phases
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-0">
          {/* Phase 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            <div className="md:col-span-3 bg-blue-500 text-black p-8">
              <span className="text-6xl font-bold block">01</span>
              <span className="text-xl font-bold uppercase">The Prep</span>
              <span className="block text-sm opacity-70 mt-2">Aug 1 — Oct 16</span>
              <span className="block text-3xl font-bold mt-4">600h</span>
            </div>
            <div className="md:col-span-9 bg-gray-700 text-white p-8">
              <p className="text-lg text-white mb-6">
                Foundational saturation. Progressive overload to get used to the 'new life' I chose. Initially tried a bootcamp, then pivoted to self-directed learning.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 text-sm">Python</span>
                <span className="px-3 py-1 bg-white/10 text-sm">HTML, CSS, JavaScript</span>
                <span className="px-3 py-1 bg-white/10 text-sm">Data Structures</span>
                <span className="px-3 py-1 bg-white/10 text-sm">CS Fundamentals</span>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            <div className="md:col-span-3 bg-blue-600 text-white p-8">
              <span className="text-6xl font-bold block">02</span>
              <span className="text-xl font-bold uppercase">The Forge</span>
              <span className="block text-sm opacity-70 mt-2">Oct 17 — Jan 31</span>
              <span className="block text-3xl font-bold mt-4">1,250h</span>
            </div>
            <div className="md:col-span-9 bg-gray-800 text-white p-8">
              <p className="text-lg text-white mb-6">
                Pivoted to <span className="text-blue-400 font-bold">Java & Spring Boot</span> to build enterprise-grade skills. Built a production app. Passed Spanish B1.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 text-sm">Java 17</span>
                <span className="px-3 py-1 bg-white/10 text-sm">Spring Boot 3</span>
                <span className="px-3 py-1 bg-white/10 text-sm">The Baker (Full Stack)</span>
                <span className="px-3 py-1 bg-white/10 text-sm">LeetCode</span>
                <span className="px-3 py-1 bg-white/10 text-sm">Machine Learning</span>
                <span className="px-3 py-1 bg-white/10 text-sm">Spanish (SIELE B1)</span>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            <div className="md:col-span-3 bg-white text-black p-8">
              <span className="text-6xl font-bold block">03</span>
              <span className="text-xl font-bold uppercase">The Launch</span>
              <span className="block text-sm opacity-80 mt-2">Feb 1 — Apr 30</span>
              <span className="block text-3xl font-bold mt-4">NOW</span>
            </div>
            <div className="md:col-span-9 bg-[#050505] text-white p-8">
              <p className="text-lg text-white mb-6">
                Current status. Objective: <span className="text-white font-bold">Secure Offer.</span> Leveraging my hybrid profile — economics/business education + data analysis + backend engineering.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500 text-black text-sm font-bold">Active Job Search</span>
                <span className="px-3 py-1 bg-blue-500 text-black text-sm font-bold">LeetCode</span>
                <span className="px-3 py-1 bg-blue-500 text-black text-sm font-bold">Interview Prep</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. AI TEACHERS */}
      <div className="w-full bg-white text-black py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm uppercase tracking-widest text-gray-500 block mb-4">Self-directed learning</span>
          <p className="text-xl md:text-2xl leading-relaxed">
            <span className="font-bold">Gemini, ChatGPT, and Claude</span> have been amazing teachers throughout the TLTP journey. However soon it will be that they take my job (!), I believe I'm responsible to make the best use of them, learn every single day, and do something good.
          </p>
        </div>
      </div>

      {/* 6. THE TERMINAL LOG */}

      <div className="w-full bg-[#050505] py-20 px-8">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-widest text-gray-500 block mb-2">The Evidence</span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white mb-4">
            Every Single Day
          </h2>
          <p className="text-gray-400 text-lg">
            The log below is intentionally raw — a command-line style record of daily execution.
          </p>
        </div>
        <FadeIn>
        <LogTerminal />
        </FadeIn>
      </div>
      
    </div>
  );
}
