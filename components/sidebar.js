import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import MenuItem from './menu-item'

const Sidebar = (props) => {
  return (
    <>
      <div className={`sidebar-container ${props.rootClassName} `}>
        <div className="sidebar-image-wrapper">
          <Link href="/">
            <a className="sidebar-link">
              <img
                alt={props.img_alt_logo}
                src={props.logo_source}
                loading="eager"
                className="sidebar-image"
              />
            </a>
          </Link>
        </div>
        <div className="sidebar-menu-wrapper">
          <div className="sidebar-menu-wrapper-top">
            <Link href="/">
              <a className="sidebar-link1">
                <MenuItem className="sidebar-component"></MenuItem>
              </a>
            </Link>
            <Link href="/scheduled">
              <a className="sidebar-link2">
                <MenuItem
                  icon_planning="/playground_assets/calendar%20%5B1%5D-200h.png"
                  text_planning="Scheduled"
                  className="sidebar-component1"
                ></MenuItem>
              </a>
            </Link>
            <Link href="/posted">
              <a className="sidebar-link3">
                <MenuItem
                  icon_planning="/playground_assets/paper-plane-200h.png"
                  text_planning="Posted"
                  className="sidebar-component2"
                ></MenuItem>
              </a>
            </Link>
          </div>
          <div className="sidebar-menu-wrapper-bottom">
            <Link href="/posted">
              <a className="sidebar-link4">
                <MenuItem
                  icon_planning="/playground_assets/user-200h.png"
                  text_planning="Setting"
                  className="sidebar-component3"
                ></MenuItem>
              </a>
            </Link>
            <Link href="/posted">
              <a className="sidebar-link5">
                <MenuItem
                  icon_planning="/playground_assets/log-out-200h.png"
                  text_planning="Logout"
                  className="sidebar-component4"
                ></MenuItem>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .sidebar-container {
            top: 0;
            flex: 0.2;
            left: 0;
            width: 250px;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            z-index: 100;
            position: sticky;
            align-self: stretch;
            max-height: 100vh;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            background-image: linear-gradient(
              135deg,
              rgb(59, 59, 59) 2%,
              rgb(0, 0, 0) 100%
            );
          }
          .sidebar-image-wrapper {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sidebar-link {
            display: contents;
          }
          .sidebar-image {
            width: 200px;
            object-fit: cover;
            border-color: var(--dl-color-gray-darkergray);
            border-style: dashed;
            border-width: 0px;
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            border-bottom-width: 1px;
          }
          .sidebar-menu-wrapper {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .sidebar-menu-wrapper-top {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .sidebar-link1 {
            display: contents;
          }
          .sidebar-component {
            text-decoration: none;
          }
          .sidebar-link2 {
            display: contents;
          }
          .sidebar-component1 {
            text-decoration: none;
          }
          .sidebar-link3 {
            display: contents;
          }
          .sidebar-component2 {
            text-decoration: none;
          }
          .sidebar-menu-wrapper-bottom {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-darkergray);
            border-style: dashed;
            border-width: 1px;
            flex-direction: column;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .sidebar-link4 {
            display: contents;
          }
          .sidebar-component3 {
            text-decoration: none;
          }
          .sidebar-link5 {
            display: contents;
          }
          .sidebar-component4 {
            text-decoration: none;
          }

          @media (max-width: 479px) {
            .sidebar-container {
              width: auto;
              padding: var(--dl-space-space-halfunit);
            }
            .sidebar-image-wrapper {
              display: none;
            }
            .sidebar-image {
              display: none;
            }
            .sidebar-menu-wrapper {
              width: var(--dl-size-size-small);
            }
          }
        `}
      </style>
    </>
  )
}

Sidebar.defaultProps = {
  img_alt_logo: 'image',
  logo_source:
    '/playground_assets/frame%206%20argene%20logo%201%20hires-200h.png',
  rootClassName: '',
}

Sidebar.propTypes = {
  img_alt_logo: PropTypes.string,
  logo_source: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Sidebar
