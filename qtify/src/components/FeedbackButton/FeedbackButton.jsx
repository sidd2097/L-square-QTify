import React from 'react';
import styles from "./FeedbackButton.module.css"

const FeedbackButton = ({ buttonText }) => {
  return (
    <button className={styles['feedback-button']}>
      {buttonText}
    </button>
  );
};

export default FeedbackButton;