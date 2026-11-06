import React, { useState } from 'react';
import { Sparkles, Compass, CheckCircle2, Bookmark, Target, Quote } from 'lucide-react';
import { PersonalBrandingData } from '../data/brandingData';

interface AboutSectionProps {
  data: PersonalBrandingData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<'personality' | 'strengths' | 'favorites' | 'values' | 'goals'>('personality');

  const tabs = [
    { key: 'personality' as const, label: '나의 성격', en: 'Personality' },
    { key: 'strengths' as const, label: '나의 장점', en: 'Strengths' },
    { key: 'favorites' as const, label: '좋아하는 것', en: 'Favorites' },
    { key: 'values' as const, label: '중요한 가치', en: 'Core Values' },
    { key: 'goals' as const, label: '앞으로의 목표', en: 'Future Goals' },
  ];

  return (
    <section id="about" className="py-24 bg-[#F5F1E8]/70 border-t border-[#EAE3D6] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-editorial tracking-widest text-[#784D2B] uppercase block mb-2">
            01 / Identity & Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2D2926] tracking-tight">
            ABOUT ME – 나에 대하여
          </h2>
          <div className="w-12 h-0.5 bg-[#784D2B]/40 mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base text-[#6B655F]">
            스스로를 과장하지 않고, 진솔하고 따뜻하며 꾸준히 성장해 가는 나를 소개합니다.
          </p>
        </div>

        {/* Narrative Letter Block */}
        <div className="bg-[#FAF8F5] rounded-2xl border border-[#E5DFD4] p-8 md:p-12 shadow-[0_4px_24px_rgba(45,41,38,0.03)] mb-16 relative overflow-hidden">
          <Quote className="absolute top-6 right-8 w-16 h-16 text-[#EFE7DB] -z-0 opacity-60" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-left space-y-4">
            <span className="text-xs uppercase tracking-wider text-[#8C847B] font-editorial block">
              A Letter from the Archive
            </span>

            <div className="space-y-3.5 text-base sm:text-lg text-[#3E3832] leading-relaxed font-korean">
              {data.owner.introProse.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "font-medium text-[#2D2926]" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-4 border-t border-[#EAE3D6] flex flex-wrap items-center justify-between gap-4 text-xs text-[#7A736A]">
              <div className="flex items-center gap-2">
                <span>핵심 가치 키워드:</span>
                <span className="font-medium text-[#784D2B]">
                  {data.keywords.join(' · ')}
                </span>
              </div>
              <span className="italic font-editorial text-sm text-[#8C847B]">
                "The joy of continuous growth and gentle presence."
              </span>
            </div>
          </div>
        </div>

        {/* 5 Aspects Interactive Explorer */}
        <div className="bg-[#FAF8F5] rounded-2xl border border-[#E5DFD4] p-6 sm:p-10 shadow-[0_4px_24px_rgba(45,41,38,0.03)]">
          {/* Segmented Filter Control */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-8 border-b border-[#EAE3D6]">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#784D2B] text-white shadow-sm'
                      : 'text-[#6B655F] hover:text-[#2D2926] hover:bg-[#EFEAE0]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`ml-1 text-[11px] ${isActive ? 'text-white/80' : 'text-[#8C847B]'}`}>
                    / {tab.en}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="pt-8 min-h-[300px]">
            {/* 1. Personality */}
            {activeTab === 'personality' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
                {data.aboutDetails.personality.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-white border border-[#EAE3D6] hover:border-[#D0C6B8] transition-colors"
                  >
                    <div className="text-xs font-editorial text-[#784D2B] mb-2 tracking-wider">
                      0{idx + 1}. Quality
                    </div>
                    <h3 className="text-lg font-semibold text-[#2D2926] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#5F5953] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* 2. Strengths */}
            {activeTab === 'strengths' && (
              <div className="max-w-3xl mx-auto space-y-4 animate-in fade-in duration-300">
                {data.aboutDetails.strengths.map((str, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#EAE3D6]"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#F3EDE2] text-[#784D2B] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-[#8C847B] font-editorial uppercase mb-0.5">
                        Strength 0{idx + 1}
                      </div>
                      <p className="text-sm sm:text-base font-medium text-[#2D2926] leading-relaxed">
                        {str}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 3. Favorites */}
            {activeTab === 'favorites' && (
              <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-300">
                {data.aboutDetails.favorites.map((fav, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-[#EAE3D6] flex items-start gap-3.5"
                  >
                    <Bookmark className="w-4 h-4 text-[#784D2B] shrink-0 mt-1" />
                    <p className="text-sm text-[#3E3832] leading-relaxed">
                      {fav}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* 4. Core Values */}
            {activeTab === 'values' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in fade-in duration-300">
                {data.aboutDetails.coreValues.map((val, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-white border border-[#EAE3D6] space-y-2"
                  >
                    <div className="flex items-center gap-2 text-xs font-editorial text-[#784D2B] tracking-wider">
                      <Compass className="w-3.5 h-3.5" />
                      <span>Value Principle 0{idx + 1}</span>
                    </div>
                    <h3 className="text-base font-semibold text-[#2D2926]">
                      {val.title}
                    </h3>
                    <p className="text-sm text-[#5F5953] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* 5. Future Goals */}
            {activeTab === 'goals' && (
              <div className="max-w-3xl mx-auto space-y-4 animate-in fade-in duration-300">
                {data.aboutDetails.futureGoals.map((goal, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#EAE3D6]"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#EBF0E9] text-[#5B6E52] flex items-center justify-center shrink-0 mt-0.5">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-editorial text-[#5B6E52] uppercase block mb-0.5">
                        Vision Step 0{idx + 1}
                      </span>
                      <p className="text-sm sm:text-base font-medium text-[#2D2926] leading-relaxed">
                        {goal}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
