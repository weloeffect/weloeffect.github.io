import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Monitor, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.experience', href: '#experience' },
    { key: 'nav.projects', href: '#projects' },
    { key: 'nav.skills', href: '#skills' },
    { key: 'nav.blog', href: '#blog' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const themeIcons = {
    light: Sun,
    dark: Moon,
    system: Monitor,
  };

  const ThemeIcon = themeIcons[theme];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo removed as requested */}

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-muted"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>

          {/* Theme and Language Controls */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Theme Switcher */}
            <div className="flex items-center bg-muted rounded-lg p-1">
              {(['light', 'dark', 'system'] as const).map((themeName) => {
                const Icon = themeIcons[themeName];
                return (
                  <button
                    key={themeName}
                    onClick={() => setTheme(themeName)}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      theme === themeName 
                        ? 'bg-primary text-primary-foreground shadow-sm' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-background'
                    }`}
                    title={`${themeName} theme`}
                  >
                    <Icon size={16} />
                  </button>
                );
              })}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center bg-muted rounded-lg p-1">
              <button
                onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background transition-all duration-200"
              >
                <Globe size={16} />
                <span className="uppercase">{language}</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted w-full text-left transition-colors duration-200"
              >
                {t(item.key)}
              </button>
            ))}
            
            {/* Mobile Theme and Language Controls */}
            <div className="flex items-center justify-between px-3 py-2">
              <div className="flex items-center space-x-2">
                <ThemeIcon size={20} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Theme</span>
              </div>
              <div className="flex items-center space-x-1">
                {(['light', 'dark', 'system'] as const).map((themeName) => (
                  <button
                    key={themeName}
                    onClick={() => setTheme(themeName)}
                    className={`px-2 py-1 rounded text-xs transition-all duration-200 ${
                      theme === themeName 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {themeName}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between px-3 py-2">
              <div className="flex items-center space-x-2">
                <Globe size={20} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Language</span>
              </div>
              <button
                onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                className="px-3 py-1 rounded bg-muted text-muted-foreground hover:text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-sm uppercase font-medium"
              >
                {language === 'en' ? 'FR' : 'EN'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;