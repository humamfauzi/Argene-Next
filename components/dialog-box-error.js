import React from 'react'

import PropTypes from 'prop-types'

const DialogBoxError = (props) => {
  return (
    <>
      <div className={`dialog-box-error-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="dialog-box-error-image"
        />
        <span className="dialog-box-error-text p">{props.text}</span>
      </div>
      <style jsx>
        {`
          .dialog-box-error-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            position: relative;
            margin-top: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-color: var(--dl-color-primary-300);
            border-style: solid;
            border-width: 1px;
            border-radius: 15px;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            background-color: var(--dl-color-primary-darkorange);
          }
          .dialog-box-error-image {
            width: 20px;
            margin: var(--dl-space-space-unit);
            object-fit: cover;
          }
          .dialog-box-error-text {
            color: var(--dl-color-gray-hwhite);
            margin-top: var(--dl-space-space-unit);
          }

          @media (max-width: 991px) {
            .dialog-box-error-container {
              align-items: center;
            }
            .dialog-box-error-text {
              margin-top: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

DialogBoxError.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  image_src: '/playground_assets/close%201-200h.png',
  text: 'No keyword found. Please double check your list of keywords',
}

DialogBoxError.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
}

export default DialogBoxError
