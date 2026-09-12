import React from 'react';
import { Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import cvEnglish from '@/assets/cvs/ABDELA_WALID_CV_EN.pdf';
import cvFrench from '@/assets/cvs/ABDELA_WALID_CV_FR.pdf';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20 pb-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Background paragraph */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              <span className="relative inline-block">
                <span className="gradient-text">{t('about.backgroundTitle')}</span>
                <span className="pointer-events-none absolute -inset-x-1 -bottom-1 h-2 rounded-full bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/30 blur-sm"></span>
              </span>
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              {t('about.bio')}
            </p>
          </div>

          {/* Right: Research Areas */}
          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="relative space-y-1">
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                  <span className="relative inline-block">
                    <span className="gradient-text">My Interests</span>
                    <span className="pointer-events-none absolute -inset-x-1 -bottom-1 h-2 rounded-full bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/30 blur-sm"></span>
                  </span>
                </h3>
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pl-5 text-lg font-medium list-disc marker:text-primary">
              <li>Neuro-Symbolic AI</li>
              <li>World Models</li>
              <li>Continual Learning</li>
              <li>Safe AI</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
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
                <a href={cvEnglish} download>Download CV (English)</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={cvFrench} download>Télécharger le CV (Français)</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
