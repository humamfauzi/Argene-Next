import React from 'react'

import PropTypes from 'prop-types'

const SectionHeader = (props) => {
  return (
    <>
      <div className="section-header-header">
        <div className="section-header-container">
          <h1 className="section-header-text">{props.heading}</h1>
        </div>
        <div className="section-header-container1">
          <span className="section-header-text1 p">{props.text}</span>
        </div>
      </div>
      <style jsx>
        {`
          .section-header-header {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .section-header-container {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .section-header-text {
            color: var(--dl-color-gray-hwhite);
          }
          .section-header-container1 {
            display: flex;
            position: relative;
          }
          .section-header-text1 {
            color: var(--dl-color-gray-pgray);
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

SectionHeader.defaultProps = {
  heading: 'Planning',
  text: 'Enter your WordPress credentials & list of keywords.',
  rootClassName: '',
}

SectionHeader.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SectionHeader
