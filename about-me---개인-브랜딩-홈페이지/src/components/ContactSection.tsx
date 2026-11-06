import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Globe, Instagram, MessageSquare, ArrowUpRight, SlidersHorizontal } from 'lucide-react';
import { PersonalBrandingData } from '../data/brandingData';

interface ContactSectionProps {
  data: PersonalBrandingData;
  onOpenCustomizer: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ data, onOpenCustomizer }) => {
  const [copied, setCopied] = useState(false);
  
  // Contact form state
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleCopyEmail = () => {
    if (data.owner.email) {
      navigator.clipboard.writeText(data.owner.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setSenderName('');
      setSenderEmail('');
      setMessage('');
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-editorial tracking-widest text-[#784D2B] uppercase block mb-2">
            06 / Connect & Conversation
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2D2926] tracking-tight">
            CONTACT – 함께 나누는 이야기
          </h2>
          <div className="w-12 h-0.5 bg-[#784D2B]/40 mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base text-[#6B655F]">
            작은 안부나 협업 제안, 교육과 독서에 관한 따뜻한 대화는 언제나 환영합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & SNS Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-editorial uppercase tracking-wider text-[#784D2B]">
                Warm Greeting
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2926]">
                "소중한 인연을 기다립니다."
              </h3>
              <p className="text-sm text-[#5F5953] leading-relaxed font-korean">
                누군가와 마음을 터놓고 배우며 함께 걸어가는 일은 언제나 큰 설렘입니다. 아동 교육 프로그램, 독서 모임, 교육 자료 기획, 혹은 삶의 정갈한 이야기까지 편안하게 나누어 주세요.
              </p>
            </div>

            {/* Email Card with Copy button */}
            <div className="p-6 rounded-xl bg-white border border-[#EAE3D6] space-y-3 shadow-xs">
              <span className="text-xs font-editorial uppercase text-[#8C847B] block">
                Primary Contact Email
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${data.owner.email}`}
                  className="text-base sm:text-lg font-medium text-[#2D2926] hover:text-[#784D2B] transition-colors break-all"
                >
                  {data.owner.email || '이메일을 설정해주세요'}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 text-[#784D2B] bg-[#F5F1E8] hover:bg-[#EAE3D6] rounded-md transition-colors shrink-0"
                  title="이메일 복사하기"
                >
                  {copied ? <Check className="w-4 h-4 text-[#5B6E52]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <span className="text-xs text-[#5B6E52] block">
                  이메일 주소가 클립보드에 복사되었습니다.
                </span>
              )}
            </div>

            {/* SNS Channels Area */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-editorial uppercase text-[#8C847B]">
                  Online Spaces & Social
                </span>
                <button
                  type="button"
                  onClick={onOpenCustomizer}
                  className="text-xs text-[#784D2B] hover:underline flex items-center gap-1"
                >
                  <SlidersHorizontal className="w-3 h-3" />
                  <span>SNS 주소 설정</span>
                </button>
              </div>

              <div className="space-y-2">
                {/* Blog */}
                {data.owner.blogUrl ? (
                  <a
                    href={data.owner.blogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 bg-white rounded-lg border border-[#EAE3D6] hover:border-[#784D2B] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-[#784D2B]" />
                      <span className="text-sm font-medium text-[#2D2926]">블로그 (Blog)</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#8C847B] group-hover:text-[#784D2B]" />
                  </a>
                ) : (
                  <div className="flex items-center justify-between p-3.5 bg-[#FAF8F5] rounded-lg border border-dashed border-[#DDD5C7] text-xs text-[#8C847B]">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-[#A8A198]" />
                      <span>블로그: 설정 버튼을 눌러 실제 주소를 연결할 수 있습니다.</span>
                    </div>
                  </div>
                )}

                {/* Instagram */}
                {data.owner.instagramUrl ? (
                  <a
                    href={data.owner.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 bg-white rounded-lg border border-[#EAE3D6] hover:border-[#784D2B] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Instagram className="w-4 h-4 text-[#784D2B]" />
                      <span className="text-sm font-medium text-[#2D2926]">인스타그램 (Instagram)</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#8C847B] group-hover:text-[#784D2B]" />
                  </a>
                ) : (
                  <div className="flex items-center justify-between p-3.5 bg-[#FAF8F5] rounded-lg border border-dashed border-[#DDD5C7] text-xs text-[#8C847B]">
                    <div className="flex items-center gap-2">
                      <Instagram className="w-4 h-4 text-[#A8A198]" />
                      <span>인스타그램: 필요 시 나의 SNS 계정을 등록하세요.</span>
                    </div>
                  </div>
                )}

                {/* Other SNS */}
                {data.owner.otherSnsUrl ? (
                  <a
                    href={data.owner.otherSnsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 bg-white rounded-lg border border-[#EAE3D6] hover:border-[#784D2B] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-4 h-4 text-[#784D2B]" />
                      <span className="text-sm font-medium text-[#2D2926]">기타 SNS 및 포트폴리오</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#8C847B] group-hover:text-[#784D2B]" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#EAE3D6] p-8 sm:p-10 shadow-[0_4px_24px_rgba(45,41,38,0.03)] space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-editorial uppercase text-[#784D2B]">
                  Send a Message
                </span>
                <h3 className="text-xl font-semibold text-[#2D2926]">
                  메시지 남기기
                </h3>
                <p className="text-xs text-[#8C847B]">
                  성함과 연락처를 남겨주시면 정성껏 확인 후 답변드리겠습니다.
                </p>
              </div>

              {submitSuccess ? (
                <div className="p-8 text-center bg-[#F7F4EE] rounded-xl border border-[#E2D9CC] space-y-3 animate-in fade-in duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#5B6E52] text-white flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-[#2D2926]">
                    메시지가 성공적으로 전달되었습니다
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5F5953] max-w-sm mx-auto leading-relaxed">
                    따뜻한 관심에 감사드립니다. 남겨주신 내용 검토 후 기재해 주신 연락처로 답장드리겠습니다.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-2 text-xs font-medium text-[#784D2B] underline"
                  >
                    새 메시지 작성하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#463F38] mb-1">
                        성함 또는 닉네임 *
                      </label>
                      <input
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="홍길동"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF8F5] border border-[#DDD5C7] rounded-md focus:outline-none focus:border-[#784D2B] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#463F38] mb-1">
                        회신받으실 이메일 주소 *
                      </label>
                      <input
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="example@domain.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF8F5] border border-[#DDD5C7] rounded-md focus:outline-none focus:border-[#784D2B] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#463F38] mb-1">
                      메시지 내용 *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="이야기 나누고 싶으신 주제나 제안, 따뜻한 응원의 말을 남겨주세요."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF8F5] border border-[#DDD5C7] rounded-md focus:outline-none focus:border-[#784D2B] focus:bg-white transition-colors leading-relaxed"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-[#8C847B]">
                      * 입력하신 개인 정보는 문의 회신 목적으로만 사용됩니다.
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#784D2B] hover:bg-[#633E21] rounded-md transition-all shadow-sm active:translate-y-0.5 disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? '전송 중...' : '메시지 보내기'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
