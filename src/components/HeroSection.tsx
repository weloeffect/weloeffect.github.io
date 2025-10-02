import React, { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';
import me2 from '@/assets/me2.png';
import aboutMeImg from '@/assets/About_me.jpg';
import cvEnglish from '@/assets/cvs/CV_English.pdf';
import cvFrench from '@/assets/cvs/CV_francais.pdf';

const HeroSection = () => {
  const { t } = useLanguage();
  const [displayedName, setDisplayedName] = useState('');
  const fullName = t('hero.name');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullName.length) {
        setDisplayedName(fullName.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullName]);

  const scrollToProjects = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden geometric-gradient-bg">
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-xl float-animation" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-xl float-animation" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full ring-2 ring-primary/30 shadow-xl shadow-primary/10 bg-background/60 p-2">
              <img
                src={aboutMeImg}
                alt="Walid Abdela"
                className="w-full h-full rounded-full object-contain"
              />
            </div>
          </div>

          {/* Name with Typing Animation */}
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4">
            {displayedName}
            <span className="typing-cursor">|</span>
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium max-w-4xl mx-auto">
            {t('hero.title')}
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {t('hero.tagline')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button
              onClick={scrollToProjects}
              className="btn-hero group"
              size="lg"
            >
              {t('hero.cta')}
              {/* <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" /> */}
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border hover:border-primary transition-colors duration-300"
                >
                  <Download className="mr-2 h-5 w-5" />
                  {t('about.download')}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem asChild>
                  <a href={cvEnglish} download>
                    Download CV (English)
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href={cvFrench} download>
                    Télécharger le CV (Français)
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;