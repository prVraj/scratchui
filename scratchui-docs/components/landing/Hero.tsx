'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Copy } from 'lucide-react'
import { motion } from 'motion/react'

export default function Hero() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText('npm install scratchui')
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-14">
      <div className="max-w-[680px] mx-auto text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5E7EB] text-[11px] text-[#9CA3AF] font-medium tracking-wide mb-8">
            MIT License · Open Source
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut', delay: 0.05 }}
          className="text-[56px] font-semibold tracking-tight leading-[1.1] text-[#0A0A0A] mb-5"
        >
          Components that
          <br />
          feel alive.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut', delay: 0.1 }}
          className="text-[15px] text-[#525252] leading-relaxed mb-10 max-w-[400px] mx-auto"
        >
          Zero dependencies. Two modes. One import. Built for React.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut', delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
        >
          <Link
            href="/docs"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-[6px] bg-[#0A0A0A] text-white text-[13px] font-medium hover:bg-[#262626] transition-colors"
          >
            Get Started →
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-[6px] border border-[#E5E7EB] bg-white text-[#0A0A0A] text-[13px] font-medium hover:border-[#D1D5DB] hover:bg-[#F9FAFB] transition-colors"
          >
            View on GitHub
          </a>
        </motion.div>

        {/* Install pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: 'easeOut', delay: 0.2 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-[8px] bg-white border border-[#E5E7EB] shadow-sm"
        >
          <code className="text-[13px] font-mono text-[#525252]">npm install scratchui</code>
          <button
            onClick={handleCopy}
            aria-label="Copy install command"
            className="text-[#9CA3AF] hover:text-[#0A0A0A] transition-colors"
          >
            {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
          </button>
        </motion.div>
        {copied && (
          <p className="mt-2 text-[13px] text-[#9CA3AF]">Copied!</p>
        )}
      </div>
    </section>
  )
}
