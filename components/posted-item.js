import React from 'react'

import PropTypes from 'prop-types'

import ButtonItem from './button-item'

const PostedItem = (props) => {
  return (
    <>
      <div className="posted-item-container">
        <div className="posted-item-container01">
          <div className="posted-item-container02">
            <div className="posted-item-container03">
              <div className="posted-item-container04">
                <a
                  href={props.post_link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="posted-item-link"
                >
                  {props.post_title}
                </a>
              </div>
            </div>
            <div className="posted-item-container05">
              <div className="posted-item-container06">
                <span className="posted-item-text p">{props.post_date}</span>
              </div>
            </div>
          </div>
          <div className="posted-item-container07">
            <div className="posted-item-container08">
              <div className="posted-item-container09">
                <span className="posted-item-text01 p">
                  {props.category_label}
                </span>
                <span className="posted-item-text02 p">
                  {props.category_value}
                </span>
              </div>
              <div className="posted-item-container10">
                <span className="posted-item-text03">{props.words_label}</span>
                <span className="posted-item-text04 p">
                  {props.words_value}
                </span>
              </div>
            </div>
            <div className="posted-item-container11">
              <div className="posted-item-container12">
                <span className="posted-item-text05">
                  {props.keywords_label}
                </span>
                <span className="posted-item-text06 p">
                  {props.keywords_value}
                </span>
              </div>
              <div className="posted-item-container13">
                <span className="posted-item-text07">{props.site_label}</span>
                <span className="posted-item-text08 p">{props.site_value}</span>
              </div>
            </div>
            <div className="posted-item-container14">
              <ButtonItem rootClassName="button-item-root-class-name"></ButtonItem>
              <div className="posted-item-container15">
                <span className="posted-item-text09 p">
                  {props.revision_counter}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .posted-item-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .posted-item-container:hover {
            background-color: #232323;
          }
          .posted-item-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-color: #363636;
            border-width: 1px;
            flex-direction: column;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .posted-item-container02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .posted-item-container03 {
            flex: 0 0 auto;
            width: 80%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            justify-content: center;
          }
          .posted-item-container04 {
            display: flex;
            position: relative;
          }
          .posted-item-link {
            color: var(--dl-color-primary-100);
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .posted-item-link:hover {
            color: var(--dl-color-primary-dimmedgreen);
          }
          .posted-item-container05 {
            flex: 0 0 auto;
            width: 20%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
          }
          .posted-item-container06 {
            display: flex;
            position: relative;
          }
          .posted-item-text {
            color: var(--dl-color-gray-pgray);
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .posted-item-container07 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .posted-item-container08 {
            flex: 0 0 auto;
            width: 20%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            justify-content: center;
          }
          .posted-item-container09 {
            display: flex;
            position: relative;
          }
          .posted-item-text01 {
            color: var(--dl-color-gray-pgray);
            margin-top: var(--dl-space-space-halfunit);
            font-weight: bold;
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .posted-item-text02 {
            color: var(--dl-color-gray-pgray);
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .posted-item-container10 {
            display: flex;
            position: relative;
          }
          .posted-item-text03 {
            color: var(--dl-color-gray-pgray);
            font-size: 14px;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Montserrat;
            font-weight: 700;
            line-height: 1.15;
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: none;
            text-decoration: none;
          }
          .posted-item-text04 {
            color: var(--dl-color-gray-pgray);
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .posted-item-container11 {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            justify-content: center;
          }
          .posted-item-container12 {
            display: flex;
            position: relative;
          }
          .posted-item-text05 {
            color: var(--dl-color-gray-pgray);
            font-size: 14px;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Montserrat;
            font-weight: 700;
            line-height: 1.15;
            margin-right: 4px;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: none;
            text-decoration: none;
          }
          .posted-item-text06 {
            color: var(--dl-color-gray-pgray);
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .posted-item-container13 {
            display: flex;
            position: relative;
          }
          .posted-item-text07 {
            color: var(--dl-color-gray-pgray);
            font-size: 14px;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Montserrat;
            font-weight: 700;
            line-height: 1.15;
            margin-right: 4px;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: none;
            text-decoration: none;
          }
          .posted-item-text08 {
            color: var(--dl-color-gray-pgray);
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .posted-item-container14 {
            flex: 0 0 auto;
            width: 20%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            justify-content: center;
          }
          .posted-item-container15 {
            display: flex;
            position: relative;
          }
          .posted-item-text09 {
            color: var(--dl-color-gray-pgray);
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

PostedItem.defaultProps = {
  site_value: 'contentcapybara.com',
  post_date: '25 Sep 2022',
  keywords_label: 'keywords: ',
  category_label: 'category:',
  rootClassName1: '',
  keywords_value: 'what is cico diet plan',
  category_value: '5',
  revision_counter: '0/3 revision',
  site_label: 'site: ',
  words_value: '2350',
  words_label: 'words: ',
  rootClassName: '',
  post_title: 'How Content Marketing Can Improve Your SEO Strategy',
  post_link: 'https://site.com/post-1',
}

PostedItem.propTypes = {
  site_value: PropTypes.string,
  post_date: PropTypes.string,
  keywords_label: PropTypes.string,
  category_label: PropTypes.string,
  rootClassName1: PropTypes.string,
  keywords_value: PropTypes.string,
  category_value: PropTypes.string,
  revision_counter: PropTypes.string,
  site_label: PropTypes.string,
  words_value: PropTypes.string,
  words_label: PropTypes.string,
  rootClassName: PropTypes.string,
  post_title: PropTypes.string,
  post_link: PropTypes.string,
}

export default PostedItem
