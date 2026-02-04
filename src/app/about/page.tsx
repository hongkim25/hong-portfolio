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
            I engineer outcomes. 
            Background in Data Analysis, now building scalable systems with Java & Spring Boot.
          </p>

          {/* CV & Email Buttons */}
          <div className="flex gap-4 justify-center mb-20 text-xl">
            <a href="/cv.pdf" target="_blank" className="px-8 py-3 bg-white text-black font-bold hover:bg-green-100 transition-colors">
              DOWNLOAD CV
            </a>
            <a href="mailto:honggy@example.com" className="px-8 py-3 bg-white text-black font-bold hover:bg-green-100 transition-colors">
              EMAIL
            </a>
            <a href="https://www.linkedin.com/in/honggyun-kim/" target="_blank" className="px-8 py-3 bg-white text-black font-bold hover:bg-green-100 transition-colors">
              LINKEDIN
            </a>
              <a href="https://github.com/hongkim25" target="_blank" className="px-8 py-3 bg-white text-black font-bold hover:bg-green-100 transition-colors">
              GITHUB
            </a>
          </div>
        </FadeIn>
      </div>

      {/* --- TECH STACK GRID --- */}
      <div className="px-8 mb-32">
        <FadeIn>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-8 border-b border-gray-800 pb-2">
            The Arsenal
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <span className="block text-white font-bold text-lg">Java / Spring Boot</span>
              <span className="text-sm text-gray-500">Core Backend</span>
            </div>
            <div>
              <span className="block text-white font-bold text-lg">Next.js / React</span>
              <span className="text-sm text-gray-500">Frontend Architecture</span>
            </div>
            <div>
              <span className="block text-white font-bold text-lg">PostgreSQL</span>
              <span className="text-sm text-gray-500">Database Design</span>
            </div>
            <div>
              <span className="block text-white font-bold text-lg">System Design</span>
              <span className="text-sm text-gray-500">Architecture</span>
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