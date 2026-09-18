import { useState } from 'react';
import { FAQ_LIST, STAY_INFO } from '../data/stayInfo';
import { ChevronDown, HelpCircle, FileText, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function NoticeAndFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="guide" className="py-20 bg-[#F4EFE6] border-t border-[#E7DDD0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5D7C5] text-[#7A5A40] text-xs font-semibold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>NOTICE & FAQ</span>
          </div>
          <h2 className="font-serif-kr text-3xl sm:text-4xl text-[#2B221A] font-semibold mb-4 tracking-tight">
            이용 안내 및 자주 묻는 질문
          </h2>
          <p className="text-[#6D5D4E] text-sm sm:text-base font-light leading-relaxed">
            코리스테이를 더욱 편안하고 즐겁게 이용하실 수 있도록 입퇴실 안내와 환불 규정을 정리해 드립니다.
          </p>
        </div>

        {/* Check-in / Out & Rules Summary Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-[#FDFBF7] p-5 rounded-2xl border border-[#E7DDD0] shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8C6D52] uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-4 h-4 text-[#9C6644]" />
              <span>입/퇴실 시간</span>
            </div>
            <p className="font-serif-kr text-xl font-bold text-[#2B2119] mb-1">
              입실 {STAY_INFO.hours.checkIn} · 퇴실 {STAY_INFO.hours.checkOut}
            </p>
            <p className="text-xs text-[#7A695A] leading-relaxed">
              당일 오전 11시에 도어락 비밀번호가 포함된 모바일 체크인 안내 문자가 발송됩니다.
            </p>
          </div>

          <div className="bg-[#FDFBF7] p-5 rounded-2xl border border-[#E7DDD0] shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8C6D52] uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-4 h-4 text-[#9C6644]" />
              <span>매너 타임 안내</span>
            </div>
            <p className="font-serif-kr text-xl font-bold text-[#2B2119] mb-1">
              밤 22:00 ~ 아침 07:00
            </p>
            <p className="text-xs text-[#7A695A] leading-relaxed">
              자연 속 평온한 쉼을 위해 야외 테라스 및 정원에서의 고성방가는 자제 부탁드립니다.
            </p>
          </div>

          <div className="bg-[#FDFBF7] p-5 rounded-2xl border border-[#E7DDD0] shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8C6D52] uppercase tracking-wider mb-2">
              <AlertTriangle className="w-4 h-4 text-[#B37D4E]" />
              <span>안전 및 유의사항</span>
            </div>
            <p className="font-serif-kr text-base font-bold text-[#2B2119] mb-1">
              실내 전 구역 절대 금연
            </p>
            <p className="text-xs text-[#7A695A] leading-relaxed">
              화재 위험 물질 반입 금지 및 반려동물 입실은 제한되오니 양해 부탁드립니다.
            </p>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FDFBF7] rounded-xl border border-[#E7DDD0] overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF6EF] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded bg-[#E8DDD0] text-[#715A46] text-[11px] font-semibold">
                      {faq.category}
                    </span>
                    <span className="font-serif-kr font-bold text-sm sm:text-base text-[#2B2119]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8C6D52] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#544336] leading-relaxed font-light border-t border-[#F0E8DC] bg-[#FAF7F1]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Refund Policy Table Card */}
        <div className="mt-12 bg-[#FDFBF7] rounded-2xl border border-[#E7DDD0] p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-4 h-4 text-[#9C6644]" />
            <h3 className="font-serif-kr text-base font-bold text-[#2B2119]">
              예약 취소 및 환불 기준 안내
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-[#F4ECE0] text-[#634E3D] border-b border-[#E0D2C2]">
                  <th className="p-2.5 font-semibold">취소 요청 시점</th>
                  <th className="p-2.5 font-semibold">환불 비율</th>
                  <th className="p-2.5 font-semibold">비고</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFE7DC] text-[#473A30]">
                <tr>
                  <td className="p-2.5">이용일 10일 전까지</td>
                  <td className="p-2.5 font-bold text-[#2F6B38]">100% 전액 환불</td>
                  <td className="p-2.5 text-[#857466]">취소 수수료 없음</td>
                </tr>
                <tr>
                  <td className="p-2.5">이용일 7일 전까지</td>
                  <td className="p-2.5 font-bold">90% 환불</td>
                  <td className="p-2.5 text-[#857466]">10% 위약금</td>
                </tr>
                <tr>
                  <td className="p-2.5">이용일 5일 전까지</td>
                  <td className="p-2.5 font-bold">70% 환불</td>
                  <td className="p-2.5 text-[#857466]">30% 위약금</td>
                </tr>
                <tr>
                  <td className="p-2.5">이용일 3일 전까지</td>
                  <td className="p-2.5 font-bold text-amber-700">50% 환불</td>
                  <td className="p-2.5 text-[#857466]">50% 위약금</td>
                </tr>
                <tr>
                  <td className="p-2.5">이용일 1일 전까지</td>
                  <td className="p-2.5 font-bold text-rose-700">30% 환불</td>
                  <td className="p-2.5 text-[#857466]">70% 위약금</td>
                </tr>
                <tr>
                  <td className="p-2.5">이용 당일 취소 및 노쇼</td>
                  <td className="p-2.5 font-bold text-rose-800">환불 불가</td>
                  <td className="p-2.5 text-[#857466]">환불 불가</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
