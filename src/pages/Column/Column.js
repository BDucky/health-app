import React, { useState } from 'react';

const Column = () => {
  const [visibleArticlesCount, setVisibleArticlesCount] = useState(8);

  // Load more articles function
  const loadMoreArticles = () => {
    setVisibleArticlesCount(prev => prev + 8);
  };

  const recommendedCategories = [
    {
      title: 'RECOMMENDED\nCOLUMN',
      subtitle: 'オススメ',
      bgColor: 'bg-[#414141]'
    },
    {
      title: 'RECOMMENDED\nDIET',
      subtitle: 'ダイエット',
      bgColor: 'bg-[#414141]'
    },
    {
      title: 'RECOMMENDED\nBEAUTY',
      subtitle: '美容',
      bgColor: 'bg-[#414141]'
    },
    {
      title: 'RECOMMENDED\nHEALTH',
      subtitle: '健康',
      bgColor: 'bg-[#414141]'
    }
  ];

  // Extended articles data for load more functionality
  const allHealthArticles = [
    {
      image: '/Photo/column-1.png',
      date: '2021.05.17',
      time: '23:25',
      title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
      tags: ['#魚', '#健康', '#栄養']
    },
    {
      image: '/Photo/column-2.png',
      date: '2021.05.17',
      time: '23:25', 
      title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
      tags: ['#魚', '#健康', '#栄養']
    },
    {
      image: '/Photo/column-3.png',
      date: '2021.05.17',
      time: '23:25',
      title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
      tags: ['#魚', '#健康', '#栄養']
    },
    {
      image: '/Photo/column-4.png',
      date: '2021.05.17',
      time: '23:25',
      title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
      tags: ['#魚', '#健康', '#栄養']
    },
    {
      image: '/Photo/column-1-under.png',
      date: '2021.05.17',
      time: '23:25',
      title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
      tags: ['#魚', '#健康', '#栄養']
    },
    {
      image: '/Photo/column-2-under.png',
      date: '2021.05.17',
      time: '23:25',
      title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
      tags: ['#魚', '#健康', '#栄養']
    },
    {
      image: '/Photo/column-3-under.png',
      date: '2021.05.17',
      time: '23:25',
      title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
      tags: ['#魚', '#健康', '#栄養']
    },
    {
      image: '/Photo/column-4-under.png',
      date: '2021.05.17',
      time: '23:25',
      title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
      tags: ['#魚', '#健康', '#栄養']
    },
    // Additional articles for load more
    {
      image: '/Photo/column-1.png',
      date: '2021.05.16',
      time: '22:15',
      title: '健康的な食生活のための基本的なガイドライン',
      tags: ['#栄養', '#健康', '#食事']
    },
    {
      image: '/Photo/column-2.png',
      date: '2021.05.16',
      time: '21:30',
      title: 'ダイエット成功のための効果的な運動方法',
      tags: ['#ダイエット', '#運動', '#健康']
    },
    {
      image: '/Photo/column-3.png',
      date: '2021.05.15',
      time: '20:45',
      title: '美容と健康に良い睡眠の質を向上させる方法',
      tags: ['#美容', '#睡眠', '#健康']
    },
    {
      image: '/Photo/column-4.png',
      date: '2021.05.15',
      time: '19:20',
      title: 'ストレス管理と心の健康を保つためのテクニック',
      tags: ['#メンタル', '#ストレス', '#健康']
    },
    {
      image: '/Photo/column-1-under.png',
      date: '2021.05.14',
      time: '23:10',
      title: '季節の野菜を使った栄養バランスの良いレシピ',
      tags: ['#野菜', '#レシピ', '#栄養']
    },
    {
      image: '/Photo/column-2-under.png',
      date: '2021.05.14',
      time: '22:35',
      title: '水分補給の重要性と正しい飲み物の選び方',
      tags: ['#水分', '#健康', '#栄養']
    },
    {
      image: '/Photo/column-3-under.png',
      date: '2021.05.13',
      time: '21:50',
      title: '腸内環境を整えるための食事と生活習慣',
      tags: ['#腸内環境', '#健康', '#食事']
    },
    {
      image: '/Photo/column-4-under.png',
      date: '2021.05.13',
      time: '20:25',
      title: '免疫力を高めるための日常的な健康習慣',
      tags: ['#免疫力', '#健康', '#予防']
    }
  ];

  return (
    <div className="bg-white">
      {/* Recommended Categories Section */}
      <div className="py-14 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-8">
            {recommendedCategories.map((category, index) => (
              <div key={index} className={`${category.bgColor} p-8 text-center cursor-pointer hover:opacity-90 transition-opacity relative`}>
                <div className="text-[#FFCC21] text-sm font-light mb-4 whitespace-pre-line leading-tight">
                  {category.title}
                </div>
                <div className="w-8 h-0.5 bg-[#FFCC21] mx-auto mb-4"></div>
                <div className="text-white text-lg font-light">{category.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid Section */}
      <div className="px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-6">
            {allHealthArticles
              .slice(0, visibleArticlesCount)
              .map((article, index) => (
              <div key={index} className="bg-white cursor-pointer hover:opacity-90 transition-opacity">
                <div className="relative mb-3">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-48 object-cover"
                  />
                  {/* Yellow timestamp overlay at bottom left */}
                  <div className="absolute bottom-0 left-0 bg-[#FFCC21] text-black px-2 py-1 text-xs font-medium">
                    {article.date} {article.time}
                  </div>
                </div>
                <div className="px-1">
                  <h3 className="text-sm font-light text-[#414141] leading-relaxed mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {article.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs text-[#FFCC21] font-light">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          {visibleArticlesCount < allHealthArticles.length && (
            <div className="flex justify-center mt-12">
              <button 
                onClick={loadMoreArticles}
                className="bg-gradient-to-r from-[#FFCC21] to-[#FF8C00] text-white px-16 py-4 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                コラムをもっと見る
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Column;
