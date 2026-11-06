import React from 'react';
import { ArrowDown, ArrowRight, BookOpen, Heart, Sparkles } from 'lucide-react';
import { PersonalBrandingData } from '../data/brandingData';

interface HeroSectionProps {
  data: PersonalBrandingData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle organic background glow */}
      <div className="absolute top-12 right-1/4 w-96 h-96 bg-[#F3ECE1] rounded-full filter blur-3xl opacity-60 pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#EFE9DF] rounded-full filter blur-3xl opacity-40 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Editorial Eyebrow & Slogan */}
        <div className="flex items-center gap-3 text-xs tracking-widest text-[#784D2B] font-editorial uppercase mb-6">
          <span>Personal Branding & Archive</span>
          <span aria-hidden="true" className="text-[#C8BFB2]">·</span>
          <span>{data.owner.tagline}</span>
        </div>

        {/* 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Typographic Content */}
          <div className="lg:col-span-7 space-y-7">
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-korean font-semibold text-[#2D2926] leading-[1.35] tracking-tight">
              안녕하세요.<br />
              저는 <span className="text-[#784D2B] underline decoration-[#DCCFBE] underline-offset-8">꾸준히 배우고 기록하며</span><br />
              성장하는 사람입니다.
            </h1>

            <p className="text-base sm:text-lg text-[#5F5953] leading-relaxed max-w-xl font-korean">
              {data.owner.subTagline}
            </p>

            {/* Clean Unboxed Keywords with Typographic Separator */}
            <div className="pt-2">
              <span className="block text-xs font-medium text-[#8C847B] mb-2 tracking-wider">
                나를 표현하는 키워드
              </span>
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm font-medium text-[#463F38]">
                {data.keywords.map((kw, index) => (
                  <React.Fragment key={kw}>
                    <span className="hover:text-[#784D2B] transition-colors">
                      #{kw}
                    </span>
                    {index < data.keywords.length - 1 && (
                      <span aria-hidden="true" className="text-[#C8BFB2]">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollTo('about')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#784D2B] hover:bg-[#633E21] rounded-md transition-all shadow-sm hover:shadow active:translate-y-0.5"
              >
                <span>ABOUT ME 알아보기</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#2D2926] bg-[#FAF8F5] hover:bg-[#F2ECE1] border border-[#DDD5C7] rounded-md transition-all active:translate-y-0.5"
              >
                <span>주요 프로젝트 바로가기</span>
                <BookOpen className="w-4 h-4 text-[#784D2B]" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background decorative offset frame */}
              <div className="absolute -inset-3 rounded-2xl border border-[#E5DFD4] bg-[#F7F3EC] -rotate-1 -z-10" />

              <div className="overflow-hidden rounded-xl bg-[#EBE4D8] border border-[#DDD5C7] shadow-[0_12px_36px_rgba(45,41,38,0.06)] group">
                <img
                  src="/src/assets/images/hero_workspace_books_1793930276706.jpg"
                  alt="단정하게 정돈된 아침의 작업 책상과 책, 필사 노트"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Styled graceful fallback
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="w-full h-[400px] flex flex-col items-center justify-center bg-[#F3EDE2] text-[#784D2B] p-6 text-center">
                          <span class="font-editorial text-2xl font-semibold mb-2">ABOUT ME</span>
                          <span class="text-xs text-[#8C847B]">나를 기록하고, 나답게 성장하다</span>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Floating editorial note card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 max-w-[270px] bg-white/95 backdrop-blur-sm p-4 rounded-lg border border-[#EAE3D6] shadow-[0_8px_24px_rgba(45,41,38,0.06)]">
                <div className="flex items-center gap-2 text-xs font-editorial text-[#784D2B] uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#784D2B]" />
                  <span>Personal Reflection</span>
                </div>
                <p className="text-xs text-[#463F38] leading-relaxed font-korean">
                  "빠르지는 않아도 한 걸음씩 깊이 있게, 일상과 배움을 성실하게 담아냅니다."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width editorial metrics & anchor strip */}
        <div className="mt-20 pt-8 border-t border-[#EAE5DC] grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <span className="text-xs tracking-wider text-[#8C847B] uppercase block">
              Identity
            </span>
            <span className="text-sm font-medium text-[#2D2926]">
              {data.owner.role}
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-xs tracking-wider text-[#8C847B] uppercase block">
              Experience
            </span>
            <span className="text-sm font-medium text-[#2D2926]">
              아동센터 · 어린이집 · 찬양인도
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-xs tracking-wider text-[#8C847B] uppercase block">
              Projects
            </span>
            <span className="text-sm font-medium text-[#2D2926]">
              오늘의 책상 · 교육자료 · 블로그
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-xs tracking-wider text-[#8C847B] uppercase block">
              Attitude
            </span>
            <span className="text-sm font-medium text-[#2D2926]">
              성실함과 따뜻한 책임감
            </span>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => scrollTo('about')}
            className="group flex flex-col items-center gap-2 text-xs text-[#8C847B] hover:text-[#784D2B] transition-colors"
            aria-label="아래로 스크롤"
          >
            <span className="tracking-widest uppercase text-[11px] font-editorial">
              Scroll Down
            </span>
            <div className="w-8 h-8 rounded-full border border-[#DDD5C7] flex items-center justify-center group-hover:border-[#784D2B] transition-colors">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
