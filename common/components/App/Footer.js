import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const Footer = () => (
  <footer className={css(styles.footer)}>
    Copyright © 2017 <a className={css(styles.footerLink)} href='https://github.com/ChamberBreaker/News-Comparison' target='_blank'>ChamberBreaker</a>
  </footer>
)

const styles = StyleSheet.create({
  footer: {
    margin: '4rem auto',
    textAlign: 'center',
    color: '#b7b7b7'
  },
  footerLink: {
    display: 'inline-block',
    color: '#000',
    textDecoration: 'none'
  }
})

export default Footer
