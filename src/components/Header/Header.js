import { FileText, Award, Menu } from "lucide-react"

export function HealthyNavigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] w-full">
      <nav className="bg-[#414141] px-40 py-3 flex items-center justify-between h-16">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <img src="/Photo/logo.png" alt="Healthy" className="h-10" />
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-14">
          {/* My Records */}
          <div className="flex items-center gap-2 text-white text-base font-light font-['Hiragino_Sans','ヒラギノ角ゴシック','Hiragino_Kaku_Gothic_ProN','Noto_Sans_JP',sans-serif]">
            <FileText className="w-5 h-5 text-[#ff963c]" />
            <span className="transition-colors duration-200 hover:text-[#ff963c]">自分の記録</span>
          </div>

          {/* Challenge */}
          <div className="flex items-center gap-2 text-white text-base font-light font-['Hiragino_Sans','ヒラギノ角ゴシック','Hiragino_Kaku_Gothic_ProN','Noto_Sans_JP',sans-serif]">
            <Award className="w-5 h-5 text-[#ff963c]" />
            <span className="transition-colors duration-200 hover:text-[#ff963c]">チャレンジ</span>
          </div>

          {/* Notifications */}
          <div className="flex items-center gap-2 text-white text-base font-light font-['Hiragino_Sans','ヒラギノ角ゴシック','Hiragino_Kaku_Gothic_ProN','Noto_Sans_JP',sans-serif]">
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
          <div className="flex flex-col gap-1 p-2 cursor-pointer">
            <div className="w-5 h-0.5 bg-[#ff963c]"></div>
            <div className="w-5 h-0.5 bg-[#ff963c]"></div>
            <div className="w-5 h-0.5 bg-[#ff963c]"></div>
          </div>
        </div>
      </nav>
    </header>
  )
}
