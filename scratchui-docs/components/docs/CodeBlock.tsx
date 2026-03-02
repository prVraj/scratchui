'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

interface CodeBlockProps {
  html: string
  code: string
}

export default function CodeBlock({ html, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="relative rounded-[8px] border border-[#E5E7EB] bg-[#F9FAFB] overflow-hidden">
      {/* Copy button */}
      <button
        onClick={handleCopy}
        aria-label="Copy code to clipboard"
        className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white border border-[#E5E7EB] text-[11px] text-[#525252] hover:text-[#0A0A0A] hover:border-[#D1D5DB] transition-all"
      >
        {copied ? (
          <>
            <Check size={12} className="text-green-600" />
            <span className="text-green-600">Copied!</span>
          </>
        ) : (
          <>
            <Copy size={12} />
            Copy
          </>
        )}
      </button>

      {/* Highlighted code */}
      <div className="overflow-x-auto p-5 pt-12">
        <div
          // Shiki output is sanitized server-side — safe to render
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
