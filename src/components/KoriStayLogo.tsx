import React from 'react';

interface KoriStayLogoProps {
  variant?: 'full' | 'emblem' | 'horizontal';
  theme?: 'dark' | 'light';
  className?: string;
}

export default function KoriStayLogo({
  variant = 'horizontal',
  theme = 'light',
  className = ''
}: KoriStayLogoProps) {
  const isDarkBg = theme === 'dark';

  // SVG Emblem (Mountain, Sun, Trees, Cottage, River)
  const Emblem = ({ size = 'w-10 h-10' }: { size?: string }) => (
    <svg
      viewBox="0 0 400 240"
      className={`${size} shrink-0`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sun */}
      <circle cx="280" cy="50" r="22" fill={isDarkBg ? '#E8C798' : '#DFB882'} />

      {/* Mountain Ridge Outlines */}
      <path
        d="M 120 100 Q 165 52 186 50 Q 212 54 232 94"
        stroke={isDarkBg ? '#C5D9C4' : '#23422C'}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 194 58 Q 230 62 248 78 Q 290 54 344 104"
        stroke={isDarkBg ? '#C5D9C4' : '#23422C'}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Deciduous Tree (Left) */}
      <path
        d="M 82 158 L 82 135 M 82 135 L 68 115 M 82 130 L 96 112 M 82 122 L 76 105"
        stroke={isDarkBg ? '#C5D9C4' : '#23422C'}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 80 98 C 68 86 48 94 46 110 C 32 114 32 136 48 142 C 56 148 72 148 80 142 C 88 150 110 146 114 132 C 122 118 108 104 94 102 C 92 92 84 90 80 98 Z"
        fill={isDarkBg ? '#90B788' : '#587E50'}
      />
      <path
        d="M 85 112 C 98 102 118 112 114 130 C 106 138 90 140 82 135 Z"
        fill={isDarkBg ? '#75A06D' : '#46693F'}
        opacity="0.9"
      />

      {/* Ground Shrub Left */}
      <path
        d="M 90 166 C 90 144 120 138 136 152 C 146 142 170 146 174 166 Z"
        fill={isDarkBg ? '#75A06D' : '#46693F'}
      />

      {/* Cabin Cottage */}
      <rect
        x="238"
        y="94"
        width="10"
        height="24"
        fill={isDarkBg ? '#DDBB95' : '#C39C74'}
        stroke={isDarkBg ? '#F5F0E6' : '#23422C'}
        strokeWidth="1.5"
      />
      <polygon
        points="148,168 148,136 198,98 248,136 248,168"
        fill={isDarkBg ? '#FAF6EE' : '#F8F3EA'}
        stroke={isDarkBg ? '#C5D9C4' : '#23422C'}
        strokeWidth="2.5"
      />
      <polygon
        points="198,96 140,140 150,145 198,106 246,145 256,140"
        fill={isDarkBg ? '#3D5A42' : '#23422C'}
      />
      <rect x="176" y="132" width="9" height="9" rx="1" fill={isDarkBg ? '#DDBB95' : '#C39C74'} />
      <rect x="190" y="132" width="9" height="9" rx="1" fill={isDarkBg ? '#DDBB95' : '#C39C74'} />
      <rect x="176" y="146" width="9" height="9" rx="1" fill={isDarkBg ? '#DDBB95' : '#C39C74'} />
      <rect x="190" y="146" width="9" height="9" rx="1" fill={isDarkBg ? '#DDBB95' : '#C39C74'} />

      {/* Pine Trees (Right) */}
      <path
        d="M 300 104 L 292 118 L 297 118 L 288 135 L 295 135 L 282 156 L 318 156 L 305 135 L 312 135 L 303 118 L 308 118 Z"
        fill={isDarkBg ? '#699268' : '#294B33'}
      />
      <path
        d="M 330 112 L 323 124 L 327 124 L 318 140 L 325 140 L 314 158 L 346 158 L 335 140 L 342 140 L 333 124 L 337 124 Z"
        fill={isDarkBg ? '#4F794F' : '#22422B'}
      />
      <path
        d="M 362 82 L 351 104 L 358 104 L 345 126 L 354 126 L 338 156 L 386 156 L 370 126 L 379 126 L 366 104 L 373 104 Z"
        fill={isDarkBg ? '#3A633B' : '#1C3823'}
      />

      {/* Ground Line & Waves */}
      <path
        d="M 22 180 Q 60 155 150 158 Q 190 160 200 166"
        stroke={isDarkBg ? '#C5D9C4' : '#23422C'}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M 195 166 Q 250 156 330 156 Q 380 156 400 176"
        stroke={isDarkBg ? '#C5D9C4' : '#23422C'}
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Flowing Creek */}
      <path
        d="M 86 188 C 150 186 190 170 250 172 C 320 174 370 184 402 186"
        stroke={isDarkBg ? '#79A8AC' : '#4C787C'}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M 140 198 C 190 196 220 185 260 187 C 310 189 350 196 380 197"
        stroke={isDarkBg ? '#79A8AC' : '#4C787C'}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );

  if (variant === 'emblem') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <Emblem size="w-12 h-12" />
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <img
          src={isDarkBg ? '/logo-white.svg' : '/logo.svg'}
          alt="코리스테이 KORI STAY 로고"
          className="w-full max-w-[260px] h-auto object-contain"
        />
      </div>
    );
  }

  // Horizontal Lockup (Default, perfect for Navbar)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Emblem graphic */}
      <div className="w-11 h-11 rounded-xl bg-[#F8F5EE] border border-[#E7DDD0] shadow-sm flex items-center justify-center overflow-hidden p-0.5 shrink-0">
        <img
          src="/logo.svg"
          alt="코리스테이 로고 심볼"
          className="w-full h-full object-contain transform scale-110"
        />
      </div>

      <span
        className={`font-serif-kr text-xl sm:text-2xl font-bold tracking-widest leading-none ${
          isDarkBg ? 'text-white' : 'text-[#23422C]'
        }`}
      >
        KORI STAY
      </span>
    </div>
  );
}
