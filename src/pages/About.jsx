import React from "react";
import "./About.css";

const galleryImages = [
  "https://internationalsecurityjournal.com/wp-content/uploads/2024/07/what-is-an-ngo-image.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_Yl-PZAZjSdw6H8SeffhWU1jWpdhpe_vquF3uPjZlutbW78JKmYx8m0j8eaYnO6Q6u0&usqp=CAU",
  "https://i0.wp.com/goodworks.org.in/wp-content/uploads/2023/11/NGOs-working-for-education-in-India-1.jpg?resize=1024%2C769&ssl=1",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBFnsF0oO6wvSz3FKduYlo3MeufMX7vWB8OA&s",
  "https://media.ahmedabadmirror.com/am/uploads/mediaGallery/image/1677318699846.jpg-org",
  "https://lirp.cdn-website.com/3f4c882c/dms3rep/multi/opt/societal-contribution-84309caa-640w.png"
];

function About() {
  return (
    <div className="aboutus-main">
      <div className="aboutus-card">
        <div className="aboutus-content">
          <h2 className="aboutus-subhead">About us</h2>
          <h1 className="aboutus-head">
            Empowering Change, <span className="aboutus-accent">Together!</span>
          </h1>
          <p className="aboutus-para">
            Welcome to <b>SK NGO</b>, where compassion meets action.<br />
            Our mission is to bring hope, dignity, and opportunity to every life we touch—by supporting the most vulnerable through health, education, and empowerment initiatives.
          </p>
          <ul className="aboutus-list">
            <li><span>✔</span> Disease and Disorder Support</li>
            <li><span>✔</span> Medical & Mental Health Aid</li>
            <li><span>✔</span> Child & Elderly Care Programs</li>
            <li><span>✔</span> Volunteer-Driven Community Projects</li>
            <li><span>✔</span> Educational Drives & Awareness</li>
          </ul>
          <button className="aboutus-btn">Learn More</button>
        </div>
        <div className="aboutus-gallery">
          {galleryImages.map((img, i) => (
            <img src={img} alt={`gallery${i+1}`} className="aboutus-gallery-img" key={i} loading="lazy" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
