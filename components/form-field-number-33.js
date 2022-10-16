import React from 'react'

import PropTypes from 'prop-types'

const FormFieldNumber33 = (props) => {
  return (
    <>
      <div className="form-field-number-33-form-field-number-33">
        <span className="form-field-number-33-text p">{props.text}</span>
        <input
          type="number"
          required
          placeholder={props.Input_placeholder}
          className="form-field-number-33-input p input"
        />
      </div>
      <style jsx>
        {`
          .form-field-number-33-form-field-number-33 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .form-field-number-33-text {
            color: var(--dl-color-gray-pgray);
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .form-field-number-33-input {
            color: var(--dl-color-gray-pgray);
            width: 100%;
            background-color: #000000;
          }
        `}
      </style>
    </>
  )
}

FormFieldNumber33.defaultProps = {
  text: 'Category Number',
  Input_placeholder: '5',
}

FormFieldNumber33.propTypes = {
  text: PropTypes.string,
  Input_placeholder: PropTypes.string,
}

export default FormFieldNumber33
