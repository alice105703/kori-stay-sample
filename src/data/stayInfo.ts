import { Facility, FAQItem } from '../types';

export const STAY_INFO = {
  name: '코리스테이',
  englishName: 'KORI STAY',
  slogan: '나무와 숲의 온기가 머무는 곳',
  subSlogan: '복잡한 일상에서 벗어나 자연의 고요함과 따뜻한 우드 감성을 경험하는 프라이빗 독채 펜션',
  address: '강원특별자치도 홍천군 서면 잣나무숲길 77-12 (코리스테이)',
  addressShort: '강원도 홍천군 서면 잣나무숲길 77-12',
  phone: '0507-1423-8890',
  mobilePhone: '010-8921-3456',
  email: 'contact@koristay.kr',
  instagram: '@kori_stay.official',
  bankAccount: {
    bank: '신한은행',
    accountNumber: '110-482-901234',
    holder: '코리스테이 (홍길동)'
  },
  hours: {
    checkIn: '15:00',
    checkOut: '11:00',
    mannerTime: '22:00 ~ 07:00 (야외 소음 자제)'
  },
  traffic: {
    car: '서울/강남 기준 서울양양고속도로 강촌IC 또는 설악IC에서 20분 소요 (전용 주차장 완비)',
    transit: '경춘선 강촌역 또는 홍천버스터미널에서 픽업 서비스 신청 가능 (사전 예약 필수)'
  }
};

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'fac-bbq',
    name: '프라이빗 개별 바비큐 데크',
    engName: 'Private BBQ Deck',
    tagline: '사계절 날씨에 구애받지 않는 아늑한 목조 테라스 바비큐',
    description: '각 객실마다 숲을 바라보며 오붓하게 즐길 수 있는 단독 바비큐 공간이 마련되어 있습니다. 프리미엄 웨버 그릴과 강원도 참숯을 제공해 드립니다.',
    operatingHours: '17:30 ~ 21:30 (숯 점화 마감 20:00)',
    feeInfo: '그릴 및 숯불 세트 30,000원 (현장 또는 예약 시 결제)',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
    features: ['우천 시에도 이용 가능한 처마 설계', '최고급 참숯 및 웨버 그릴', '감성 조명 & 블루투스 스피커 완비']
  },
  {
    id: 'fac-firepit',
    name: '모닥불 & 감성 불멍 라운지',
    engName: 'Campfire & Starlight Lounge',
    tagline: '타닥타닥 타오르는 참나무 장작 소리와 밤하늘의 별',
    description: '자연석과 원목 벤치로 둘러싸인 정원 중앙 화로에서 따뜻한 온기와 함께 불멍을 즐길 수 있습니다. 오로라 가루와 마시멜로 꼬치가 포함된 세트가 인기입니다.',
    operatingHours: '19:00 ~ 23:00 (기상 악화 시 제한될 수 있음)',
    feeInfo: '불멍 세트 25,000원 (장작 1망 + 마시멜로 + 오로라 가루)',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1000&q=80',
    features: ['참나무 100% 건조 장작 사용', '안전 화로대 및 방화 장비 비치', '스모어 키트 제공']
  },
  {
    id: 'fac-spa',
    name: '피톤치드 히노끼 & 노천 스파',
    engName: 'Hinoki Forest Spa',
    tagline: '자연의 숨결과 따스한 온수가 주는 깊은 이완',
    description: '객실별로 특화된 천연 편백나무(히노끼) 욕조와 야외 온수 자쿠지에서 피로를 녹여보세요. 숲의 음이온과 피톤치드가 지친 몸과 마음에 활력을 불어넣습니다.',
    operatingHours: '상시 이용 가능 (온수 공급 제한 없음)',
    feeInfo: '객실 기본 제공 (일부 룸 특화)',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    features: ['100% 천연 원목 편백나무 욕조', '미네랄 핑크솔트 입욕제 제공', '숲 파노라마 뷰']
  },
  {
    id: 'fac-trail',
    name: '잣나무 숲속 힐링 둘레길',
    engName: 'Pine Forest Walking Trail',
    tagline: '아침 이슬을 밟으며 걷는 800m 프라이빗 전용 산책로',
    description: '코리스테이 투숙객만을 위한 완만한 숲속 산책로입니다. 곳곳에 우드 벤치와 해먹이 설치되어 있어 독서와 사색을 즐기기에 더할 나위 없이 좋습니다.',
    operatingHours: '06:00 ~ 일몰 시까지 (조명 산책로는 22:00까지)',
    feeInfo: '투숙객 무료 이용',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80',
    features: ['길이 800m 완만한 흙길 산책로', '숲속 감성 쉼터 및 해먹존', '아침 새소리 명상 스팟']
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    category: '예약/결제',
    question: '예약 확인 및 변경은 어떻게 하나요?',
    answer: '웹사이트 상단의 [예약 조회] 메뉴에서 예약자 성함과 휴대폰 번호(또는 예약번호)를 입력하시면 실시간 예약 상태 확인 및 취소 신청이 가능합니다. 일정 변경은 입실 7일 전까지 고객센터(0507-1423-8890)로 문의해주시기 바랍니다.'
  },
  {
    category: '이용안내',
    question: '체크인/체크아웃 시간과 비대면 입실 방식이 궁금합니다.',
    answer: '체크인은 오후 3시(15:00)부터이며, 체크아웃은 오전 11시(11:00)입니다. 당일 오전 11시에 예약자 휴대폰 번호로 개별 도어락 비밀번호 및 상세 입실 안내 문자가 자동 발송되는 스마트 비대면 체크인을 지원합니다.'
  },
  {
    category: '시설/부대',
    question: '바비큐와 불멍 장작은 당일에도 신청할 수 있나요?',
    answer: '네, 가능합니다. 다만 숯불 준비 및 장작 세팅을 위해 최소 입실 당일 오후 4시 이전까지 관리실(010-8921-3456)로 말씀해 주시면 원하는 시간에 맞춰 준비해 드립니다.'
  },
  {
    category: '이용안내',
    question: '기준 인원 초과 시 추가 요금은 얼마인가요?',
    answer: '기준 인원 초과 시 1인 1박당 성인/아동 20,000원(침구 및 고급 어메니티 일체 포함)의 추가 요금이 부과됩니다. 24개월 미만 영유아는 무료이나 최대 수용 인원에는 포함됩니다.'
  },
  {
    category: '취소/환불',
    question: '취소 및 환불 규정은 어떻게 되나요?',
    answer: '이용일 기준 10일 전 취소 시 100% 전액 환불, 7일 전 90%, 5일 전 70%, 3일 전 50%, 1일 전 30%, 당일 취소 시에는 환불이 불가하오니 신중한 예약 부탁드립니다.'
  }
];
