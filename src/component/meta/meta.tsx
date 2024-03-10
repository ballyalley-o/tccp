import { Helmet } from 'react-helmet-async'

interface MetaProps {
  title?: string
  description?: string
  keywords?: string
}

const Meta = ({ title, description, keywords }: MetaProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'The Code Coach Projct',
  description: `The Code Coach Projct is a source of the well-known bootcaamps worldwide.`,
  keywords: 'bootcamp, course, user, feedback, dev, code, coach,',
}

export default Meta
