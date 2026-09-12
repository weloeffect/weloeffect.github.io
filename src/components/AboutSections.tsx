import { useEffect, useRef, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';

const AboutSections = () => {
  const [activePanel, setActivePanel] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const activePanelRef = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let isWheelLocked = false;
    let lockUntil = 0;
    let releaseTimer: number | undefined;

    const scheduleUnlock = () => {
      window.clearTimeout(releaseTimer);
      const remainingTransition = Math.max(0, lockUntil - Date.now());
      releaseTimer = window.setTimeout(() => {
        isWheelLocked = false;
      }, Math.max(220, remainingTransition));
    };

    const handleWheel = (event: globalThis.WheelEvent) => {
      if (isWheelLocked) {
        event.preventDefault();
        lockUntil = Math.max(lockUntil, Date.now() + 220);
        scheduleUnlock();
        return;
      }

      if (Math.abs(event.deltaY) < 8) return;

      const nextPanel = event.deltaY > 0 ? 1 : 0;
      if (nextPanel === activePanelRef.current) return;

      event.preventDefault();
      isWheelLocked = true;
      lockUntil = Date.now() + 750;
      activePanelRef.current = nextPanel;
      setActivePanel(nextPanel);
      scheduleUnlock();
    };

    section.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      section.removeEventListener('wheel', handleWheel);
      window.clearTimeout(releaseTimer);
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" aria-label="About" className="overflow-hidden">
      <div
        className="flex items-stretch transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activePanel * 100}%)` }}
      >
        <div className="w-full shrink-0">
          <HeroSection />
        </div>
        <div className="w-full shrink-0">
          <AboutSection />
        </div>
      </div>
    </section>
  );
};

export default AboutSections;
