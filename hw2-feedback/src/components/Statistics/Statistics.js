import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
  good || neutral || bad ? (
    <>
      <p>Good:{good} </p>
      <p>Neutral:{neutral} </p>
      <p>Bad:{bad} </p>
      <p>Total:{total()} </p>
      <p>Positive Feedback:{positivePercentage()} % </p>
    </>
  ) : (
    <p>No feedback given</p>
  );

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
