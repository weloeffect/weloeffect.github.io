import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';  
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import ExperienceSection from '@/components/ExperienceSection';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
            {/* <BlogSection /> */}
            <ContactSection />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;