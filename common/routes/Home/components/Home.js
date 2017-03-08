import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import Comments from './Comments'

// Temp data. Replace w/ api calls.
var newsTopics = ['TrendingTopic1', 'TrendingTopic2', 'TrendingTopic3', 'TrendingTopic4', 'TrendingTopic5']
var leftNewsOrgs = ['leftNewsOrg1', 'leftNewsOrg2', 'leftNewsOrg3', 'leftNewsOrg4', 'leftNewsOrg5']
var rightNewsOrgs = ['rightNewsOrg1', 'rightNewsOrg2', 'rightNewsOrg3', 'rightNewsOrg4', 'rightNewsOrg5']

const Home = () => (
  <div className={css(styles.homeContainer)}>
    <h2 className={css(styles.header)}>News Comparison</h2>

    <p className={css(styles.lead)}>It's simple:</p>

    <ol className={css(styles.lead)}>

      <li>Select a news topic.</li>
      <select>{newsTopics.map((val, key) => <option key={key}>{val}</option>)}</select>

      <li>Select two media outlets.</li>
      <select>{leftNewsOrgs.map((val, key) => <option key={key}>{val}</option>)}</select>
      <select>{rightNewsOrgs.map((val, key) => <option key={key}>{val}</option>)}</select>

      <li>Compare coverage.</li>
    </ol>

    <div className={css(styles.news, styles.left)} />
    <div className={css(styles.news, styles.right)} />

    <Comments />
  </div>
)

const styles = StyleSheet.create({
  homeContainer: {
    margin: '20px 0'
  },
  header: {
    fontSize: 28,
    lineHeight: '1.2',
    margin: '0 0 1.5rem',
    textAlign: 'center'
  },
  lead: {
    fontSize: 18,
    lineHeight: '1.5',
    margin: '0 0 1.5rem',
    color: '#555',
    textAlign: 'center',
    'list-style-position': 'inside'
  },
  news: {
    width: '47%',
    margin: '0 1% 0 2%',
    height: '500px',
    display: 'inline-block'
  },
  left: {
    background: 'rgba(0,0,255,0.2)'
  },
  right: {
    background: 'rgba(255,0,0,0.2)'
  }
})

export default Home
