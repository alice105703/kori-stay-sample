import { STAY_INFO } from '../data/stayInfo';
import { MapPin, Phone, Car, Navigation, Copy, Check, Compass, Trees } from 'lucide-react';
import { useState } from 'react';

export default function LocationAndContact() {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(STAY_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section id="location" className="py-20 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5D7C5] text-[#7A5A40] text-xs font-semibold tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>LOCATION & ACCESS</span>
          </div>
          <h2 className="font-serif-kr text-3xl sm:text-4xl text-[#2B221A] font-semibold mb-4 tracking-tight">
            오시는 길 안내
          </h2>
          <p className="text-[#6D5D4E] text-sm sm:text-base font-light leading-relaxed">
            서울에서 60분, 피톤치드가 가득한 강원도 홍천 잣나무 숲길에 코리스테이가 위치해 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Map Preview & Address Box */}
          <div className="lg:col-span-7 bg-[#FDFBF7] rounded-2xl border border-[#E7DDD0] p-6 shadow-sm space-y-5">
            {/* Visual Stylized Map Box */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-[#2D382E] border border-[#D5C6B5] flex items-center justify-center text-white">
              {/* Map stylized background */}
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                alt="위치 지도 그래픽"
                className="w-full h-full object-cover opacity-60 filter contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201712]/90 via-[#2E241C]/40 to-black/30" />

              {/* Pin Marker */}
              <div className="absolute flex flex-col items-center animate-bounce duration-1000">
                <div className="px-3 py-1.5 rounded-xl bg-[#9C6644] text-white text-xs font-bold shadow-xl border border-white/30 flex items-center gap-1">
                  <Trees className="w-3.5 h-3.5" />
                  <span>코리스테이 본관</span>
                </div>
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#9C6644]" />
              </div>

              {/* Map Overlay Info */}
              <div className="absolute bottom-3 left-3 right-3 bg-[#1C1510]/85 backdrop-blur-md p-3 rounded-xl border border-[#4F3F32] flex items-center justify-between text-xs">
                <span className="text-[#E7DDD0] truncate">
                  {STAY_INFO.address}
                </span>
                <span className="text-[#E7C69F] font-semibold shrink-0 ml-2">
                  무료 주차 10대 가능
                </span>
              </div>
            </div>

            {/* Address & Copy Action */}
            <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#E7DDD0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] text-[#8C7664] font-semibold uppercase tracking-wider block">
                  도로명 주소
                </span>
                <span className="font-serif-kr text-sm sm:text-base font-bold text-[#2B2119]">
                  {STAY_INFO.address}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={copyAddress}
                  className="px-3.5 py-2 rounded-xl bg-white border border-[#C5B39F] text-xs font-semibold text-[#524133] hover:bg-[#FAF6EF] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {copiedAddress ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 text-[#9C6644]" />}
                  <span>{copiedAddress ? '주소 복사됨' : '주소 복사'}</span>
                </button>
              </div>
            </div>

            {/* Navigation App Links (Simulated) */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-[#7A695A] font-medium mr-1">내비게이션 바로가기:</span>
              <a
                href={`https://map.kakao.com/?q=${encodeURIComponent(STAY_INFO.address)}`}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#FAE100] text-[#3C1E1E] font-bold hover:opacity-90 flex items-center gap-1 transition-opacity"
              >
                <span>카카오맵</span>
              </a>
              <a
                href={`https://map.naver.com/v5/search/${encodeURIComponent(STAY_INFO.address)}`}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#03C75A] text-white font-bold hover:opacity-90 flex items-center gap-1 transition-opacity"
              >
                <span>네이버 지도</span>
              </a>
              <a
                href={`https://tmap.co.kr`}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#111111] text-white font-bold hover:opacity-90 flex items-center gap-1 transition-opacity"
              >
                <span>티맵</span>
              </a>
            </div>
          </div>

          {/* Right: Directions & Nearby Tourist Spots */}
          <div className="lg:col-span-5 space-y-6">
            {/* Driving & Transit Info */}
            <div className="bg-[#FDFBF7] rounded-2xl border border-[#E7DDD0] p-6 shadow-sm space-y-4">
              <h3 className="font-serif-kr text-lg font-bold text-[#2B2119] flex items-center gap-2">
                <Car className="w-5 h-5 text-[#9C6644]" />
                <span>교통편 안내</span>
              </h3>

              <div className="space-y-3 text-xs text-[#544336] leading-relaxed">
                <div className="p-3 bg-[#F8F5EE] rounded-xl border border-[#E7DDD0]">
                  <p className="font-bold text-[#2B2119] mb-1">🚗 자가용 이용 시</p>
                  <p>{STAY_INFO.traffic.car}</p>
                </div>

                <div className="p-3 bg-[#F8F5EE] rounded-xl border border-[#E7DDD0]">
                  <p className="font-bold text-[#2B2119] mb-1">🚆 대중교통 & 픽업 서비스</p>
                  <p>{STAY_INFO.traffic.transit}</p>
                </div>
              </div>

              {/* Direct Call Button */}
              <div className="pt-2">
                <a
                  href={`tel:${STAY_INFO.phone}`}
                  className="w-full py-3 rounded-xl bg-[#2B2119] hover:bg-[#1E1712] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-[#E5B887]" />
                  <span>예약 및 길안내 전화: {STAY_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
