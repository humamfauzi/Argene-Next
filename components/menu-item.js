import React from 'react'

import PropTypes from 'prop-types'

const MenuItem = (props) => {
  return (
    <>
      <div className="menu-item-menu-item">
        <img
          alt={props.img_alt_planning}
          src={props.icon_planning}
          className="menu-item-image"
        />
        <span className="menu-item-text menuItem">{props.text_planning}</span>
      </div>
      <style jsx>
        {`
          .menu-item-menu-item {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius5);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .menu-item-menu-item:hover {
            padding-left: var(--dl-space-space-unit);
            background-image: linear-gradient(
              90deg,
              rgba(22, 228, 158, 0.5) 1%,
              rgba(22, 228, 158, 0) 100%
            );
          }
          .menu-item-image {
            width: 22px;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
          }
          .menu-item-text {
            color: #ffffff;
          }
          @media (max-width: 479px) {
            .menu-item-image {
              margin-right: var(--dl-space-space-halfunit);
            }
            .menu-item-text {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

MenuItem.defaultProps = {
  text_planning: 'Planning',
  img_alt_planning: 'image',
  icon_planning: '/playground_assets/edit-200h.png',
}

MenuItem.propTypes = {
  text_planning: PropTypes.string,
  img_alt_planning: PropTypes.string,
  icon_planning: PropTypes.string,
}

export default MenuItem
