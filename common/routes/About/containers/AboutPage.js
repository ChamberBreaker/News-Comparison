import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const AboutPage = () => {
  return (
    <div>

      <h2 className={css(styles.title)}>This Site</h2>

      <div className={css(styles.siteDescription)}>
        <p className={css(styles.content)}>
          Echoless facilitates better bipartisan understanding, discussion, and action.<br />
          We programmatically pair news from media outlets at opposite ends of the political spectrum.<br />
          In doing so, we hope to break down readers' echo chambers and show views held by people outside their communities and social media circles.
        </p>
      </div>

      <h2 className={css(styles.title)}>The creators</h2>

      <div className={css(styles.pplDescription)}>
        <div className={css(styles.bioContainer)}>
          <div className={css(styles.matt, styles.bioPic)} />
          <h4 className={css(styles.name)}>Matt Martin</h4>
          <p className={css(styles.content)}>
            Professional learner.<br />
            <br />
            Graduated as a Spanish major. Got a job working on Wall Street.
            Passed all three CFA levels. Moved to the Bay to pursue finance and technology.
            Fiercely dedicated to building things of value.
          </p>
        </div>

        <div className={css(styles.bioContainer)}>
          <div className={css(styles.george, styles.bioPic)} />
          <h4 className={css(styles.name)}>George Weiler</h4>          
          <p className={css(styles.content)}>
            Professional learner.<br />
            <br />
            Between working in DevOps for Apple and running one of Google's Computer Science First initiatives,
            George knows a thing or two about code. Known among friends as an all-round great guy.
          </p>
        </div>

      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  siteDescription: {
    width: '60%',
    minWidth: '675px',
    margin: '0 auto'
  },
  pplDescription: {
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-around'
  },
  content: {
    fontSize: 15,
    lineHeight: '1.6',
    color: '#555',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: '2em 0 0.75em 0',
    color: '#000'
  },
  name: {
    fontSize: 20,
    color: '#000'
  },
  bioContainer: {
    flex: 1,
    verticalAlign: 'top',
    textAlign: 'center',
    margin: '0 7%',
    minWidth: '300px'
  },
  bioPic: {
    borderRadius: '100%',
    height: '100px',
    width: '100px',
    backgroundSize: "cover",
    margin: '0 auto 1em auto'
  },
  george: {
    background: "url('george.jpg') center center"
  },
  matt: {
    background: "url('matt.jpeg') center center"
  }
})

export default AboutPage
