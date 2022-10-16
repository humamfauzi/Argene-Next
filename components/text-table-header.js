import React from 'react'

import PropTypes from 'prop-types'

const TextTableHeader = (props) => {
  return (
    <>
      <div className="text-table-header-container">
        <span className="text-table-header-text">{props.text}</span>
      </div>
      <style jsx>
        {`
          .text-table-header-container {
            display: flex;
            position: relative;
          }
          .text-table-header-text {
            color: var(--dl-color-gray-hwhite);
            font-size: 14px;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Montserrat;
            font-weight: 700;
            line-height: 1.15;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: none;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

TextTableHeader.defaultProps = {
  text: 'Category Number',
}

TextTableHeader.propTypes = {
  text: PropTypes.string,
}

export default TextTableHeader
