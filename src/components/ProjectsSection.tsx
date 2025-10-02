import React from 'react';
import cod3rImg from '@/assets/Cod3r.png';
import foundrMatchImg from '@/assets/FoundrMatch.png';
import nnAgentsImg from '@/assets/NN_agents.png';
import crawlerImg from '@/assets/crawler.png';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      titleKey: 'projects.project1.title',
      descKey: 'projects.project1.desc',
      tags: ['Python', 'LangChain/LangGraph', 'Groq', 'Streamlit'],
      github: 'https://github.com/weloeffect/Cod3r',
      image: cod3rImg,
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      id: 2,
      titleKey: 'projects.project2.title', 
      descKey: 'projects.project2.desc',
      tags: ['Python', 'LangChain', 'Groq', 'Streamlit'],
      github: 'https://github.com/weloeffect/FounderMatch',
      image: foundrMatchImg,
      gradient: 'from-green-500 to-teal-600',
    },
    {
      id: 3,
      titleKey: 'projects.project3.title',
      descKey: 'projects.project3.desc', 
      tags: ['Python', 'DeepProbLog', 'Transformers', 'Unsloth'],
      github: 'https://github.com/weloeffect/NN_agents',
      image: nnAgentsImg,
      gradient: 'from-orange-500 to-red-600',
    },
    {
      id: 4,
      titleKey: 'projects.project4.title',
      descKey: 'projects.project4.desc',
      tags: ['Python', 'LangChain/LangGraph', 'OpenAI', 'Gradio'],
      github: 'https://github.com/weloeffect/crawlers',
      image: crawlerImg,
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            {t('projects.title')}
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my expertise in AI and full-stack development.
          </p> */}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="glass-card group hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="p-0">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden rounded-t-2xl`}>
                  {/* Project Image */}
                  {project.image ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src={project.image} alt={t(project.titleKey)} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/80 text-6xl font-bold">
                        {project.id}
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button> */}
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Open GitHub">
                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                          <Github className="h-4 w-4" />
                        </Button>
                      </a>
                    ) : (
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  {t(project.titleKey)}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {t(project.descKey)}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="skill-pill">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

            
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        {/* <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-border hover:border-primary">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;