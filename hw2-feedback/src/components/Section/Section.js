import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

const Section = ({ title, children }) => (
  <section className={styles.sectionWraper}>
    <h2>{title}</h2>
    <div className={styles.childrenWraper}>{children}</div>
  </section>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
