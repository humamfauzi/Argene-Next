import React from 'react'

import PropTypes from 'prop-types'

const ButtonPrimary = (props) => {
  return (
    <>
      <div className={`button-primary-container ${props.rootClassName} `}>
        <button className="button-primary-button button">
          <span>{props.text}</span>
        </button>
      </div>
      <style jsx>
        {`
          .button-primary-container {
            display: flex;
            position: relative;
          }
          .button-primary-button {
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
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: var(--dl-color-primary-100);
          }
          .button-primary-button:hover {
            color: var(--dl-color-gray-black);
            display: flex;
            border-color: var(--dl-color-primary-dimmedgreen);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-primary-dimmedgreen);
          }
          @media (max-width: 991px) {
            .button-primary-button {
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

ButtonPrimary.defaultProps = {
  rootClassName: '',
  text: 'Submit',
}

ButtonPrimary.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default ButtonPrimary
