interface PropRow {
  prop: string
  type: string
  defaultVal: string
  description: string
}

interface PropsTableProps {
  rows: PropRow[]
}

export default function PropsTable({ rows }: PropsTableProps) {
  return (
    <div>
      <h2 className="text-[30px] font-medium tracking-tight text-[#0A0A0A] mb-5">Props</h2>
      <div className="rounded-[8px] border border-[#E5E7EB] overflow-hidden overflow-x-auto">
        <table className="w-full min-w-[560px] text-[13px] border-collapse">
          <thead>
            <tr className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
              {['Prop', 'Type', 'Default', 'Description'].map((col) => (
                <th
                  key={col}
                  className="text-left px-4 py-3 text-[11px] font-semibold uppercase tracking-widest text-[#9CA3AF]"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.prop}
                className={`border-b border-[#E5E7EB] last:border-b-0 ${
                  i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'
                }`}
              >
                <td className="px-4 py-3">
                  <code className="font-mono text-[#0A0A0A] bg-[#F3F4F6] px-1.5 py-0.5 rounded text-[12px]">
                    {row.prop}
                  </code>
                </td>
                <td className="px-4 py-3">
                  <code className="font-mono text-[#525252] bg-[#F3F4F6] px-1.5 py-0.5 rounded text-[12px]">
                    {row.type}
                  </code>
                </td>
                <td className="px-4 py-3">
                  <code className="font-mono text-[#525252] text-[12px]">
                    {row.defaultVal}
                  </code>
                </td>
                <td className="px-4 py-3 text-[#525252] leading-relaxed">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
