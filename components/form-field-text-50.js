import React from 'react'

import PropTypes from 'prop-types'

const FormFieldText50 = (props) => {
  return (
    <>
      <div className="form-field-text-50-text-field-text-50 formfield">
        <span className="form-field-text-50-text p">{props.text}</span>
        <input
          type="text"
          required
          placeholder={props.Input_placeholder}
          className="form-field-text-50-input input p"
        />
      </div>
      <style jsx>
        {`
          .form-field-text-50-text-field-text-50 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: 0px;
            flex-direction: column;
          }
          .form-field-text-50-text {
            color: var(--dl-color-gray-pgray);
            width: 100%;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .form-field-text-50-input {
            color: var(--dl-color-gray-pgray);
            width: 100%;
            background-color: #000000;
          }
        `}
      </style>
    </>
  )
}

FormFieldText50.defaultProps = {
  text: 'Username',
  Input_placeholder: '(e.g. johnappleseed)',
}

FormFieldText50.propTypes = {
  text: PropTypes.string,
  Input_placeholder: PropTypes.string,
}

export default FormFieldText50
