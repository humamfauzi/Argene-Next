import React from 'react'
import Head from 'next/head'

import Sidebar from '../components/sidebar'
import SectionHeader from '../components/section-header'
import TextHeading from '../components/text-heading'
import TextRegular from '../components/text-regular'
import DialogBoxSuccess from '../components/dialog-box-success'
import DialogBoxError from '../components/dialog-box-error'
import PostedItem from '../components/posted-item'
import ButtonSecondary from '../components/button-secondary'

const Posted = (props) => {
  return (
    <>
      <div className="posted-container">
        <Head>
          <title>Posted - Argene Dashboard</title>
          <meta property="og:title" content="Posted - Argene Dashboard" />
        </Head>
        <Sidebar></Sidebar>
        <div className="posted-container1">
          <SectionHeader
            text="Review your published article here"
            heading="Posted"
          ></SectionHeader>
          <div className="posted-main-container">
            <div className="posted-header">
              <div className="posted-container2">
                <TextHeading
                  heading="Total Posted: 30"
                  rootClassName="text-heading-root-class-name"
                ></TextHeading>
                <TextRegular
                  text="Last post: 25 Sep 2022, 3:40pm"
                  rootClassName="text-regular-root-class-name34"
                ></TextRegular>
              </div>
              <div className="posted-container3">
                <input
                  type="text"
                  required
                  placeholder="Search"
                  className="posted-input p input"
                />
              </div>
            </div>
            <DialogBoxSuccess
              text="Revising post for “what is cico diet plan”. It will take a few minutes. Please check back later."
              image_src="/playground_assets/refresh-page-option-200h.png"
              rootClassName="dialog-box-success-root-class-name1"
            ></DialogBoxSuccess>
            <DialogBoxError
              text="Too many revisions requested. Please wait for a few minutes."
              rootClassName="dialog-box-error-root-class-name7"
            ></DialogBoxError>
            <div className="posted-list-of-item">
              <PostedItem></PostedItem>
              <PostedItem post_title="15 Reasons Why You Should Be Reading Cup of Jo"></PostedItem>
              <PostedItem post_title="15 Benefits of Blogging with SmugMug"></PostedItem>
              <PostedItem></PostedItem>
              <PostedItem></PostedItem>
              <PostedItem></PostedItem>
              <PostedItem></PostedItem>
              <PostedItem></PostedItem>
              <PostedItem></PostedItem>
              <PostedItem></PostedItem>
            </div>
            <ButtonSecondary
              text="Load 10 More"
              rootClassName="button-secondary-root-class-name"
            ></ButtonSecondary>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .posted-container {
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
          .posted-container1 {
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
          .posted-main-container {
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
          .posted-header {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .posted-container2 {
            flex: 0 0 auto;
            width: 70%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .posted-container3 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .posted-input {
            color: var(--dl-color-gray-pgray);
            width: 100%;
            align-self: center;
            background-color: #000000;
          }
          .posted-list-of-item {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Posted
