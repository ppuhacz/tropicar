import React from "react";
import verticalLine from "../../../img/vertical-line.svg";
import "../styles/more-questions-styles.scss";
import { NavLink } from "react-router-dom";

// This form can be easily linked to sendgrid by adding a submit handler
// However, for the sake of the project, I will not include it here so my email doesn't get spammed

const MoreQuestionsSection = () => {
  return (
    <section id='more-questions-container'>
      <div className='more-questions-wrapper'>
        <div className='car-offer-separator'>
          <span>
            <img
              src={verticalLine}
              alt='vertical line'
              className='vertical-line'
            />
            <h3>Got more questions?</h3>
          </span>
        </div>
        <div className='contact-us-info'>
          If you've got more questions about this car feel free to contact us
          using one of the form of contact included in our{" "}
          <NavLink to='/contact-us'>contact page</NavLink>.
        </div>
      </div>
    </section>
  );
};

export default MoreQuestionsSection;
