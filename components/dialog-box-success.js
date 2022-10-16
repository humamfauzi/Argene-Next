import React from 'react'

import PropTypes from 'prop-types'

const DialogBoxSuccess = (props) => {
  return (
    <>
      <div
        className={`dialog-box-success-success-dialog-box ${props.rootClassName} `}
      >
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="dialog-box-success-image"
        />
        <span className="dialog-box-success-text p">{props.text}</span>
      </div>
      <style jsx>
        {`
          .dialog-box-success-success-dialog-box {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            position: relative;
            margin-top: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-color: var(--dl-color-primary-100);
            border-style: solid;
            border-width: 1px;
            border-radius: 15px;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            background-color: var(--dl-color-primary-darkgreen);
          }
          .dialog-box-success-image {
            width: 20px;
            margin: var(--dl-space-space-unit);
            object-fit: cover;
          }
          .dialog-box-success-text {
            color: var(--dl-color-gray-hwhite);
            margin: var(--dl-space-space-unit);
          }

          @media (max-width: 991px) {
            .dialog-box-success-success-dialog-box {
              align-items: center;
            }
            .dialog-box-success-text {
              margin: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

DialogBoxSuccess.defaultProps = {
  image_src: '/playground_assets/check%201-200h.png',
  rootClassName: '',
  text: '30 keywords has succesfully submited for myblog.com using user name “ifadrdin”',
  image_alt: 'image',
}

DialogBoxSuccess.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
}

export default DialogBoxSuccess
