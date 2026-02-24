export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Spray Foam Solutions
          <span className="block gradient-text mt-2">Optimized Environment</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300">
          Contact us at{' '}
          <a
            href="https://RocketOpp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 underline underline-offset-4 font-semibold transition-colors"
          >
            RocketOpp.com
          </a>{' '}
          for purchase options.
        </p>
      </div>
    </div>
  )
}
