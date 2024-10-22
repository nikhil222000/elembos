import React, { Fragment } from 'react'
import logo1 from '../assets/logo1rb.png'
import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo1">
            <img
              alt={props.logoAlt}
              style={{width: '10rem', height: '8rem'}}
              src={logo1}
              className="footer4-logo2"
            />
          </div>
          <div className="footer4-links">
            <a
              href="#home"
              rel="noreferrer noopener"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="footer4-text14 thq-body-small">Home</span>
                </Fragment>
              )}
            </a>
            <a
              href="#about"
              rel="noreferrer noopener"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="footer4-text16 thq-body-small">
                    About Us
                  </span>
                </Fragment>
              )}
            </a>
            <a
              href="#product"
              rel="noreferrer noopener"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="footer4-text18 thq-body-small">
                    Products
                  </span>
                </Fragment>
              )}
            </a>
            <a
              href="#team"
              rel="noreferrer noopener"
            >
              {props.link4 ?? (
                <Fragment>
                  <span className="footer4-text15 thq-body-small">Team</span>
                </Fragment>
              )}
            </a>
            <a
              href="#contact"
              rel="noreferrer noopener"
            >
              {props.link5 ?? (
                <Fragment>
                  <span className="footer4-text17 thq-body-small">
                    Contact Us
                  </span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        {/* <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">© 2024 E Lembos</span>
            </div>
            <div className="footer4-footer-links">
              <span>
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text20 thq-body-small">
                      Privacy Policy
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer4-text21 thq-body-small">
                      Terms and Conditions
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer4-text19 thq-body-small">
                      Cookies Policy
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  link1: undefined,
  link4: undefined,
  link2: undefined,
  link5: undefined,
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  link3: undefined,
  cookiesLink: undefined,
  privacyLink: undefined,
  termsLink: undefined,
  logoAlt: 'E Lembos Life Sciences Logo',
}

Footer4.propTypes = {
  link1: PropTypes.element,
  link4: PropTypes.element,
  link2: PropTypes.element,
  link5: PropTypes.element,
  logoSrc: PropTypes.string,
  link3: PropTypes.element,
  cookiesLink: PropTypes.element,
  privacyLink: PropTypes.element,
  termsLink: PropTypes.element,
  logoAlt: PropTypes.string,
}

export default Footer4
