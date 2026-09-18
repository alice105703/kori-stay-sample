export interface Room {
  id: string;
  name: string;
  engName: string;
  tagline: string;
  priceWeekday: number;
  priceWeekend: number;
  sizePyeong: number;
  sizeSqm: number;
  capacityStandard: number;
  capacityMax: number;
  bedType: string;
  floor: string;
  description: string;
  highlightFeatures: string[];
  amenities: string[];
  mainImage: string;
  images: string[];
}

export interface ExtraOption {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
}

export interface Reservation {
  id: string;
  bookingCode: string;
  roomId: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  adults: number;
  children: number;
  guestName: string;
  guestPhone: string;
  guestEmail?: string;
  selectedOptions: {
    optionId: string;
    name: string;
    price: number;
    count: number;
  }[];
  roomTotal: number;
  optionsTotal: number;
  finalTotal: number;
  specialRequests?: string;
  paymentMethod: 'bank_transfer' | 'credit_card' | 'onsite';
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}

export interface Facility {
  id: string;
  name: string;
  engName: string;
  tagline: string;
  description: string;
  operatingHours: string;
  feeInfo: string;
  image: string;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: '예약/결제' | '이용안내' | '시설/부대' | '취소/환불';
}
