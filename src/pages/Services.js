import React, { useState } from 'react';
import getImagePath from '../utils/imagePaths';
import './Services.css';

const Services = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    dietaryRestrictions: '',
    foodPreferences: '',
    allergies: '',
    goals: '',
    lifestyle: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowForm(false);
  };

  return (
    <div className="services-container">
      <h1>Services</h1>
      
      <div className="service-card">
        <div className="service-content">
          <h2>Personalised Workout Programme</h2>
          <p>Choose between Gym-based or Home-based workouts tailored to your needs and goals.</p>
          <ul>
            <li>Customized exercise selection</li>
            <li>Progressive overload planning</li>
            <li>Video demonstrations</li>
            <li>Detailed instructions</li>
          </ul>
          <div className="price">£50</div>
          <button className="cta-button">Get Started</button>
        </div>
        <img src={getImagePath('workout-program.jpg')} alt="Personalized workout program" className="service-image" />
      </div>

      <div className="service-card">
        <div className="service-content">
          <h2>Personalised Meal Plan</h2>
          <p>Get a customized meal plan that fits your lifestyle and helps you achieve your goals.</p>
          <ul>
            <li>Calorie and macro calculations</li>
            <li>Shopping list</li>
            <li>Recipe suggestions</li>
            <li>Meal timing recommendations</li>
          </ul>
          <div className="price">£40</div>
          <button className="cta-button" onClick={() => setShowForm(true)}>Get Started</button>
        </div>
        <img src={getImagePath('meal-plan.jpg')} alt="Personalized meal plan" className="service-image" />
      </div>

      <div className="service-card">
        <div className="service-content">
          <h2>Personal Training</h2>
          <p>One-on-one training sessions tailored to your specific needs and goals.</p>
          <ul>
            <li>Form correction</li>
            <li>Motivation and accountability</li>
            <li>Real-time feedback</li>
            <li>Flexible scheduling</li>
          </ul>
          <div className="price">£35/session</div>
          <button className="cta-button">Get Started</button>
        </div>
        <img src={getImagePath('personal-training.jpg')} alt="Personal training" className="service-image" />
      </div>

      <div className="service-card">
        <div className="service-content">
          <h2>The Full Monty</h2>
          <p>Complete transformation package including all services above plus:</p>
          <div className="package-options">
            <div className="package">
              <h3>5 Sessions</h3>
              <div className="price">£150</div>
            </div>
            <div className="package">
              <h3>8 Sessions</h3>
              <div className="price">£210</div>
            </div>
            <div className="package">
              <h3>10 Sessions</h3>
              <div className="price">£250</div>
            </div>
          </div>
          <button className="cta-button">Choose Package</button>
        </div>
      </div>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>Meal Plan Questionnaire</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Age:</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Dietary Restrictions:</label>
                <textarea name="dietaryRestrictions" value={formData.dietaryRestrictions} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Food Preferences:</label>
                <textarea name="foodPreferences" value={formData.foodPreferences} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Allergies:</label>
                <textarea name="allergies" value={formData.allergies} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Goals:</label>
                <textarea name="goals" value={formData.goals} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Lifestyle (Activity Level, Work Schedule):</label>
                <textarea name="lifestyle" value={formData.lifestyle} onChange={handleChange} required />
              </div>
              <div className="form-buttons">
                <button type="submit" className="submit-button">Submit</button>
                <button type="button" className="cancel-button" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
