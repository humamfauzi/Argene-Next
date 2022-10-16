import React from 'react'

import TextTableHeader from './text-table-header'

const TableHeader = (props) => {
  return (
    <>
      <div className="table-header-table-header">
        <div className="table-header-container">
          <TextTableHeader text="category_number"></TextTableHeader>
        </div>
        <div className="table-header-container1">
          <TextTableHeader text="keywords"></TextTableHeader>
        </div>
      </div>
      <style jsx>
        {`
          .table-header-table-header {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: var(--dl-color-gray-pgray);
            border-width: 0px;
            background-color: var(--dl-color-gray-black);
            border-bottom-width: 1px;
          }
          .table-header-container {
            flex: 0 0 auto;
            width: 30%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .table-header-container1 {
            flex: 0 0 auto;
            width: 70%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default TableHeader
