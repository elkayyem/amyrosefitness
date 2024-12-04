import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import getImagePath from '../utils/imagePaths';
import './About.css';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="about-container">
      <h1></h1>
      <section className="about-intro">
        <div className="intro-content">
          <div className="intro-text">
          <h2>Hi, I'm Amy Rose</h2>
            <p>As a certified personal trainer with over 5 years of experience, I'm passionate about helping people transform their lives through fitness and nutrition. My journey in fitness began when I discovered how proper training and nutrition could completely change not just your body, but your entire outlook on life.</p>
            <p>I specialize in creating personalized workout programs and nutrition plans that fit your unique lifestyle and goals. Whether you're just starting your fitness journey or looking to take your training to the next level, I'm here to guide and support you every step of the way.</p>
          </div>
          <div className="intro-image">
            <img src={getImagePath('trainer-profile.jpg')} alt="Amy Rose - Personal Trainer" />
          </div>
        </div>
      </section>

      <section className="qualifications">
        <h2>Qualifications & Certifications</h2>
        <div className="quals-container">
          <div className="qual-item">
            <h3>Personal Training</h3>
            <p>Level 3 Personal Training Certification</p>
          </div>
          <div className="qual-item">
            <h3>Nutrition</h3>
            <p>Advanced Nutrition for Sport & Exercise</p>
          </div>
          <div className="qual-item">
            <h3>Specializations</h3>
            <p>Pre/Post Natal Training, Weight Management, Strength & Conditioning</p>
          </div>
        </div>
      </section>

      <section className="philosophy">
        <h2>My Training Philosophy</h2>
        <p>I believe in sustainable, long-term changes rather than quick-fixes. My approach combines:</p>
        <ul>
          <li>Personalized workout programs tailored to your goals</li>
          <li>Nutrition guidance that fits your lifestyle</li>
          <li>Ongoing support and accountability</li>
          <li>Focus on proper form and technique</li>
          <li>Progressive challenges to keep you motivated</li>
        </ul>
        <div className="video-container">
          <video controls poster={getImagePath('video-thumbnail.jpg')}>
            <source src="/videos/training-philosophy.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="contact-section">
        <h2>Get in Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Details</h3>
            <div className="contact-details">
              <p><strong>Email:</strong> amy@amyrosefitness.com</p>
              <p><strong>Phone:</strong> +44 7123 456789</p>
              <p><strong>Location:</strong> Manchester, UK</p>
              <div className="social-links">
                <a href="https://www.instagram.com/amyrosefitness__" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send Me a Message</h3>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone (optional):</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default About;
