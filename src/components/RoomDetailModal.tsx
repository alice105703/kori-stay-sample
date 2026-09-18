import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Room } from '../types';
import { X, Users, Maximize2, Bed, Check, Sparkles, ChevronLeft, ChevronRight, ExternalLink, ShieldAlert } from 'lucide-react';
import { STAY_INFO } from '../data/stayInfo';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
}

export default function RoomDetailModal({ room, onClose }: RoomDetailModalProps) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartXRef = useRef<number | null>(null);

  const imagesCount = room?.images?.length || 0;

  // Keyboard navigation
  useEffect(() => {
    if (!room) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setDirection(1);
        setActivePhotoIdx((prev) => (prev + 1) % imagesCount);
      } else if (e.key === 'ArrowLeft') {
        setDirection(-1);
        setActivePhotoIdx((prev) => (prev - 1 + imagesCount) % imagesCount);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [room, imagesCount, onClose]);

  if (!room) return null;

  const nextPhoto = () => {
    setDirection(1);
    setActivePhotoIdx((prev) => (prev + 1) % room.images.length);
  };

  const prevPhoto = () => {
    setDirection(-1);
    setActivePhotoIdx((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const selectPhoto = (idx: number) => {
    setDirection(idx > activePhotoIdx ? 1 : -1);
    setActivePhotoIdx(idx);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextPhoto();
      } else {
        prevPhoto();
      }
    }
    touchStartXRef.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#FDFBF7] rounded-2xl shadow-2xl overflow-hidden border border-[#E7DDD0] my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EADFCF] bg-[#F5EFE6]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B37D4E]" />
            <h3 className="font-serif-kr text-xl font-bold text-[#2B2118]">
              {room.name} <span className="text-xs font-normal text-[#8A7563]">({room.engName})</span>
            </h3>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#E5D7C5] text-[#634832] font-medium">
              {room.floor}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#E7DCCE] text-[#715D4C] transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-8">
          {/* Dynamic Photo Showcase Gallery */}
          <div className="space-y-3">
            <div
              className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#1F1712] shadow-inner select-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={activePhotoIdx}
                  custom={direction}
                  initial={{
                    x: direction > 0 ? '100%' : '-100%',
                    opacity: 0,
                    scale: 1.05
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      x: { type: 'spring', stiffness: 290, damping: 30 },
                      opacity: { duration: 0.35 },
                      scale: { duration: 0.45 }
                    }
                  }}
                  exit={{
                    x: direction < 0 ? '100%' : '-100%',
                    opacity: 0,
                    scale: 0.95,
                    transition: {
                      x: { type: 'spring', stiffness: 290, damping: 30 },
                      opacity: { duration: 0.28 }
                    }
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={room.images[activePhotoIdx]}
                    alt={`${room.name} 갤러리 이미지 ${activePhotoIdx + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Gradient Scrim */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/20" />

              {/* Slider Arrows */}
              {room.images.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/50 hover:bg-black/85 text-white backdrop-blur-md transition-all hover:scale-105 active:scale-95 border border-white/15 cursor-pointer"
                    aria-label="이전 사진"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/50 hover:bg-black/85 text-white backdrop-blur-md transition-all hover:scale-105 active:scale-95 border border-white/15 cursor-pointer"
                    aria-label="다음 사진"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Bottom Photo Counter */}
              <div className="absolute bottom-3 right-3 z-10 px-3 py-1 rounded-full bg-black/60 text-white text-xs backdrop-blur-md font-mono border border-white/10">
                <span className="text-[#E5B887] font-bold">{activePhotoIdx + 1}</span> / {room.images.length}
              </div>
            </div>

            {/* Thumbnail Row */}
            <div className="flex gap-2.5 overflow-x-auto pb-1.5 pt-0.5 scrollbar-none">
              {room.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => selectPhoto(idx)}
                  className={`group relative w-22 h-15 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activePhotoIdx === idx
                      ? 'border-[#9C6644] ring-2 ring-[#9C6644]/40 scale-102 shadow-md'
                      : 'border-transparent opacity-65 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`썸네일 ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <span className="absolute bottom-1 right-1 text-[9px] bg-black/60 text-white px-1.5 py-0.2 rounded font-mono">
                    {idx + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Specifications */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F4EFE6] p-4 rounded-xl border border-[#E7DDD0]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#EAE0D2] text-[#8C6D52]">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-[#7A695A] block">투숙 인원</span>
                <span className="text-xs font-bold text-[#2B2119]">
                  기준 {room.capacityStandard}인 (최대 {room.capacityMax}인)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#EAE0D2] text-[#8C6D52]">
                <Maximize2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-[#7A695A] block">객실 면적</span>
                <span className="text-xs font-bold text-[#2B2119]">
                  {room.sizePyeong}평 ({room.sizeSqm}㎡)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#EAE0D2] text-[#8C6D52]">
                <Bed className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-[#7A695A] block">침대 구성</span>
                <span className="text-xs font-bold text-[#2B2119]">{room.bedType}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#EAE0D2] text-[#8C6D52]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-[#7A695A] block">공간 형태</span>
                <span className="text-xs font-bold text-[#2B2119]">{room.floor}</span>
              </div>
            </div>
          </div>

          {/* Room Detailed Narrative */}
          <div className="space-y-3">
            <h4 className="font-serif-kr text-lg font-bold text-[#2B2119]">공간 소개</h4>
            <p className="text-sm text-[#544436] leading-relaxed whitespace-pre-line font-light">
              {room.description}
            </p>
          </div>

          {/* Highlights & Features */}
          <div className="space-y-3">
            <h4 className="font-serif-kr text-lg font-bold text-[#2B2119]">객실 주요 포인트</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.highlightFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-xs text-[#413429] bg-[#FAF7F2] p-2.5 rounded-lg border border-[#EADBCC]"
                >
                  <Check className="w-4 h-4 text-[#9C6644] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities & Appliances List */}
          <div className="space-y-3">
            <h4 className="font-serif-kr text-lg font-bold text-[#2B2119]">구비 비품 및 편의시설</h4>
            <div className="flex flex-wrap gap-2">
              {room.amenities.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1.5 rounded-lg bg-[#F2ECE0] text-[#5C4A3C] border border-[#E2D6C6]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Notice Box */}
          <div className="bg-[#FAF4EC] p-4 rounded-xl border border-[#EADAC8] text-xs text-[#6B5A4B] space-y-1.5">
            <div className="font-bold text-[#4D3A2C] flex items-center gap-1.5 mb-1">
              <ShieldAlert className="w-4 h-4 text-[#B37D4E]" />
              <span>객실 이용 및 유의사항</span>
            </div>
            <p>• 입실시간: {STAY_INFO.hours.checkIn} / 퇴실시간: {STAY_INFO.hours.checkOut}</p>
            <p>• 실내 흡연은 절대 불가하며, 지정된 외부 흡연 구역을 이용해 주십시오.</p>
            <p>• 밤 10시 이후는 다른 독채 투숙객의 휴식을 위해 야외 고성방가를 제한하고 있습니다.</p>
            <p>• 반려동물 동반 입실은 쾌적한 침구 관리를 위해 제한되오니 양해 부탁드립니다.</p>
          </div>
        </div>

        {/* Footer CTA Action */}
        <div className="p-4 sm:p-5 border-t border-[#EADFCF] bg-[#F5EFE6] flex items-center justify-between">
          <div>
            <span className="text-xs text-[#8A7563] block">1박 이용 요금</span>
            <div className="text-lg sm:text-xl font-bold font-serif-kr text-[#8C4A27]">
              {room.priceWeekday.toLocaleString()}원 <span className="text-xs font-normal text-[#8A7563]">/ 주말 {room.priceWeekend.toLocaleString()}원</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-[#C5B39F] text-xs font-medium text-[#544234] hover:bg-[#EFE7DC] transition-colors cursor-pointer"
            >
              닫기
            </button>
            <a
              href="https://booking.naver.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-[#9C6644] hover:bg-[#855333] text-white text-xs sm:text-sm font-semibold shadow-md shadow-[#9C6644]/25 hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer active:scale-98"
            >
              <span>예약하기</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/80" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
