import { Helmet } from 'react-helmet-async'
import { GLOBAL } from 'config'

const Meta = ({ title, description, keywords }: tccp.MetaProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = GLOBAL.APP_META

export default Meta
