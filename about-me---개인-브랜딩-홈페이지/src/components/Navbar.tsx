import React, { useState, useEffect } from 'react';
import { Menu, X, SlidersHorizontal, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenCustomizer: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCustomizer, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT ME', href: '#about', id: 'about' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'MY PROJECT', href: '#projects', id: 'projects' },
    { label: 'MY ARCHIVE', href: '#archive', id: 'archive' },
    { label: 'MY FAITH', href: '#faith', id: 'faith' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE5DC] py-3 shadow-[0_2px_12px_rgba(45,41,38,0.03)]'
          : 'bg-[#FAF8F5]/60 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="text-xl md:text-2xl font-editorial font-medium tracking-wide text-[#2D2926] hover:text-[#784D2B] transition-colors whitespace-nowrap shrink-0"
        >
          ABOUT ME
        </a>

        {/* Zone 2: Single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wider text-[#6B655F]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#2D2926] ${
                  isActive ? 'text-[#784D2B] font-semibold' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#784D2B]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Customizer */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenCustomizer}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#6B655F] hover:text-[#2D2926] hover:bg-[#F0EBE1] rounded-md transition-colors border border-[#E5DFD4] whitespace-nowrap shrink-0"
            title="프로필 및 기간, 링크 정보 수정"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">정보 편집</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#784D2B] hover:bg-[#633E21] rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <span>연락하기</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2D2926] hover:bg-[#EAE5DC]/60 rounded-md transition-colors"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drop-down */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#EAE5DC] px-6 py-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 py-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`flex items-center justify-between py-2 text-sm transition-colors border-b border-[#F0ECE4]/60 ${
                    isActive ? 'text-[#784D2B] font-semibold' : 'text-[#6B655F]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#784D2B]" />}
                </a>
              );
            })}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full text-center py-2.5 text-xs font-medium text-white bg-[#784D2B] rounded-md"
              >
                연락하기 (CONTACT)
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCustomizer();
                }}
                className="w-full flex items-center justify-center gap-1.5 py-2 text-xs text-[#6B655F] bg-[#F0EBE1] rounded-md"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>내 정보 및 활동 기간 편집하기</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
