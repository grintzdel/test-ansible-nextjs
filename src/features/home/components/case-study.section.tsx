import Image from 'next/image'
import React from 'react'

type CaseProps = {
  forLabel: string
  title: string
  description: string
  mediaUrl: string
}

const Case: React.FC<CaseProps> = ({ forLabel, title, description, mediaUrl }: CaseProps): React.JSX.Element => {
  return (
    <div className="gap:6.25 flex flex-col md:flex-row md:gap-12.5">
      <VerticalDivider />
      <div className="flex flex-col gap-7.5">
        <Image src={mediaUrl} width={30} height={30} alt={title} />
        <h4 className="text-3xl tracking-tight text-[#2E4F21]">{forLabel}</h4>
        <p className="text-[#2E4F21]">{title}</p>
        <p className="text-[#2E4F21]">{description}</p>
      </div>
    </div>
  )
}

const VerticalDivider: React.FC = (): React.JSX.Element => {
  return <div className="h-full w-px bg-[#2E4F21]" />
}

export const CaseStudySection: React.FC = (): React.JSX.Element => {
  const cases: CaseProps[] = [
    {
      forLabel: 'For Freelancers',
      title: 'Simplicity & Control',
      description:
        'Stay in charge of your income with seamless expense tracking, automated deductions, and smart tax strategies—so you can focus on doing what you love.',
      mediaUrl: '/icon-case-study-1.svg',
    },
    {
      forLabel: 'For Families',
      title: 'Stability & Security',
      description:
        'From budgeting tools to tax-saving insights, we help you plan for the future, maximize refunds, and keep your household finances running smoothly.',
      mediaUrl: '/icon-case-study-2.svg',
    },
    {
      forLabel: 'For Small Businesses',
      title: 'Stability & Security',
      description:
        'Effortless bookkeeping, payroll solutions, and expert-backed tax support—so you can spend less time on finances and more time scaling your business.',
      mediaUrl: '/icon-case-study-3.svg',
    },
  ]

  return (
    <section className="flex flex-col gap-40 px-5 py-25">
      <div className="flex flex-col justify-between gap-12.5 md:flex-row">
        <h2 className="text-6xl tracking-[-2px] text-[#2E4F21]">Smart Finance for everyone</h2>
        <p className="text-[#2E4F21]">
          At Noble Finance, we believe that financial confidence should be accessible to everyone—whether you're a solo
          entrepreneur, managing a growing family, or running a small business.
        </p>
      </div>

      <div className="flex flex-row flex-nowrap gap-5">
        {cases.map((caseItem, index) => (
          <Case
            key={index}
            forLabel={caseItem.forLabel}
            title={caseItem.title}
            description={caseItem.description}
            mediaUrl={caseItem.mediaUrl}
          />
        ))}
      </div>
    </section>
  )
}
