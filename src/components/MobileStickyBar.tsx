import { Phone, ExternalLink } from 'lucide-react';
import { STAY_INFO } from '../data/stayInfo';

export default function MobileStickyBar() {
  return (
    <div
      id="mobile-sticky-booking-bar"
      className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-[#241A14]/95 backdrop-blur-md border-t border-[#4A392C] px-4 py-3 shadow-[0_-8px_20px_rgba(0,0,0,0.35)] flex items-center justify-between gap-3 safe-area-bottom"
    >
      {/* Price & Room Info */}
      <div className="flex-1 min-w-0">
        <span className="text-[10px] text-[#C5B4A2] block font-light">
          코리스테이 5개 독채
        </span>
        <div className="flex items-baseline gap-1">
          <span className="text-xs text-[#E7C69F] font-medium">최저</span>
          <span className="font-serif-kr text-base font-bold text-white tracking-tight">
            120,000원~
          </span>
          <span className="text-[10px] text-[#A08F7E]">/ 1박</span>
        </div>
      </div>

      {/* Quick Phone button */}
      <a
        href={`tel:${STAY_INFO.phone}`}
        className="p-2.5 rounded-xl bg-[#3D2C20] border border-[#5D4635] text-[#E5B887] hover:bg-[#4E392A] transition-colors shrink-0"
        aria-label="전화 문의"
      >
        <Phone className="w-4 h-4" />
      </a>

      {/* Primary Action Button -> Booking */}
      <a
        id="mobile-book-btn"
        href="https://booking.naver.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 max-w-[170px] py-2.5 px-4 rounded-xl bg-[#9C6644] hover:bg-[#855333] text-white text-xs font-semibold shadow-lg shadow-[#9C6644]/35 flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer"
      >
        <span>예약하기</span>
        <ExternalLink className="w-3.5 h-3.5 text-white/80" />
      </a>
    </div>
  );
}
