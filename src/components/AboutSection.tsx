import React from 'react';
import { Brain, Globe, Server, Target, Shield, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            {t('about.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Background paragraph */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              <span className="relative inline-block">
                <span className="gradient-text">Background</span>
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
                    <span className="gradient-text">What I’m exploring</span>
                    <span className="pointer-events-none absolute -inset-x-1 -bottom-1 h-2 rounded-full bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/30 blur-sm"></span>
                  </span>
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-background/80 backdrop-blur hover:border-primary/50 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-4 flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center ring-1 ring-primary/20">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">NeuroSymbolic AI</div>
                    <div className="text-sm text-muted-foreground">Merging symbolic reasoning with neural learning to push AI closer to true general intelligence.</div>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-background/80 backdrop-blur hover:border-accent/50 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-4 flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center ring-1 ring-accent/20">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">General World Models</div>
                    <div className="text-sm text-muted-foreground">Building predictive models that capture and generalize real-world dynamics.</div>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-background/80 backdrop-blur hover:border-secondary/50 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-4 flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center ring-1 ring-secondary/20">
                    <Server className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Scalable AI Systems</div>
                    <div className="text-sm text-muted-foreground">Designing robust AI infrastructures that grow efficiently with demand.</div>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-background/80 backdrop-blur hover:border-primary/50 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-4 flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center ring-1 ring-primary/20">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">AI Alignment</div>
                    <div className="text-sm text-muted-foreground">Ensuring advanced AI systems remain aligned with human goals and values.</div>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-background/80 backdrop-blur hover:border-accent/50 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-4 flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center ring-1 ring-accent/20">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">AI Safety</div>
                    <div className="text-sm text-muted-foreground">Reducing risks and fostering safe, reliable AI integration into society.</div>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-background/80 backdrop-blur hover:border-secondary/50 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-4 flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center ring-1 ring-secondary/20">
                    <Eye className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Explainable AI</div>
                    <div className="text-sm text-muted-foreground">Making AI decisions transparent, interpretable, and trustworthy.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;