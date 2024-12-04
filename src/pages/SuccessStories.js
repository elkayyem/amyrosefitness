import React from 'react';
import ImageSlider from '../components/ImageSlider';
import './SuccessStories.css';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: "Sarah's Transformation",
      beforeImage: "/images/1before.jpg", // You'll need to add these images
      afterImage: "/images/1after.jpg",
      testimonial: "I can’t thank Amy enough for the incredible transformation I’ve experienced under her guidance! When I first started my journey, I weighed 95kg and felt constantly tired, sluggish, and stuck in a cycle of bad habits. I knew I needed a change, but I didn’t know where to start. That’s when I teamed up with Amy for her gym and food plan program, and it’s been life-changing. Amy created a personalized workout routine that pushed me but was also doable, even when I was just getting started. She combined strength training with cardio in a way that kept things fresh and fun. On top of that, her food plan wasn’t about extreme diets or cutting everything out—it was about balance and sustainability. I learned how to fuel my body properly without feeling deprived. Fast forward a few months, and I’m now 75kg and feeling stronger, healthier, and more energized than I ever imagined. The weight loss was amazing, but it’s how I feel inside and out that’s the real win. I’ve gained confidence, stamina, and a whole new outlook on life. Amy’s program didn’t just help me lose weight—it helped me regain control over my health. Highly recommend! 💪✨",
      duration: "12 weeks",
      program: "Full Monty Package"
    }
    // Add more stories here
  ];

  return (
    <div className="success-stories">
      <h1>Success Stories</h1>
      <div className="stories-container">
        {stories.map(story => (
          <div key={story.id} className="story-card">
            <div className="story-content">
              <div className="story-text">
                <h2>{story.name}</h2>
                <div className="story-details">
                  <span className="duration">{story.duration}</span>
                  <span className="program">{story.program}</span>
                </div>
                <p className="testimonial">{story.testimonial}</p>
              </div>
              <div className="slider-container">
                <ImageSlider
                  beforeImage={story.beforeImage}
                  afterImage={story.afterImage}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
