import { FACILITIES_DATA } from '../data/stayInfo';
import { Sparkles, Clock, CheckCircle, Tag } from 'lucide-react';

export default function SpecialFacilities() {
  return (
    <section id="facilities" className="py-20 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5D7C5] text-[#7A5A40] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KORI STAY SPECIAL SPACES</span>
          </div>
          <h2 className="font-serif-kr text-3xl sm:text-4xl text-[#2B221A] font-semibold mb-4 tracking-tight">
            숲의 온기를 더하는 특별한 부대시설
          </h2>
          <p className="text-[#6D5D4E] text-sm sm:text-base font-light leading-relaxed">
            프라이빗 바비큐부터 밤하늘 아래 타오르는 모닥불 불멍, 편백나무 향 가득한 스파까지
            코리스테이가 선사하는 따뜻한 휴식의 순간들을 만나보세요.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FACILITIES_DATA.map((fac) => (
            <div
              key={fac.id}
              className="bg-[#FDFBF7] rounded-2xl border border-[#E7DDD0] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Facility Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#2C2119]">
                <img
                  src={fac.image}
                  alt={fac.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-medium tracking-widest text-[#E7C69F] uppercase block">
                    {fac.engName}
                  </span>
                  <h3 className="font-serif-kr text-xl sm:text-2xl font-bold tracking-tight text-[#FAF7F2]">
                    {fac.name}
                  </h3>
                </div>
              </div>

              {/* Facility Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-xs font-semibold text-[#8C6D52] mb-1.5">
                    {fac.tagline}
                  </p>
                  <p className="text-sm text-[#544336] leading-relaxed font-light">
                    {fac.description}
                  </p>
                </div>

                {/* Features list */}
                <div className="space-y-1.5 pt-2">
                  {fac.features.map((feat, featIdx) => (
                    <div key={featIdx} className="flex items-center gap-2 text-xs text-[#413327]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#9C6644] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Info Bar */}
                <div className="pt-4 border-t border-[#EADFCF] flex flex-wrap items-center justify-between gap-2 text-xs text-[#7A695A]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#9C6644]" />
                    <span>{fac.operatingHours}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-[#8C4A27]">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{fac.feeInfo}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
