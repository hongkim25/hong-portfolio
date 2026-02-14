import FadeIn from '@/components/FadeIn';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen w-full bg-[var(--page-bg)] text-[var(--page-text)]">

      {/* 1. HERO - No FadeIn to prevent flash */}
      <div className="w-full py-24 px-8 text-center">
        <h1 className="text-5xl md:text-8xl font-bold leading-none mb-6">
          <span className="font-serif italic font-normal">The Strategist</span>
          <br />
          <span className="text-gray-500 tracking-tighter">turned Engineer.</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-5xl mx-auto opacity-80">
          I build production software that turns business problems into measurable outcomes.
        </p>
      </div>

      {/* 2. CTA BUTTONS - No FadeIn to prevent flash */}
      <div className="w-full py-3 px-4 md:px-8">
        <div className="flex flex-nowrap gap-2 md:gap-3 justify-center">
          <a href="/Honggyun_Kim_CV.pdf" target="_blank"
             className="px-2 py-2 md:px-4 md:py-4 bg-[#015b4e] text-white text-xs md:text-lg font-bold uppercase tracking-wider hover:bg-[#A6F7E3] hover:text-black transition-colors">
            CV
          </a>
          <a href="https://www.linkedin.com/in/honggyun-kim/" target="_blank" rel="noopener noreferrer"
             className="px-2 py-2 md:px-4 md:py-4 bg-[#015b4e] text-white text-xs md:text-lg font-bold uppercase tracking-wider hover:bg-[#A6F7E3] hover:text-black transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/hongkim25" target="_blank" rel="noopener noreferrer"
             className="px-2 py-2 md:px-4 md:py-4 bg-[#015b4e] text-white text-xs md:text-lg font-bold uppercase tracking-wider hover:bg-[#A6F7E3] hover:text-black transition-colors">
            GitHub
          </a>
          <a href="mailto:honggyun.kim90@gmail.com"
             className="px-2 py-2 md:px-4 md:py-4 bg-[#015b4e] text-white text-xs md:text-lg font-bold uppercase tracking-wider hover:bg-[#A6F7E3] hover:text-black transition-colors">
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
                M.Sc in International Business from <span className="font-bold text-black">Stockholm School of Economics</span>.
              </p>
              <p>
                What pushed me toward software engineering was simple: I wanted to build the systems that turn insight into action.
              </p>
              <p>
                I left my analyst path to become an engineer who designs, implements, and ships production software — focusing on clean UX and measurable impact.
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
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-[-.035em] mb-8">
              Data Analytics in Fashion Retail
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-3">
              I analyzed loyalty data at H&M and customer behavior at COS to drive business decisions to generate insights.
            </p>
            <p className="text-lg md:text-xl font-semibold">
              Now, I build the systems behind those decisions.
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
              Languages & Experiences
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            <div className="px-5 py-4 bg-black text-white">
              <span className="font-bold text-lg">Korean</span>
              <span className="text-gray-400 ml-2">Native</span>
            </div>
            <div className="px-5 py-4 bg-black text-white">
              <span className="font-bold text-lg">English</span>
              <span className="text-gray-400 ml-2">Professional</span>
            </div>
            <div className="px-5 py-4 bg-gray-200 text-black">
              <span className="font-bold text-lg">French</span>
              <span className="text-gray-500 ml-2">B2</span>
            </div>
            <div className="px-5 py-4 bg-gray-200 text-black">
              <span className="font-bold text-lg">Spanish</span>
              <span className="text-gray-500 ml-2">B1</span>
            </div>
            <div className="px-5 py-4 bg-gray-100 text-black">
              <span className="font-bold text-lg">Swedish</span>
              <span className="text-gray-500 ml-2">Basic</span>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border-l-4 border-black bg-gray-50">
              <span className="text-sm uppercase tracking-widest text-gray-500 block mb-2">Born & Raised IN</span>
              <span className="text-xl font-bold">South Korea</span>
            </div>
            <div className="text-center p-6 border-l-4 border-black bg-gray-50">
              <span className="text-sm uppercase tracking-widest text-gray-500 block mb-2">Studied In</span>
              <span className="text-xl font-bold">Sweden, Spain, France, Hong Kong</span>
            </div>
            <div className="text-center p-6 border-l-4 border-black bg-gray-50">
              <span className="text-sm uppercase tracking-widest text-gray-500 block mb-2">Worked In</span>
              <span className="text-xl font-bold">Belgium, Sweden, UK</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 8. STREAKS */}
      <FadeIn>
        <div className="w-full bg-[#A6F7E3] text-black py-20 px-8">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest opacity-60 block mb-2">Beyond Code</span>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
              Streaks
            </h2>
            <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
              Consistency is my competitive advantage. Here's proof.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[3/5] w-full overflow-hidden">
                <img
                  src="/duolingo.jpeg"
                  alt="Duolingo Streak"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <span className="font-bold text-lg">Duolingo</span>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[3/5] w-full overflow-hidden">
                <img
                  src="/babbel.jpg"
                  alt="Babbel Streak"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <span className="font-bold text-lg">Babbel</span>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[3/5] w-full overflow-hidden">
                <img
                  src="/datacamp.jpg"
                  alt="DataCamp Streak"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <span className="font-bold text-lg">DataCamp</span>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[3/5] w-full overflow-hidden">
                <img
                  src="/brilliant.jpg"
                  alt="Brilliant Streak"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <span className="font-bold text-lg">Brilliant</span>
              </div>
            </div>
          </div>
        </div>


      </FadeIn>

    </div>
  );
}
