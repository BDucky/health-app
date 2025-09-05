import React from 'react';
import CustomLineChart from '../../components/Chart/LineChart';

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

  return (
    <div className="min-h-screen bg-white">
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
          {/* Achievement badge overlay */}
          <div className="absolute bottom-4 left-4 bg-[#FFCC21] text-black px-4 py-2 rounded-full text-sm font-medium">
            05/21 75%
          </div>
        </div>
        
        {/* Right side - Chart */}
        <div className="w-1/2 bg-[#414141] relative" style={{ height: '280px' }}>
          <div style={{ height: '280px', padding: '0' }}>
            <CustomLineChart data={bodyFatData} color="#FFCC21" height={280} />
          </div>
        </div>
      </div>

      {/* Hexagonal Recommendation Buttons */}
      <div className="flex justify-center items-center py-20 gap-8">
        <div className="cursor-pointer hover:opacity-90 transition-opacity">
          <img src="/Photo/morning.png" alt="Morning" className="w-32 h-32" />
        </div>
        
        <div className="cursor-pointer hover:opacity-90 transition-opacity">
          <img src="/Photo/lunch.png" alt="Lunch" className="w-32 h-32" />
        </div>
        
        <div className="cursor-pointer hover:opacity-90 transition-opacity">
          <img src="/Photo/dinner.png" alt="Dinner" className="w-32 h-32" />
        </div>
        
        <div className="cursor-pointer hover:opacity-90 transition-opacity">
          <img src="/Photo/snack.png" alt="Snack" className="w-32 h-32" />
        </div>
      </div>

      {/* Meal Photo Grid */}
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-4 gap-2">
          {[
            { image: '/Photo/meal1.png', time: '05.21.Morning' },
            { image: '/Photo/meal2.png', time: '05.21.Lunch' },
            { image: '/Photo/meal3.png', time: '05.21.Dinner' },
            { image: '/Photo/meal4.png', time: '05.21.Snack' },
            { image: '/Photo/meal5.png', time: '05.20.Morning' },
            { image: '/Photo/meal6.png', time: '05.20.Lunch' },
            { image: '/Photo/meal7.png', time: '05.20.Dinner' },
            { image: '/Photo/meal8.png', time: '05.20.Snack' }
          ].map((meal, index) => (
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
        <div className="flex justify-center mt-8 mb-16">
          <button className="bg-gradient-to-r from-[#FFCC21] to-[#FF8C00] text-white px-12 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
            記録をもっと見る
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
