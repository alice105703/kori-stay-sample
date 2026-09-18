import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { STAY_INFO } from '../data/stayInfo';
import KoriStayLogo from './KoriStayLogo';

export default function Footer() {
  return (
    <footer className="bg-[#1C1510] text-[#D8C7B5] pt-16 pb-24 md:pb-16 border-t border-[#382B22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#33261D]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="mb-2">
              <KoriStayLogo variant="horizontal" theme="dark" />
            </div>

            <p className="text-xs text-[#A99786] leading-relaxed font-light max-w-sm">
              {STAY_INFO.subSlogan}
            </p>

            <div className="p-3 bg-[#241A14] rounded-xl border border-[#3D2C20] text-xs text-[#9E8A78] max-w-sm">
              <span className="text-[#E7C69F] font-semibold block mb-0.5">안내 말씀</span>
              본 웹사이트는 고객들을 위한 <strong>샘플용 펜션 예약 홈페이지</strong>이며, 기재된 주소 및 전화번호는 예시용 가상 정보입니다.
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#E7C69F] uppercase tracking-wider">
              빠른 메뉴
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">
                  객실 안내 (솔바람·물소리·달마루·숲마당·별하늘)
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">
                  부대시설 (개별 바비큐·불멍·히노끼)
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  오시는 길 & 교통편 안내
                </a>
              </li>
              <li>
                <a href="#guide" className="hover:text-white transition-colors">
                  이용안내 & 환불 규정
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="https://booking.naver.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E7C69F] hover:text-white transition-colors inline-flex items-center gap-1.5 font-medium"
                >
                  <span>예약하기 (실시간 예약 바로가기)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#B37D4E]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Bank Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-[#E7C69F] uppercase tracking-wider">
              고객센터 & 위치 정보
            </h4>
            <div className="space-y-2 text-xs text-[#A89684]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B37D4E]" />
                <span>대표 전화: {STAY_INFO.phone} (09:00 ~ 21:00)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B37D4E]" />
                <span>현장 관리소: {STAY_INFO.mobilePhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B37D4E]" />
                <span>{STAY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B37D4E]" />
                <span>{STAY_INFO.email}</span>
              </div>
              <div className="pt-1 text-[#8F7D6D]">
                입금 계좌: {STAY_INFO.bankAccount.bank} {STAY_INFO.bankAccount.accountNumber} ({STAY_INFO.bankAccount.holder})
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#786759]">
          <p>
            © 2026 {STAY_INFO.name} ({STAY_INFO.englishName}). All Rights Reserved. Sample Website for Demo.
          </p>
          <div className="flex items-center gap-4">
            <span>사업자등록번호: 214-88-01928 (샘플)</span>
            <span>통신판매업신고: 제 2026-강원홍천-0042호</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
