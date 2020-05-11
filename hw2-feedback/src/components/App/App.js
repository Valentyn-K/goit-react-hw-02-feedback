import React, { Component } from "react";
import PropTypes from "prop-types";
import feedBackButtons from "../../utils/feedBackButtons";
import Section from "../Section/Section";
import FeedBackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import styles from "./App.module.css";

const options = Object.values(feedBackButtons);

export default class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    initialValue: PropTypes.number,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  incrementFeedBacks = (name) => {
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };

  sumOfFeedbacks = () => {
    const feedbacks = Object.values(this.state);
    const total = feedbacks.reduce((acc, cur) => acc + cur);
    return total;
  };

  positivePercentage = () =>
    Math.round((this.state.good / this.sumOfFeedbacks()) * 100);

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={styles.appWrapper}>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={options}
            onLeaveFeedback={this.incrementFeedBacks}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.sumOfFeedbacks}
            positivePercentage={this.positivePercentage}
          />
        </Section>
      </div>
    );
  }
}
