import FadeIn from '@/components/FadeIn';

export default function About() {
  return (
    <div className="min-h-screen w-full bg-[var(--page-bg)] text-[var(--page-text)]">

      {/* 1. HERO - No FadeIn to prevent flash */}
      <div className="w-full py-24 px-8 text-center">
        <h1 className="text-5xl md:text-8xl font-bold leading-none mb-6">
          <span className="font-serif italic font-normal">The Strategist</span>
          <br />
          <span className="text-gray-500 tracking-tighter ">Turned Engineer.</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-5xl mx-auto opacity-80">
          I build production software that turns business problems into measurable outcomes.
        </p>
      </div>

      {/* 2. CTA BUTTONS - No FadeIn to prevent flash */}
      <div className="w-full py-12 px-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="/cv.pdf" target="_blank"
             className="px-4 py-4 bg-[#015b4e] text-white text-lg font-bold uppercase tracking-wider hover:bg-[#A6F7E3] hover:text-black transition-colors">
            Download CV
          </a>
          <a href="https://www.linkedin.com/in/honggyun-kim/" target="_blank" rel="noopener noreferrer"
             className="px-4 py-4 bg-[#015b4e] text-white text-lg font-bold uppercase tracking-wider hover:bg-[#A6F7E3] hover:text-black transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/hongkim25" target="_blank" rel="noopener noreferrer"
             className="px-4 py-4 bg-[#015b4e] text-white text-lg font-bold uppercase tracking-wider hover:bg-[#A6F7E3] hover:text-black transition-colors">
            GitHub
          </a>
          <a href="mailto:honggyun.kim90@gmail.com"
             className="px-4 py-4 bg-[#015b4e] text-white text-lg font-bold uppercase tracking-wider hover:bg-[#A6F7E3] hover:text-black transition-colors">
            Email
          </a>
        </div>
      </div>

      {/* 3. BACKGROUND STORY */}
      <FadeIn>
        <div className="w-full bg-white text-black py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <span className="text-sm uppercase tracking-widest text-gray-500 block mb-4">Background</span>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
              Business + Data + Engineering
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>
                B.A. in Economics. Master's in International Business from <span className="font-bold text-black">Stockholm School of Economics</span>.
              </p>
              <p>
                What pushed me toward software engineering was simple: I wanted to build the systems that turn insight into action.
              </p>
              <p>
                I'm now moving out of my comfort zone to become an engineer who can design, implement, and ship production software — focusing on clean UX and measurable impact.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 4. WHY + WHAT I BRING - Two columns */}
      <FadeIn>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Why Software Engineering */}
          <div className="bg-[#1a1a1a] text-white p-12 md:p-16">
            <span className="text-sm uppercase tracking-widest text-[#A6F7E3] block mb-4">The Why</span>
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8 leading-none">
              Why Software<br />Engineering
            </h3>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                In analytics, I could identify problems — but I couldn't build the systems to fix them.
              </p>
              <p>
                I wanted to own the full loop: <span className="text-white font-bold">define the problem, ship the solution, measure the impact.</span>
              </p>
              <p>
                That decision became TLTP: a structured transition built around one rule — <span className="text-[#A6F7E3]">produce visible output.</span>
              </p>
            </div>
          </div>

          {/* What I Bring */}
          <div className="bg-[#A6F7E3] text-black p-12 md:p-16">
            <span className="text-sm uppercase tracking-widest opacity-60 block mb-4">The What</span>
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8 leading-none">
              What I<br />Bring
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-black pl-6">
                <span className="font-bold text-xl block mb-1">Product Intuition</span>
                <p className="opacity-70">I start with constraints and metrics.</p>
              </div>
              <div className="border-l-4 border-black pl-6">
                <span className="font-bold text-xl block mb-1">Analytical Rigor</span>
                <p className="opacity-70">Comfortable with data, segmentation, and trade-offs.</p>
              </div>
              <div className="border-l-4 border-black pl-6">
                <span className="font-bold text-xl block mb-1">Engineering Execution</span>
                <p className="opacity-70">Production-ready systems with clean UX.</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 5. EXPERIENCE */}
      <FadeIn>
        <div className="w-full bg-white text-black py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm uppercase tracking-widest text-gray-500 block mb-4">Experience</span>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
              Data Analytics in Fashion Retail
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              I worked on customer and business problems in global fashion retail, helping make business decisions with SQL and BI tools.
            </p>
            <p className="text-xl md:text-2xl font-bold">
              Now I'm focused on building the systems behind those decisions.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* 6. TECH SKILLS */}
      <FadeIn>
        <div className="w-full bg-[#050505] py-20 px-8">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-gray-500 block mb-2">Toolkit</span>
            <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white">
              Tech Skills
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 border border-white/10 hover:border-[#A6F7E3] transition-colors">
              <span className="block text-[#A6F7E3] text-xl md:text-2xl font-bold mb-2">Java</span>
              <span className="text-gray-500 text-sm uppercase tracking-wide">Spring Boot</span>
            </div>
            <div className="text-center p-6 border border-white/10 hover:border-[#A6F7E3] transition-colors">
              <span className="block text-[#A6F7E3] text-xl md:text-2xl font-bold mb-2">Next.js</span>
              <span className="text-gray-500 text-sm uppercase tracking-wide">React / TypeScript</span>
            </div>
            <div className="text-center p-6 border border-white/10 hover:border-[#A6F7E3] transition-colors">
              <span className="block text-[#A6F7E3] text-xl md:text-2xl font-bold mb-2">PostgreSQL</span>
              <span className="text-gray-500 text-sm uppercase tracking-wide">Database</span>
            </div>
            <div className="text-center p-6 border border-white/10 hover:border-[#A6F7E3] transition-colors">
              <span className="block text-[#A6F7E3] text-xl md:text-2xl font-bold mb-2">Python</span>
              <span className="text-gray-500 text-sm uppercase tracking-wide">Data & ML</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 7. LANGUAGES */}
      <FadeIn>
        <div className="w-full bg-white text-black py-20 px-8">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-gray-500 block mb-2">Communication</span>
            <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
              Languages
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            <div className="px-8 py-4 bg-black text-white">
              <span className="font-bold text-lg">Korean</span>
              <span className="text-gray-400 ml-2">Native</span>
            </div>
            <div className="px-8 py-4 bg-black text-white">
              <span className="font-bold text-lg">English</span>
              <span className="text-gray-400 ml-2">Professional</span>
            </div>
            <div className="px-8 py-4 bg-gray-200 text-black">
              <span className="font-bold text-lg">French</span>
              <span className="text-gray-500 ml-2">B2</span>
            </div>
            <div className="px-8 py-4 bg-gray-200 text-black">
              <span className="font-bold text-lg">Spanish</span>
              <span className="text-gray-500 ml-2">B1</span>
            </div>
            <div className="px-8 py-4 bg-gray-100 text-black">
              <span className="font-bold text-lg">Swedish</span>
              <span className="text-gray-500 ml-2">Basic</span>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-8 text-lg">
            Lived and worked in France, Belgium, Spain, Hong Kong, Sweden, and the UK.
          </p>
        </div>
      </FadeIn>

      {/* 8. OBSESSIONS */}
      <FadeIn>
        <div className="w-full bg-[#A6F7E3] text-black py-20 px-8">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest opacity-60 block mb-2">Beyond Code</span>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
              Things I Like (A Lot)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto">
            {/* Duolingo */}
            <div className="p-12 bg-white text-center">
              <span className="text-6xl md:text-8xl font-bold text-green-500 block mb-2">2,100</span>
              <span className="text-xl font-bold uppercase tracking-wide block mb-4">Day Streak</span>
              <p className="text-gray-600">
                Duolingo. Every single day for 6 years. Whether it's language or code, I show up.
              </p>
            </div>

            {/* GQ */}
            <div className="p-12 bg-black text-white text-center">
              <span className="text-6xl md:text-8xl font-bold block mb-2">200+</span>
              <span className="text-xl font-bold uppercase tracking-wide block mb-4">GQ Magazines</span>
              <p className="text-gray-400">
                Subscribed for 15 years. My bookshelf is a timeline of aesthetics. It fuels my obsession with "Frontend Beauty."
              </p>
            </div>

            {/* Always Learning */}
            <div className="p-12 bg-white text-center">
              <span className="text-6xl md:text-8xl font-bold text-blue-500 block mb-2">∞</span>
              <span className="text-xl font-bold uppercase tracking-wide block mb-4">Always Learning</span>
              <p className="text-gray-600">
                Babbel. Datacamp. Brilliant. My downtime is spent upgrading my neural network.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

    </div>
  );
}
