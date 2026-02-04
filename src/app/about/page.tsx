import FadeIn from '@/components/FadeIn';

export default function About() {
  return (
    // PART 1: THE PROFESSIONAL (Dark Mode for contrast)
    <div className="min-h-screen w-full bg-[#A6F7E3] text-[#ededed] text-center">
      
      {/* --- HERO SECTION --- */}
      <div className="pt-20 pb-20 px-5">
        <FadeIn>
          <h1 className="font-serif text-6xl md:text-8xl mb-8 italic text-white">
            The Strategist<br />
            <span className="text-gray-500 not-italic font-sans text-6xl md:text-8xl  font-bold tracking-tighter">turned Engineer.</span>
          </h1>
          
          <p className="font-sans text-xl md:text-2xl text-gray-700 leading-relaxed mb-12">
            I build production software that turns business problems into measurable outcomes.
          </p>

          {/* CV & Email Buttons */}
          <div className="flex gap-4 justify-center mb-10 text-xl">
            <a href="/cv.pdf" target="_blank" className="px-5 py-3 bg-white text-black font-bold hover:bg-green-100 transition-colors">
              DOWNLOAD CV
            </a>
            <a href="https://www.linkedin.com/in/honggyun-kim/" target="_blank" className="px-5 py-3 bg-white text-black font-bold hover:bg-green-100 transition-colors">
              LINKEDIN
            </a>
              <a href="https://github.com/hongkim25" target="_blank" className="px-5 py-3 bg-white text-black font-bold hover:bg-green-100 transition-colors">
              GITHUB
            </a>
            <a href="mailto:honggyun.kim90@gmail.com" className="px-5 py-3 bg-white text-black font-bold hover:bg-green-100 transition-colors">
              EMAIL
            </a>
          </div>
        </FadeIn>
      </div>

      <div className="px-8 mb-16 text-gray-700">
        My background sits at the intersection of business, data, and engineering.
        <br />
        I earned a B.A. in Economics and an a master’s in international business at Stockholm School of Economics.
        <br />
        What pushed me toward software engineering was simple: I wanted to build the systems that turn insight into action.
        <br />
        I’m now moving out of my comfort zone to become an engineer who can design, implement, and ship production software, focusing on production-ready software, clean UX, and measurable impact.
        <br />
        Outside work, I love learning languages and exploring new places. I speak Korean and English, and I also use French and Spanish, plus basic Swedish. A few weeks ago, I took the Spanish exam in January 2026 and scored B1 in every section. I’ve lived and worked in France, Belgium, Spain, Hong Kong, Sweden and the UK.
      </div>

      <div className="px-8 mb-32 text-gray-700">
      <span className="text-gray-500 not-italic font-sans text-3xl md:text-5xl font-bold tracking-tighter">Why software engineering</span>      
      <br />
      In analytics, I could identify problems — but I couldn’t build the systems to fix them. <br />
      I wanted to own the full loop: define the problem, ship the solution, and measure the impact. <br />
      That decision became TLTP: a structured transition built around one rule — produce visible output.
      <br /> <br />
      <span className="text-gray-500 not-italic font-sans text-3xl md:text-5xl font-bold tracking-tighter">What I bring</span>
      <br />      
      - Product intuition from business training: I start with constraints and metrics. <br />
      - Analytical rigor: I’m comfortable with data, segmentation, and trade-offs. <br />
      - Engineering execution: I build production-ready systems with clean UX and reliable backend foundations. <br />
      <br />
      <span className="text-gray-500 not-italic font-sans text-3xl md:text-5xl font-bold tracking-tighter">Experience</span><br />
      Data analytics in Fashion Retail:<br />
      I worked on customer and business problems in global fashion retail helping make business decisions with SQL and BI tools.<br />
      Now I’m focused on building the systems behind those decisions.
      <br /><br />
      <span className="text-gray-500 not-italic font-sans text-3xl md:text-5xl font-bold tracking-tighter">Languages</span><br />
      Korean (native) · English (professional) · French (B2)) · Spanish (B1) · Swedish (basic))
      </div>

      {/* --- TECH STACK GRID --- */}
      <div className="px-8 mb-16">
        <FadeIn>
          <h3 className="text-gray-500 not-italic font-sans text-3xl md:text-5xl font-bold tracking-tighter pb-2">
            Tech Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <span className="block text-gray-900 font-bold text-xl">Java / Spring Boot</span>
              <span className="text-sm text-gray-900">Core Backend</span>
            </div>
            <div>
              <span className="block text-gray-900 font-bold text-xl">Next.js / React / TypeScript</span>
              <span className="text-sm text-gray-900">Frontend Architecture</span>
            </div>
            <div>
              <span className="block text-gray-900 font-bold text-xl">PostgreSQL</span>
              <span className="text-sm text-gray-900">Database Design</span>
            </div>
            <div>
              <span className="block text-gray-900 font-bold text-xl">Python</span>
              <span className="text-sm text-gray-900">Data Science & Automation</span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* --- PART 2: THE TRANSITION --- */}
      <div className="w-full py-24 bg-[#D5F0B6] text-black px-8">
        <FadeIn>
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-16 text-center">
              Other things I like (a lot).
            </h2>
            
            {/* --- THE OBSESSIONS GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* CARD 1: DUOLINGO */}
              <div className="p-8 bg-gray-100">
                <span className="text-green-600 font-bold text-6xl block mb-2">2,100</span>
                <span className="text-xl font-bold uppercase tracking-wide">Day Streak</span>
                <p className="mt-4 text-gray-600">
                  Duolingo. Every single day for 6 years. I don't miss days. Whether it's language or code, I show up.
                </p>
              </div>

              {/* CARD 2: THE GQ COLLECTION */}
              <div className="p-8 bg-gray-100 relative overflow-hidden group">
                {/* You can add an <img /> here later of your shelf */}
                <div className="relative z-10">
                  <span className="text-black font-bold text-6xl block mb-2">200+</span>
                  <span className="text-xl font-bold uppercase tracking-wide">GQ Magazines</span>
                  <p className="mt-4 text-gray-600">
                     Subscribed for 15 years. My bookshelf is a timeline of aesthetics. It fuels my obsession with "Frontend Beauty."
                  </p>
                </div>
              </div>

              {/* CARD 3: LEARNING STREAKS */}
              <div className="p-8 bg-gray-100">
                <span className="text-blue-600 font-bold text-6xl block mb-2">∞</span>
                <span className="text-xl font-bold uppercase tracking-wide">Always Learning</span>
                <p className="mt-4 text-gray-600">
                  Babbel. Datacamp. Brilliant. 
                  My downtime is spent upgrading my neural network. 
                </p>
              </div>

            </div>
          </div>
        </FadeIn>
      </div>

    </div>
  );
}