import React, { useState, Fragment } from 'react'
import logo1 from '../assets/logotop.png'
import PropTypes from 'prop-types'

import './navbar8.css'

const Navbar8 = (props) => {
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  return (
    <header className="navbar8-container1">
        <div className='navbar8-image1div'>
          <img
            alt={props.logoAlt}
            src={logo1}
            className="navbar8-image1"
          />
        </div>
      <header data-thq="thq-navbar" className="navbar8-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="navbar8-desktop-menu">
          <div className="navbar8-buttons1">
            <button className="navbar8-action11 thq-button-filled thq-button-animated">
              <span className="thq-body-small">
                <a href='#home'>
                  <Fragment>
                    <span className="navbar8-text24">Home</span>
                  </Fragment>
                </a>
              </span>
            </button>
            <button className="navbar8-action11 thq-button-filled thq-button-animated">
              <span className="thq-body-small">
                <a href='#about'>
                  <Fragment>
                    <span className="navbar8-text24">About us</span>
                  </Fragment>
                </a>
              </span>
            </button>
            <button className="navbar8-action11 thq-button-filled thq-button-animated">
              <span className="thq-body-small">
                <a href='#team'>
                  <Fragment>
                    <span className="navbar8-text24">Our Team</span>
                  </Fragment>
                </a>
              </span>
            </button>
            <button className="navbar8-action21 thq-button-animated thq-button-outline">
              <span className="thq-body-small">
                <a href='#contact'>
                  <Fragment>
                    <span className="navbar8-text24">Contact Us</span>
                  </Fragment>
                </a>
              </span>
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar8-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar8-icon14">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar8-mobile-menu">
          <div className="navbar8-nav">
            <div className="navbar8-top">
              <img
                alt={props.logoAlt}
                src={logo1}
                className="navbar8-logo"
              />
              <div data-thq="thq-close-menu" className="navbar8-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar8-icon16">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="navbar8-buttons2">
            <button className="navbar8-action11 thq-button-filled thq-button-animated">
              <span className="thq-body-small">
                <a href='#home'>
                  <Fragment>
                    <span className="navbar8-text24">Home</span>
                  </Fragment>
                </a>
              </span>
            </button>
            <button className="navbar8-action11 thq-button-filled thq-button-animated">
              <span className="thq-body-small">
                <a href='#about'>
                  <Fragment>
                    <span className="navbar8-text24">About us</span>
                  </Fragment>
                </a>
              </span>
            </button>
            <button className="navbar8-action11 thq-button-filled thq-button-animated">
              <span className="thq-body-small">
                <a href='#team'>
                  <Fragment>
                    <span className="navbar8-text24">Our Team</span>
                  </Fragment>
                </a>
              </span>
            </button>
            <button className="navbar8-action21 thq-button-animated thq-button-outline">
              <span className="thq-body-small">
                <a href='#contact'>
                  <Fragment>
                    <span className="navbar8-text24">Contact Us</span>
                  </Fragment>
                </a>
              </span>
            </button>
            </div>
          </div>
          <div className="navbar8-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="thq-icon-x-small"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="thq-icon-x-small"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="thq-icon-small"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        {link5DropdownVisible && (
          <div className="navbar8-container7 thq-box-shadow">
            <div className="navbar8-link5-menu-list">
              <a href={props.linkUrlPage1}>
                <div className="navbar8-menu-item5">
                  <img
                    alt={props.page1ImageAlt}
                    src={props.page1ImageSrc}
                    className="navbar8-page1-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content5">
                    <span>
                      {props.page1 ?? (
                        <Fragment>
                          <span className="navbar8-text23 thq-body-large">
                            Home
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.page1Description ?? (
                        <Fragment>
                          <span className="navbar8-text14 thq-body-small">
                            Learn more about E Lembos Life Sciences and our
                            mission.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage2}>
                <div className="navbar8-menu-item6">
                  <img
                    alt={props.page2ImageAlt}
                    src={props.page2ImageSrc}
                    className="navbar8-page2-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content6">
                    <span>
                      {props.page2 ?? (
                        <Fragment>
                          <span className="navbar8-text26 thq-body-large">
                            About Us
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.page2Description ?? (
                        <Fragment>
                          <span className="navbar8-text15 thq-body-small">
                            Discover the story behind E Lembos Life Sciences and
                            our journey in Pharma Marketing.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage3}>
                <div className="navbar8-menu-item7">
                  <img
                    alt={props.page3ImageAlt}
                    src={props.page3ImageSrc}
                    className="navbar8-page3-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content7">
                    <span>
                      {props.page3 ?? (
                        <Fragment>
                          <span className="navbar8-text21 thq-body-large">
                            Our Team
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.page3Description ?? (
                        <Fragment>
                          <span className="navbar8-text18 thq-body-small">
                            Meet the dedicated team members driving innovation
                            at E Lembos Life Sciences.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage4}>
                <div className="navbar8-menu-item8">
                  <img
                    alt={props.page4ImageAlt}
                    src={props.page4ImageSrc}
                    className="navbar8-page4-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content8">
                    <span>
                      {props.page4 ?? (
                        <Fragment>
                          <span className="navbar8-text19 thq-body-large">
                            Contact Us
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.page4Description ?? (
                        <Fragment>
                          <span className="navbar8-text20 thq-body-small">
                            Get in touch with us for inquiries, collaborations,
                            or any other information.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )}
      </header>
      {link5DropdownVisible && (
        <div
          onClick={() => setLink5DropdownVisible(false)}
          className="navbar8-container8"
        ></div>
      )}
    </header>
  )
}

Navbar8.defaultProps = {
  page1Description: undefined,
  linkUrlPage2: 'https://www.teleporthq.io',
  page2Description: undefined,
  link4: undefined,
  link1Url: 'https://www.teleporthq.io',
  page4ImageAlt: 'Contact Us Image',
  link3Url: 'https://www.teleporthq.io',
  linkUrlPage4: 'https://www.teleporthq.io',
  link2: undefined,
  page3Description: undefined,
  linkUrlPage1: 'https://www.teleporthq.io',
  page1ImageAlt: 'Home Image',
  page4: undefined,
  page4Description: undefined,
  linkUrlPage3: 'https://www.teleporthq.io',
  page3: undefined,
  logoAlt: 'E Lembos Life Sciences Logo',
  action2: undefined,
  page1: undefined,
  page4ImageSrc:
    'https://images.unsplash.com/photo-1592963218710-1f12d7db6076?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTQ3OTY3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  action1: undefined,
  page3ImageAlt: 'Our Team Image',
  link3: undefined,
  page3ImageSrc:
    'https://images.unsplash.com/photo-1571141133233-bef5495a1cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTQ3OTY3OHw&ixlib=rb-4.0.3&q=80&w=1080',
  page2ImageAlt: 'About Us Image',
  link2Url: 'https://www.teleporthq.io',
  page2ImageSrc:
    'https://images.unsplash.com/photo-1528272252360-5efd274e36fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTQ3OTY3OHw&ixlib=rb-4.0.3&q=80&w=1080',
  page2: undefined,
  link1: undefined,
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  page1ImageSrc:
    'https://images.unsplash.com/photo-1631125912062-6ccfa41ce865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTQ3OTY3N3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Navbar8.propTypes = {
  page1Description: PropTypes.element,
  linkUrlPage2: PropTypes.string,
  page2Description: PropTypes.element,
  link4: PropTypes.element,
  link1Url: PropTypes.string,
  page4ImageAlt: PropTypes.string,
  link3Url: PropTypes.string,
  linkUrlPage4: PropTypes.string,
  link2: PropTypes.element,
  page3Description: PropTypes.element,
  linkUrlPage1: PropTypes.string,
  page1ImageAlt: PropTypes.string,
  page4: PropTypes.element,
  page4Description: PropTypes.element,
  linkUrlPage3: PropTypes.string,
  page3: PropTypes.element,
  logoAlt: PropTypes.string,
  action2: PropTypes.element,
  page1: PropTypes.element,
  page4ImageSrc: PropTypes.string,
  action1: PropTypes.element,
  page3ImageAlt: PropTypes.string,
  link3: PropTypes.element,
  page3ImageSrc: PropTypes.string,
  page2ImageAlt: PropTypes.string,
  link2Url: PropTypes.string,
  page2ImageSrc: PropTypes.string,
  page2: PropTypes.element,
  link1: PropTypes.element,
  logoSrc: PropTypes.string,
  page1ImageSrc: PropTypes.string,
}

export default Navbar8