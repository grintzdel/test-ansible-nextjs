import React from 'react'

type CaseProps = {
  title: string
  description: string
  icon: React.JSX.Element
}

const Case: React.FC<CaseProps> = ({ title, description, icon }: CaseProps): React.JSX.Element => {
  return <div>sfgdfg</div>
}

export const CaseStudySection: React.FC = (): React.JSX.Element => {
  return <section>case study section</section>
}
