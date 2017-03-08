import React from 'react'
import Helmet from 'react-helmet'
import Nav from './App/Nav'
import Hero from './App/Hero'
import Footer from './App/Footer'
import { StyleSheet, css } from 'aphrodite'

const App = ({ children }) => (
  <div className={css(styles.root)}>
    <Helmet title='Home' titleTemplate='Echoless.io - %s' />
    <Hero />
    <Nav />
    {children}
    <Footer />
  </div>
)

const styles = StyleSheet.create({
  root: {
    minWidth: 700,
    maxWidth: 1400
    // background: "url('https://www.transparenttextures.com/patterns/wet-snow.png')"
  }
})

export default App
