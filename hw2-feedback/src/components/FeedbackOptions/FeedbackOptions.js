import React from "react";
import PropTypes from "prop-types";
import styles from './FeedBackOptions.module.css'

const FeedBackOptions = ({
  options = [],
  onLeaveFeedback = function () {
    alert("Sorry, something went wrong. Try to reload this page :(");
  },
}) => (
  <>
    {options.map((option) => (
      <button
      className={styles.optionButton}
        type="button"
        key={option}
        name={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </>
);

export default FeedBackOptions;

FeedBackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
