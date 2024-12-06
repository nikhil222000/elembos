import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import dilip from '../assets/dilip2.jpg'
import gm from '../assets/gm.png'
import sk from '../assets/sk.png'
import zm from '../assets/zm.jpg'
import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial17-text25 thq-heading-2">
                  Testimonials
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text27 thq-body-small">
                  Read what our clients have to say about our medicine marketing
                  solutions.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={dilip}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong>
                      {props.author1Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text37 thq-body-large">
                            John Doe
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text32 thq-body-small">
                            CEO of ABC Pharmaceuticals
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text34 thq-body-small">
                        E Lembos Life Sciences has truly revolutionized the way
                        we package our medicines. Their attention to detail and
                        commitment to safety is unparalleled.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={gm}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong>
                      {props.author2Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text24 thq-body-large">
                            Jane Smith
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text33 thq-body-small">
                            Head of Operations at XYZ Biotech
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text35 thq-body-small">
                        We have been using E Lembos Life Sciences for our
                        medicine marketing needs, and we couldn&apos;t be
                        happier. Their innovative solutions have helped us
                        maintain the integrity of our products.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={sk}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong>
                      {props.author3Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text26 thq-body-large">
                            Michael Johnson
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text31 thq-body-small">
                            Pharmacist at LMN Pharmacy
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text30 thq-body-small">
                        Working with E Lembos Life Sciences has been a
                        game-changer for us. Their marketing solutions have not
                        only improved the safety of our medicines but also
                        enhanced our brand image.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={zm}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong>
                      {props.author4Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text28 thq-body-large">
                            Sarah Lee
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text36 thq-body-small">
                            Supply Chain Manager at PQR Meds
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text29 thq-body-small">
                        I highly recommend E Lembos Life Sciences for any
                        pharmaceutical marketing needs. Their team is
                        professional, efficient, and always delivers top-notch
                        quality.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author2Name: undefined,
  heading1: undefined,
  author3Name: undefined,
  author4Alt: 'Image of Sarah Lee, Supply Chain Manager at PQR Meds',
  author3Alt: 'Image of Michael Johnson, Pharmacist at LMN Pharmacy',
  author2Src:
    'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTQ3OTY3OHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1497271679421-ce9c3d6a31da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTQ3OTY3OHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: undefined,
  review4: undefined,
  review3: undefined,
  author3Position: undefined,
  author2Alt: 'Image of Jane Smith, Head of Operations at XYZ Biotech',
  author1Position: undefined,
  author2Position: undefined,
  author1Alt: 'Image of John Doe, CEO of ABC Pharmaceuticals',
  author4Src:
    'https://images.unsplash.com/photo-1504904488824-dbeda3cb530b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTQ3OTY3OHw&ixlib=rb-4.0.3&q=80&w=1080',
  review1: undefined,
  review2: undefined,
  author4Position: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTQ3OTY3OXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: undefined,
}

Testimonial17.propTypes = {
  author2Name: PropTypes.element,
  heading1: PropTypes.element,
  author3Name: PropTypes.element,
  author4Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  author2Src: PropTypes.string,
  content1: PropTypes.element,
  author1Src: PropTypes.string,
  author4Name: PropTypes.element,
  review4: PropTypes.element,
  review3: PropTypes.element,
  author3Position: PropTypes.element,
  author2Alt: PropTypes.string,
  author1Position: PropTypes.element,
  author2Position: PropTypes.element,
  author1Alt: PropTypes.string,
  author4Src: PropTypes.string,
  review1: PropTypes.element,
  review2: PropTypes.element,
  author4Position: PropTypes.element,
  author3Src: PropTypes.string,
  author1Name: PropTypes.element,
}

export default Testimonial17
