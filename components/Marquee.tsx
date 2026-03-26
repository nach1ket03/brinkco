export default function Marquee() {
  const items = [
    "Web Design",
    "Mobile Responsive",
    "Cafes & Restaurants",
    "Gyms",
    "Salons",
    "Fast Delivery",
    "Pune Based",
    "WhatsApp Integration",
  ];

  return (
    <div className="relative py-6 md:py-8 bg-lime overflow-hidden rotate-[-2deg] md:rotate-[-1deg] w-[110%] -left-[5%] scale-105 z-20">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, j) => (
              <div key={j} className="flex items-center">
                <span className="text-bg font-display font-bold text-xl md:text-3xl uppercase mx-4 md:mx-6">
                  {item}
                </span>
                <span className="text-bg flex items-center justify-center">
                  ✦
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
