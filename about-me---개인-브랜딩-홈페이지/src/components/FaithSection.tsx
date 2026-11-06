import React, { useState } from 'react';
import { Music, BookOpen, Heart, Play, Pause, Volume2, Sparkles, Plus, Check } from 'lucide-react';
import { PersonalBrandingData, PraiseSong, ScriptureItem } from '../data/brandingData';

interface FaithSectionProps {
  data: PersonalBrandingData;
  onOpenImageLightbox: (imageUrl: string, title: string, caption: string) => void;
}

export const FaithSection: React.FC<FaithSectionProps> = ({ data, onOpenImageLightbox }) => {
  const [playingSongId, setPlayingSongId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'worship' | 'praise' | 'scripture' | 'gratitude'>('worship');
  
  // Custom gratitude entry state
  const [userGratitude, setUserGratitude] = useState<string[]>([]);
  const [newGratitudeText, setNewGratitudeText] = useState('');
  const [showAddSuccess, setShowAddSuccess] = useState(false);

  const togglePlay = (id: string) => {
    setPlayingSongId(playingSongId === id ? null : id);
  };

  const handleAddGratitude = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGratitudeText.trim()) return;
    setUserGratitude([...userGratitude, newGratitudeText.trim()]);
    setNewGratitudeText('');
    setShowAddSuccess(true);
    setTimeout(() => setShowAddSuccess(false), 2000);
  };

  return (
    <section id="faith" className="py-24 bg-[#F5F1E8]/70 border-t border-[#EAE3D6] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-editorial tracking-widest text-[#784D2B] uppercase block mb-2">
            05 / Reverence & Faith
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2D2926] tracking-tight">
            MY FAITH – 나의 신앙 이야기
          </h2>
          <div className="w-12 h-0.5 bg-[#784D2B]/40 mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base text-[#6B655F]">
            과시하지 않는 고요한 믿음, 예배와 찬양 속에서 배우는 겸손과 감사의 기록입니다.
          </p>
        </div>

        {/* Narrative Feature Split */}
        <div className="bg-white rounded-2xl border border-[#EAE3D6] overflow-hidden shadow-[0_4px_24px_rgba(45,41,38,0.03)] mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image Column */}
            <div className="lg:col-span-5 relative group bg-[#EBE4D8] min-h-[300px] lg:min-h-full">
              <img
                src="/src/assets/images/faith_acoustic_worship_1793930277116.jpg"
                alt="따뜻한 조명이 깃든 예배당과 찬양을 준비하는 어쿠스틱 기타"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                onClick={() =>
                  onOpenImageLightbox(
                    "/src/assets/images/faith_acoustic_worship_1793930277116.jpg",
                    "예배당의 어쿠스틱 기타",
                    "주일 예배 찬양 준비와 섬김의 순간"
                  )
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-editorial uppercase tracking-wider text-[#EADFCB]">
                  Worship Leader Story
                </span>
                <p className="text-sm font-medium mt-1">
                  "가장 낮은 자리에서 함께 부르는 진실한 노래"
                </p>
              </div>
            </div>

            {/* Narrative Story Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-editorial text-[#784D2B] tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Personal Faith Confession</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2926]">
                  삶의 모든 자리에서 고백하는 은혜
                </h3>

                <p className="text-sm sm:text-base text-[#463F38] leading-relaxed">
                  {data.faith.story}
                </p>

                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#EAE3D6] text-xs sm:text-sm text-[#5F5953] leading-relaxed">
                  <span className="font-semibold text-[#784D2B] block mb-1">
                    찬양팀 인도자로서의 마음가짐
                  </span>
                  {data.faith.worshipLeaderReflection}
                </div>
              </div>

              {/* Faith Learnings list */}
              <div className="pt-4 border-t border-[#F0ECE4]">
                <span className="text-xs font-medium text-[#2D2926] block mb-2.5">
                  신앙을 통해 배운 삶의 태도
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5F5953]">
                  {data.faith.learnings.map((learning, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-[#784D2B] mt-0.5">•</span>
                      <span>{learning}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Interactive Faith Elements */}
        <div className="bg-[#FAF8F5] rounded-2xl border border-[#E5DFD4] p-6 sm:p-10 shadow-[0_4px_24px_rgba(45,41,38,0.03)]">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-8 border-b border-[#EAE3D6]">
            <button
              type="button"
              onClick={() => setActiveTab('worship')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeTab === 'worship'
                  ? 'bg-[#784D2B] text-white shadow-sm'
                  : 'text-[#6B655F] hover:text-[#2D2926] hover:bg-[#EFEAE0]'
              }`}
            >
              찬양팀 섬김 & 나눔
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('praise')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeTab === 'praise'
                  ? 'bg-[#784D2B] text-white shadow-sm'
                  : 'text-[#6B655F] hover:text-[#2D2926] hover:bg-[#EFEAE0]'
              }`}
            >
              좋아하는 찬양 (4곡)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('scripture')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeTab === 'scripture'
                  ? 'bg-[#784D2B] text-white shadow-sm'
                  : 'text-[#6B655F] hover:text-[#2D2926] hover:bg-[#EFEAE0]'
              }`}
            >
              기억하고 싶은 말씀
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('gratitude')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeTab === 'gratitude'
                  ? 'bg-[#784D2B] text-white shadow-sm'
                  : 'text-[#6B655F] hover:text-[#2D2926] hover:bg-[#EFEAE0]'
              }`}
            >
              일상과 예배의 감사 노트
            </button>
          </div>

          <div className="pt-8 min-h-[280px]">
            {/* 1. Worship Leader Reflection */}
            {activeTab === 'worship' && (
              <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-300">
                <div className="p-6 bg-white rounded-xl border border-[#EAE3D6] space-y-3">
                  <h4 className="text-base font-semibold text-[#2D2926] flex items-center gap-2">
                    <Music className="w-4 h-4 text-[#784D2B]" />
                    <span>예배 찬양팀에서의 섬김과 마음</span>
                  </h4>
                  <p className="text-sm text-[#463F38] leading-relaxed">
                    주일 아침 가장 먼저 예배당 문을 열고 악기를 조율하며 드리는 첫 기도는 "오늘 예배에 오는 모든 성도들의 지친 마음에 하나님의 위로가 닿게 하소서"입니다. 악기 한 대와 목소리가 모여 하나의 고백을 이룰 때, 우리는 개인의 욕심을 내려놓고 공동체로서 하나가 됨을 경험합니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-[#EAE3D6]">
                    <span className="text-xs font-editorial text-[#784D2B] block mb-1">01. PREPARATION</span>
                    <h5 className="text-sm font-semibold text-[#2D2926] mb-1">말씀 묵상 중심 콘티</h5>
                    <p className="text-xs text-[#5F5953]">설교 본문과 주제를 사전에 깊이 묵상하며 곡의 흐름을 준비합니다.</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-[#EAE3D6]">
                    <span className="text-xs font-editorial text-[#784D2B] block mb-1">02. HARMONY</span>
                    <h5 className="text-sm font-semibold text-[#2D2926] mb-1">서로를 배려하는 호흡</h5>
                    <p className="text-xs text-[#5F5953]">연주자와 보컬이 각자의 소리를 낮추어 전체의 조화를 만들어 갑니다.</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-[#EAE3D6]">
                    <span className="text-xs font-editorial text-[#784D2B] block mb-1">03. DEVOTION</span>
                    <h5 className="text-sm font-semibold text-[#2D2926] mb-1">삶으로 드리는 예배</h5>
                    <p className="text-xs text-[#5F5953]">예배당 안에서의 고백이 월요일부터 시작되는 일상의 삶으로 이어지도록 힘씁니다.</p>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Praise Playlist */}
            {activeTab === 'praise' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.faith.praises.map((praise) => {
                    const isPlaying = playingSongId === praise.id;
                    return (
                      <div
                        key={praise.id}
                        className={`p-5 rounded-xl border transition-all ${
                          isPlaying
                            ? 'bg-white border-[#784D2B] shadow-sm'
                            : 'bg-white border-[#EAE3D6] hover:border-[#D0C6B8]'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div>
                            <span className="text-[11px] font-editorial text-[#784D2B] uppercase tracking-wider block">
                              {praise.theme}
                            </span>
                            <h4 className="text-base font-semibold text-[#2D2926]">
                              {praise.title}
                            </h4>
                            <span className="text-xs text-[#8C847B]">
                              {praise.artist}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => togglePlay(praise.id)}
                            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                              isPlaying
                                ? 'bg-[#784D2B] text-white shadow-sm'
                                : 'bg-[#F2ECE1] text-[#784D2B] hover:bg-[#784D2B] hover:text-white'
                            }`}
                            title={isPlaying ? '일시 정지' : '찬양 묵상 재생'}
                          >
                            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                          </button>
                        </div>

                        <p className="text-xs text-[#5F5953] leading-relaxed mb-3">
                          {praise.meaning}
                        </p>

                        <div className="p-3 bg-[#FAF8F5] rounded-lg border border-[#EFE9DF] text-xs font-serif italic text-[#463F38]">
                          "{praise.favoriteLyrics}"
                        </div>

                        {isPlaying && (
                          <div className="mt-3 pt-2 flex items-center gap-2 text-xs text-[#784D2B] animate-pulse">
                            <Volume2 className="w-3.5 h-3.5" />
                            <span>마음으로 함께 찬양을 묵상하는 중...</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 3. Scripture Cards */}
            {activeTab === 'scripture' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
                {data.faith.scriptures.map((scrip, idx) => (
                  <div
                    key={scrip.id}
                    className="p-6 rounded-xl bg-white border border-[#EAE3D6] flex flex-col justify-between space-y-4 shadow-[0_2px_8px_rgba(45,41,38,0.02)]"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-[#8C847B]">
                        <span className="font-editorial text-[#784D2B]">VERSE 0{idx + 1}</span>
                        <BookOpen className="w-3.5 h-3.5 text-[#784D2B]" />
                      </div>
                      <blockquote className="text-sm font-serif italic text-[#2D2926] leading-relaxed">
                        "{scrip.verse}"
                      </blockquote>
                      <div className="text-xs font-semibold text-[#784D2B]">
                        — {scrip.reference}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#F0ECE4] text-xs text-[#5F5953] leading-relaxed">
                      <span className="font-medium text-[#2D2926] block mb-1">묵상 메모:</span>
                      {scrip.reflection}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 4. Gratitude Notes */}
            {activeTab === 'gratitude' && (
              <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-300">
                <div className="p-6 bg-white rounded-xl border border-[#EAE3D6] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-editorial text-[#784D2B]">
                    <Heart className="w-3.5 h-3.5" />
                    <span>오늘의 감사 고백</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#2D2926] leading-relaxed italic font-serif">
                    "{data.faith.gratitudeNote}"
                  </p>
                </div>

                {/* Additional user added gratitudes */}
                {userGratitude.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-xs font-medium text-[#784D2B] block">
                      내가 기록한 감사 제목들
                    </span>
                    {userGratitude.map((item, idx) => (
                      <div key={idx} className="p-3.5 bg-white rounded-lg border border-[#EAE3D6] text-xs sm:text-sm text-[#463F38]">
                        • {item}
                      </div>
                    ))}
                  </div>
                )}

                {/* Add new gratitude input */}
                <form onSubmit={handleAddGratitude} className="p-4 bg-white rounded-xl border border-[#EAE3D6] space-y-3">
                  <span className="text-xs font-medium text-[#2D2926] block">
                    오늘의 감사 한 줄 남기기
                  </span>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newGratitudeText}
                      onChange={(e) => setNewGratitudeText(e.target.value)}
                      placeholder="오늘 하루 중 감사했던 작은 순간이나 깨달음을 적어보세요."
                      className="flex-1 px-3 py-2 text-xs sm:text-sm bg-[#FAF8F5] border border-[#DDD5C7] rounded-md focus:outline-none focus:border-[#784D2B]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 text-xs font-medium text-white bg-[#784D2B] hover:bg-[#633E21] rounded-md transition-colors shrink-0 shadow-sm"
                    >
                      기록하기
                    </button>
                  </div>
                  {showAddSuccess && (
                    <div className="text-xs text-[#5B6E52] flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      <span>감사의 마음이 기록되었습니다.</span>
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
