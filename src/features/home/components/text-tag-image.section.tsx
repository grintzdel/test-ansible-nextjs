import Image from 'next/image'
import React from 'react'

type MediaPosition = 'left' | 'right'

type CardProps = {
  title: string
  description: string
  mediaUrl: string
  tags: string[]
  mediaPosition?: MediaPosition
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  mediaUrl,
  tags,
  mediaPosition = 'left',
}: CardProps): React.JSX.Element => {
  const flexDirection = mediaPosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'
  const alignSelf = mediaPosition === 'left' ? 'self-end' : 'self-start'

  return (
    <div
      className={`flex flex-col items-center justify-center gap-10 rounded-[20px] bg-[#D2F8DC] p-6 md:max-w-7/8 md:p-12 lg:p-25 ${flexDirection} ${alignSelf}`}
    >
      <div className="flex flex-col gap-17.5">
        <div className="flex flex-col gap-10">
          <h2 className="text-[40px] tracking-tight text-[#2E4F21]">{title}</h2>
          <p className="text-[#2E4F21]">{description}</p>
        </div>
        <div className="flex flex-row gap-2.5">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-3 text-xs text-[#506349] hover:bg-[#506349] hover:text-white"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <Image src={mediaUrl} alt={title} width={600} height={600} />
    </div>
  )
}

export const TextTagImageSection: React.FC = (): React.JSX.Element => {
  return (
    <section className="flex flex-col gap-10 px-5">
      <Card
        title="Tax Preparation & Filing"
        description="Accurately prepare and file personal and business tax returns to maximize deductions and ensure compliance."
        tags={['1099 taxes', 'Dependents', 'Trust Taxes']}
        mediaUrl="/image-advantages-1.svg"
        mediaPosition={'left'}
      />

      <Card
        title="IRS Audit Assistance"
        description="Offer expert guidance and representation to resolve tax audits and disputes with confidence."
        tags={['1099 taxes', 'Dependents', 'Trust Taxes']}
        mediaUrl="/image-advantages-2.svg"
        mediaPosition={'right'}
      />

      <Card
        title="Bookkeeping & Accounting"
        description="Maintain organized financial records and provide clear reports to support business growth and financial health."
        tags={['1099 taxes', 'Dependents', 'Trust Taxes']}
        mediaUrl="/image-advantages-3.svg"
        mediaPosition={'left'}
      />
    </section>
  )
}
