import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoomList from './components/RoomList';
import SpecialFacilities from './components/SpecialFacilities';
import LocationAndContact from './components/LocationAndContact';
import NoticeAndFaq from './components/NoticeAndFaq';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import RoomDetailModal from './components/RoomDetailModal';
import { ROOMS_DATA } from './data/rooms';
import { Room } from './types';

export default function App() {
  const [detailModalRoom, setDetailModalRoom] = useState<Room | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#2C221A]">
      {/* Top Fixed Navbar with Naver Booking CTA */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Official Logo & Naver Booking Direct Link */}
        <Hero />

        {/* 5 Rooms Showcase Grid (솔바람, 물소리, 달마루, 숲마당, 별하늘) */}
        <RoomList
          rooms={ROOMS_DATA}
          onSelectRoomForDetail={(room) => setDetailModalRoom(room)}
        />

        {/* Special Amenities & Signature Healing Facilities */}
        <SpecialFacilities />

        {/* Location, Driving & Navigation Shortcuts */}
        <LocationAndContact />

        {/* Notice, Stay Rules & FAQ */}
        <NoticeAndFaq />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Booking Bar linking to Naver Booking */}
      <MobileStickyBar />

      {/* Room Detail Modal (Photos & Amenities) */}
      <RoomDetailModal
        room={detailModalRoom}
        onClose={() => setDetailModalRoom(null)}
      />
    </div>
  );
}
