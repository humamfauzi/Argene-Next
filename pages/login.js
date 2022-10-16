import React from 'react'
import Head from 'next/head'

const Login = (props) => {
  return (
    <>
      <div className="login-container">
        <Head>
          <title>Login - Argene Dashboard</title>
          <meta property="og:title" content="Login - Argene Dashboard" />
        </Head>
        <div className="login-container1">
          <img
            alt="image"
            src="/playground_assets/frame%206%20argene%20logo%201%20hires-200h.png"
            loading="eager"
            className="login-image"
          />
          <span className="login-text">
            Start your high ROI content marketing journey here
          </span>
          <img
            alt="image"
            src="/playground_assets/btn_google_signin_light_normal_web-200h.png"
            loading="eager"
            className="login-image1"
          />
          <span className="login-text1">
            <span>Can’t sign up?</span>
            <br></br>
            <span>Reach out to support@argene.ai for help</span>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .login-container {
            width: 100%;
            display: flex;
            z-index: 100;
            overflow: auto;
            min-height: 100vh;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            background-size: auto;
            justify-content: center;
            background-image: url('/playground_assets/argene%20wallpaper-1500w.jpg');
            background-position: center;
          }

          .login-container1 {
            width: 350px;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #444444;
            border-style: hidden;
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: 15px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
            background-color: #1e1e1e;
          }
          .login-image {
            width: 200px;
            object-fit: cover;
            border-color: #696969;
            border-style: dashed;
            border-width: 0px;
            padding-bottom: var(--dl-space-space-unit);
            border-bottom-width: 1px;
          }
          .login-text {
            color: var(--dl-color-gray-pgray);
            font-size: 14px;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .login-image1 {
            width: auto;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-unit);
          }

          .login-text1 {
            color: var(--dl-color-gray-pgray);
            font-size: 12px;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
        `}
      </style>
    </>
  )
}

export default Login
