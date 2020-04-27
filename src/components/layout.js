/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="wrapper">
        <main>{children}</main>
        <footer>
          <span>dine</span>
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
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
