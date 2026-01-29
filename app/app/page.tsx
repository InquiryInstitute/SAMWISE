import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Ambient background */}
      <div className="ambient-bg" />
      
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-[#2c241610]">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl text-[#2d6a6a]">◐</span>
          <span className="font-sans font-semibold text-lg">
            SAM<span className="text-[#b8860b]">WISE</span>
          </span>
        </Link>
        <div className="flex gap-4 items-center">
          <Link 
            href="https://inquiry.institute/SAMWISE" 
            className="font-sans text-sm text-[#7d7264] hover:text-[#2c2416] transition-colors"
          >
            About
          </Link>
          <button className="font-sans text-sm font-medium px-4 py-2 bg-[#2d6a6a] text-white rounded-md hover:bg-[#3d8a8a] transition-colors">
            Sign In
          </button>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-16 text-center">
        <div className="max-w-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#b8860b10] border border-[#b8860b30] rounded-full mb-6">
            <span className="w-2 h-2 bg-[#b8860b] rounded-full animate-pulse" />
            <span className="font-sans text-xs text-[#b8860b] uppercase tracking-wider">
              Coming Soon
            </span>
          </div>
          
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#2d6a6a] to-[#3d8a8a] rounded-full flex items-center justify-center text-4xl text-white shadow-lg">
            ◐
          </div>
          
          <h1 className="text-4xl font-light mb-3">Hello, I'm Sam</h1>
          
          <p className="text-xl text-[#4a3f2f] mb-8 leading-relaxed">
            I'm here to learn alongside you — asking questions, 
            remembering what matters, and growing together over time.
          </p>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-[#2c241610] mb-8">
            <p className="text-sm text-[#7d7264] mb-4">
              Sign in with GitHub to begin your personalized learning journey. 
              Your conversations and memories are stored in your own repository.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#2c2416] text-white rounded-lg font-sans font-medium hover:bg-[#4a3f2f] transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Continue with GitHub
            </button>
          </div>
          
          <div className="flex justify-center gap-8 text-sm">
            <div className="text-center">
              <div className="text-2xl mb-1">?</div>
              <div className="font-sans text-[#7d7264]">Thoughtful questions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">∞</div>
              <div className="font-sans text-[#7d7264]">Lifelong memory</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">◐</div>
              <div className="font-sans text-[#7d7264]">Grows with you</div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="px-8 py-6 border-t border-[#2c241610] flex justify-between items-center text-sm text-[#7d7264]">
        <span>Part of <Link href="https://inquiry.institute" className="text-[#2d6a6a] hover:underline">Inquiry Institute</Link></span>
        <div className="flex gap-4">
          <Link href="https://inquiry.institute/SAMWISE" className="hover:text-[#2c2416] transition-colors">
            Learn More
          </Link>
          <Link href="https://github.com/InquiryInstitute/SAMWISE" className="hover:text-[#2c2416] transition-colors">
            GitHub
          </Link>
        </div>
      </footer>
    </div>
  )
}
