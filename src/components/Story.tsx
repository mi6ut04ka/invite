import React from 'react';
import '../style/style-story.css';

const StorySection: React.FC = () => {
  return (
    <section className="story">
      <div className="photo-title">
        <img src="img/top.svg" alt="" className="photo-title-top" />
        <div className="photo-title-text">НАША LOVE STORY</div>
        <img src="img/bottom.svg" alt="" className="photo-title-bottom" />
      </div>
      <div className="story-photos">
        <img src="img/dress-2.jpg" alt="" className="story-photo" />
        <img src="img/dress-3.jpg" alt="" className="story-photo" />
        <img src="img/dress-4.jpg" alt="" className="story-photo" />
        <img src="img/dress-5.jpg" alt="" className="story-photo" />
        <img src="img/dress-6.jpg" alt="" className="story-photo" />
        <img src="img/dress-3.jpg" alt="" className="story-photo" />
        <img src="img/dress-6.jpg" alt="" className="story-photo" />
        <img src="img/dress-1.jpg" alt="" className="story-photo" />
        <img src="img/dress-2.jpg" alt="" className="story-photo" />
      </div>
      <img src="img/bird.svg" alt="" className="story-dec" />
      <div className="story-divider-3"></div>
    </section>
  );
};

export default StorySection;
