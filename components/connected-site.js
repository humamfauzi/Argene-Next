import React from 'react'

import PropTypes from 'prop-types'

const ConnectedSite = (props) => {
  return (
    <>
      <div className={`connected-site-connected-site ${props.rootClassName} `}>
        <div className="connected-site-container">
          <div className="connected-site-container1">
            <span className="connected-site-text">{props.text}</span>
            <span className="connected-site-text1">{props.text1}</span>
          </div>
          <div className="connected-site-container2">
            <div className="connected-site-container3">
              <button
                id="revise"
                name="revise"
                type="submit"
                className="connected-site-button button"
              >
                <span className="connected-site-text2">{props.Text}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .connected-site-connected-site {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            position: relative;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            border-color: var(--dl-color-primary-100);
            border-style: solid;
            border-width: 1px;
            border-radius: 15px;
            margin-bottom: 0px;
            flex-direction: row;
            justify-content: flex-start;
            background-color: var(--dl-color-primary-darkgreen);
          }
          .connected-site-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .connected-site-container1 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .connected-site-text {
            color: var(--dl-color-gray-hwhite);
            font-style: normal;
            font-weight: 700;
          }
          .connected-site-text1 {
            color: var(--dl-color-gray-pgray);
            font-style: normal;
            font-weight: 500;
          }
          .connected-site-container2 {
            flex: 0 0 auto;
            width: 10%;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .connected-site-container3 {
            width: 100%;
            display: flex;
            position: relative;
          }
          .connected-site-button {
            color: var(--dl-color-primary-100);
            width: 100%;
            padding: 4px;
            align-self: center;
            text-align: center;
            transition: 0.3s;
            border-color: var(--dl-color-primary-300);
            border-width: 0px;
            background-color: transparent;
          }
          .connected-site-button:hover {
            color: var(--dl-color-primary-dimmedgreen);
            border: none;
            border-color: var(--dl-color-primary-300);
            background-color: transparent;
          }
          .connected-site-button:disabled {
            color: var(--dl-color-gray-darkergray);
            border-color: var(--dl-color-gray-darkergray);
          }
          .connected-site-text2 {
            font-style: normal;
            font-weight: 700;
          }
          .connected-site-root-class-name {
            margin-top: var(--dl-space-space-unit);
            margin-bottom: 0px;
          }
          .connected-site-root-class-name1 {
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .connected-site-root-class-name2 {
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .connected-site-root-class-name3 {
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .connected-site-root-class-name4 {
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          @media (max-width: 991px) {
            .connected-site-connected-site {
              align-items: center;
            }
          }
        `}
      </style>
    </>
  )
}

ConnectedSite.defaultProps = {
  text: 'contentcapybara.com',
  text1: 'ezramontserrat',
  Text: 'EDIT',
  rootClassName: '',
}

ConnectedSite.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  Text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ConnectedSite
