import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const currentScroll = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight > 0) {
      setScrollProgress((currentScroll / scrollHeight) * 100);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-[100] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-cloudy-pink via-cloudy-mist to-cloudy-purple shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
