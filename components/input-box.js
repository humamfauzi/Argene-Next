import React from 'react'

import PropTypes from 'prop-types'

const InputBox = (props) => {
  return (
    <>
      <div className={`input-box-container ${props.rootClassName} `}>
        <input
          type="text"
          required
          placeholder={props.Input_placeholder}
          className="input-box-input p input"
        />
      </div>
      <style jsx>
        {`
          .input-box-container {
            display: flex;
            position: relative;
          }
          .input-box-input {
            color: var(--dl-color-gray-pgray);
            width: 100%;
            background-color: #000000;
          }
        `}
      </style>
    </>
  )
}

InputBox.defaultProps = {
  rootClassName: '',
  Input_placeholder: '(e.g. myblog.com)',
}

InputBox.propTypes = {
  rootClassName: PropTypes.string,
  Input_placeholder: PropTypes.string,
}

export default InputBox
