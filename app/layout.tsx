import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Student Debt Optimizer — Optimize Your Loan Payments',
  description: 'Track payments across servicers and get optimal allocation strategies to pay off student loans faster. Save thousands in interest.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e0cd1b11-3843-4ed0-878a-242656efc902"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
