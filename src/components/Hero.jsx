import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImage from "../assets/images/prof.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const componentRef = useRef(null);
  const triggerRef = useRef(null);
  const headlineRef = useRef(null);
  const profileRef = useRef(null);
  const circleRef = useRef(null);
  const bgTextRef = useRef(null);
  const container3D = useRef(null);
  const floatingElementsRef = useRef(null);
  const scrollPromptRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!container3D.current || window.innerWidth < 1024) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const xRotation = (clientY / innerHeight - 0.5) * -15;
    const yRotation = (clientX / innerWidth - 0.5) * 15;

    gsap.to(container3D.current, {
      rotateX: xRotation,
      rotateY: yRotation,
      duration: 0.9,
      ease: "power2.out",
    });

    gsap.to(floatingElementsRef.current, {
      x: (clientX / innerWidth - 0.5) * -50,
      y: (clientY / innerHeight - 0.5) * -50,
      duration: 1.5,
      ease: "power1.out"
    });
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // FIX: Set initial hidden state via JS instead of CSS classes
        // This allows the browser to 'count' the LCP paint before GSAP hides it for animation
        gsap.set([profileRef.current, circleRef.current, bgTextRef.current, floatingElementsRef.current], { 
          opacity: 0, 
          scale: 0.6, 
          y: 100 
        });

        gsap.to(scrollPromptRef.current, {
          y: 10,
          opacity: 0.8,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        tl.to(scrollPromptRef.current, { 
          opacity: 0, 
          scale: 0.8, 
          pointerEvents: "none",
          duration: 0.2 
        }, 0)
        .fromTo(headlineRef.current, 
          { x: "100vw", opacity: 0 },
          { x: "0vw", opacity: 1, duration: 2, ease: "power2.inOut" },
          0.1
        )
        .to(headlineRef.current, {
          y: "350%",
          scale: 0.25,
          opacity: 0.3,
          duration: 2,
          ease: "power2.inOut"
        })
        .to([profileRef.current, circleRef.current, bgTextRef.current, floatingElementsRef.current], 
          { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: "expo.out", stagger: 0.1 },
          "-=1.5"
        );
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.set(scrollPromptRef.current, { display: "none" });
        gsap.set(headlineRef.current, { display: "none" });

        gsap.set([
          profileRef.current, 
          circleRef.current, 
          bgTextRef.current, 
          floatingElementsRef.current
        ], { 
          opacity: 1, 
          scale: 1, 
          y: 0 
        });
      });

      gsap.to(".ui-point", {
        y: "+=20",
        opacity: 0.4,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 1
      });

    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef} className="bg-black w-full min-h-screen overflow-x-hidden" onMouseMove={handleMouseMove}>
      <section 
        ref={triggerRef}
        className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden"
        style={{ perspective: "1200px" }}
      >
        
        {/* Background UI Decor */}
        <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
            <div className="ui-point absolute top-[15%] left-[5%] font-mono text-[10px] text-orange-700/60 leading-relaxed">
                <p>OBJ_DATA: 0x4F2A</p>
                <div className="w-12 h-[1px] bg-orange-900/40 mt-1"></div>
            </div>

            <div className="ui-point absolute bottom-[20%] right-[5%] font-mono text-[10px] text-orange-700/60 text-right">
                <p>LOC: 18.6298° N</p>
                <div className="w-12 h-[1px] bg-orange-900/40 mt-1 ml-auto"></div>
            </div>

            <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-orange-900/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] bg-orange-900/5 blur-[100px] rounded-full"></div>
        </div>

        {/* Animated Headline */}
        <div className="hidden lg:flex absolute inset-0 justify-center items-center pointer-events-none z-50">
          <h1 
            ref={headlineRef}
            className="text-[4rem] font-black text-orange-700 opacity-0 whitespace-nowrap px-4 uppercase italic tracking-tighter"
          >
            <span className="text-white">From Logic to Life—</span><span className="text-orange-700 drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">I Build What You Imagine.</span>
          </h1>
        </div>

        {/* 3D Container */}
        <div 
          ref={container3D} 
          className="relative flex flex-col items-center justify-center transform-gpu w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          
          {/* Background Name */}
          <div 
            ref={bgTextRef}
            className="absolute z-0 select-none pointer-events-none"
            style={{ transform: "translateZ(-80px)" }}
          >
            <h2 
              className="text-[18vw] lg:text-[16vw] font-black leading-none text-transparent whitespace-nowrap uppercase italic"
              style={{ 
                WebkitTextStroke: "1px rgba(194, 65, 12, 0.25)",
                letterSpacing: "-0.02em"
              }}
            >
              NILESH
            </h2>
          </div>

          {/* CIRCULAR LAYER */}
          <div className="relative z-10 flex flex-col items-center justify-center" style={{ transform: "translateZ(40px)" }}>
            
            {/* Scroll Prompt */}
            <div ref={scrollPromptRef} className="absolute z-50 flex flex-col items-center pointer-events-none hidden lg:flex">
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-orange-600 to-transparent mb-4"></div>
                <p className="text-orange-500 font-mono text-[11px] tracking-[0.5em] uppercase animate-pulse">Scroll to Discover</p>
                <div className="mt-4 w-5 h-8 border border-orange-700/50 rounded-full flex justify-center p-1">
                    <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce"></div>
                </div>
            </div>

            {/* Circle Backdrop - Removed opacity-0 */}
            <div ref={circleRef} className="absolute w-[280px] h-[280px] md:w-[500px] md:h-[500px] lg:w-[620px] lg:h-[620px] border border-orange-700/20 bg-orange-900/5 rounded-full -z-10" />

            {/* Profile Image - Removed opacity-0 */}
            <div className="relative inline-block p-[4px] lg:p-[8px] rounded-full border-2 border-orange-800/30 overflow-hidden bg-gradient-to-b from-orange-900/20 to-transparent" ref={profileRef}>
              <img
                src={profileImage}
                alt="Nilesh"
                loading="eager"
                fetchPriority="high"
                className="w-[270px] h-[270px] md:w-[480px] md:h-[485px] lg:w-[600px] lg:h-[605px] object-contain rounded-full brightness-90 contrast-110"
              />
            </div>

            <div className="lg:hidden mt-6 flex flex-col items-center">
                <span className="text-orange-700 text-[12px] tracking-[0.5em] uppercase font-bold mb-2">Nilesh Kaute</span>
                <div className="w-10 h-[1px] bg-orange-900/50"></div>
            </div>

            <div aria-hidden="true" className="hidden lg:block absolute -left-32 top-1/2 -rotate-90 text-orange-500/20 text-[10px] tracking-[1em] uppercase font-bold" style={{ contentVisibility: 'auto' }}>
              Java Full Stack
            </div>
            <div aria-hidden="true" className="hidden lg:block absolute -right-32 top-1/2 rotate-90 text-orange-500/20 text-[10px] tracking-[1em] uppercase font-bold" style={{ contentVisibility: 'auto' }}>
              Creative Tech
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;