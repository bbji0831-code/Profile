import React from 'react';
import { ArrowUpRight, BookOpen, Layers, Sparkles, FileText, Palette } from 'lucide-react';
import { ProjectItem, PersonalBrandingData } from '../data/brandingData';

interface ProjectSectionProps {
  data: PersonalBrandingData;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ data, onSelectProject }) => {
  const getIconForCategory = (category: string) => {
    if (category.includes('READING')) return <BookOpen className="w-4 h-4 text-[#784D2B]" />;
    if (category.includes('BLOG')) return <FileText className="w-4 h-4 text-[#784D2B]" />;
    if (category.includes('EDUCATION')) return <Layers className="w-4 h-4 text-[#784D2B]" />;
    return <Palette className="w-4 h-4 text-[#784D2B]" />;
  };

  return (
    <section id="projects" className="py-24 bg-[#F5F1E8]/70 border-t border-[#EAE3D6] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-editorial tracking-widest text-[#784D2B] uppercase block mb-2">
            03 / Works & Creative Pursuits
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2D2926] tracking-tight">
            MY PROJECT – 나의 프로젝트
          </h2>
          <div className="w-12 h-0.5 bg-[#784D2B]/40 mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base text-[#6B655F]">
            책과 일상, 교육과 신앙, 디자인을 통해 나의 아이디어와 온기를 구체적인 결과물로 빚어냅니다.
          </p>
        </div>

        {/* 4 Projects Grid with Editorial Asymmetry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {data.projects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-[#EAE3D6] overflow-hidden flex flex-col justify-between shadow-[0_4px_24px_rgba(45,41,38,0.03)] hover:shadow-[0_12px_32px_rgba(45,41,38,0.06)] hover:border-[#D6CCC0] transition-all group"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative overflow-hidden bg-[#EBE4D8] h-56 sm:h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                  {/* Editorial Tag */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded text-xs font-editorial tracking-wider text-[#784D2B] border border-[#EAE3D6] shadow-sm flex items-center gap-1.5">
                    {getIconForCategory(project.category)}
                    <span>{project.englishTitle}</span>
                  </div>

                  <span className="absolute bottom-3 right-4 text-xs font-editorial text-white/90 drop-shadow">
                    Project 0{idx + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs text-[#8C847B] font-editorial tracking-wider uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2926] group-hover:text-[#784D2B] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#784D2B] font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-[#5F5953] leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Key Features Bullet points */}
                  <div className="pt-2">
                    <span className="text-xs font-medium text-[#2D2926] block mb-2">
                      주요 내용 & 특징
                    </span>
                    <ul className="space-y-1.5">
                      {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="text-xs text-[#6B655F] flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#784D2B]" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 sm:p-8 pt-0">
                <div className="pt-4 border-t border-[#F0ECE4] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-[#8C847B] bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EAE3D6]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#784D2B] hover:text-[#523319] hover:underline underline-offset-4 transition-colors"
                  >
                    <span>상세 보기</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Highlight Box: "오늘의 책상" Special Reading Quote Bookmark */}
        <div className="mt-16 bg-[#FAF8F5] rounded-2xl border border-[#E5DFD4] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_4px_24px_rgba(45,41,38,0.03)]">
          <div className="space-y-2 max-w-xl text-left">
            <div className="flex items-center gap-2 text-xs font-editorial text-[#784D2B] tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Project Spotlight: 오늘의 책상</span>
            </div>
            <h4 className="text-lg sm:text-xl font-medium text-[#2D2926]">
              "책 속 한 줄의 문장이 마음을 맑히고, 오늘의 나를 다시 세웁니다."
            </h4>
            <p className="text-xs sm:text-sm text-[#6B655F] leading-relaxed">
              매일 마주하는 책상 위에서 수집한 주옥같은 문장들과 사색을 독서 콘텐츠로 차곡차곡 정리하고 있습니다.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onSelectProject(data.projects[0])}
            className="shrink-0 px-5 py-2.5 text-xs font-medium text-white bg-[#784D2B] hover:bg-[#633E21] rounded-md transition-all shadow-sm"
          >
            오늘의 책상 기획안 살펴보기
          </button>
        </div>
      </div>
    </section>
  );
};
