import React, { useState } from "react";
import "./VolunteerForm.css";

function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };


  return (
    <div className="volunteer-bg">
      <div className="volunteer-card">
        {/* Left Image Section */}
        <div className="volunteer-img-section">
          <img
             src="https://tse1.mm.bing.net/th/id/OIP.XfOaDKst83CRMnNKRAU_rgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Volunteer"
            className="volunteer-hero-img"
          />
          <div className="volunteer-inspire-text">
            <h2>
              Join as a <span className="volunteer-highlight">Volunteer</span>
            </h2>
            <p>
              You too can make someone’s life better.
            </p>
          </div>
        </div>
        {/* Right Form Section */}
        <div className="volunteer-form-section">
          <h2 className="volunteer-title">Volunteer Registration Form</h2>
          {submitted ? (
            <div className="volunteer-thankyou">
              <span role="img" aria-label="celebrate">🎉</span>
              <p>Thank you for joining us as a volunteer!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="volunteer-form-fields">
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="9876543210" required />
                </div>
                <div className="form-group">
                  <label>Age</label>
                  <input type="number" placeholder="Your Age" min="16" max="90" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group form-group-full">
                  <label>Which area would you like to help in?</label>
                  <select required>
                    <option value="">Select an option</option>
                    <option value="elderly">Helping Elderly</option>
                    <option value="children">Children Care</option>
                    <option value="teaching">Teaching</option>
                    <option value="fundraising">Fundraising</option>
                    <option value="fieldwork">Field Work</option>
                    <option value="anything">Anything Needed</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group form-group-full">
                  <label>Why do you want to join as a volunteer?</label>
                  <textarea rows="3" placeholder="Share your motivation..." required></textarea>
                </div>
              </div>
              <button type="submit" className="volunteer-btn">
                Register Now
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default VolunteerForm;
