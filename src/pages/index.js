import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "./index.scss"

import EnjoyablePlaceImg from "../images/homepage/enjoyable-place-desktop@2x.jpg"
import LocallySourcedImg from "../images/homepage/locally-sourced-desktop@2x.jpg"
import SalmonImg from "../images/homepage/salmon-desktop-tablet@2x.jpg"
import BeefImg from "../images/homepage/beef-desktop-tablet@2x.jpg"
import ChocolateImg from "../images/homepage/chocolate-desktop-tablet@2x.jpg"
import FamilyGatheringImg from "../images/homepage/family-gathering-desktop@2x.jpg"
import SpecialEventsImg from "../images/homepage/special-events-desktop@2x.jpg"
import SocialEventsImg from "../images/homepage/social-events-desktop@2x.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header>
      <span>dine</span>
      <h1>Exquisite dining since 1989</h1>
      <p>
        Experience our seasonal menu in beautiful country surroundings. Eat the
        freshest produce from the comfort of our farmhouse.
      </p>
      <button>BOOK A TABLE</button>
    </header>
    <div>
      <div>
        <img src={EnjoyablePlaceImg} alt="valley with houses" />
        <h2>Enjoyable place for all the family</h2>
        <p>
          Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal
        </p>
      </div>
      <div>
        <img src={LocallySourcedImg} alt="a plate with food" />
        <h2>The most locally sourced food</h2>
        <p>
          All our ingredients come directly from our farm or local fishery. So
          you can be sure that you’re eating the freshest, most sustainable
          food.
        </p>
      </div>
    </div>

    <div>
      <div>
        <h2>A few highlights from our menu</h2>
        <p>
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </p>
      </div>
      <div>
        <div>
          <img src={SalmonImg} alt="Seared Salmon Fillet" />
          <div>
            <h3>Seared Salmon Fillet</h3>
            <p>
              Our locally sourced salmon served with a refreshing buckwheat
              summer salad.
            </p>
          </div>
        </div>
        <div>
          <img src={BeefImg} alt="Rosemary Filet Mignon" />
          <div>
            <h3>Rosemary Filet Mignon</h3>
            <p>
              Our prime beef served to your taste with a delicious choice of
              seasonal sides
            </p>
          </div>
        </div>
        <div>
          <img src={ChocolateImg} alt="Summer Fruit Chocolate Mousse" />
          <div>
            <h3>Summer Fruit Chocolate Mousse</h3>
            <p>
              Creamy mousse combined with summer fruits and dark chocolate
              shavings.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="events">
      <ul>
        <li>Family Gathering</li>
        <li>Special Events</li>
        <li>Social Event</li>
      </ul>
      <div>
        <img src={FamilyGatheringImg} alt="" />
        <h3>Family Gathering</h3>
        <p>
          We love catering for entire families. So please bring everyone along
          for a special meal with your loved ones. We’ll provide a memorable
          experience for all.
        </p>
        <button>BOOK A TABLE</button>
      </div>
      <div>
        <img src={SpecialEventsImg} alt="" />
        <h3>Special Event</h3>
        <p>
          Whether it’s a romantic dinner or special date you’re celebrating with
          others we’ll look after you. We’ll be sure to mark your special date
          with an unforgettable meal.
        </p>
        <button>BOOK A TABLE</button>
      </div>
      <div>
        <img src={SocialEventsImg} alt="" />
        <h3>Social Events</h3>
        <p>
          Are you looking to have a larger social event? No problem! We’re more
          than happy to cater for big parties. We’ll work with you to make your
          event a hit with everyone.
        </p>
        <button>BOOK A TABLE</button>
      </div>

      <div className="reservation">
        <h2>Ready to make a reservation?</h2>
        <button>BOOK A TABLE</button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
