import React from 'react';
import Card from '../../components/Card/Card';
import CustomLineChart from '../../components/Chart/LineChart';
import './MyRecord.css';

const MyRecord = () => {
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
    <div className="my-record-page">
      <div className="record-cards-section">
        {recordCards.map((card, index) => (
          <div key={index} className="record-card">
            <div className="record-card-title">{card.title}</div>
            <div className="record-card-subtitle">{card.subtitle}</div>
          </div>
        ))}
      </div>

      <div className="chart-section">
        <div className="body-fat-chart">
          <div className="chart-header">
            <h3>
              <span className="chart-icon">📊</span>
              BODY RECORD
            </h3>
            <span className="chart-period">2021.05.21</span>
          </div>
          <CustomLineChart data={bodyFatData} color="#8fbc8f" height={200} />
        </div>
      </div>

      <div className="exercise-data-section">
        <div className="exercise-data-grid">
          <div className="exercise-column">
            <div className="exercise-header">
              <span className="exercise-icon">🏃</span>
              <span className="exercise-title">MY EXERCISE</span>
              <span className="exercise-date">2021.05.21</span>
            </div>
            <div className="exercise-items">
              <div className="exercise-item">
                <span className="exercise-name">家事全般（立位・軽い）</span>
                <span className="exercise-time">10 min</span>
                <span className="exercise-calories">26 kcal</span>
              </div>
              <div className="exercise-item">
                <span className="exercise-name">家事全般（立位・軽い）</span>
                <span className="exercise-time">10 min</span>
                <span className="exercise-calories">26 kcal</span>
              </div>
              <div className="exercise-item">
                <span className="exercise-name">家事全般（立位・軽い）</span>
                <span className="exercise-time">10 min</span>
                <span className="exercise-calories">26 kcal</span>
              </div>
              <div className="exercise-item">
                <span className="exercise-name">家事全般（立位・軽い）</span>
                <span className="exercise-time">10 min</span>
                <span className="exercise-calories">26 kcal</span>
              </div>
            </div>
          </div>
          <div className="exercise-column">
            <div className="exercise-items">
              <div className="exercise-item">
                <span className="exercise-name">家事全般（立位・軽い）</span>
                <span className="exercise-time">10 min</span>
                <span className="exercise-calories">26 kcal</span>
              </div>
              <div className="exercise-item">
                <span className="exercise-name">家事全般（立位・軽い）</span>
                <span className="exercise-time">10 min</span>
                <span className="exercise-calories">26 kcal</span>
              </div>
              <div className="exercise-item">
                <span className="exercise-name">家事全般（立位・軽い）</span>
                <span className="exercise-time">10 min</span>
                <span className="exercise-calories">26 kcal</span>
              </div>
              <div className="exercise-item">
                <span className="exercise-name">家事全般（立位・軽い）</span>
                <span className="exercise-time">10 min</span>
                <span className="exercise-calories">26 kcal</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="diary-section">
        <div className="diary-header">
          <h3>MY DIARY</h3>
        </div>
        <div className="diary-grid">
          {Array.from({ length: 8 }, (_, index) => (
            <div key={index} className="diary-card">
              <div className="diary-date">2021.05.21</div>
              <div className="diary-time">23:25</div>
              <div className="diary-content">
                私の日記の記録が一部表示されます。<br/>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...
              </div>
            </div>
          ))}
        </div>
        
        <div className="load-more-section">
          <button className="load-more-button">自分の日記をもっと見る</button>
        </div>
      </div>
    </div>
  );
};

export default MyRecord;
