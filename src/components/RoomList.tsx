import { useState } from 'react';
import { Room } from '../types';
import { Users, Maximize2, Sparkles, Check, Info, ExternalLink } from 'lucide-react';
import RoomImageSlider from './RoomImageSlider';

interface RoomListProps {
  rooms: Room[];
  onSelectRoomForDetail: (room: Room) => void;
}

export default function RoomList({
  rooms,
  onSelectRoomForDetail,
}: RoomListProps) {
  const [filter, setFilter] = useState<'all' | 'couple' | 'family'>('all');

  const filteredRooms = rooms.filter((room) => {
    if (filter === 'couple') return room.capacityMax <= 3;
    if (filter === 'family') return room.capacityMax >= 4;
    return true;
  });

  return (
    <section id="rooms" className="py-20 bg-[#F4EFE6] border-t border-b border-[#E7DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5D7C5] text-[#7A5A40] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>프라이빗 5대 독채 라인업</span>
          </div>
          <h2 className="font-serif-kr text-3xl sm:text-4xl text-[#2B221A] font-semibold mb-4 tracking-tight">
            자연과 온기를 품은 코리스테이 객실
          </h2>
          <p className="text-[#6D5D4E] text-sm sm:text-base font-light leading-relaxed">
            솔바람(12만원~)부터 별하늘(38만원)까지, 자연의 테마와 프라이빗한 휴식을 선사하는 5개의 독채 공간입니다.
            객실 상세 정보를 둘러보시고 '예약하기'를 통해 간편하게 실시간 예약하세요.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 inline-flex p-1 rounded-xl bg-[#E7DCCE] shadow-inner gap-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#9C6644] text-white shadow-sm'
                  : 'text-[#5C4A3C] hover:text-[#2B221A]'
              }`}
            >
              전체 객실 (5개)
            </button>
            <button
              onClick={() => setFilter('couple')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                filter === 'couple'
                  ? 'bg-[#9C6644] text-white shadow-sm'
                  : 'text-[#5C4A3C] hover:text-[#2B221A]'
              }`}
            >
              2인 프라이빗 힐링 (솔바람·물소리)
            </button>
            <button
              onClick={() => setFilter('family')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                filter === 'family'
                  ? 'bg-[#9C6644] text-white shadow-sm'
                  : 'text-[#5C4A3C] hover:text-[#2B221A]'
              }`}
            >
              가족 & 스위트 (달마루·숲마당·별하늘)
            </button>
          </div>
        </div>

        {/* Room Cards Stack */}
        <div className="space-y-12">
          {filteredRooms.map((room) => {
            return (
              <div
                key={room.id}
                id={`room-card-${room.id}`}
                className="bg-[#FDFBF7] rounded-3xl overflow-hidden shadow-xl border border-[#E7DDD0] grid grid-cols-1 lg:grid-cols-12 transition-all duration-300 hover:shadow-2xl hover:border-[#CBB7A2] lg:h-[410px]"
              >
                {/* Left: Interactive Dynamic Image Slider */}
                <div className="lg:col-span-6 relative aspect-16/10 sm:aspect-16/9 lg:aspect-auto h-[290px] sm:h-[350px] lg:h-full bg-[#1F1712]">
                  <RoomImageSlider
                    images={room.images && room.images.length > 0 ? room.images : [room.mainImage]}
                    roomName={room.name}
                    sizePyeong={room.sizePyeong}
                  />
                </div>

                {/* Right: Room Details & Booking CTA */}
                <div className="lg:col-span-6 p-6 sm:p-7 flex flex-col justify-between h-full">
                  <div>
                    {/* Title & Subtitle */}
                    <div className="flex items-baseline justify-between gap-3 pb-3 border-b border-[#EADFCF]">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-serif-kr text-2xl sm:text-3xl font-bold text-[#2C2119] leading-tight">
                          {room.name}
                        </h3>
                        <span className="text-xs text-[#8C6D52] font-medium block mt-1 truncate">
                          {room.tagline}
                        </span>
                      </div>

                      {/* Specs Badge */}
                      <div className="flex items-center gap-3 text-xs text-[#6A5747] shrink-0">
                        <span className="flex items-center gap-1 whitespace-nowrap">
                          <Users className="w-3.5 h-3.5 text-[#9C6644]" />
                          기준 {room.capacityStandard}인 / 최대 {room.capacityMax}인
                        </span>
                        <span className="flex items-center gap-1 whitespace-nowrap">
                          <Maximize2 className="w-3.5 h-3.5 text-[#9C6644]" />
                          {room.floor}
                        </span>
                      </div>
                    </div>

                    {/* Room Description Preview (Fixed 2 lines height across all cards) */}
                    <p className="text-sm text-[#524438] leading-relaxed my-3.5 line-clamp-2 h-[40px] overflow-hidden">
                      {room.description}
                    </p>

                    {/* Highlight Features (Uniform 4 items grid with consistent height) */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-[#8C6D52] uppercase tracking-wider mb-2">
                        객실 시그니처 포인트
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {room.highlightFeatures.slice(0, 4).map((feat, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs text-[#413429] bg-[#F4EFE6] px-2.5 py-1.5 rounded-lg border border-[#E7DDD0] min-w-0 h-[34px]"
                          >
                            <Check className="w-3.5 h-3.5 text-[#9C6644] shrink-0" />
                            <span className="truncate min-w-0">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Pricing & CTA Buttons */}
                  <div className="pt-3.5 border-t border-[#EADFCF] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    {/* Pricing */}
                    <div>
                      <span className="text-[11px] text-[#8A7868] uppercase font-medium block">
                        1박 기준 요금
                      </span>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="font-serif-kr text-2xl font-bold text-[#8C4A27]">
                          {room.priceWeekday.toLocaleString()}원~
                        </span>
                        <span className="text-xs text-[#8A7868]">
                          (주말 {room.priceWeekend.toLocaleString()}원)
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2.5">
                      <button
                        onClick={() => onSelectRoomForDetail(room)}
                        className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-[#C5B39F] text-xs font-semibold text-[#544234] hover:bg-[#EFE7DC] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Info className="w-3.5 h-3.5 text-[#9C6644]" />
                        <span>상세보기</span>
                      </button>

                      {/* Booking Link */}
                      <a
                        id={`btn-book-${room.id}`}
                        href="https://booking.naver.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#9C6644] hover:bg-[#855333] text-white text-xs font-semibold shadow-md shadow-[#9C6644]/25 hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                      >
                        <span>예약하기</span>
                        <ExternalLink className="w-3 h-3 text-white/80" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
