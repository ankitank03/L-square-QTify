import React from 'react'
import styles from "./FeedbackButton.module.css"

function FeedbackButton({children}) {
  return (
    <div>
        <button className={styles.feedbackButton}  type="submit">{children}</button>
    </div>
  )
}

export default FeedbackButton
