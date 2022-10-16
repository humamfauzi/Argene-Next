import React from 'react'

import PropTypes from 'prop-types'

const ButtonItem = (props) => {
  return (
    <>
      <div className={`button-item-container ${props.rootClassName} `}>
        <button
          id="revise"
          name="revise"
          type="submit"
          className="button-item-button button"
        >
          <span className="button-item-text">{props.text}</span>
        </button>
      </div>
      <style jsx>
        {`
          .button-item-container {
            display: flex;
            position: relative;
          }
          .button-item-button {
            color: var(--dl-color-primary-300);
            width: auto;
            align-self: center;
            text-align: center;
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(0, 0, 0, 0);
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius10);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: transparent;
          }
          .button-item-button:hover {
            color: var(--dl-color-primary-300);
            border-color: var(--dl-color-primary-300);
            border-width: 1px;
            background-color: transparent;
          }
          .button-item-button:disabled {
            color: var(--dl-color-gray-darkergray);
            border-color: var(--dl-color-gray-darkergray);
          }
          .button-item-text {
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
          }
          .button-item-root-class-name {
            width: auto;
            align-self: center;
          }
          .button-item-root-class-name1 {
            width: 100%;
          }
        `}
      </style>
    </>
  )
}

ButtonItem.defaultProps = {
  rootClassName: '',
  text: 'REVISE',
}

ButtonItem.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default ButtonItem
