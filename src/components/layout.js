import * as React from "react"
import PropTypes from "prop-types"
import { Navbar } from "./navbar/navbar"
import { Footer } from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
