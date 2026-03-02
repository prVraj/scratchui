interface ComponentPreviewProps {
  children: React.ReactNode
  className?: string
}

export default function ComponentPreview({ children, className }: ComponentPreviewProps) {
  return (
    <div
      className={`w-full rounded-[8px] border border-[#E5E7EB] bg-white shadow-sm min-h-[200px] flex items-center justify-center p-10 ${className ?? ''}`}
    >
      {children}
    </div>
  )
}
