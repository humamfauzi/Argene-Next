import React from 'react'

import PropTypes from 'prop-types'

const TextHeading = (props) => {
  return (
    <>
      <div className={`text-heading-container ${props.rootClassName} `}>
        <h1 className="text-heading-text">{props.heading}</h1>
      </div>
      <style jsx>
        {`
          .text-heading-container {
            display: flex;
            position: relative;
          }
          .text-heading-text {
            color: var(--dl-color-gray-hwhite);
            font-size: 1.5em;
            padding-top: var(--dl-space-space-halfunit);
            padding-bottom: 0px;
          }
        `}
      </style>
    </>
  )
}

TextHeading.defaultProps = {
  rootClassName: '',
  heading: 'WordPress Details',
}

TextHeading.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
}

export default TextHeading
