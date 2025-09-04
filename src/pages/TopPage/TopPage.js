import React from 'react';
import Card from '../../components/Card/Card';
import CustomLineChart from '../../components/Chart/LineChart';
import './TopPage.css';

const TopPage = () => {
  // Mock data for charts
  const bodyFatData = [
    { name: '6月', value: 21 },
    { name: '7月', value: 20 },
    { name: '8月', value: 18 },
    { name: '9月', value: 17 },
    { name: '10月', value: 16 },
    { name: '11月', value: 15 },
    { name: '12月', value: 14 }
  ];

  const exerciseData = [
    { name: '6月', value: 15 },
    { name: '7月', value: 18 },
    { name: '8月', value: 22 },
    { name: '9月', value: 25 },
    { name: '10月', value: 28 },
    { name: '11月', value: 30 },
    { name: '12月', value: 32 }
  ];

  const mealImages = [
    '/Photo/MyRecommend-1.jpg',
    '/Photo/MyRecommend-2.jpg',
    '/Photo/MyRecommend-3.jpg',
    '/Photo/column-1.jpg'
  ];

  return (
    <div className="top-page">
      {/* Top Hero Section with Image and Chart */}
      <div className="hero-section">
        <div className="hero-image">
          <img src="/Photo/MyRecommend-1.jpg" alt="Healthy meal" className="main-image" />
        </div>
        <div className="hero-chart">
          <CustomLineChart data={bodyFatData} color="#8fbc8f" height={316} />
        </div>
      </div>


      {/* Meal Recommendations */}
      <div className="recommendations-section">
        <div className="recommendation-buttons">
          <button className="time-button morning">
            <div className="button-icon">🍴</div>
            <div className="button-text">Morning</div>
          </button>
          <button className="time-button lunch">
            <div className="button-icon">🍴</div>
            <div className="button-text">Lunch</div>
          </button>
          <button className="time-button dinner">
            <div className="button-icon">🍴</div>
            <div className="button-text">Dinner</div>
          </button>
          <button className="time-button snack">
            <div className="button-icon">🥤</div>
            <div className="button-text">Snack</div>
          </button>
        </div>
        
        <div className="meal-grid">
          {[
            '/Photo/MyRecommend-1.jpg',
            '/Photo/MyRecommend-2.jpg', 
            '/Photo/MyRecommend-3.jpg',
            '/Photo/column-1.jpg',
            '/Photo/MyRecommend-1.jpg',
            '/Photo/MyRecommend-2.jpg',
            '/Photo/MyRecommend-3.jpg', 
            '/Photo/column-1.jpg'
          ].map((image, index) => (
            <div key={index} className="meal-item">
              <img src={image} alt={`Meal ${index + 1}`} className="meal-image" />
              <p className="meal-time">05.21.Morning</p>
            </div>
          ))}
        </div>
        
        <div className="load-more-section">
          <button className="load-more-button">記録をもっと見る</button>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
