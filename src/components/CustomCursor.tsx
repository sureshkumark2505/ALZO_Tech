import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'view' | 'cta'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Detect touch / mobile screen
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const closestInteractive = target.closest('button, a, input, select, textarea, [role="button"]');
      const closestProject = target.closest('[data-cursor="view"]');
      const closestCta = target.closest('[data-cursor="cta"]');

      if (closestProject) {
        setCursorType('view');
      } else if (closestCta) {
        setCursorType('cta');
      } else if (closestInteractive) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Precision Center Dot */}
      <div 
        className="fixed w-2 h-2 -ml-1 -mt-1 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)] pointer-events-none z-50"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          transition: 'transform 0.05s ease-out'
        }}
      />

      {/* Trailing Responsive Glow Ring */}
      <div 
        className={`fixed -ml-5 -mt-5 rounded-full pointer-events-none z-40 transition-all duration-200 ease-out flex items-center justify-center font-mono text-[10px] tracking-wider uppercase font-semibold ${
          cursorType === 'view'
            ? 'w-16 h-16 -ml-8 -mt-8 bg-blue-600 text-white shadow-[0_4px_20px_rgba(37,99,235,0.4)] backdrop-blur-sm'
            : cursorType === 'cta'
            ? 'w-12 h-12 -ml-6 -mt-6 bg-gradient-to-r from-blue-500/15 to-violet-500/20 border border-blue-600/70 scale-125'
            : cursorType === 'pointer'
            ? 'w-10 h-10 -ml-5 -mt-5 border border-indigo-600/60 bg-indigo-500/10 scale-110'
            : 'w-8 h-8 border border-slate-400/40 bg-slate-900/5'
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      >
        {cursorType === 'view' && <span>VIEW</span>}
      </div>
    </div>
  );
};
