interface PageHeaderProps {
  title: string
  description: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-8 pb-8 border-b border-[#E5E7EB]">
      <h1 className="text-[40px] font-semibold tracking-tight text-[#0A0A0A] leading-[1.2] mb-3">
        {title}
      </h1>
      <p className="text-base text-[#525252] leading-relaxed max-w-[560px]">
        {description}
      </p>
    </div>
  )
}
