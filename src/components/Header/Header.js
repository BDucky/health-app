import React, { useState } from 'react'
import { FileText, Award, Menu, X } from "lucide-react"
import { Link } from 'react-router-dom'

export function HealthyNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] w-full">
      <nav className="bg-[#414141] px-40 py-3 flex items-center justify-between h-16">
        {/* Logo/Brand */}
        <Link to="/" className="flex items-center cursor-pointer">
          <img src="/Photo/logo.png" alt="Healthy" className="h-10" />
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center gap-14">
          {/* My Records */}
          <Link to="/my-record" className="flex items-center gap-2 text-white text-base font-light font-['Hiragino_Sans','ヒラギノ角ゴシック','Hiragino_Kaku_Gothic_ProN','Noto_Sans_JP',sans-serif] cursor-pointer">
            <FileText className="w-5 h-5 text-[#ff963c]" />
            <span className="transition-colors duration-200 hover:text-[#ff963c]">自分の記録</span>
          </Link>

          {/* Column */}
          <Link to="/column" className="flex items-center gap-2 text-white text-base font-light font-['Hiragino_Sans','ヒラギノ角ゴシック','Hiragino_Kaku_Gothic_ProN','Noto_Sans_JP',sans-serif] cursor-pointer">
            <Award className="w-5 h-5 text-[#ff963c]" />
            <span className="transition-colors duration-200 hover:text-[#ff963c]">チャレンジ</span>
          </Link>

          {/* Notifications */}
          <div className="flex items-center gap-2 text-white text-base font-light font-['Hiragino_Sans','ヒラギノ角ゴシック','Hiragino_Kaku_Gothic_ProN','Noto_Sans_JP',sans-serif] cursor-pointer">
            <div className="relative">
              <svg className="w-5 h-5 text-[#ff963c]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04 1.05 4.35L2 22l5.65-1.05C9.96 21.64 11.46 22 13 22h-1c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="text-xs font-bold text-[#ff963c]">!</span>
              </div>
            </div>
            <span className="transition-colors duration-200 hover:text-[#ff963c]">お知らせ</span>
          </div>

          {/* Menu */}
          <div className="relative">
            <button 
              onClick={toggleMenu}
              className="flex flex-col gap-1 p-2 cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="メニュー"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-[#ff963c]" />
              ) : (
                <>
                  <div className="w-5 h-0.5 bg-[#ff963c]"></div>
                  <div className="w-5 h-0.5 bg-[#ff963c]"></div>
                  <div className="w-5 h-0.5 bg-[#ff963c]"></div>
                </>
              )}
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-[#414141] border border-[#555] rounded-lg shadow-lg z-50">
                <div className="py-2">
                  {/* Home/TopPage */}
                  <Link 
                    to="/" 
                    onClick={closeMenu}
                    className="flex items-center gap-3 px-4 py-3 text-white hover:bg-[#555] transition-colors duration-200"
                  >
                    <div className="w-5 h-5 bg-[#ff963c] rounded-full flex items-center justify-center">
                      <span className="text-xs text-white font-bold">H</span>
                    </div>
                    <span className="text-sm font-light">ホーム</span>
                  </Link>

                  {/* My Records */}
                  <Link 
                    to="/my-record" 
                    onClick={closeMenu}
                    className="flex items-center gap-3 px-4 py-3 text-white hover:bg-[#555] transition-colors duration-200"
                  >
                    <FileText className="w-5 h-5 text-[#ff963c]" />
                    <span className="text-sm font-light">自分の記録</span>
                  </Link>

                  {/* Column/Challenge */}
                  <Link 
                    to="/column" 
                    onClick={closeMenu}
                    className="flex items-center gap-3 px-4 py-3 text-white hover:bg-[#555] transition-colors duration-200"
                  >
                    <Award className="w-5 h-5 text-[#ff963c]" />
                    <span className="text-sm font-light">チャレンジ</span>
                  </Link>

                  {/* Divider */}
                  <div className="border-t border-[#555] my-2"></div>

                  {/* Notifications */}
                  <div className="flex items-center gap-3 px-4 py-3 text-white hover:bg-[#555] transition-colors duration-200 cursor-pointer">
                    <div className="relative">
                      <svg className="w-5 h-5 text-[#ff963c]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04 1.05 4.35L2 22l5.65-1.05C9.96 21.64 11.46 22 13 22h-1c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                      </svg>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">3</span>
                      </div>
                    </div>
                    <span className="text-sm font-light">お知らせ</span>
                  </div>

                  {/* Settings */}
                  <div className="flex items-center gap-3 px-4 py-3 text-white hover:bg-[#555] transition-colors duration-200 cursor-pointer">
                    <svg className="w-5 h-5 text-[#ff963c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1m15.5-3.5L19 4l-2.5 2.5M7.5 17.5L5 20l2.5-2.5m0-11L5 4l2.5 2.5M16.5 17.5L19 20l-2.5-2.5"></path>
                    </svg>
                    <span className="text-sm font-light">設定</span>
                  </div>

                  {/* Logout */}
                  <div className="flex items-center gap-3 px-4 py-3 text-white hover:bg-[#555] transition-colors duration-200 cursor-pointer">
                    <svg className="w-5 h-5 text-[#ff963c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16,17 21,12 16,7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    <span className="text-sm font-light">ログアウト</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      
      {/* Overlay to close menu when clicking outside */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-20" 
          onClick={closeMenu}
        ></div>
      )}
    </header>
  )
}
