import React from 'react'

import PropTypes from 'prop-types'

const FormFieldText100 = (props) => {
  return (
    <>
      <div className="form-field-text-100-container formfield">
        <span className="form-field-text-100-text p">{props.text}</span>
        <input
          type="text"
          required
          placeholder={props.Input_placeholder}
          className="form-field-text-100-input p input"
        />
      </div>
      <style jsx>
        {`
          .form-field-text-100-container {
            position: relative;
            padding-left: 0px;
            padding-right: 0px;
          }
          .form-field-text-100-text {
            color: var(--dl-color-gray-pgray);
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .form-field-text-100-input {
            color: var(--dl-color-gray-pgray);
            width: 100%;
            background-color: #000000;
          }
        `}
      </style>
    </>
  )
}

FormFieldText100.defaultProps = {
  text: 'Blog URL ',
  Input_placeholder: '(e.g. myblog.com)',
}

FormFieldText100.propTypes = {
  text: PropTypes.string,
  Input_placeholder: PropTypes.string,
}

export default FormFieldText100
