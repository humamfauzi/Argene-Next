import React from 'react'
import Head from 'next/head'

import Sidebar from '../components/sidebar'
import SectionHeader from '../components/section-header'
import TextHeading from '../components/text-heading'
import TextRegular from '../components/text-regular'
import DialogBoxSuccess from '../components/dialog-box-success'
import TextTableHeader from '../components/text-table-header'
import ScheduledItem from '../components/scheduled-item'
import ButtonSecondary from '../components/button-secondary'

const Scheduled = (props) => {
  return (
    <>
      <div className="scheduled-container">
        <Head>
          <title>Scheduled - Argene Dashboard</title>
          <meta property="og:title" content="Scheduled - Argene Dashboard" />
        </Head>
        <Sidebar></Sidebar>
        <div className="scheduled-container1">
          <SectionHeader
            text="Review your scheduled posts here"
            heading="Scheduled"
          ></SectionHeader>
          <div className="scheduled-main-container">
            <div className="scheduled-header">
              <div className="scheduled-container2">
                <TextHeading
                  heading="Total Scheduled Posts: 30"
                  rootClassName="text-heading-root-class-name1"
                ></TextHeading>
                <TextRegular
                  text="Next post: 25 Sep 2022, 3:40pm"
                  rootClassName="text-regular-root-class-name35"
                ></TextRegular>
              </div>
              <div className="scheduled-container3">
                <input
                  type="text"
                  required
                  placeholder="Search"
                  className="scheduled-input p input"
                />
              </div>
            </div>
            <DialogBoxSuccess
              text="“what is cico diet plan” has been succesfully deleted"
              rootClassName="dialog-box-success-root-class-name"
            ></DialogBoxSuccess>
            <div className="scheduled-table">
              <div className="scheduled-table-header">
                <div className="scheduled-container4">
                  <TextTableHeader text="Category"></TextTableHeader>
                </div>
                <div className="scheduled-container5">
                  <TextTableHeader text="Keywords"></TextTableHeader>
                </div>
                <div className="scheduled-container6">
                  <TextTableHeader text="Scheduled"></TextTableHeader>
                </div>
                <div className="scheduled-container7">
                  <TextTableHeader text="Action"></TextTableHeader>
                </div>
              </div>
              <ScheduledItem></ScheduledItem>
              <ScheduledItem
                keywords="what religion does fasting"
                scheduled_date="26 Sep 2022"
              ></ScheduledItem>
              <ScheduledItem
                keywords="what to eat when fasting for navratri"
                scheduled_date="27 Sep 2022"
              ></ScheduledItem>
              <ScheduledItem keywords="what is the minimum number of hours for intermittent fasting"></ScheduledItem>
              <ScheduledItem keywords="what is a 12 hour fasting blood test"></ScheduledItem>
              <ScheduledItem></ScheduledItem>
              <ScheduledItem></ScheduledItem>
              <ScheduledItem></ScheduledItem>
              <ScheduledItem></ScheduledItem>
              <ScheduledItem></ScheduledItem>
              <ScheduledItem></ScheduledItem>
              <ScheduledItem></ScheduledItem>
              <ScheduledItem></ScheduledItem>
              <ScheduledItem></ScheduledItem>
              <ScheduledItem></ScheduledItem>
              <ScheduledItem></ScheduledItem>
              <ScheduledItem></ScheduledItem>
              <ScheduledItem></ScheduledItem>
              <ScheduledItem></ScheduledItem>
              <ScheduledItem></ScheduledItem>
            </div>
            <ButtonSecondary
              text="Load 20 More"
              rootClassName="button-secondary-root-class-name1"
            ></ButtonSecondary>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .scheduled-container {
            width: 100%;
            display: flex;
            z-index: 100;
            min-height: 100vh;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: row;
            justify-content: flex-start;
            background-image: radial-gradient(
              circle at left bottom,
              rgb(57, 57, 57) 0%,
              rgb(57, 57, 57) 16%,
              rgb(0, 0, 0) 100%
            );
          }
          .scheduled-container1 {
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .scheduled-main-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 1000px;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            border-color: #383838;
            border-style: solid;
            border-width: 1px;
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 15px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
            background-color: #1e1e1e;
          }
          .scheduled-header {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .scheduled-container2 {
            flex: 0 0 auto;
            width: 70%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .scheduled-container3 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .scheduled-input {
            color: var(--dl-color-gray-pgray);
            width: 100%;
            align-self: center;
            background-color: #000000;
          }
          .scheduled-table {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .scheduled-table-header {
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
          .scheduled-container4 {
            flex: 0 0 auto;
            width: 15%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .scheduled-container5 {
            flex: 0 0 auto;
            width: 50%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .scheduled-container6 {
            flex: 0 0 auto;
            width: 20%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .scheduled-container7 {
            flex: 0 0 auto;
            width: 15%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default Scheduled
