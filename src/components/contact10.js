import React, { Fragment } from 'react'
import building from '../assets/building.jpg'
import logo2 from '../assets/logo2.png'
import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2>
                <Fragment>
                  <h2 className="contact10-text17 thq-heading-2">Contact Us</h2>
                </Fragment>
            </h2>
            <p>
                <Fragment>
                  <p className="contact10-text20 thq-body-large">
                  Business Office:- 13F-B-05, Empire Heights Tower B Business Bay, Dubai-U.A.E
                  </p>
                </Fragment>
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={building}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            {/* <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div> */}
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src={logo2}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <p>
                <Fragment>
                  <p className="contact10-text16 thq-body-large">
                  Call us on  +91 9304814701 / +91 9690571013
                  </p>
                </Fragment>
            </p>
            <p>
                <Fragment>
                  <p className="contact10-text16 thq-body-large">
OR                  </p>
                </Fragment>
            </p>
            <div className="contact10-container5">
            <a
  href="mailto:elemboslifesciences@gmail.com"
  target="_blank"
  rel="noreferrer noopener"
  className="thq-body-small thq-button-flat"
>
  Click here to mail us
</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location2Description: undefined,
  heading1: undefined,
  location1ImageAlt: 'image1Alt',
  location1ImageSrc:
    'https://images.unsplash.com/photo-1557838923-2985c318be48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTQ3OTY3OHw&ixlib=rb-4.0.3&q=80&w=1080',
  location1Description: undefined,
  location2: undefined,
  content1: undefined,
  location2ImageSrc:
    'https://images.unsplash.com/photo-1669707041081-dd4d51943041?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTQ3OTY3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  location1: undefined,
  location2ImageAlt: 'image2Alt',
}

Contact10.propTypes = {
  location2Description: PropTypes.element,
  heading1: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  location1ImageSrc: PropTypes.string,
  location1Description: PropTypes.element,
  location2: PropTypes.element,
  content1: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  location1: PropTypes.element,
  location2ImageAlt: PropTypes.string,
}

export default Contact10
