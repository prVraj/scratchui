import type { Metadata } from 'next'
import Navbar from '@/components/site/Navbar'
import Sidebar from '@/components/site/Sidebar'

export const metadata: Metadata = {
  title: {
    default: 'Docs — scratchUI',
    template: '%s — scratchUI',
  },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="max-w-[1280px] mx-auto px-6 pt-14 flex">
        <Sidebar />
        <main className="flex-1 min-w-0 max-w-[720px] py-12 md:pl-12 lg:pl-16">
          {children}
        </main>
      </div>
    </>
  )
}
