'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { navigation } from '@/lib/navigation'

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        className="p-1.5 text-[#525252] hover:text-[#0A0A0A] transition-colors"
      >
        <Menu size={18} />
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/20"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div className="fixed top-0 left-0 bottom-0 z-50 w-72 bg-white border-r border-[#E5E7EB] flex flex-col">
            <div className="h-14 flex items-center justify-between px-5 border-b border-[#E5E7EB]">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="text-[15px] text-[#0A0A0A]"
              >
                scratch<span className="font-semibold">UI</span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="p-1.5 text-[#525252] hover:text-[#0A0A0A]"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-5 space-y-6">
              {navigation.map((section) => (
                <div key={section.title}>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9CA3AF] mb-2">
                    {section.title}
                  </p>
                  <ul className="space-y-0.5">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="block px-2 py-1.5 text-[13px] text-[#525252] hover:text-[#0A0A0A] rounded-md hover:bg-[#F3F4F6] transition-colors"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  )
}
