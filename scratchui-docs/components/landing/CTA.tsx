import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-24 px-6 border-t border-[#E5E7EB]">
      <div className="max-w-[640px] mx-auto text-center bg-[#0A0A0A] rounded-[8px] px-10 py-16">
        <h2 className="text-[40px] font-semibold tracking-tight text-white leading-[1.2] mb-4">
          Start building in minutes.
        </h2>
        <p className="text-[15px] text-[#9CA3AF] leading-relaxed mb-10 max-w-[380px] mx-auto">
          Everything you need, nothing you don&apos;t. No dark patterns. Just good components.
        </p>
        <Link
          href="/docs"
          className="inline-flex items-center justify-center px-6 py-3 rounded-[6px] bg-white text-[#0A0A0A] text-[13px] font-medium hover:bg-[#F9FAFB] transition-colors"
        >
          Open the Docs →
        </Link>
      </div>
    </section>
  )
}
