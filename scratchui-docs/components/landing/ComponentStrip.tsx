const components = [
  {
    name: 'Button',
    preview: (
      <button className="px-4 py-2 bg-[#0A0A0A] text-white text-[13px] rounded-[6px] font-medium hover:bg-[#262626] transition-colors">
        Click me
      </button>
    ),
  },
  {
    name: 'Badge',
    preview: (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-[6px] bg-[#F3F4F6] text-[#0A0A0A] text-[11px] font-medium border border-[#E5E7EB]">
        New
      </span>
    ),
  },
  {
    name: 'Input',
    preview: (
      <input
        type="text"
        placeholder="Type something..."
        className="w-full px-3 py-2 text-[13px] border border-[#E5E7EB] rounded-[6px] bg-white text-[#0A0A0A] placeholder-[#9CA3AF] outline-none focus:border-[#0A0A0A] transition-colors"
        readOnly
      />
    ),
  },
  {
    name: 'Card',
    preview: (
      <div className="w-full p-4 rounded-[8px] border border-[#E5E7EB] bg-white shadow-sm">
        <p className="text-[13px] font-medium text-[#0A0A0A] mb-1">Card Title</p>
        <p className="text-[11px] text-[#9CA3AF]">A well-padded surface.</p>
      </div>
    ),
  },
  {
    name: 'Tooltip',
    preview: (
      <div className="relative inline-flex flex-col items-center gap-2">
        <div className="px-2.5 py-1 bg-[#0A0A0A] text-white text-[11px] rounded-[6px]">
          Helpful hint
        </div>
        <button className="px-3 py-1.5 text-[13px] border border-[#E5E7EB] rounded-[6px] text-[#525252]">
          Hover me
        </button>
      </div>
    ),
  },
  {
    name: 'Tabs',
    preview: (
      <div className="w-full">
        <div className="flex gap-0 border-b border-[#E5E7EB]">
          {['Overview', 'Details', 'More'].map((t, i) => (
            <button
              key={t}
              className={`px-3 py-2 text-[12px] font-medium border-b-2 -mb-px ${
                i === 0
                  ? 'border-[#0A0A0A] text-[#0A0A0A]'
                  : 'border-transparent text-[#9CA3AF]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="pt-3 text-[11px] text-[#9CA3AF]">Tab content goes here.</div>
      </div>
    ),
  },
]

export default function ComponentStrip() {
  return (
    <section className="py-24 border-t border-[#E5E7EB] overflow-hidden">
      <div className="max-w-[1024px] mx-auto px-6 mb-10">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9CA3AF] mb-3">
          What&apos;s inside
        </p>
        <h2 className="text-[30px] font-medium tracking-tight text-[#0A0A0A] leading-[1.2]">
          Every component you actually need.
        </h2>
        <p className="mt-2 text-[15px] text-[#525252]">
          No carousels. No date pickers. Just the essentials, done right.
        </p>
      </div>

      {/* Scrolling strip */}
      <div className="flex gap-4 overflow-x-auto px-6 pb-4 scrollbar-hide">
        {components.map((comp) => (
          <div
            key={comp.name}
            className="shrink-0 w-[220px] rounded-[8px] border border-[#E5E7EB] bg-white shadow-sm overflow-hidden"
          >
            <div className="h-[140px] flex items-center justify-center p-6 border-b border-[#E5E7EB]">
              <div className="w-full">{comp.preview}</div>
            </div>
            <div className="px-4 py-3">
              <p className="text-[13px] text-[#525252]">{comp.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
