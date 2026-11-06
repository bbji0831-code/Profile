import React, { useEffect, useState } from 'react';
import { X, CheckCircle, Sparkles, Layers, Quote, ArrowRight, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../../data/brandingData';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenImage: (url: string, title: string, caption: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenImage,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'samples' | 'deliverables'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full max-h-[90vh] bg-[#FAF8F5] text-[#2D2926] rounded-2xl overflow-hidden shadow-2xl border border-[#E5DFD4] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 px-6 border-b border-[#EAE3D6] bg-white">
          <div className="space-y-0.5">
            <span className="text-[11px] font-editorial uppercase tracking-wider text-[#784D2B]">
              {project.category} · {project.englishTitle}
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#2D2926]">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#8C847B] hover:text-[#2D2926] hover:bg-[#F2ECE1] rounded-full transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Main Visual */}
          <div
            className="relative h-64 sm:h-72 rounded-xl overflow-hidden bg-[#EAE3D6] cursor-pointer group shadow-xs"
            onClick={() => onOpenImage(project.image, project.title, project.subtitle)}
          >
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <span className="text-xs text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-md border border-white/20">
                사진 확대보기 클릭
              </span>
            </div>
          </div>

          {/* Quote Banner */}
          {project.quote && (
            <div className="p-4 sm:p-5 bg-white rounded-xl border border-[#EAE3D6] flex items-start gap-3">
              <Quote className="w-5 h-5 text-[#784D2B] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm italic font-serif text-[#463F38] leading-relaxed">
                "{project.quote}"
              </p>
            </div>
          )}

          {/* Sub Navigation Tabs */}
          <div className="flex border-b border-[#EAE3D6] gap-4">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`pb-2.5 text-xs sm:text-sm font-medium transition-colors ${
                activeTab === 'overview'
                  ? 'border-b-2 border-[#784D2B] text-[#784D2B]'
                  : 'text-[#8C847B] hover:text-[#2D2926]'
              }`}
            >
              프로젝트 개요
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('samples')}
              className={`pb-2.5 text-xs sm:text-sm font-medium transition-colors ${
                activeTab === 'samples'
                  ? 'border-b-2 border-[#784D2B] text-[#784D2B]'
                  : 'text-[#8C847B] hover:text-[#2D2926]'
              }`}
            >
              상세 내용 & 특징
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('deliverables')}
              className={`pb-2.5 text-xs sm:text-sm font-medium transition-colors ${
                activeTab === 'deliverables'
                  ? 'border-b-2 border-[#784D2B] text-[#784D2B]'
                  : 'text-[#8C847B] hover:text-[#2D2926]'
              }`}
            >
              산출물 & 기록
            </button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <p className="text-sm sm:text-base text-[#463F38] leading-relaxed">
                {project.description}
              </p>

              <div className="pt-2">
                <span className="text-xs font-semibold text-[#2D2926] uppercase block mb-2 font-editorial tracking-wider">
                  Tags & Taxonomy
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[#784D2B] bg-white px-3 py-1 rounded-md border border-[#EAE3D6]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Samples & Features */}
          {activeTab === 'samples' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <span className="text-xs font-semibold text-[#2D2926] block">
                핵심 구성 요소
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white rounded-lg border border-[#EAE3D6] flex items-start gap-2.5 text-xs sm:text-sm text-[#463F38]"
                  >
                    <CheckCircle className="w-4 h-4 text-[#784D2B] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Deliverables */}
          {activeTab === 'deliverables' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <span className="text-xs font-semibold text-[#2D2926] block">
                완성된 산출물 및 아카이브 내역
              </span>
              <ul className="space-y-2">
                {project.deliverables.map((item, idx) => (
                  <li
                    key={idx}
                    className="p-3 bg-white rounded-lg border border-[#EAE3D6] text-xs sm:text-sm text-[#463F38] flex items-center justify-between"
                  >
                    <span>{item}</span>
                    <span className="text-xs text-[#784D2B] font-editorial">Ready</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 border-t border-[#EAE3D6] bg-white flex items-center justify-between">
          <span className="text-xs text-[#8C847B]">
            지속적으로 업데이트되고 있는 프로젝트입니다.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-medium text-white bg-[#784D2B] hover:bg-[#633E21] rounded-md transition-colors"
          >
            창 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
