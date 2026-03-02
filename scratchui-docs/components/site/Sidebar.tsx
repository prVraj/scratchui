'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigation } from '@/lib/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-60 shrink-0 hidden md:block">
      <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto sidebar-scroll py-8 pr-4">
        <nav className="space-y-6">
          {navigation.map((section) => (
            <div key={section.title}>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9CA3AF] mb-2 px-2">
                {section.title}
              </p>
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const active = pathname === item.href
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block px-2 py-1.5 text-[13px] rounded-md transition-colors ${
                          active
                            ? 'text-[#0A0A0A] bg-[#F3F4F6] font-medium'
                            : 'text-[#525252] hover:text-[#0A0A0A] hover:bg-[#F9FAFB]'
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}
