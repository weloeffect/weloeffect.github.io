import React from 'react';
import { Brain, Cloud, Code, Layers, Database, Cpu, Globe, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const SkillsSection = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      titleKey: 'skills.ai',
      icon: Brain,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      skills: [
        'Machine Learning',
        'Deep Learning',
        'Natural Language Processing',
        'Computer Vision', 
        'Reinforcement Learning',
        'MLOps',
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'Hugging Face'
      ]
    },
    {
      titleKey: 'skills.cloud',
      icon: Cloud,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      skills: [
        'AWS',
        'Azure',
        'Google Cloud',
        'Docker',
        'Kubernetes',
        'CI/CD',
        'Terraform',
        'MLflow',
        'Kubeflow',
        'Apache Airflow'
      ]
    },
    {
      titleKey: 'skills.programming',
      icon: Code,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      skills: [
        'Python',
        'JavaScript/TypeScript',
        'SQL',
        'R',
        'Java',
        'C++',
        'Go',
        'Rust',
        'MATLAB',
        'Scala'
      ]
    },
    {
      titleKey: 'skills.fullstack',
      icon: Layers,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      skills: [
        'React',
        'Next.js',
        'Node.js',
        'FastAPI',
        'Django',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'GraphQL',
        'REST APIs'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            {t('skills.title')}
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent systems from conception to deployment.
          </p> */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {t(category.titleKey)}
                  </h3>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="skill-pill text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Stats */}
        {/* <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Database className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Database Technologies</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Cpu className="h-8 w-8 text-accent" />
            </div>
            <div className="text-3xl font-bold text-accent mb-2">25+</div>
            <div className="text-sm text-muted-foreground">AI/ML Frameworks</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-secondary" />
            </div>
            <div className="text-3xl font-bold text-secondary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Cloud Platforms</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Projects Built</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SkillsSection;