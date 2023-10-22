import React from 'react';
import styles from "./Progress.module.scss";

const ProgressComponent = ({progress}: Progress) => {
  return (
    <div className={styles["progress-main"]}>
      <progress className="progress progress-accent " value={progress} max="100"></progress>
    </div>
  )
}

export default ProgressComponent