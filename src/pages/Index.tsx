import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';  
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import AboutSections from '@/components/AboutSections';
import ProjectsSection from '@/components/ProjectsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main className="md:pl-64">
            <AboutSections />
            <ProjectsSection />
            <BlogSection />
            <ContactSection />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
