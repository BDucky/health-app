import React from 'react';
import Card from '../../components/Card/Card';
import './Column.css';

const Column = () => {
  const recommendedArticles = [
    {
      title: 'COLUMN',
      subtitle: 'オススメ',
      category: '',
      tags: []
    },
    {
      title: 'DIET', 
      subtitle: 'ダイエット',
      category: '',
      tags: []
    },
    {
      title: 'BEAUTY',
      subtitle: '美容', 
      category: '',
      tags: []
    },
    {
      title: 'HEALTH',
      subtitle: '健康',
      category: '', 
      tags: []
    }
  ];

  const healthArticles = [
    {
      image: '/Photo/column-1.jpg',
      date: '2021.05.17',
      time: '23:25',
      title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
      tags: ['#魚', '#健康', '#栄養']
    },
    {
      image: '/Photo/MyRecommend-1.jpg',
      date: '2021.05.17',
      time: '23:25', 
      title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
      tags: ['#魚', '#健康', '#栄養']
    },
    {
      image: '/Photo/MyRecommend-2.jpg',
      date: '2021.05.17',
      time: '23:25',
      title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
      tags: ['#魚', '#健康', '#栄養']
    },
    {
      image: '/Photo/MyRecommend-3.jpg',
      date: '2021.05.17',
      time: '23:25',
      title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
      tags: ['#魚', '#健康', '#栄養']
    }
  ];

  return (
    <div className="column-page">
      <div className="recommended-section">
        <div className="recommended-grid">
          {recommendedArticles.map((article, index) => (
            <div key={index} className="recommended-card">
              <div className="recommended-content">
                <div className="recommended-badge">RECOMMENDED</div>
                <div className="recommended-subtitle">{article.subtitle}</div>
                <h3 className="recommended-title">{article.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="articles-section">
        <div className="articles-grid">
          {healthArticles.map((article, index) => (
            <div key={index} className="article-card">
              <img src={article.image} alt={article.title} className="article-image" />
              <div className="article-content">
                <div className="article-date">{article.date} {article.time}</div>
                <h3 className="article-title">{article.title}</h3>
                <div className="article-tags">
                  {article.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="load-more-section">
          <button className="load-more-button">コラムをもっと見る</button>
        </div>
      </div>
    </div>
  );
};

export default Column;
