import React from 'react'

import PropTypes from 'prop-types'

const TextPostedItemTitle = (props) => {
  return (
    <>
      <div className="text-posted-item-title-container">
        <a
          href={props.link_text}
          target="_blank"
          rel="noreferrer noopener"
          className="text-posted-item-title-link"
        >
          {props.text}
        </a>
      </div>
      <style jsx>
        {`
          .text-posted-item-title-container {
            display: flex;
            position: relative;
          }
          .text-posted-item-title-link {
            color: var(--dl-color-primary-100);
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

TextPostedItemTitle.defaultProps = {
  link_text: 'https://site.com/post-1',
  text: 'How Content Marketing Can Improve Your SEO Strategy',
}

TextPostedItemTitle.propTypes = {
  link_text: PropTypes.string,
  text: PropTypes.string,
}

export default TextPostedItemTitle
