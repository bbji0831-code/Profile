import React, { useState } from 'react';
import { X, Save, RotateCcw, Copy, Check, SlidersHorizontal } from 'lucide-react';
import { PersonalBrandingData } from '../../data/brandingData';

interface DataCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PersonalBrandingData;
  onSaveData: (newData: PersonalBrandingData) => void;
  onResetData: () => void;
}

export const DataCustomizerModal: React.FC<DataCustomizerModalProps> = ({
  isOpen,
  onClose,
  data,
  onSaveData,
  onResetData,
}) => {
  const [formData, setFormData] = useState<PersonalBrandingData>(data);
  const [copiedJson, setCopiedJson] = useState(false);
  const [saveToast, setSaveToast] = useState(false);

  if (!isOpen) return null;

  const handleOwnerChange = (field: keyof PersonalBrandingData['owner'], val: string) => {
    setFormData({
      ...formData,
      owner: {
        ...formData.owner,
        [field]: val,
      },
    });
  };

  const handleExperiencePeriodChange = (id: string, newPeriod: string) => {
    setFormData({
      ...formData,
      experiences: formData.experiences.map((exp) =>
        exp.id === id ? { ...exp, period: newPeriod } : exp
      ),
    });
  };

  const handleSave = () => {
    onSaveData(formData);
    setSaveToast(true);
    setTimeout(() => {
      setSaveToast(false);
      onClose();
    }, 900);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl h-full bg-[#FAF8F5] text-[#2D2926] shadow-2xl border-l border-[#E5DFD4] flex flex-col animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 px-6 border-b border-[#EAE3D6] bg-white">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#784D2B]" />
            <h3 className="text-base font-semibold text-[#2D2926]">
              내 정보 & 링크 직접 수정하기
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#8C847B] hover:text-[#2D2926] rounded-md"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="p-3.5 bg-[#F2EDE4] rounded-lg text-xs text-[#5F5953] leading-relaxed">
            💡 실제 이메일, 블로그 및 인스타그램 주소, 그리고 각 활동 기간을 자유롭게 설정할 수 있습니다. 저장하면 화면에 즉시 반영됩니다.
          </div>

          {/* 1. Basic Owner Info */}
          <div className="space-y-4">
            <span className="text-xs font-semibold text-[#784D2B] uppercase tracking-wider block border-b border-[#EAE3D6] pb-1">
              01. 기본 인적 사항
            </span>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-[#463F38] mb-1">
                  이름 / 브랜딩 명
                </label>
                <input
                  type="text"
                  value={formData.owner.name}
                  onChange={(e) => handleOwnerChange('name', e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#DDD5C7] rounded-md focus:outline-none focus:border-[#784D2B]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#463F38] mb-1">
                  한 줄 직무 / 역할
                </label>
                <input
                  type="text"
                  value={formData.owner.role}
                  onChange={(e) => handleOwnerChange('role', e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#DDD5C7] rounded-md focus:outline-none focus:border-[#784D2B]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#463F38] mb-1">
                메인 슬로건
              </label>
              <input
                type="text"
                value={formData.owner.tagline}
                onChange={(e) => handleOwnerChange('tagline', e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#DDD5C7] rounded-md focus:outline-none focus:border-[#784D2B]"
              />
            </div>
          </div>

          {/* 2. Contact & SNS */}
          <div className="space-y-4">
            <span className="text-xs font-semibold text-[#784D2B] uppercase tracking-wider block border-b border-[#EAE3D6] pb-1">
              02. 연락처 & SNS 링크
            </span>

            <div>
              <label className="block text-xs font-medium text-[#463F38] mb-1">
                실제 이메일 주소
              </label>
              <input
                type="email"
                value={formData.owner.email}
                onChange={(e) => handleOwnerChange('email', e.target.value)}
                placeholder="예: yourname@gmail.com"
                className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#DDD5C7] rounded-md focus:outline-none focus:border-[#784D2B]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#463F38] mb-1">
                블로그 링크 URL (선택)
              </label>
              <input
                type="url"
                value={formData.owner.blogUrl}
                onChange={(e) => handleOwnerChange('blogUrl', e.target.value)}
                placeholder="예: https://blog.naver.com/your_id"
                className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#DDD5C7] rounded-md focus:outline-none focus:border-[#784D2B]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#463F38] mb-1">
                인스타그램 링크 URL (선택)
              </label>
              <input
                type="url"
                value={formData.owner.instagramUrl}
                onChange={(e) => handleOwnerChange('instagramUrl', e.target.value)}
                placeholder="예: https://instagram.com/your_handle"
                className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#DDD5C7] rounded-md focus:outline-none focus:border-[#784D2B]"
              />
            </div>
          </div>

          {/* 3. Experience Periods */}
          <div className="space-y-4">
            <span className="text-xs font-semibold text-[#784D2B] uppercase tracking-wider block border-b border-[#EAE3D6] pb-1">
              03. 경험별 실제 활동 기간 입력
            </span>

            {formData.experiences.map((exp) => (
              <div key={exp.id} className="p-3 bg-white rounded-lg border border-[#EAE3D6] space-y-1">
                <span className="text-xs font-medium text-[#2D2926] block">
                  {exp.title}
                </span>
                <input
                  type="text"
                  value={exp.period}
                  onChange={(e) => handleExperiencePeriodChange(exp.id, e.target.value)}
                  placeholder="예: 2023.03 - 2024.02"
                  className="w-full px-2.5 py-1.5 text-xs bg-[#FAF8F5] border border-[#DDD5C7] rounded focus:outline-none focus:border-[#784D2B]"
                />
              </div>
            ))}
          </div>

          {/* Backup / Export */}
          <div className="pt-2 border-t border-[#EAE3D6] flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={handleCopyJson}
              className="flex items-center gap-1.5 text-[#6B655F] hover:text-[#2D2926]"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedJson ? '복사 완료!' : '데이터 JSON 복사'}</span>
            </button>

            <button
              type="button"
              onClick={onResetData}
              className="flex items-center gap-1.5 text-[#B24C4C] hover:text-[#8C3232]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>초기 상태로 되돌리기</span>
            </button>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 px-6 border-t border-[#EAE3D6] bg-white flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#6B655F] hover:bg-[#F2ECE1] rounded-md transition-colors"
          >
            닫기
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="flex items-center gap-2 px-5 py-2 text-xs font-medium text-white bg-[#784D2B] hover:bg-[#633E21] rounded-md transition-colors shadow-sm"
          >
            {saveToast ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
            <span>{saveToast ? '반영되었습니다!' : '변경사항 저장'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
