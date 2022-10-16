import React from 'react'
import Head from 'next/head'

import Sidebar from '../components/sidebar'
import SectionHeader from '../components/section-header'
import TextHeading from '../components/text-heading'
import FormFieldText100 from '../components/form-field-text-100'
import FormFieldText50 from '../components/form-field-text-50'
import FormFieldPassword50 from '../components/form-field-password-50'
import ButtonPrimary from '../components/button-primary'
import ConnectedSite from '../components/connected-site'

const Setting = (props) => {
  return (
    <>
      <div className="setting-container">
        <Head>
          <title>Setting - Argene Dashboard</title>
          <meta property="og:title" content="Setting - Argene Dashboard" />
        </Head>
        <Sidebar rootClassName="sidebar-root-class-name"></Sidebar>
        <div className="setting-container1">
          <SectionHeader
            heading="Setting"
            text="Set your blogs credentials here"
          ></SectionHeader>
          <div className="setting-main-containter">
            <form className="setting-form">
              <div className="setting-wordpress-credentials">
                <TextHeading></TextHeading>
                <FormFieldText100></FormFieldText100>
                <div className="setting-container2">
                  <FormFieldText50></FormFieldText50>
                  <FormFieldPassword50 rootClassName="form-field-password50-root-class-name"></FormFieldPassword50>
                </div>
              </div>
              <ButtonPrimary></ButtonPrimary>
            </form>
            <div className="setting-container3">
              <TextHeading></TextHeading>
              <ConnectedSite rootClassName="connected-site-root-class-name"></ConnectedSite>
              <ConnectedSite
                rootClassName="connected-site-root-class-name"
                text="opportunitylists.com"
              ></ConnectedSite>
              <ConnectedSite
                rootClassName="connected-site-root-class-name"
                text="dietshouse.com"
              ></ConnectedSite>
              <ConnectedSite
                rootClassName="connected-site-root-class-name"
                text="workoutshq.com"
              ></ConnectedSite>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .setting-container {
            width: 100%;
            display: flex;
            z-index: 100;
            position: relative;
            min-height: 100vh;
            align-items: stretch;
            border-width: 1px;
            flex-direction: row;
            justify-content: space-between;
            background-image: radial-gradient(
              circle at left bottom,
              rgb(57, 57, 57) 0%,
              rgb(57, 57, 57) 16%,
              rgb(0, 0, 0) 100%
            );
          }
          .setting-container1 {
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: flex-start;
          }
          .setting-main-containter {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 800px;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #383838;
            border-style: solid;
            border-width: 1px;
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 15px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #1e1e1e;
          }
          .setting-form {
            width: 100%;
            height: 100%;
            align-self: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .setting-wordpress-credentials {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .setting-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
          }
          .setting-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 479px) {
            .setting-container1 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Setting
