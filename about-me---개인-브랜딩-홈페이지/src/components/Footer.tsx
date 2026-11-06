import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { PersonalBrandingData } from '../data/brandingData';

interface FooterProps {
  data: PersonalBrandingData;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#262320] text-[#D8D1C7] pt-16 pb-12 border-t border-[#3D3833]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Slogan */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-2xl font-editorial tracking-wide text-white block">
              ABOUT ME
            </span>
            <p className="text-sm text-[#B8AE9F] font-korean leading-relaxed max-w-sm">
              "{data.owner.tagline}"
            </p>
            <p className="text-xs text-[#8C847B] leading-relaxed max-w-md pt-2">
              배움과 돌봄, 독서와 기록, 그리고 신앙의 여정을 진솔하게 담아내는 나만의 공간입니다.
            </p>
          </div>

          {/* Quick Menu Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-editorial uppercase tracking-wider text-[#A89E8F] block">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#B8AE9F]">
              <a href="#home" className="hover:text-white transition-colors">HOME</a>
              <a href="#about" className="hover:text-white transition-colors">ABOUT ME</a>
              <a href="#experience" className="hover:text-white transition-colors">EXPERIENCE</a>
              <a href="#projects" className="hover:text-white transition-colors">MY PROJECT</a>
              <a href="#archive" className="hover:text-white transition-colors">MY ARCHIVE</a>
              <a href="#faith" className="hover:text-white transition-colors">MY FAITH</a>
              <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
            </div>
          </div>

          {/* Slogan & Back to top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3.5 py-2 text-xs text-white bg-white/10 hover:bg-white/20 rounded-md transition-colors"
            >
              <span>맨 위로 이동</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>

            <span className="text-xs text-[#8C847B] italic font-editorial">
              Steadily, honestly, growing every day.
            </span>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C847B]">
          <p>© {new Date().getFullYear()} ABOUT ME. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with care for authentic personal branding</span>
            <Heart className="w-3.5 h-3.5 text-[#B87070] inline fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
};
