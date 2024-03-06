import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
}

Meta.defaultProps = {
  title: 'The Code Coach Projct',
  description: `The Code Coach Projct is a source of the well-known bootcaamps worldwide.`,
  keywords: 'bootcamp, course, user, feedback, dev, code, coach,',
}

export default Meta
