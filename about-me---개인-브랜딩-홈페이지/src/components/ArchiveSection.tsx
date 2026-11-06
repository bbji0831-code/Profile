import React, { useState } from 'react';
import { Plus, ZoomIn, Calendar, Sparkles, Filter } from 'lucide-react';
import { ArchiveItem, PersonalBrandingData } from '../data/brandingData';

interface ArchiveSectionProps {
  data: PersonalBrandingData;
  onOpenImageLightbox: (imageUrl: string, title: string, caption: string) => void;
  onAddArchiveItem: (item: ArchiveItem) => void;
}

export const ArchiveSection: React.FC<ArchiveSectionProps> = ({
  data,
  onOpenImageLightbox,
  onAddArchiveItem,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New archive form state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<ArchiveItem['category']>('DAILY');
  const [newCaption, setNewCaption] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('/src/assets/images/hero_workspace_books_1793930276706.jpg');

  const categories = [
    { key: 'ALL', label: '전체 (ALL)' },
    { key: 'DAILY', label: 'DAILY (일상)' },
    { key: 'READING', label: 'READING (독서)' },
    { key: 'WRITING', label: 'WRITING (글쓰기)' },
    { key: 'EDUCATION', label: 'EDUCATION (교육)' },
    { key: 'DESIGN', label: 'DESIGN (디자인)' },
    { key: 'GROWTH', label: 'GROWTH (성장)' },
  ];

  const filteredItems = selectedCategory === 'ALL'
    ? data.archive
    : data.archive.filter((item) => item.category === selectedCategory);

  const handleCreateArchive = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newCaption.trim()) return;

    const newItem: ArchiveItem = {
      id: `arc-${Date.now()}`,
      title: newTitle.trim(),
      category: newCategory,
      date: new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
      caption: newCaption.trim(),
      imageUrl: newImageUrl,
    };

    onAddArchiveItem(newItem);
    setNewTitle('');
    setNewCaption('');
    setIsAddModalOpen(false);
  };

  return (
    <section id="archive" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-editorial tracking-widest text-[#784D2B] uppercase block mb-2">
            04 / Moments & Memories
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2D2926] tracking-tight">
            MY ARCHIVE – 나의 기록
          </h2>
          <div className="w-12 h-0.5 bg-[#784D2B]/40 mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base text-[#6B655F]">
            흘러가는 일상의 단상과 독서의 문장, 따뜻한 배움의 순간들을 사진과 글로 엮었습니다.
          </p>
        </div>

        {/* Filter Controls & Add Record Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#EAE3D6]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F1ECE3] rounded-lg">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-white text-[#784D2B] shadow-sm font-semibold'
                      : 'text-[#6B655F] hover:text-[#2D2926]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Add Entry Button */}
          <button
            type="button"
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-[#784D2B] hover:bg-[#633E21] rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>새 기록 남기기</span>
          </button>
        </div>

        {/* Masonry / Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-[#EAE3D6] overflow-hidden flex flex-col justify-between shadow-[0_2px_12px_rgba(45,41,38,0.02)] hover:border-[#D6CCC0] hover:shadow-[0_8px_24px_rgba(45,41,38,0.06)] transition-all group"
            >
              <div>
                {/* Image Thumbnail with Lightbox trigger */}
                <div
                  className="relative overflow-hidden bg-[#EBE4D8] h-52 cursor-pointer"
                  onClick={() => onOpenImageLightbox(item.imageUrl, item.title, item.caption)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="flex items-center gap-1 text-xs text-white bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>크게 보기</span>
                    </span>
                  </div>

                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[11px] font-editorial text-[#784D2B] px-2 py-0.5 rounded border border-[#EAE3D6]">
                    {item.category}
                  </span>
                </div>

                {/* Text Content */}
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-[#8C847B]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#784D2B]" />
                      <span>{item.date}</span>
                    </span>
                    <span className="font-editorial uppercase text-[11px]">Archive</span>
                  </div>

                  <h3 className="text-base font-semibold text-[#2D2926] leading-snug group-hover:text-[#784D2B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5F5953] leading-relaxed line-clamp-3">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Card Footer with detail note */}
              {item.details && (
                <div className="px-5 pb-5 pt-0">
                  <div className="pt-3 border-t border-[#F0ECE4] text-[11px] text-[#8C847B] italic">
                    "{item.details}"
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty state if filtered */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-[#EAE3D6] p-8">
            <p className="text-sm text-[#8C847B] mb-3">
              선택한 카테고리에 등록된 기록이 없습니다.
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory('ALL')}
              className="text-xs font-medium text-[#784D2B] hover:underline"
            >
              전체 기록 보기
            </button>
          </div>
        )}

        {/* Add Record Modal */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-[#FAF8F5] rounded-2xl border border-[#E5DFD4] max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between border-b border-[#EAE3D6] pb-3">
                <div className="space-y-0.5">
                  <span className="text-xs font-editorial uppercase text-[#784D2B]">
                    New Archive Entry
                  </span>
                  <h3 className="text-lg font-semibold text-[#2D2926]">
                    새로운 일상 & 기록 추가하기
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="text-[#8C847B] hover:text-[#2D2926] text-xl"
                >
                  &times;
                </button>
              </div>

              <form onSubmit={handleCreateArchive} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#463F38] mb-1">
                    기록 제목
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="예: 오늘의 책상에서 발견한 문장"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#DDD5C7] rounded-md focus:outline-none focus:border-[#784D2B]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#463F38] mb-1">
                      카테고리
                    </label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as ArchiveItem['category'])}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#DDD5C7] rounded-md focus:outline-none focus:border-[#784D2B]"
                    >
                      <option value="DAILY">DAILY (일상)</option>
                      <option value="READING">READING (독서)</option>
                      <option value="WRITING">WRITING (글쓰기)</option>
                      <option value="EDUCATION">EDUCATION (교육)</option>
                      <option value="DESIGN">DESIGN (디자인)</option>
                      <option value="GROWTH">GROWTH (성장)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#463F38] mb-1">
                      대표 이미지 선택
                    </label>
                    <select
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#DDD5C7] rounded-md focus:outline-none focus:border-[#784D2B]"
                    >
                      <option value="/src/assets/images/hero_workspace_books_1793930276706.jpg">작업 책상 & 책</option>
                      <option value="/src/assets/images/project_desk_reading_1793930277931.jpg">독서 책상 & 식물</option>
                      <option value="/src/assets/images/experience_childcare_art_1793930276333.jpg">어린이 교육 & 그림책</option>
                      <option value="/src/assets/images/faith_acoustic_worship_1793930277116.jpg">예배실 & 기타</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#463F38] mb-1">
                    기록 내용 및 단상
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={newCaption}
                    onChange={(e) => setNewCaption(e.target.value)}
                    placeholder="오늘 느끼고 배운 점, 마음에 남은 생각을 진솔하게 적어주세요."
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#DDD5C7] rounded-md focus:outline-none focus:border-[#784D2B]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 text-xs font-medium text-[#6B655F] hover:bg-[#EFEAE0] rounded-md"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-medium text-white bg-[#784D2B] hover:bg-[#633E21] rounded-md shadow-sm"
                  >
                    아카이브 저장하기
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
