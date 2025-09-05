import React, { useState } from 'react';
import CustomLineChart from '../../components/Chart/LineChart';

const MyRecord = () => {
  // State for diary load more functionality
  const [visibleDiaryCount, setVisibleDiaryCount] = useState(8);
  // Mock data for body fat chart
  const bodyFatData = [
    { name: '6月', value: 21 },
    { name: '7月', value: 20 },
    { name: '8月', value: 18 },
    { name: '9月', value: 17 },
    { name: '10月', value: 16 },
    { name: '11月', value: 15 },
    { name: '12月', value: 14 }
  ];

  // Load more diary function
  const loadMoreDiary = () => {
    setVisibleDiaryCount(prev => prev + 8);
  };

  // Extended diary data for load more functionality
  const allDiaryData = [
    { date: '2021.05.21', time: '23:25', content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...' },
    { date: '2021.05.21', time: '23:25', content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...' },
    { date: '2021.05.21', time: '23:25', content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...' },
    { date: '2021.05.21', time: '23:25', content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...' },
    { date: '2021.05.21', time: '23:25', content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...' },
    { date: '2021.05.21', time: '23:25', content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...' },
    { date: '2021.05.21', time: '23:25', content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...' },
    { date: '2021.05.21', time: '23:25', content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...' },
    // Additional diary entries for load more
    { date: '2021.05.20', time: '22:15', content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...' },
    { date: '2021.05.20', time: '21:30', content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...' },
    { date: '2021.05.19', time: '23:45', content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...' },
    { date: '2021.05.19', time: '20:10', content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...' },
    { date: '2021.05.18', time: '22:55', content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...' },
    { date: '2021.05.18', time: '19:20', content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...' },
    { date: '2021.05.17', time: '23:10', content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...' },
    { date: '2021.05.17', time: '21:45', content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...' }
  ];

  const recordCards = [
    {
      title: 'BODY RECORD',
      subtitle: '自分のカラダの記録',
      color: '#ff8c00'
    },
    {
      title: 'MY EXERCISE',
      subtitle: '自分の運動の記録',
      color: '#ff8c00'
    },
    {
      title: 'MY DIARY',
      subtitle: '自分の日記',
      color: '#ff8c00'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Record Cards Section */}
      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="grid grid-cols-3 gap-2 mb-14">
          {recordCards.map((card, index) => (
            <div key={index} className="bg-[#414141] text-white flex flex-col justify-center items-center text-center p-10 border-8 border-[#FFCC21] h-72">
              <div className="text-[15px] font-normal text-[#FF8C00] mb-2">{card.title}</div>
              <div className="text-[11px] font-light text-white">{card.subtitle}</div>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="bg-[#414141] text-white p-6 mb-14">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-white text-[15px] font-normal flex items-center gap-2">
              <span>📊</span>
              BODY RECORD
            </h3>
            <span className="text-xs text-gray-400">2021.05.21</span>
          </div>
          <CustomLineChart data={bodyFatData} color="#FFCC21" height={200} />
        </div>

        {/* Exercise Data Section */}
        <div className="bg-[#414141] text-white p-6 mb-14 border-l-8 border-[#FFCC21]">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-base">🏃</span>
                <span className="text-[15px] font-normal text-[#FF8C00]">MY EXERCISE</span>
                <span className="text-[11px] font-light text-white ml-auto">2021.05.21</span>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { name: '家事全般（立位・軽い）', time: '10 min', calories: '26 kcal' },
                  { name: '家事全般（立位・軽い）', time: '10 min', calories: '26 kcal' },
                  { name: '家事全般（立位・軽い）', time: '10 min', calories: '26 kcal' },
                  { name: '家事全般（立位・軽い）', time: '10 min', calories: '26 kcal' }
                ].map((exercise, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-600">
                    <span className="text-[11px] font-light text-white flex-1">{exercise.name}</span>
                    <span className="text-[11px] font-light text-[#FF8C00] mx-4">{exercise.time}</span>
                    <span className="text-[11px] font-light text-[#FF8C00]">{exercise.calories}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2">
                {[
                  { name: '家事全般（立位・軽い）', time: '10 min', calories: '26 kcal' },
                  { name: '家事全般（立位・軽い）', time: '10 min', calories: '26 kcal' },
                  { name: '家事全般（立位・軽い）', time: '10 min', calories: '26 kcal' },
                  { name: '家事全般（立位・軽い）', time: '10 min', calories: '26 kcal' }
                ].map((exercise, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-600">
                    <span className="text-[11px] font-light text-white flex-1">{exercise.name}</span>
                    <span className="text-[11px] font-light text-[#FF8C00] mx-4">{exercise.time}</span>
                    <span className="text-[11px] font-light text-[#FF8C00]">{exercise.calories}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Diary Section */}
        <div className="mb-14 pb-20">
          <div className="mb-6">
            <h3 className="text-[22px] font-normal text-[#414141] m-0">MY DIARY</h3>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-6">
            {allDiaryData
              .slice(0, visibleDiaryCount)
              .map((diary, index) => (
              <div key={index} className="bg-white border-2 border-[#707070] p-4 min-h-[231px]">
                <div className="text-[11px] font-normal text-[#414141] mb-1">{diary.date}</div>
                <div className="text-[11px] font-light text-[#414141] mb-3">{diary.time}</div>
                <div className="text-[11px] font-light leading-relaxed text-[#414141] whitespace-pre-line">
                  {diary.content}
                </div>
              </div>
            ))}
          </div>
          
          {visibleDiaryCount < allDiaryData.length && (
            <div className="text-center mt-6">
              <button 
                onClick={loadMoreDiary}
                className="bg-gradient-to-r from-[#FFCC21] to-[#FF8C00] text-white px-8 py-4 text-lg font-light hover:opacity-90 transition-opacity w-76 h-14"
              >
                自分の日記をもっと見る
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyRecord;
