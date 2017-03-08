import React from 'react'
import IndexLink from 'react-router/lib/IndexLink'
import Link from 'react-router/lib/Link'
import { StyleSheet, css } from 'aphrodite'

const Nav = () => (
  <div className={css(styles.navContainer)}>
    <IndexLink to='/' className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>Home</IndexLink>
    <Link to='/about' className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>About</Link>
    <Link to='/posts' className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>Log In</Link>
  </div>
)

const styles = StyleSheet.create({
  navContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '50%',
    margin: '0 auto'
  },
  link: {
    color: '#999',
    textDecoration: 'none',
    fontWeight: 'bold',
    textAlign: 'center',
    transition: '.2s opacity ease',
    ':hover': {
      opacity: 0.6
    },
    flex: 1
  },
  activeLink: {
    color: '#000'
  }
})

export default Nav
