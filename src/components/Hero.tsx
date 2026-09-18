import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const HERO_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
    alt: '코리스테이 숲속 전경과 독채 실루엣',
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    alt: '자연 채광이 드리우는 프라이빗 테라스와 정원',
  },
  {
    url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2070&auto=format&fit=crop',
    alt: '숲의 고요함을 품은 아늑한 별장 전경',
  },
  {
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070&auto=format&fit=crop',
    alt: '초록빛 자연과 어우러진 힐링 스테이',
  },
  {
    url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop',
    alt: '따뜻한 원목의 질감과 아늑한 실내 공간',
  },
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-[65vh] sm:min-h-[70vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image Slideshow with Smooth Cross-fade & Ken Burns Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#16110D]">
        <AnimatePresence initial={false}>
          <motion.img
            key={HERO_IMAGES[currentIdx].url}
            src={HERO_IMAGES[currentIdx].url}
            alt={HERO_IMAGES[currentIdx].alt}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 2, ease: [0.4, 0, 0.2, 1] },
              scale: { duration: 7, ease: 'easeOut' },
            }}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none will-change-transform"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>

        {/* Warm wood-toned atmospheric overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1712] via-[#241B15]/70 to-[#16110D]/75 pointer-events-none" />
        <div className="absolute inset-0 bg-[#3C281B]/20 mix-blend-multiply pointer-events-none" />

        {/* Bottom subtle slide indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 pointer-events-auto">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIdx(i)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                i === currentIdx
                  ? 'w-6 bg-[#E7C69F] shadow-sm'
                  : 'w-1.5 bg-white/35 hover:bg-white/60'
              }`}
              aria-label={`메인 배경 ${i + 1}번째 이미지 보기`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white mt-4">
        {/* Main Heading */}
        <h1 className="font-serif-kr text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight sm:leading-snug mb-5 text-[#FDFBF7] drop-shadow-sm">
          나무의 결, 숲의 소리<br />
          <span className="text-[#E7C69F] font-normal italic">코리스테이</span>에서의 온전한 쉼
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#DCD1C4] font-light leading-relaxed">
          솔바람, 물소리, 달마루, 숲마당, 별하늘. 다섯 가지 자연의 숨결을 담은 프라이빗 독채에서<br className="hidden sm:inline" />
          일상의 소음을 잊고 온전히 나에게 집중하는 따스한 힐링을 선물합니다.
        </p>
      </div>
    </section>
  );
}
