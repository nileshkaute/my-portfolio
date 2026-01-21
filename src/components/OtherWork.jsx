import React, { useState } from "react";

const OtherWork = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

const works = [
  {
    year: "2025",
    title: "Deadpool MaxEffort",
    category: "Entertainment & Digital Media",
    img: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=800&q=80"
  },
  {
    year: "2025",
    title: "Nature’s Paradise",
    category: "Travel & Eco-Tourism",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80"
  },
  {
    year: "2025",
    title: "AI Future Web",
    category: "Artificial Intelligence & Future Tech",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
  },
  {
    year: "2025",
    title: "Cafe Gratitude",
    category: "Food & Hospitality Landing Page",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    year: "2025",
    title: "Amul Reimagined",
    category: "Dairy, FMCG & Brand Redesign",
    img: "https://images.unsplash.com/photo-1585238342028-4bbc8f29b8a7?auto=format&fit=crop&w=800&q=80"
  }
 
];


  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="bg-mocha-900 text-ivory min-h-screen flex flex-col font-['gilroy']">
      <main 
        className="flex-grow flex flex-col items-center px-6 md:px-12"
        style={{padding: "10px", paddingTop: "80px" }}
        onMouseMove={handleMouseMove}
      >
        <div className="w-full max-w-[1400px]">
          {/* Section Heading from original style */}
          <h1 className="text-[4.6vmax] font-bold mb-14">
            watch my <span className="text-gold">more</span><span className="text-5xl  font-anton uppercase tracking-tight outline-text"> work</span>
          </h1>

          {/* Table Header aligned with the grid */}
          <div className="grid grid-cols-[12%_44%_44%] w-full text-[10px] uppercase tracking-[0.3em] text-stone pb-4 px-1">
            <span>Year</span>
            <span>Project</span>
            <span className="text-right">Industry</span>
          </div>

          <section id="artworks" className="flex flex-col border-t-2 border-white">
            {works.map((work, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative w-full border-b-2 border-white group overflow-hidden cursor-pointer h-[72px] md:h-[100px]"
              >
                {/* Original Sliding Div Effect */}
                <div 
                  className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-[1.3s] ease-[cubic-bezier(0.19,1,0.22,1)] z-0" 
                />
                
                {/* Content Row - Perfectly aligned grid */}
                <div className="relative z-10 grid grid-cols-[12%_44%_44%] items-center h-full px-1">
                  
                  {/* Year */}
                  <h4 className="text-[1.7vmax] font-medium group-hover:text-[#222] transition-colors duration-400">
                    {work.year}
                  </h4>

                  {/* Title */}
                  <h5 className="text-[1.8vmax] font-semibold group-hover:text-[#222] transition-colors duration-400">
                    {work.title}
                  </h5>

                  {/* Industry */}
                  <h6 className="text-[1.6vmax] text-right group-hover:text-[#222] transition-colors duration-400">
                    {work.category}
                  </h6>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      {/* Floating Image Follower - Same size and smooth transition */}
      {hoveredIndex !== null && (
        <div
          style={{
            position: "fixed",
            left: mousePos.x + 40,
            top: mousePos.y - 200,
            pointerEvents: "none",
            zIndex: 100,
            opacity: hoveredIndex !== null ? 1 : 0,
            transform: hoveredIndex !== null ? 'scale(1)' : 'scale(0.8)',
            transition: 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
          }}
          className="hidden lg:block w-[350px] h-[450px] overflow-hidden shadow-2xl"
        >
          <img
            src={works[hoveredIndex].img}
            alt="preview"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default OtherWork;