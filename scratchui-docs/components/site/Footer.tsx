import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-[#FAFAFA]">
      <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[13px] text-[#9CA3AF]">
          © {new Date().getFullYear()} scratchUI. MIT License.
        </p>
        <nav className="flex items-center gap-5">
          <Link
            href="/docs"
            className="text-[13px] text-[#9CA3AF] hover:text-[#0A0A0A] transition-colors"
          >
            Docs
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#9CA3AF] hover:text-[#0A0A0A] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://npmjs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#9CA3AF] hover:text-[#0A0A0A] transition-colors"
          >
            npm
          </a>
        </nav>
      </div>
    </footer>
  )
}
