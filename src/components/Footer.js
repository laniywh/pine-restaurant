import React from "react"
import LogoImg from "../images/logo.svg"

const Footer = () => (
  <footer>
    <img src={LogoImg} alt="dine" />
    <address>
      Marthwaite, Sedbergh
      <br />
      Cumbria
      <br />
      +00 44 123 4567
    </address>
    <div className="hours">
      Open Times
      <br />
      Mon - Fri: 09:00 AM - 10:00 PM
      <br />
      Sat - Sun: 09:00 AM - 11:30 PM
    </div>
  </footer>
)

export default Footer
