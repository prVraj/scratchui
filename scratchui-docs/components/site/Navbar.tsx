'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Github, Package } from 'lucide-react'
import MobileNav from './MobileNav'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-14 transition-all duration-200 ${
        scrolled
          ? 'bg-[#FAFAFA]/90 backdrop-blur-sm border-b border-[#E5E7EB]'
          : 'bg-[#FAFAFA] border-b border-[#E5E7EB]'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-[15px] text-[#0A0A0A] tracking-tight">
          scratch<span className="font-semibold">UI</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/docs"
            className="text-[13px] text-[#525252] hover:text-[#0A0A0A] transition-colors"
          >
            Docs
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#525252] hover:text-[#0A0A0A] transition-colors flex items-center gap-1.5"
          >
            <Github size={14} />
            GitHub
          </a>
          <a
            href="https://npmjs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#525252] hover:text-[#0A0A0A] transition-colors flex items-center gap-1.5"
          >
            <Package size={14} />
            npm
          </a>
        </nav>

        {/* Mobile trigger */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
