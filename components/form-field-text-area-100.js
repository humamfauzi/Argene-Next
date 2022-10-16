import React from 'react'

import PropTypes from 'prop-types'

const FormFieldTextArea100 = (props) => {
  return (
    <>
      <div className="form-field-text-area-100-form-field-text-area-100 formfield">
        <span className="form-field-text-area-100-text p">{props.text}</span>
        <textarea
          placeholder={props.textarea_placeholder}
          className="form-field-text-area-100-textarea p textarea"
        ></textarea>
      </div>
      <style jsx>
        {`
          .form-field-text-area-100-form-field-text-area-100 {
            position: relative;
            padding-left: 0px;
            padding-right: 0px;
          }
          .form-field-text-area-100-text {
            color: var(--dl-color-gray-pgray);
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .form-field-text-area-100-textarea {
            color: var(--dl-color-gray-pgray);
            width: 100%;
            height: var(--dl-size-size-xxlarge);
            background-color: #000000;
          }
        `}
      </style>
    </>
  )
}

FormFieldTextArea100.defaultProps = {
  text: 'List of keyword (one keyword per line)',
  textarea_placeholder: 'how to learn fly fishing fast',
}

FormFieldTextArea100.propTypes = {
  text: PropTypes.string,
  textarea_placeholder: PropTypes.string,
}

export default FormFieldTextArea100
