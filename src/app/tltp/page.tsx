import FadeIn from '@/components/FadeIn';
import LogTerminal from '@/components/LogTerminal';

export default function TLTP() {
  return (
    <div className="min-h-screen w-full bg-[var(--page-bg)] text-[var(--page-text)]">

      {/* 1. HERO */}
      <div className="w-full py-10 md:py-20 px-8 text-center">
        <span className="text-md md:text-2xl uppercase font-semibold text-black block mb-4">
          The Life Transition Project
        </span>
        <h1 className="text-8xl md:text-[13rem] font-bold uppercase tracking-tighter leading-none mb-6 bg-gradient-to-r from-blue-500 via-purple-700 to-pink-600 bg-clip-text text-transparent">
          TLTP
        </h1>
        <p className="text-xl md:text-3xl max-w-4xl mx-auto text-gray-800">
          A structured transition from data analytics to software engineering.
        </p>
      </div>

      {/* 2. THE NUMBERS */}
      <div className="w-full text-black py-4 px-4 md:px-8">
        <div className="grid grid-cols-3 gap-0 max-w-5xl mx-auto">
          <div className="text-center p-3 md:p-8 border-r border-black/20">
            <span className="block text-3xl md:text-8xl tracking-tighter mb-1 md:mb-2">1,900+</span>
            <span className="uppercase tracking-wider text-xs md:text-lg font-bold opacity-70">Hours</span>
          </div>
          <div className="text-center p-3 md:p-8 border-r border-black/20">
            <span className="block text-3xl md:text-8xl tracking-tighter mb-1 md:mb-2">188</span>
            <span className="uppercase tracking-wider text-xs md:text-lg font-bold opacity-70">Days</span>
          </div>
          <div className="text-center p-3 md:p-8">
            <span className="block text-3xl md:text-8xl tracking-tighter mb-1 md:mb-2">0</span>
            <span className="uppercase tracking-wider text-xs md:text-lg font-bold opacity-70">Day Off</span>
          </div>
        </div>
      </div>

      {/* 3. MISSION STATEMENT */}
      <div className="w-full bg-white text-black py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl italic mb-8">
            No More Tutorials. No More "Hello World."
          </h2>
          <div className="space-y-6 text-md md:text-xl text-gray-700 leading-relaxed text-left">
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
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-4 md:col-span-3 bg-blue-500 text-white p-4 md:p-8">
              <span className="text-3xl md:text-6xl font-bold block">01</span>
              <span className="text-sm md:text-xl font-bold uppercase">The Prep</span>
              <span className="block text-xs md:text-sm opacity-80 mt-1 md:mt-2">Aug 1 — Oct 16</span>
              <span className="block text-xl md:text-3xl font-bold mt-2 md:mt-4">600h</span>
            </div>
            <div className="col-span-8 md:col-span-9 bg-gray-700 text-white p-4 md:p-8">
              <p className="text-sm md:text-lg text-white mb-3 md:mb-6">
                Foundational immersion. Progressive overload to get used to the 'new life' I chose. Initially tried a bootcamp, then pivoted to self-directed learning.
              </p>
              <div className="flex flex-wrap gap-1 md:gap-2">
                <span className="px-2 py-1 bg-white/10 text-xs md:text-sm">Python</span>
                <span className="px-2 py-1 bg-white/10 text-xs md:text-sm">HTML, CSS, JS</span>
                <span className="px-2 py-1 bg-white/10 text-xs md:text-sm">Data Structures</span>
                <span className="px-2 py-1 bg-white/10 text-xs md:text-sm">CS Fundamentals</span>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-4 md:col-span-3 bg-blue-600 text-white p-4 md:p-8">
              <span className="text-3xl md:text-6xl font-bold block">02</span>
              <span className="text-sm md:text-xl font-bold uppercase">The Forge</span>
              <span className="block text-xs md:text-sm opacity-80 mt-1 md:mt-2">Oct 17 — Jan 31</span>
              <span className="block text-xl md:text-3xl font-bold mt-2 md:mt-4">1,250h</span>
            </div>
            <div className="col-span-8 md:col-span-9 bg-gray-800 text-white p-4 md:p-8">
              <p className="text-sm md:text-lg text-white mb-3 md:mb-6">
                Pivoted to <span className="text-blue-400 font-bold">Java & Spring Boot</span> to build enterprise-grade skills. Built a production app. Passed Spanish B1.
              </p>
              <div className="flex flex-wrap gap-1 md:gap-2">
                <span className="px-2 py-1 bg-white/10 text-xs md:text-sm">Java 17</span>
                <span className="px-2 py-1 bg-white/10 text-xs md:text-sm">Spring Boot 3</span>
                <span className="px-2 py-1 bg-white/10 text-xs md:text-sm">The Baker</span>
                <span className="px-2 py-1 bg-white/10 text-xs md:text-sm">LeetCode</span>
                <span className="px-2 py-1 bg-white/10 text-xs md:text-sm">ML</span>
                <span className="px-2 py-1 bg-white/10 text-xs md:text-sm">Spanish B1</span>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-4 md:col-span-3 bg-white text-black p-4 md:p-8">
              <span className="text-3xl md:text-6xl font-bold block">03</span>
              <span className="text-sm md:text-xl font-bold uppercase">The Launch</span>
              <span className="block text-xs md:text-sm opacity-80 mt-1 md:mt-2">Feb 1 — Apr 30</span>
              <span className="block text-xl md:text-3xl font-bold mt-2 md:mt-4">NOW</span>
            </div>
            <div className="col-span-8 md:col-span-9 bg-[#050505] text-white p-4 md:p-8">
              <p className="text-sm md:text-lg text-white mb-3 md:mb-6">
                Current status. Objective: Secure a role that demands business logic + engineering execution.
              </p>
              <div className="flex flex-wrap gap-1 md:gap-2">
                <span className="px-2 py-1 bg-blue-600 text-white text-xs md:text-sm">Job Search</span>
                <span className="px-2 py-1 bg-blue-600 text-white text-xs md:text-sm">LeetCode</span>
                <span className="px-2 py-1 bg-blue-600 text-white text-xs md:text-sm">Interview Prep</span>
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
            <span className="font-bold">Gemini, ChatGPT, and Claude</span> have been my 24/7 strategic partners. They served as my objective advisors for critical pivots (like the decision to leave my bootcamp), my intensive tutors for Spanish certification, and the troubleshooters that kept momentum alive when I hit walls. They enabled me to maintain the velocity of a full team while operating as one person
          </p>
        </div>
      </div>

      {/* 6. TIME TRACKING */}
      <div className="w-full bg-black py-20 px-8">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-widest text-gray-100 block mb-2">Time Tracking</span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white mb-4">
            Month by Month
          </h2>
          <p className="text-gray-300 text-lg">
            Screenshots from my time-tracking app documenting every hour invested.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="/ypt1.jpg" alt="YPT Summary" className="w-full rounded-lg shadow-lg" />
          <img src="/sep.jpg" alt="September" className="w-full rounded-lg shadow-lg" />
          <img src="/oct.jpg" alt="October" className="w-full rounded-lg shadow-lg" />
          <img src="/nov.jpg" alt="November" className="w-full rounded-lg shadow-lg" />
          <img src="/dec.jpg" alt="December" className="w-full rounded-lg shadow-lg" />
          <img src="/jan.jpg" alt="January" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>

      {/* 7. THE TERMINAL LOG */}

      <div className="w-full bg-[#050505] py-20 px-8">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-widest text-gray-500 block mb-2">The Evidence</span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white mb-4">
            DAY BY DAY
          </h2>
          <p className="text-gray-300 text-lg">
            The is the daily log I have been tracking since the first day of TLTP.
          </p>
        </div>
        <FadeIn>
        <LogTerminal />
        </FadeIn>
      </div>
      
    </div>
  );
}
