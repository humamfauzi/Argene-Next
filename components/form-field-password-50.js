import React from 'react'

import PropTypes from 'prop-types'

const FormFieldPassword50 = (props) => {
  return (
    <>
      <div
        className={`form-field-password-50-form-field-password-50 formfield ${props.rootClassName} `}
      >
        <span className="form-field-password-50-text p">{props.text}</span>
        <input
          type="password"
          required
          className="form-field-password-50-input input p"
        />
      </div>
      <style jsx>
        {`
          .form-field-password-50-form-field-password-50 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-right: 0px;
            flex-direction: column;
          }
          .form-field-password-50-text {
            color: var(--dl-color-gray-pgray);
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .form-field-password-50-input {
            color: var(--dl-color-gray-pgray);
            width: 100%;
            background-color: #000000;
          }
        `}
      </style>
    </>
  )
}

FormFieldPassword50.defaultProps = {
  text: 'Password',
  rootClassName: '',
}

FormFieldPassword50.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FormFieldPassword50
