import React, { useState } from 'react';
import { Calendar, Tag, Lightbulb, Edit3, Check, ChevronRight } from 'lucide-react';
import { ExperienceItem, PersonalBrandingData } from '../data/brandingData';

interface ExperienceSectionProps {
  data: PersonalBrandingData;
  onUpdatePeriod: (id: string, newPeriod: string) => void;
  onOpenImageLightbox: (imageUrl: string, title: string, caption: string) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  data,
  onUpdatePeriod,
  onOpenImageLightbox,
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempPeriod, setTempPeriod] = useState<string>('');

  const handleStartEdit = (item: ExperienceItem) => {
    setEditingId(item.id);
    setTempPeriod(item.period);
  };

  const handleSaveEdit = (id: string) => {
    if (tempPeriod.trim()) {
      onUpdatePeriod(id, tempPeriod.trim());
    }
    setEditingId(null);
  };

  return (
    <section id="experience" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-editorial tracking-widest text-[#784D2B] uppercase block mb-2">
            02 / Journey & Practices
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2D2926] tracking-tight">
            EXPERIENCE – 나의 경험
          </h2>
          <div className="w-12 h-0.5 bg-[#784D2B]/40 mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base text-[#6B655F]">
            아동 교육과 돌봄, 시각 자료 제작과 예배 섬김을 통해 체득한 배움의 기록입니다.
          </p>
        </div>

        {/* Highlight Banner on Care & Emotional Support */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#F6F1E7] border border-[#E7DEC3] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-xs font-editorial uppercase tracking-wider text-[#784D2B]">
              Core Insight on Education & Care
            </span>
            <h3 className="text-lg sm:text-xl font-medium text-[#2D2926]">
              "사람의 성장과 정서적 지원의 중요성을 배우다"
            </h3>
            <p className="text-xs sm:text-sm text-[#5F5953] leading-relaxed">
              아이들의 눈높이에서 경청하고 지지해 주는 온기는 교재나 시험보다 깊은 성장의 밑거름이 됩니다. 모든 활동은 이 철학에서 출발합니다.
            </p>
          </div>
          <div className="shrink-0 text-xs text-[#8C847B] bg-white/80 px-3.5 py-2 rounded-lg border border-[#E5DFD4]">
            💡 활동 기간은 각 카드에서 자유롭게 직접 입력 및 수정하실 수 있습니다.
          </div>
        </div>

        {/* Experience Cards Grid */}
        <div className="space-y-12">
          {data.experiences.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#EAE3D6] overflow-hidden shadow-[0_4px_20px_rgba(45,41,38,0.03)] hover:border-[#D6CCC0] transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Visual Area (if image exists) or Editorial Index Column */}
                {item.image ? (
                  <div className="lg:col-span-5 relative group overflow-hidden bg-[#F0ECE4] min-h-[260px] lg:min-h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                      onClick={() => onOpenImageLightbox(item.image!, item.title, item.summary)}
                    />
                    <button
                      type="button"
                      onClick={() => onOpenImageLightbox(item.image!, item.title, item.summary)}
                      className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-xs font-medium text-[#2D2926] px-3 py-1.5 rounded-md border border-[#EAE3D6] shadow-sm hover:bg-white transition-colors"
                    >
                      사진 확대보기
                    </button>
                  </div>
                ) : (
                  <div className="lg:col-span-4 p-8 bg-[#FBF9F6] border-b lg:border-b-0 lg:border-r border-[#EAE3D6] flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-editorial text-[#784D2B] tracking-wider block mb-2">
                        Case Study 0{index + 1}
                      </span>
                      <h4 className="text-lg font-semibold text-[#2D2926]">
                        {item.category}
                      </h4>
                      <p className="text-xs text-[#8C847B] mt-2">
                        {item.role}
                      </p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-[#EAE3D6]/80">
                      <span className="text-xs text-[#6B655F] block mb-2 font-medium">
                        활동 키워드
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-[#784D2B] bg-[#F7F2EB] px-2.5 py-1 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Content Area */}
                <div className={`${item.image ? 'lg:col-span-7' : 'lg:col-span-8'} p-6 sm:p-10 flex flex-col justify-between space-y-6`}>
                  <div className="space-y-4">
                    {/* Header with Title and Category */}
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div className="space-y-1">
                        <span className="text-xs font-editorial text-[#784D2B] tracking-wider uppercase">
                          {item.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2926]">
                          {item.title}
                        </h3>
                      </div>

                      {/* Period Editor / Display */}
                      <div className="flex items-center gap-1.5 text-xs text-[#7A736A] bg-[#FAF8F5] px-3 py-1.5 rounded-lg border border-[#EAE3D6]">
                        <Calendar className="w-3.5 h-3.5 text-[#784D2B]" />
                        {editingId === item.id ? (
                          <div className="flex items-center gap-1.5">
                            <input
                              type="text"
                              value={tempPeriod}
                              onChange={(e) => setTempPeriod(e.target.value)}
                              placeholder="기간 입력 (예: 2023.03 - 2024.02)"
                              className="px-2 py-0.5 text-xs bg-white border border-[#784D2B] rounded focus:outline-none"
                              autoFocus
                            />
                            <button
                              type="button"
                              onClick={() => handleSaveEdit(item.id)}
                              className="p-1 text-white bg-[#784D2B] hover:bg-[#633E21] rounded"
                              title="저장"
                            >
                              <Check className="w-3 h-3" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span>{item.period}</span>
                            <button
                              type="button"
                              onClick={() => handleStartEdit(item)}
                              className="text-[#8C847B] hover:text-[#784D2B] transition-colors"
                              title="기간 직접 수정"
                            >
                              <Edit3 className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#463F38] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Learnings Section */}
                    <div className="mt-4 pt-4 border-t border-[#F0ECE4]">
                      <div className="flex items-center gap-2 text-xs font-medium text-[#784D2B] mb-2.5">
                        <Lightbulb className="w-4 h-4" />
                        <span>경험을 통해 배운 점 (Key Learnings)</span>
                      </div>
                      <ul className="space-y-2">
                        {item.learnings.map((learning, idx) => (
                          <li
                            key={idx}
                            className="text-xs sm:text-sm text-[#5F5953] flex items-start gap-2.5 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#784D2B]/50 mt-2 shrink-0" />
                            <span>{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer tags */}
                  {item.image && (
                    <div className="pt-4 border-t border-[#F0ECE4] flex flex-wrap items-center gap-2">
                      <span className="text-xs text-[#8C847B] font-editorial uppercase">
                        Keywords:
                      </span>
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-[#784D2B] bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#EAE3D6]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
