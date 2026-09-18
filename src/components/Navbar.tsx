import { useState, useEffect } from 'react';
import { Phone, Menu, X, ExternalLink } from 'lucide-react';
import { STAY_INFO } from '../data/stayInfo';
import KoriStayLogo from './KoriStayLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '객실 안내', href: '#rooms' },
    { label: '부대 시설', href: '#facilities' },
    { label: '오시는 길', href: '#location' },
    { label: '이용 안내', href: '#guide' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#2B231D]/95 backdrop-blur-md text-[#F4EFE6] shadow-lg py-2.5'
          : 'bg-gradient-to-b from-[#1C1612]/80 via-[#1C1612]/40 to-transparent text-[#F4EFE6] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group transition-opacity hover:opacity-95">
          <KoriStayLogo variant="horizontal" theme="dark" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wide text-[#E8DFD5] hover:text-[#E5B887] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B37D4E] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${STAY_INFO.phone}`}
            className="flex items-center gap-1.5 text-xs text-[#D3C1AD] hover:text-white px-2 py-1.5 transition-colors"
            title="고객센터 전화연결"
          >
            <Phone className="w-3.5 h-3.5 text-[#B37D4E]" />
            <span>{STAY_INFO.phone}</span>
          </a>

          {/* Booking Button */}
          <a
            id="nav-booking-btn"
            href="https://booking.naver.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#9C6644] hover:bg-[#855333] text-white text-xs font-semibold shadow-md shadow-[#9C6644]/25 hover:shadow-lg transition-all active:scale-98"
          >
            <span>예약하기</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/80" />
          </a>
        </div>

        {/* Mobile Hamburger & Quick Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://booking.naver.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#9C6644] text-white text-xs font-semibold shadow-sm"
          >
            <span>예약하기</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#3D322A]/80 text-[#F4EFE6] border border-[#52443A]"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#241C16] border-b border-[#43352A] px-5 py-4 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-[#3D3126]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 text-sm text-[#E7DDD0] hover:bg-[#33271F] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center justify-between pt-1">
            <a
              href={`tel:${STAY_INFO.phone}`}
              className="flex items-center gap-1.5 text-xs text-[#C5B39F]"
            >
              <Phone className="w-3.5 h-3.5 text-[#B37D4E]" />
              {STAY_INFO.phone}
            </a>
            <a
              href="https://booking.naver.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#9C6644] text-white text-xs font-semibold"
            >
              <span>예약하기</span>
              <ExternalLink className="w-3 h-3 text-white/80" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

