import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import profileImage from '../../Moi_main-transparent.png';

const HeroSection = () => {
  const { t } = useLanguage();
  const introEnd = t('hero.introEnd');
  const [typedIntro, setTypedIntro] = useState('');

  useEffect(() => {
    let characterIndex = 0;
    setTypedIntro('');

    const typingTimer = window.setInterval(() => {
      characterIndex += 1;
      setTypedIntro(introEnd.slice(0, characterIndex));

      if (characterIndex >= introEnd.length) {
        window.clearInterval(typingTimer);
      }
    }, 110);

    return () => window.clearInterval(typingTimer);
  }, [introEnd]);
// test commit for upload
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden geometric-gradient-bg">
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-xl float-animation" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-xl float-animation" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div>
              <img
                src={profileImage}
                alt="Walid Abdela"
                className="block w-64 md:w-80 h-auto"
              />
            </div>
          </div>

          {/* Introduction */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="block">
              <span className="gradient-text">{t('hero.introStart')}</span>{' '}
              <span
                className="smile-emoji inline-block text-foreground"
                role="img"
                aria-label="Smiling face"
              >
                😊
              </span>
            </span>
            <span className="gradient-text block mt-2">
              {typedIntro}
              <span className="typing-cursor">|</span>
            </span>
          </h1>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
