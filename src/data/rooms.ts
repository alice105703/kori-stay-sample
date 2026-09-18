import { Room, ExtraOption } from '../types';

export const ROOMS_DATA: Room[] = [
  {
    id: 'solbaram',
    name: '솔바람',
    engName: 'Solbaram Room',
    tagline: '솔잎 사이로 불어오는 청량한 바람과 잣나무 숲을 품은 미니멀 우드 독채',
    priceWeekday: 120000,
    priceWeekend: 160000,
    sizePyeong: 16,
    sizeSqm: 53,
    capacityStandard: 2,
    capacityMax: 2,
    bedType: '최고급 시몬스 퀸 베드 1개 (구스다운 침구)',
    floor: '1층 단독 테라스 가든',
    description:
      '창문을 열면 은은한 잣나무 솔향과 솔바람 소리가 귓가를 스치는 공간입니다. 밝은 자작나무와 오크목의 담백한 질감으로 꾸며져 있으며, 둘만의 조용하고 아늑한 휴식에 가장 최적화된 미니멀 프라이빗 룸입니다. 아침 햇살을 맞으며 전용 데크에서 즐기는 핸드드립 커피가 특별한 쉼을 선물합니다.',
    highlightFeatures: [
      '프라이빗 포레스트 숲 조망 데크',
      '제네바(Geneva) 클래식 블루투스 오디오',
      '스페셜티 원두 & 핸드드립 도구 세트',
      '친환경 록시땅 어메니티 제공'
    ],
    amenities: [
      '퀸 베드', '개별 냉난방', '55인치 스마트 TV (넷플릭스/유튜브 지원)',
      '무료 와이파이', '발뮤다 전기포트 & 토스터', '미니 냉장고',
      '헤어드라이어', '호텔식 코튼 타월 & 가운', '샴푸/컨디셔너/바디워시',
      '전용 야외 테라스 테이블'
    ],
    mainImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'mulsori',
    name: '물소리',
    engName: 'Mulsori Room',
    tagline: '맑은 계곡의 물소리를 곁에 두고 즐기는 릴렉스 실내 자쿠지와 따스한 원목 휴식',
    priceWeekday: 180000,
    priceWeekend: 230000,
    sizePyeong: 22,
    sizeSqm: 73,
    capacityStandard: 2,
    capacityMax: 3,
    bedType: '킹 사이즈 천연 라텍스 베드 1개 (추가 침구 가능)',
    floor: '1층 프라이빗 리버뷰',
    description:
      '펜션 옆 맑은 청정 계곡의 잔잔한 여울물 소리가 마음의 묵은 피로를 씻어주는 객실입니다. 고급 원목 통창 앞으로 대형 릴렉스 실내 자쿠지가 마련되어 있어, 사계절 날씨에 구애받지 않고 따뜻한 반신욕을 즐기실 수 있습니다. 밤에는 계곡 바람과 함께 따뜻한 차 한 잔을 즐기기 좋습니다.',
    highlightFeatures: [
      '계곡 조망 대형 프라이빗 실내 자쿠지',
      '고급 전통 도자기 다도 세트 & 유기농 꽃차',
      '개별 프라이빗 테라스 바비큐 존',
      '다이슨 슈퍼소닉 헤어드라이어'
    ],
    amenities: [
      '킹 베드', '스파 자쿠지', '65인치 스마트 TV', '초고속 와이파이',
      '네스프레소 버츄오 커피머신', '전자레인지 & 조리도구', '냉장고',
      '다이슨 헤어드라이어', '고급 호텔 가운 & 타월', '천연 입욕 솔트 제공'
    ],
    mainImage: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'dalmaru',
    name: '달마루',
    engName: 'Dalmaru Room',
    tagline: '은은한 달빛이 스며드는 한옥식 대청마루와 현대적 모던 우드가 조화로운 시그니처 룸',
    priceWeekday: 240000,
    priceWeekend: 290000,
    sizePyeong: 28,
    sizeSqm: 93,
    capacityStandard: 2,
    capacityMax: 4,
    bedType: '킹 사이즈 럭셔리 베드 1개 + 프리미엄 한식 침구 2세트',
    floor: '단독 별채형 1층',
    description:
      '우리 고유의 마루 구조를 현대적이고 세련된 미학으로 재해석한 코리스테이의 대표 공간입니다. 통원목으로 마감된 넓은 대청마루에 앉아 달빛이 정원에 드리우는 모습을 감상해보세요. 천장 서까래 모티브의 목구조와 따뜻한 간접조명이 머무는 내내 고요하고 깊은 안식을 선사합니다.',
    highlightFeatures: [
      '전통 마루 감성의 프리미엄 티 라운지 공간',
      'LG 시네빔 4K 100인치 스크린 & 서라운드 사운드',
      '발뮤다 더 레인지 & 더 브루 드립 스테이션',
      '프라이빗 한옥 중정 툇마루 뷰'
    ],
    amenities: [
      '킹 베드', '한식 토퍼 침구', '100인치 빔프로젝터', '마샬 워번 스피커',
      '발뮤다 키친 컬렉션', '풀 빌트인 인덕션 주방', '와인잔 & 디캔터 세트',
      '바이레도(Byredo) 배스 어메니티', '실내 슬리퍼 & 리넨 로브'
    ],
    mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'supmadang',
    name: '숲마당',
    engName: 'Supmadang Room',
    tagline: '울창한 숲에 둘러싸인 단독 잔디 정원과 피톤치드 편백나무(히노끼) 스파를 갖춘 가든 스위트',
    priceWeekday: 310000,
    priceWeekend: 350000,
    sizePyeong: 36,
    sizeSqm: 119,
    capacityStandard: 4,
    capacityMax: 5,
    bedType: '에이스 호텔 컬렉션 퀸 베드 2개',
    floor: '단독 독채형 가든 빌라',
    description:
      '객실 문을 열면 50평 규모의 오롯한 전용 잔디 마당이 펼쳐집니다. 잣나무 숲속에서 프라이빗하게 피톤치드를 온몸으로 느끼는 일본 기소산 천연 편백(히노끼) 야외 대형 스파 욕조가 구비되어 있습니다. 가족이나 소중한 친구들과 함께 정원에서 글램핑 스타일의 감성 바비큐를 즐겨보세요.',
    highlightFeatures: [
      '단독 50평 천연 잔디 마당 & 해먹 존',
      '기소산 천연 통원목 히노끼 노천 스파 (4인용)',
      '아웃도어 웨버 가스그릴 프리미엄 바비큐 파빌리온',
      '다이닝 6인용 원목 테이블 & 와인 바'
    ],
    amenities: [
      '퀸 베드 2개', '전용 야외 히노끼탕', '75인치 QLED TV', '와이파이',
      '완비된 주방 & 6인 식기 세트', '대형 냉장고', '전자레인지/인덕션',
      '이솝(Aesop) 4종 바디/헤어 세트', '바비큐 전용 쉘터', '아기 의자(요청 시)'
    ],
    mainImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'byeolhaneul',
    name: '별하늘',
    engName: 'Byeolhaneul Penthouse',
    tagline: '천창으로 쏟아지는 밤하늘 은하수를 감상하는 최고층 복층 펜트하우스',
    priceWeekday: 340000,
    priceWeekend: 380000,
    sizePyeong: 42,
    sizeSqm: 139,
    capacityStandard: 4,
    capacityMax: 6,
    bedType: '템퍼 킹 베드 1개 (침실 1) + 퀸 베드 1개 (복층 침실 2) + 추가 침구 구비',
    floor: '2층 복층형 펜트하우스 독채',
    description:
      '코리스테이에서 가장 높은 곳에 자리한 최고급 듀플렉스 펜트하우스입니다. 침실 천장의 대형 통유리 글래스 돔을 통해 누워서 밤하늘 별과 달을 감상할 수 있습니다. 숲의 파노라마가 한눈에 내려다보이는 루프탑 데크와 온수 야외 노천탕이 준비되어 있으며, 가장 잊지 못할 럭셔리 힐링 경험을 선사합니다.',
    highlightFeatures: [
      '침대 위 글래스 돔 천창 (별빛 뷰)',
      '루프탑 파노라마 인피니티 온수 스파',
      '보스(Bose) 서라운드 사운드 홈시어터',
      '전용 와인셀러 & 웰컴 샴페인 세트'
    ],
    amenities: [
      '킹 베드 1 + 퀸 베드 1', '복층 루프탑 온수 스파', '85인치 대형 스마트 TV',
      '와인셀러 & 웰컴 드링크', '프리미엄 빌트인 주방', '식기세척기 & 오븐',
      '조말론(Jo Malone) 어메니티', '프라이빗 테라스 바비큐', '세탁건조기'
    ],
    mainImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80'
    ]
  }
];

export const EXTRA_OPTIONS: ExtraOption[] = [
  {
    id: 'bbq',
    name: '프라이빗 숯불 & 그릴 바비큐 세트',
    description: '최고급 참숯 + 석쇠 2개 + 목장갑 + 웨버 그릴 + 토치 대여 (입실 시 준비)',
    price: 30000,
    unit: '1회 (2~4인 기준)'
  },
  {
    id: 'bonfire',
    name: '감성 불멍 & 참나무 장작 세트',
    description: '오로라 가루 + 참나무 장작 1망 + 마시멜로 꼬치 세트 + 화로대 세팅',
    price: 25000,
    unit: '1세트'
  },
  {
    id: 'hinokiBath',
    name: '천연 편백 아로마 입욕 & 바스 바구니',
    description: '유기농 편백 오일 + 미네랄 히말라야 핑크 솔트 + 프리미엄 린넨 배스 타월',
    price: 20000,
    unit: '1세트'
  },
  {
    id: 'breakfast',
    name: '코리스테이 모닝 브런치 바스켓',
    description: '갓 구운 크루아상, 제철 과일, 신선한 그릭 요거트, 갓 내린 드립 커피 2인분',
    price: 24000,
    unit: '2인 기준'
  }
];
