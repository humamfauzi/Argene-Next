import React from 'react'

import PropTypes from 'prop-types'

const TextRegular = (props) => {
  return (
    <>
      <div className={`text-regular-container ${props.rootClassName} `}>
        <span className="text-regular-text p">{props.text}</span>
      </div>
      <style jsx>
        {`
          .text-regular-container {
            display: flex;
            position: relative;
          }
          .text-regular-text {
            color: var(--dl-color-gray-pgray);
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

TextRegular.defaultProps = {
  text: 'Enter your WordPress credentials & list of keywords.',
  rootClassName: '',
}

TextRegular.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default TextRegular
