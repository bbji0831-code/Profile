import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  caption: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  imageUrl,
  title,
  caption,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#1F1C1A] text-white rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between p-4 px-6 border-b border-white/10 bg-black/30">
          <div className="flex items-center gap-2">
            <ZoomIn className="w-4 h-4 text-[#C8BFB2]" />
            <h3 className="text-sm font-medium tracking-wide text-white/90 truncate">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image viewport */}
        <div className="relative max-h-[70vh] flex items-center justify-center bg-black/50 p-2 sm:p-4 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            referrerPolicy="no-referrer"
            className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg"
          />
        </div>

        {/* Caption bar */}
        <div className="p-4 sm:p-6 bg-[#1F1C1A] border-t border-white/10">
          <p className="text-xs sm:text-sm text-[#D8D1C7] leading-relaxed">
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
};
