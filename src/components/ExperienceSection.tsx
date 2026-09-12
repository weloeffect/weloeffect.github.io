import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const ExperienceSection = () => {
  const { t } = useLanguage();

  const getOptional = (key: string) => {
    const value = t(key);
    return value === key || !String(value).trim() ? undefined : value;
  };

  const splitToBullets = (text?: string) => {
    if (!text) return [] as string[];
    return text
      .split(/\n|\r|•/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  };

  const workExperience = [
    {
      title: t('experience.work1.title'),
      company: t('experience.work1.company'),
      period: t('experience.work1.period'),
      description: t('experience.work1.description'),
      location: getOptional('experience.work1.location'),
    },
    {
      title: t('experience.work2.title'),
      company: t('experience.work2.company'),
      period: t('experience.work2.period'),
      description: t('experience.work2.description'),
      location: getOptional('experience.work2.location'),
    },
    {
      title: t('experience.work3.title'),
      company: t('experience.work3.company'),
      period: t('experience.work3.period'),
      description: t('experience.work3.description'),
      location: getOptional('experience.work3.location'),
    },
  ];

  const education = [
    {
      degree: t('experience.edu1.degree'),
      institution: t('experience.edu1.institution'),
      period: t('experience.edu1.period'),
      description: getOptional('experience.edu1.description'),
      location: getOptional('experience.edu1.location'),
      courses: splitToBullets(getOptional('experience.edu1.courses')),
      activities: splitToBullets(getOptional('experience.edu1.activities')),
    },
    {
      degree: t('experience.edu2.degree'),
      institution: t('experience.edu2.institution'),
      period: t('experience.edu2.period'),
      description: getOptional('experience.edu2.description'),
      location: getOptional('experience.edu2.location'),
      courses: splitToBullets(getOptional('experience.edu2.courses')),
      activities: splitToBullets(getOptional('experience.edu2.activities')),
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t('experience.title')}
          </h2>
          {/* <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p> */}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold">{t('experience.workTitle')}</h3>
            </div>
            
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover-scale border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-foreground/80">
                      {job.company}
                    </CardDescription>
                    <div className="flex items-center text-sm text-muted-foreground mt-2">
                      <Calendar size={14} className="mr-2" />
                      {job.period}
                    </div>
                    {job.location && (
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin size={14} className="mr-2" />
                        {job.location}
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    {splitToBullets(job.description).length > 0 ? (
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {splitToBullets(job.description).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                <GraduationCap className="text-secondary" size={24} />
              </div>
              <h3 className="text-2xl font-bold">{t('experience.eduTitle')}</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover-scale border-l-4 border-l-secondary">
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <CardDescription className="text-base font-medium text-foreground/80">
                      {edu.institution}
                    </CardDescription>
                    <div className="flex items-center text-sm text-muted-foreground mt-2">
                      <Calendar size={14} className="mr-2" />
                      {edu.period}
                    </div>
                    {edu.location && (
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin size={14} className="mr-2" />
                        {edu.location}
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    {edu.description && (
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        {edu.description}
                      </p>
                    )}
                    {edu.courses && edu.courses.length > 0 && (
                      <div className="mb-3">
                        <div className="text-sm font-semibold mb-1">Courses</div>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          {edu.courses.map((c: string, i: number) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {edu.activities && edu.activities.length > 0 && (
                      <div>
                        <div className="text-sm font-semibold mb-1">Activities</div>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          {edu.activities.map((a: string, i: number) => (
                            <li key={i}>{a}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
