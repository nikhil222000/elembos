import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Just few easy steps!
            </h2>
            <p className="thq-body-large">
              Just provide us the details and everything will be delivered to you right on time!
            </p>
            <div className="steps2-actions">
              <a href='#contact'>
              <button className="thq-button-filled thq-button-animated steps2-button">
                <span className="thq-body-small">Contact Us</span>
              </button>
              </a>
            </div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2>
                {props.step1Title ?? (
                  <Fragment>
                    <h2 className="steps2-text28 thq-heading-2">
                      Checkout what we offer
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text26 thq-body-small">
                      Explore our innovative medicine marketing solutions
                      designed to ensure the safety and integrity of
                      pharmaceutical products.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text15 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2>
                {props.step2Title ?? (
                  <Fragment>
                    <h2 className="steps2-text30 thq-heading-2">
                      Meet Our Team
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text25 thq-body-small">
                      Get to know the main members of E Lembos Life Sciences who
                      are dedicated to revolutionizing Pharma Marketing.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text18 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2>
                {props.step3Title ?? (
                  <Fragment>
                    <h2 className="steps2-text27 thq-heading-2">
                      Browse Our Products
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text31 thq-body-small">
                      Discover a range of high-quality medicine marketing
                      products that cater to the needs of the pharmaceutical
                      industry.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text21 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2>
                {props.step4Title ?? (
                  <Fragment>
                    <h2 className="steps2-text29 thq-heading-2">Contact Us</h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text32 thq-body-small">
                      Reach out to us for inquiries, collaborations, or any
                      other information. We are here to assist you.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step2Description: undefined,
  step1Description: undefined,
  step3Title: undefined,
  step1Title: undefined,
  step4Title: undefined,
  step2Title: undefined,
  step3Description: undefined,
  step4Description: undefined,
}

Steps2.propTypes = {
  step2Description: PropTypes.element,
  step1Description: PropTypes.element,
  step3Title: PropTypes.element,
  step1Title: PropTypes.element,
  step4Title: PropTypes.element,
  step2Title: PropTypes.element,
  step3Description: PropTypes.element,
  step4Description: PropTypes.element,
}

export default Steps2
