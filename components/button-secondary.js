import React from 'react'

import PropTypes from 'prop-types'

const ButtonSecondary = (props) => {
  return (
    <>
      <div className={`button-secondary-container ${props.rootClassName} `}>
        <button className="button-secondary-button button">
          <span>{props.text}</span>
        </button>
      </div>
      <style jsx>
        {`
          .button-secondary-container {
            display: flex;
            position: relative;
          }
          .button-secondary-button {
            color: var(--dl-color-primary-100);
            width: 100%;
            display: flex;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            transition: 0.3s;
            font-weight: 700;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-primary-100);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius10);
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: transparent;
          }
          .button-secondary-button:hover {
            color: var(--dl-color-primary-dimmedgreen);
            border-color: var(--dl-color-primary-dimmedgreen);
            background-color: var(--dl-color-primary-darkgreen);
          }
          .button-secondary-root-class-name {
            align-self: center;
          }
          .button-secondary-root-class-name1 {
            align-self: center;
          }
          @media (max-width: 991px) {
            .button-secondary-button {
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

ButtonSecondary.defaultProps = {
  rootClassName: '',
  text: 'Upload CSV',
}

ButtonSecondary.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default ButtonSecondary
