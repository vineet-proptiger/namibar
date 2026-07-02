import { Check } from "lucide-react";

const F_SANS = "var(--font-sans), Open Sans, sans-serif";
const GOLD = "var(--color-gold, #C9A96E)";
const PRIMARY = "var(--color-primary, #3A2A0E)";

const units = [
  {
    type: "2 BHK Residences",
    size: "1245 Sq.Ft",
    price: "₹ 1.5 Cr*",
    oldPrice: null,
    btnText: "Get Details",
    features: [
      "Unlock Pricing & Floor Plans",
      "Attractive Payment Plan",
      "Premium Luxury Residence",
    ],
    isPopular: false,
  },
  {
    type: "3 BHK Residences",
    size: "1665 Sq.Ft",
    price: "Ask For Price",
    oldPrice: null,
    btnText: "Get Details",
    features: [
      "Unlock Pricing & Floor Plans",
      "Attractive Payment Plan",
      "Premium Luxury Residence",
    ],
    isPopular: true,
  },
  {
    type: "4 BHK Residences",
    size: "On Request",
    price: "Ask For Price",
    oldPrice: null,
    btnText: "Get Details",
    features: [
      "Unlock Pricing & Floor Plans",
      "Attractive Payment Plan",
      "Premium Luxury Residence",
    ],
    isPopular: false,
  }
];

const CurvedCorners = ({ bg = '#f9fafb' }) => {
  const corners = [
    { bottom: '-1px', left: '-1px', borderRight: '1px solid #D5C2A8', borderTop: '1px solid #D5C2A8', borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: '1px solid #D5C2A8', borderTop: '1px solid #D5C2A8', borderTopLeftRadius: '18px' },
  ];

  return corners.map((c, i) => (
    <span key={i} style={{
      position: 'absolute', ...c,
      width: '22px', height: '22px',
      background: bg,
      display: 'block',
    }} />
  ));
};

const Pricing = ({ setIsOpen }) => {
  return (
    <section
      id="pricing"
      className="py-12 sm:py-20 px-4 md:px-8 relative overflow-hidden"
      style={{ background: "#f9fafb" }} 
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div style={{ textAlign: 'center', marginBottom: '40px' }} data-aos="fade-up">
          <h2 style={{
            fontFamily: "var(--font-jost), Montserrat, sans-serif", fontWeight: '700', fontSize: '17px',
            color: '#684C1B', letterSpacing: '0.1em',
            textTransform: 'uppercase', margin: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            Configurations &amp; Pricing
          </h2>
        </div>

        {/* Combined Pricing Block */}
        <div 
          className="relative bg-white mx-auto overflow-hidden"
          style={{ 
            border: '1px solid #D5C2A8',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
          }}
          data-aos="fade-up"
        >
          <CurvedCorners bg="#f9fafb" />

          <div className="grid grid-cols-1 md:grid-cols-3">
            {units.map((unit, idx) => (
              <div
                key={idx}
                className="relative flex flex-col group transition-all duration-300 hover:bg-gray-50/50"
                style={{
                  borderRight: idx !== units.length - 1 ? '1px solid #f0ede6' : 'none',
                  borderBottom: idx !== units.length - 1 ? '1px solid #f0ede6' : 'none',
                }}
              >
                <style dangerouslySetInnerHTML={{__html: `
                  @media (min-width: 768px) {
                    .pricing-col-${idx} {
                      border-bottom: none !important;
                    }
                  }
                `}} />
                
                <div className={`pricing-col-${idx} w-full h-full flex flex-col`}>
                  {/* Original Top Section layout */}
                  <div className="relative p-7 pb-4 border-b border-gray-50 pt-10">
                    <h3
                      className="text-xl font-bold mb-1 relative z-10"
                      style={{ fontFamily: F_SANS, color: PRIMARY, letterSpacing: "0.02em" }}
                    >
                      {unit.type}
                    </h3>
                    <div className="flex items-center gap-2 relative z-10">
                      <span className="text-gray-400 text-[11px] uppercase tracking-wider" style={{ fontFamily: F_SANS }}>Size:</span>
                      <p className="text-sm font-semibold" style={{ fontFamily: F_SANS, color: PRIMARY }}>
                        {unit.size}
                      </p>
                    </div>
                  </div>

                  {/* Original Bottom Section layout */}
                  <div className="p-7 pt-6 flex-grow flex flex-col text-left">
                    <div className="mb-6">
                      <span className="text-[10px] text-gray-400 uppercase tracking-[0.15em] font-medium block mb-1" style={{ fontFamily: F_SANS }}>Starting At</span>
                      <div className="flex items-center gap-2 sm:gap-3 flex-nowrap whitespace-nowrap">
                        {unit.oldPrice && (
                          <span className="text-sm sm:text-lg line-through font-medium opacity-60" style={{ fontFamily: F_SANS, color: GOLD }}>
                            {unit.oldPrice}
                          </span>
                        )}
                        <p className="text-lg sm:text-2xl font-bold" style={{ fontFamily: F_SANS, color: GOLD }}>
                          {unit.price}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-8">
                      {unit.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center bg-amber-50">
                            <Check size={12} strokeWidth={3} style={{ color: GOLD }} />
                          </div>
                          <span className="text-gray-700 font-medium text-[14px]" style={{ fontFamily: F_SANS }}>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setIsOpen(true)}
                      className="btn-gold w-full py-3 text-sm tracking-widest uppercase transition-all duration-300 mt-auto"
                      style={{ borderRadius: "1rem" }}
                    >
                      {unit.btnText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
