export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          For recent graduates with multiple loans
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Optimize Student Loan Payments<br />
          <span className="text-[#58a6ff]">Across Every Servicer</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Stop guessing where to send extra payments. Our algorithm analyzes your loans and tells you exactly how to allocate every dollar to minimize interest and pay off debt faster.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-lg transition-colors"
        >
          Start Optimizing — $9/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-6 mb-20 text-center">
        {[
          { icon: '📊', title: 'Multi-Servicer Tracking', desc: 'Manage Navient, FedLoan, Nelnet and more in one place' },
          { icon: '🧮', title: 'Payment Optimizer', desc: 'Avalanche & snowball strategies tailored to your loans' },
          { icon: '📉', title: 'Interest Savings', desc: 'See exactly how much you save with each strategy' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-3">{f.icon}</div>
            <div className="font-semibold text-white text-sm mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-xs">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited loan tracking',
              'Payment optimization engine',
              'Avalanche & snowball strategies',
              'Interest savings projections',
              'Multi-servicer dashboard',
              'Monthly payoff timeline'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-3">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which loan servicers are supported?',
              a: 'We support all major federal and private servicers including Navient, FedLoan, Nelnet, Great Lakes, MOHELA, Sallie Mae, and more. You can manually add any servicer not listed.'
            },
            {
              q: 'How does the payment optimizer work?',
              a: 'Our algorithm compares avalanche (highest interest first), snowball (lowest balance first), and hybrid strategies against your specific loan portfolio to show which saves you the most money and time.'
            },
            {
              q: 'Is my financial data secure?',
              a: 'Yes. All data is encrypted at rest and in transit. We never store your servicer login credentials — you manually enter loan details. Your data is never sold or shared.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        <p>© {new Date().getFullYear()} Student Debt Optimizer. All rights reserved.</p>
      </footer>
    </main>
  )
}
