import React from 'react'
import { StyleSheet, css } from 'aphrodite'

// Temp data. Replace w/ api calls.
var commentData = [{user: 'User #1', comment: 'Comment #1'}, {user: 'User #2', comment: 'Comment #2'}, {user: 'User #3', comment: 'Comment #3'}]

const Comments = () => (
  <div>
    {commentData.map((val, key) => {
      return (
        <div key={key} className={css(styles.container)}>
          <div className={css(styles.userPic)} />
          <div className={css(styles.commentText)}>
            <h2>{val.user}</h2>
            <p>{val.comment}</p>
          </div>
        </div>
      )
    })}
  </div>
)

const styles = StyleSheet.create({
  container: {
    width: '80%',
    display: 'block',
    margin: '10px auto'
  },
  userPic: {
    borderRadius: '100%',
    display: 'inline-block',
    width: '50px',
    height: '50px',
    background: "url('anon_user_pic.png') center center no-repeat",
    backgroundSize: 'contain',
    margin: 'auto 20px'
  },
  commentText: {
    display: 'inline-block'
  }
})

export default Comments
