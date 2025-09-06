import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedFooter = () => {
  const footerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const text = textRef.current;
    const nav = navRef.current;
    const background = backgroundRef.current;

    if (!footer || !text || !nav || !background) return;

    // Create timeline for footer animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate background gradient
    tl.fromTo(background, 
      { 
        opacity: 0,
        scale: 0.8,
        rotation: -5
      },
      { 
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: "power3.out"
      }
    );

    // Animate main text
    tl.fromTo(text.children, 
      { 
        y: 100,
        opacity: 0,
        rotation: 10
      },
      { 
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
      }, "-=0.6"
    );

    // Animate navigation
    tl.fromTo(nav.children, 
      { 
        y: 50,
        opacity: 0,
        scale: 0.8
      },
      { 
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "elastic.out(1, 0.5)"
      }, "-=0.4"
    );

    // Floating animation for background
    gsap.to(background, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const navItems = [
    { label: "Work", href: "/work", color: "from-yellow-400 to-orange-500" },
    { label: "About", href: "/about", color: "from-pink-400 to-rose-500" },
    { label: "Contact", href: "/contact", color: "from-purple-400 to-indigo-500" },
    { label: "LinkedIn", href: "#", color: "from-blue-400 to-cyan-500" },
    { label: "Instagram", href: "#", color: "from-teal-400 to-green-500" },
    { label: "Dribbble", href: "#", color: "from-green-400 to-emerald-500" },
  ];

  return (
    <footer ref={footerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(119, 255, 198, 0.3) 0%, transparent 50%)
          `
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Content */}
        <div ref={textRef} className="mb-16 pt-20">
          <motion.div
            className="inline-block mb-8"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text text-6xl font-script font-bold">
              Ahmad Bilal
            </span>
          </motion.div>
          
          <h2 className="text-6xl md:text-8xl font-sans font-bold text-white mb-8 leading-tight">
            Design that
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
              matters.
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Principal Product Designer crafting intuitive experiences through UX research, UI design, animations, and information architecture. Let's build something extraordinary together.
          </p>
        </div>

        {/* Navigation Grid */}
        <div ref={navRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto mb-16">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="group relative"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className={`
                relative overflow-hidden rounded-2xl p-6 
                bg-gradient-to-br ${item.color}
                shadow-lg group-hover:shadow-2xl
                transition-all duration-300
              `}>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                <span className="relative z-10 text-white font-bold text-lg">
                  {item.label}
                </span>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-gray-500 text-sm">
            © 2024 Greater. All rights reserved. Built with passion and purpose.
          </p>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-40 right-32 w-6 h-6 bg-pink-400 rounded-full opacity-40 animate-bounce" />
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-blue-400 rounded-full opacity-50 animate-ping" />
      <div className="absolute bottom-20 right-20 w-5 h-5 bg-green-400 rounded-full opacity-30 animate-pulse" />
    </footer>
  );
};

export default AnimatedFooter;
