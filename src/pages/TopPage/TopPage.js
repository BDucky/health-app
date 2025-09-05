import React, { useState } from 'react';
import CustomLineChart from '../../components/Chart/LineChart';

const TopPage = () => {
  // State for filter functionality
  const [activeFilters, setActiveFilters] = useState([]);
  const [visibleMealsCount, setVisibleMealsCount] = useState(8);

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

  // Filter categories
  const filterCategories = [
    { id: 'morning', name: 'Morning', image: '/Photo/morning.png' },
    { id: 'lunch', name: 'Lunch', image: '/Photo/lunch.png' },
    { id: 'dinner', name: 'Dinner', image: '/Photo/dinner.png' },
    { id: 'snack', name: 'Snack', image: '/Photo/snack.png' }
  ];

  // Toggle filter function
  const toggleFilter = (filterId) => {
    setActiveFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
    setVisibleMealsCount(8); // Reset visible count when filter changes
  };

  // Load more meals function
  const loadMoreMeals = () => {
    setVisibleMealsCount(prev => prev + 8);
  };

  // Extended meal data with duplicates for "load more" functionality
  const allMealData = [
    { image: '/Photo/meal1.png', time: '05.21.Morning', category: 'morning' },
    { image: '/Photo/meal2.png', time: '05.21.Lunch', category: 'lunch' },
    { image: '/Photo/meal3.png', time: '05.21.Dinner', category: 'dinner' },
    { image: '/Photo/meal4.png', time: '05.21.Snack', category: 'snack' },
    { image: '/Photo/meal5.png', time: '05.20.Morning', category: 'morning' },
    { image: '/Photo/meal6.png', time: '05.20.Lunch', category: 'lunch' },
    { image: '/Photo/meal7.png', time: '05.20.Dinner', category: 'dinner' },
    { image: '/Photo/meal8.png', time: '05.20.Snack', category: 'snack' },
    // Duplicated records for load more functionality
    { image: '/Photo/meal1.png', time: '05.19.Morning', category: 'morning' },
    { image: '/Photo/meal2.png', time: '05.19.Lunch', category: 'lunch' },
    { image: '/Photo/meal3.png', time: '05.19.Dinner', category: 'dinner' },
    { image: '/Photo/meal4.png', time: '05.19.Snack', category: 'snack' },
    { image: '/Photo/meal5.png', time: '05.18.Morning', category: 'morning' },
    { image: '/Photo/meal6.png', time: '05.18.Lunch', category: 'lunch' },
    { image: '/Photo/meal7.png', time: '05.18.Dinner', category: 'dinner' },
    { image: '/Photo/meal8.png', time: '05.18.Snack', category: 'snack' },
    { image: '/Photo/meal1.png', time: '05.17.Morning', category: 'morning' },
    { image: '/Photo/meal2.png', time: '05.17.Lunch', category: 'lunch' },
    { image: '/Photo/meal3.png', time: '05.17.Dinner', category: 'dinner' },
    { image: '/Photo/meal4.png', time: '05.17.Snack', category: 'snack' },
    { image: '/Photo/meal5.png', time: '05.16.Morning', category: 'morning' },
    { image: '/Photo/meal6.png', time: '05.16.Lunch', category: 'lunch' },
    { image: '/Photo/meal7.png', time: '05.16.Dinner', category: 'dinner' },
    { image: '/Photo/meal8.png', time: '05.16.Snack', category: 'snack' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Image and Chart Split - Right at top under header */}
      <div className="flex">
        {/* Left side - Food Image */}
        <div className="w-1/2 relative" style={{ height: '280px' }}>
          <img 
            src="/Photo/healthyMeal.png" 
            alt="Healthy meal" 
            className="w-full h-full object-cover"
            style={{ height: '280px' }}
          />
          {/* Circular progress indicator overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-40 h-40">
              {/* Semi-transparent background with glow */}
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-full shadow-2xl"></div>
              <div className="absolute inset-0 bg-white bg-opacity-10 rounded-full blur-sm"></div>
              {/* Circular progress ring */}
              <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 140 140">
                {/* Background circle */}
                <circle
                  cx="70"
                  cy="70"
                  r="62"
                  stroke="rgba(255, 255, 255, 0.4)"
                  strokeWidth="5"
                  fill="transparent"
                />
                {/* Progress circle with glow */}
                <circle
                  cx="70"
                  cy="70"
                  r="62"
                  stroke="rgba(255, 255, 255, 0.9)"
                  strokeWidth="5"
                  fill="transparent"
                  strokeDasharray={`${75 * 3.89} 389.56`}
                  strokeLinecap="round"
                  filter="drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))"
                />
              </svg>
              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="text-sm font-light opacity-90 drop-shadow-lg">05/21</div>
                <div className="text-3xl font-medium opacity-95 drop-shadow-lg">75%</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - Chart */}
        <div className="w-1/2 bg-[#414141] relative" style={{ height: '280px' }}>
          <div style={{ height: '280px', padding: '0' }}>
            <CustomLineChart data={bodyFatData} color="#FFCC21" height={280} />
          </div>
        </div>
      </div>

      {/* Hexagonal Filter Buttons */}
      <div className="flex justify-center items-center py-20 gap-8">
        {filterCategories.map((category) => (
          <div 
            key={category.id}
            onClick={() => toggleFilter(category.id)}
            className={`cursor-pointer transition-all duration-300 ${
              activeFilters.includes(category.id) 
                ? 'drop-shadow-[0_0_15px_rgba(255,204,33,0.8)] scale-110' 
                : 'hover:opacity-90 hover:scale-105'
            }`}
          >
            <img 
              src={category.image} 
              alt={category.name} 
              className={`w-32 h-32 ${
                activeFilters.includes(category.id) 
                  ? 'brightness-110 contrast-110' 
                  : ''
              }`} 
            />
          </div>
        ))}
      </div>

      {/* Meal Photo Grid */}
      <div className="max-w-6xl mx-auto px-8 pb-20">
        <div className="grid grid-cols-4 gap-2">
          {allMealData
          .filter(meal => 
            activeFilters.length === 0 || activeFilters.includes(meal.category)
          )
          .slice(0, visibleMealsCount)
          .map((meal, index) => (
            <div key={index} className="relative group cursor-pointer">
              <img 
                src={meal.image} 
                alt={`Meal ${index + 1}`} 
                className="w-full h-48 object-cover"
              />
              {/* Yellow time label */}
              <div className="absolute bottom-0 left-0 bg-[#FFCC21] text-black px-2 py-1 text-xs font-medium">
                {meal.time}
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        {(() => {
          const filteredMeals = allMealData.filter(meal => 
            activeFilters.length === 0 || activeFilters.includes(meal.category)
          );
          return visibleMealsCount < filteredMeals.length && (
            <div className="flex justify-center mt-8">
              <button 
                onClick={loadMoreMeals}
                className="bg-gradient-to-r from-[#FFCC21] to-[#FF8C00] text-white px-12 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                記録をもっと見る
              </button>
            </div>
          );
        })()}
      </div>
    </div>
  );
};

export default TopPage;
