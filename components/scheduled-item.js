import React from 'react'

import PropTypes from 'prop-types'

import ButtonItem from './button-item'

const ScheduledItem = (props) => {
  return (
    <>
      <div className="scheduled-item-table-body">
        <div className="scheduled-item-container">
          <div className="scheduled-item-container1">
            <span className="scheduled-item-text p">
              {props.category_number1}
            </span>
          </div>
        </div>
        <div className="scheduled-item-container2">
          <div className="scheduled-item-container3">
            <span className="scheduled-item-text1 p">{props.keywords}</span>
          </div>
        </div>
        <div className="scheduled-item-container4">
          <div className="scheduled-item-container5">
            <span className="scheduled-item-text2 p">
              {props.scheduled_date}
            </span>
          </div>
        </div>
        <div className="scheduled-item-container6">
          <ButtonItem
            text="DELETE"
            rootClassName="button-item-root-class-name1"
          ></ButtonItem>
        </div>
      </div>
      <style jsx>
        {`
          .scheduled-item-table-body {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-gray-darkergray);
            border-width: 0px;
            background-color: var(--dl-color-gray-black);
            border-top-width: 0px;
            border-bottom-width: 1px;
          }
          .scheduled-item-table-body:hover {
            background-color: #232323;
          }
          .scheduled-item-container {
            flex: 0 0 auto;
            width: 15%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .scheduled-item-container1 {
            display: flex;
            position: relative;
          }
          .scheduled-item-text {
            color: var(--dl-color-gray-pgray);
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .scheduled-item-container2 {
            flex: 0 0 auto;
            width: 50%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .scheduled-item-container3 {
            display: flex;
            position: relative;
          }
          .scheduled-item-text1 {
            color: var(--dl-color-gray-pgray);
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .scheduled-item-container4 {
            flex: 0 0 auto;
            width: 20%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .scheduled-item-container5 {
            display: flex;
            position: relative;
          }
          .scheduled-item-text2 {
            color: var(--dl-color-gray-pgray);
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .scheduled-item-container6 {
            flex: 0 0 auto;
            width: 15%;
            height: var(--dl-size-size-small);
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

ScheduledItem.defaultProps = {
  category_number1: '5',
  keywords: 'what is cico plan',
  rootClassName2: '',
  category_number: '5',
  rootClassName1: '',
  scheduled_date: '25 Sep 2022',
}

ScheduledItem.propTypes = {
  category_number1: PropTypes.string,
  keywords: PropTypes.string,
  rootClassName2: PropTypes.string,
  category_number: PropTypes.string,
  rootClassName1: PropTypes.string,
  scheduled_date: PropTypes.string,
}

export default ScheduledItem
