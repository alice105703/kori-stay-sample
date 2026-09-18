import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface RoomImageSliderProps {
  images: string[];
  roomName: string;
  sizePyeong: number;
  className?: string;
}

export default function RoomImageSlider({
  images,
  roomName,
  sizePyeong,
  className = ''
}: RoomImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalImages = images.length;

  const goToNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const goToPrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const goToIndex = (idx: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  return (
    <div
      className={`relative w-full h-full bg-[#1F1712] overflow-hidden select-none group ${className}`}
    >
      {/* Animated Image Slide Container with Interactive Drag */}
      <div className="relative w-full h-full overflow-hidden cursor-grab active:cursor-grabbing">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragEnd={(_, info) => {
              const swipeThreshold = 40;
              if (info.offset.x < -swipeThreshold) {
                goToNext();
              } else if (info.offset.x > swipeThreshold) {
                goToPrev();
              }
            }}
            initial={{
              x: direction > 0 ? '100%' : '-100%',
              opacity: 0,
              scale: 1.04
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
              transition: {
                x: { type: 'spring', stiffness: 280, damping: 28 },
                opacity: { duration: 0.32 },
                scale: { duration: 0.45 }
              }
            }}
            exit={{
              x: direction < 0 ? '100%' : '-100%',
              opacity: 0,
              scale: 0.96,
              transition: {
                x: { type: 'spring', stiffness: 280, damping: 28 },
                opacity: { duration: 0.28 }
              }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={images[currentIndex]}
              alt={`${roomName} 사진 ${currentIndex + 1}`}
              className="w-full h-full object-cover object-center pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Atmospheric Cinematic Gradients */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/65 via-transparent to-black/30" />

      {/* Top Overlay Badges */}
      <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <span className="px-3 py-1 rounded-full bg-[#2C2119]/85 backdrop-blur-md text-white font-serif-kr text-xs font-semibold tracking-wider border border-[#8C6D52]/40 shadow-md">
            {roomName}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-[#9C6644]/90 backdrop-blur-sm text-white text-[11px] font-medium shadow-sm">
            독채 {sizePyeong}평
          </span>
        </div>
      </div>

      {/* Navigation Arrow Buttons */}
      {totalImages > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/85 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg cursor-pointer opacity-85 sm:opacity-75 sm:group-hover:opacity-100"
            aria-label="이전 객실 사진"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/85 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg cursor-pointer opacity-85 sm:opacity-75 sm:group-hover:opacity-100"
            aria-label="다음 객실 사진"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </>
      )}

      {/* Bottom Bar: Photo Counter & Segmented Progress Indicators */}
      <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 flex flex-col gap-2 pointer-events-auto">
        {/* Counter & Drag Hint */}
        <div className="flex items-center justify-between text-xs text-white">
          <span className="text-[10px] text-white/70 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm hidden sm:inline">
            좌우 드래그 또는 화살표로 넘겨보기
          </span>
          <div className="ml-auto px-2.5 py-1 rounded-md bg-black/55 backdrop-blur-md border border-white/10 text-[11px] font-mono tracking-wider text-[#E8DFD5]">
            <span className="text-[#E5B887] font-bold">{currentIndex + 1}</span>
            <span className="opacity-60"> / {totalImages}</span>
          </div>
        </div>

        {/* Dynamic Segmented Progress Bar */}
        <div
          className="grid gap-1.5 w-full pt-1"
          style={{ gridTemplateColumns: `repeat(${totalImages}, minmax(0, 1fr))` }}
        >
          {images.map((_, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={idx}
                onClick={(e) => goToIndex(idx, e)}
                className="group/seg relative h-2 rounded-full overflow-hidden bg-white/25 hover:bg-white/45 backdrop-blur-sm transition-all cursor-pointer"
                aria-label={`${idx + 1}번째 사진으로 이동`}
              >
                {isActive && (
                  <motion.div
                    layoutId={`active-indicator-${roomName}`}
                    className="absolute inset-0 bg-[#E5B887] rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
