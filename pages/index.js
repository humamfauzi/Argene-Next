import React from 'react'
import Head from 'next/head'

import Sidebar from '../components/sidebar'
import SectionHeader from '../components/section-header'
import DialogBoxSuccess from '../components/dialog-box-success'
import DialogBoxError from '../components/dialog-box-error'
import TextHeading from '../components/text-heading'
import ConnectedSite from '../components/connected-site'
import FormFieldText100 from '../components/form-field-text-100'
import FormFieldText50 from '../components/form-field-text-50'
import FormFieldPassword50 from '../components/form-field-password-50'
import FormFieldTextArea100 from '../components/form-field-text-area-100'
import FormFieldNumber33 from '../components/form-field-number-33'
import ButtonPrimary from '../components/button-primary'
import ButtonSecondary from '../components/button-secondary'
import TextRegular from '../components/text-regular'
import TableHeader from '../components/table-header'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Argene Dashboard</title>
          <meta property="og:title" content="Argene Dashboard" />
        </Head>
        <Sidebar rootClassName="sidebar-root-class-name"></Sidebar>
        <div className="home-container01">
          <SectionHeader></SectionHeader>
          <div className="home-main-containter">
            <DialogBoxSuccess></DialogBoxSuccess>
            <DialogBoxError rootClassName="dialog-box-error-root-class-name6"></DialogBoxError>
            <form className="home-form">
              <div className="home-wordpress-credentials">
                <TextHeading></TextHeading>
                <ConnectedSite rootClassName="connected-site-root-class-name"></ConnectedSite>
                <FormFieldText100></FormFieldText100>
                <div className="home-container02">
                  <FormFieldText50></FormFieldText50>
                  <FormFieldPassword50 rootClassName="form-field-password50-root-class-name1"></FormFieldPassword50>
                </div>
              </div>
              <div className="home-keywords">
                <h1 className="home-heading">Keyword Details</h1>
                <FormFieldTextArea100></FormFieldTextArea100>
                <div className="home-container03 formfield">
                  <div className="home-container04">
                    <FormFieldNumber33></FormFieldNumber33>
                  </div>
                </div>
              </div>
              <ButtonPrimary></ButtonPrimary>
              <ButtonSecondary></ButtonSecondary>
              <DialogBoxError
                text="It doesn’t look like a CSV file. Please check your file format."
                rootClassName="dialog-box-error-root-class-name"
              ></DialogBoxError>
              <DialogBoxError
                text="CSV file can’t be parse. Please follow the accepted CSV format."
                rootClassName="dialog-box-error-root-class-name1"
              ></DialogBoxError>
              <div className="home-info">
                <span className="home-text">
                  <span className="p">
                    Max 300 rows. See the accepted format
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://sheet.new"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link"
                  >
                    here
                  </a>
                </span>
              </div>
              <div className="home-c-s-v-preview">
                <h1 className="home-heading1">CSV Upload</h1>
                <TextRegular
                  text="Review the sample keywords below then press Submit CSV."
                  rootClassName="text-regular-root-class-name"
                ></TextRegular>
                <div className="home-table">
                  <TableHeader></TableHeader>
                  <div className="home-table-body">
                    <div className="home-container05">
                      <TextRegular
                        text="10"
                        rootClassName="text-regular-root-class-name1"
                      ></TextRegular>
                    </div>
                    <div className="home-container06">
                      <TextRegular
                        text="what is cico diet plan"
                        rootClassName="text-regular-root-class-name4"
                      ></TextRegular>
                    </div>
                  </div>
                  <div className="home-table-body1">
                    <div className="home-container07">
                      <TextRegular
                        text="10"
                        rootClassName="text-regular-root-class-name20"
                      ></TextRegular>
                    </div>
                    <div className="home-container08">
                      <TextRegular
                        text="what is cico diet plan"
                        rootClassName="text-regular-root-class-name21"
                      ></TextRegular>
                    </div>
                  </div>
                  <div className="home-table-body2">
                    <div className="home-container09">
                      <TextRegular
                        text="10"
                        rootClassName="text-regular-root-class-name18"
                      ></TextRegular>
                    </div>
                    <div className="home-container10">
                      <TextRegular
                        text="what is cico diet plan"
                        rootClassName="text-regular-root-class-name19"
                      ></TextRegular>
                    </div>
                  </div>
                  <div className="home-table-body3">
                    <div className="home-container11">
                      <TextRegular
                        text="10"
                        rootClassName="text-regular-root-class-name16"
                      ></TextRegular>
                    </div>
                    <div className="home-container12">
                      <TextRegular
                        text="what is cico diet plan"
                        rootClassName="text-regular-root-class-name17"
                      ></TextRegular>
                    </div>
                  </div>
                  <div className="home-table-body4">
                    <div className="home-container13">
                      <TextRegular
                        text="10"
                        rootClassName="text-regular-root-class-name14"
                      ></TextRegular>
                    </div>
                    <div className="home-container14">
                      <TextRegular
                        text="what is cico diet plan"
                        rootClassName="text-regular-root-class-name15"
                      ></TextRegular>
                    </div>
                  </div>
                </div>
                <TextRegular
                  text="Total Row: 290"
                  rootClassName="text-regular-root-class-name13"
                ></TextRegular>
              </div>
              <ButtonPrimary text="Submit CSV"></ButtonPrimary>
            </form>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
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
          .home-container01 {
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
          .home-main-containter {
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
          .home-form {
            width: 100%;
            height: 100%;
            align-self: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-wordpress-credentials {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-keywords {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading {
            color: var(--dl-color-gray-hwhite);
            font-size: 1.5em;
            padding-top: var(--dl-space-space-halfunit);
            padding-bottom: 0px;
          }
          .home-container03 {
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .home-info {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: column;
          }
          .home-text {
            color: var(--dl-color-gray-pgray);
            width: auto;
            font-size: 14px;
            margin-top: var(--dl-space-space-halfunit);
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 1.15;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: none;
            text-decoration: none;
          }
          .home-link {
            color: var(--dl-color-primary-300);
          }
          .home-c-s-v-preview {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading1 {
            color: var(--dl-color-gray-hwhite);
            font-size: 1.5em;
            padding-top: var(--dl-space-space-halfunit);
            padding-bottom: 0px;
          }
          .home-table {
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
          .home-table-body {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-darkergray);
            border-width: 0px;
            background-color: var(--dl-color-gray-black);
            border-top-width: 0px;
            border-bottom-width: 1px;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 30%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container06 {
            flex: 0 0 auto;
            width: 70%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .home-table-body1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-darkergray);
            border-width: 0px;
            background-color: var(--dl-color-gray-black);
            border-top-width: 0px;
            border-bottom-width: 1px;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: 30%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: 70%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .home-table-body2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-darkergray);
            border-width: 0px;
            background-color: var(--dl-color-gray-black);
            border-top-width: 0px;
            border-bottom-width: 1px;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 30%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 70%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .home-table-body3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-darkergray);
            border-width: 0px;
            background-color: var(--dl-color-gray-black);
            border-top-width: 0px;
            border-bottom-width: 1px;
          }
          .home-container11 {
            flex: 0 0 auto;
            width: 30%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: 70%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .home-table-body4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-darkergray);
            border-width: 0px;
            background-color: var(--dl-color-gray-black);
            border-top-width: 0px;
            border-bottom-width: 1px;
          }
          .home-container13 {
            flex: 0 0 auto;
            width: 30%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container14 {
            flex: 0 0 auto;
            width: 70%;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          @media (max-width: 479px) {
            .home-container01 {
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

export default Home
