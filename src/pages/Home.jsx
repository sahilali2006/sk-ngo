import React from 'react';
import './Home.css';
import Footer from './Footer';
import VolunteerForm from './VolunteerForm';
import About from './About';
import { Link } from 'react-router';

function Home() {
  return (
    <div className="home-bg">
      <div className="home-hero-card">
        <div className="home-hero-left">
          <h1>
            <span className="home-charity">Charity</span>
            <span className="home-thin"> brings to</span><br />
            life again those who are<br />
            spiritually dead.
          </h1>
          <p className="home-desc">
            The charitable give out at the door,<br />
            and God puts in at the window.
          </p>
          <div className="home-btn-row">
           <Link to='/volunteerForm' > <button className="home-primary-btn">Get Started</button></Link>
            <div className="home-how-works">
              <span className="home-how-circle">
                <span className="home-dot"></span>
              </span>
              <span className="home-how-text">How it works</span>
            </div>
          </div>
        </div>
        <div className="home-hero-right">
          <div className="home-image-circle">
            <img
              // src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                 src="         https://as2.ftcdn.net/v2/jpg/04/83/10/19/1000_F_483101972_oVE6aSOMStPg8J1EePcvHMU0141MGh2A.jpg
"
              alt="Seniors"
            />
           
          </div>
           <div className="home-save-seniors">
              <span>
                SAVE<br />OUR<br /><span style={{ color: '#ee5353' }}>SENIORS</span>
              </span>
              <Link to='volunteerForm' >
              <button className="home-donate-btn">Donate Now</button>
              </Link>
            </div>
        </div>
      </div>
      <div className="home-trusted-row">
        <span>
          Trusted by <span className="home-highlight">100+ </span>
          nonprofits across <span className="home-highlight">65 </span>countries
        </span>
        <div className="home-trusted-logos">
          <span>Apna Gher</span>
          <span>Old House</span>
          <span>Save Girls</span>
          <span>Save child</span>
          <span>Help People</span>
        </div>
      </div>

      <br />  <br />  <br />  <br />
      <VolunteerForm />
<br />  <br />  <br />  <br />
      <About />

      <br />  <br />  <br />  <br />
      <Footer />
    </div>
  );
}

export default Home;
