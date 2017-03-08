import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import Helmet from 'react-helmet'

const Hero = () => (
  <div className={css(styles.outer)}>
    <Helmet link={[{href: 'https://fonts.googleapis.com/css?family=Montserrat:100', rel: 'stylesheet'}]} />
    <h1 className={css(styles.title)}>Echoless<span className={css(styles.io)}>(.io)</span></h1>
  </div>
)

const styles = StyleSheet.create({
  outer: {
    height: '150px',
    backgroundImage: 'linear-gradient(15deg, rgba(0,0,255,1), rgba(0,0,255,0.3), rgba(255,0,0,0.3), rgba(255,0,0,1))'
  },
  title: {
    color: '#fff',
    fontSize: 60,
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  io: {
    fontSize: 15
  }
})

export default Hero
