import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>E Lembos</title>
        <meta property="og:title" content="E Lembos" />
      </Helmet>
      <Navbar8
      ></Navbar8>
      <section id='home'>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114 thq-body-small">
              Explore Our Products
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115 thq-body-small">Meet Our Team</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116 thq-body-large">
              E Lembos Life Sciences is dedicated to ensuring the safety and
              integrity of pharmaceutical products through cutting-edge medicine
              marketing solutions.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117 thq-heading-1">
              Revolutionizing Pharma Marketing with Innovative Medicine
              Marketing Solutions
            </span>
          </Fragment>
        }
      ></Hero17>
      </section>
      <section id='about'>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118 thq-heading-2">
              Innovative Marketing Solutions
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119 thq-heading-2">
              Customized Options
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120 thq-heading-2">Start your journey with us</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121 thq-body-small">
            Founded in 2016 but separately established in 2022, E Lembos Life Sciences has embarked on a transformative journey dedicated to revolutionizing Pharma Marketing. Committed to excellence, we have etched our presence in the industry as innovators and trailblazers.
Our unwavering commitment to providing top-notch solutions in medicine marketing is rooted in a deep-seated dedication to ensuring the safety and integrity of pharmaceutical products. We understand the critical role that marketing plays in the pharmaceutical ecosystem, and our mission is to redefine industry standards through a perfect blend of precision, creativity, and innovation.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122 thq-body-small">
            At the core of our philosophy is the belief that medicine marketing is not just a functional necessity but an opportunity to infuse vibrancy and ingenuity. We aim to bring a splash of color and innovation to the world of medicine marketing, transforming it from a mere protective covering into a powerful medium that communicates brand identity and resonates with end-users.

As a dynamic force in the Pharma Marketing landscape, we continually push the boundaries of what is possible. Our journey is marked by a relentless pursuit of excellence, a commitment to pushing the envelope of creativity, and a passion for making a positive impact on the healthcare industry.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123 thq-body-small">
            Join us in our mission to redefine Pharma Marketing, where every solution we provide is a testament to our commitment to excellence, safety, and innovation. E Lembos Life Sciences invites you to explore the boundless possibilities that arise when dedication meets ingenuity.
            </span>
          </Fragment>
        }
      ></Features24>
      </section>
      <section id='cta'>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Discover Our Products</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125 thq-body-large">
              Explore our innovative medicine marketing solutions and join us in
              shaping the future of pharmaceutical products.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126 thq-heading-2">
              Ready to revolutionize Pharma Marketing?
            </span>
          </Fragment>
        }
      ></CTA26>
      </section>
        <section id='step' >
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text186 thq-heading-2">
              Explore our products
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text187 thq-heading-2">Meet the team</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text188 thq-heading-2">
              Share your requirements
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text189 thq-heading-2">Take your delivery!</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text190 thq-body-small">
              Explore our innovative medicine marketing solutions designed to
              ensure the safety and integrity of pharmaceutical products.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text191 thq-body-small">
              Get to know the main members of E Lembos Life Sciences who are
              dedicated to revolutionizing Pharma Marketing.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text192 thq-body-small">
              Discover a range of services we provide that
              cater your requirements.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text193 thq-body-small">
              This is the most interesting part. Receive your delivery!
            </span>
          </Fragment>
        }
      ></Steps2>
      </section>
      <section id='team'>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text194 thq-body-small">
            Dilip Kumar has 22 years of experience in Pharmaceutical Sales and marketing in different capacities and launched many first time in India innovative brands with huge success
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text195 thq-body-small">
            Think tank of E Lembos Life Sciences, having 37 years vast experience in Pharmaceuticals Marketing, recruitment and training in India and overseas in different MNC's and built many big brands
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text196 thq-body-small">
            With a deep understanding of market trends, investment strategies, and risk management, he plays a pivotal role in steering our journey toward financial success.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text197 thq-body-small">
            Having 21 years of experiencein in Sales, Marketing & Product Management
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text198 thq-body-small">
              Read what our clients have to say about our medicine marketing
              solutions.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text199 thq-heading-2">Meet the Team</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text200 thq-body-large">Dilip Kumar</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text201 thq-body-large">Prabuddha Bandyopadhyay</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text202 thq-body-large">CA Sujeet Kumar Srivastava</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text203 thq-body-large">Dinesh Kumar</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text204 thq-body-small">
              CEO
            </span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text205 thq-body-small">
              General Manager, Marketing
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text206 thq-body-small">
            Financial Advisor
            </span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text207 thq-body-small">
              Product Manager
            </span>
          </Fragment>
        }
      ></Testimonial17>
      </section>
      <section id='contact'>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text209 thq-heading-2">Contact us</span>
          </Fragment>
        }
      ></Contact10>
      </section>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text214 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text215 thq-body-small">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text216 thq-body-small">Products</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217 thq-body-small">Team</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text218 thq-body-small">Contact Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text219 thq-body-small">
              Terms and Conditions
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
