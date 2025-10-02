import React from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const BlogSection = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      titleKey: 'blog.post1.title',
      excerptKey: 'blog.post1.excerpt',
      category: 'Healthcare AI',
      readTime: '8 min read',
      date: '2025-01-15',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      id: 2,
      titleKey: 'blog.post2.title',
      excerptKey: 'blog.post2.excerpt', 
      category: 'MLOps',
      readTime: '12 min read',
      date: '2025-01-10',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      id: 3,
      titleKey: 'blog.post3.title',
      excerptKey: 'blog.post3.excerpt',
      category: 'Reinforcement Learning',
      readTime: '15 min read',
      date: '2025-01-05',
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            {t('blog.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on the latest developments in AI and machine learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={post.id} className="glass-card group hover:scale-105 transition-all duration-300 cursor-pointer" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="p-0">
                <div className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden rounded-t-2xl`}>
                  {/* Blog Image Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/80 text-4xl font-bold">
                      AI
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/20 text-white border-white/30">
                      {post.category}
                    </Badge>
                  </div>
                  
                  {/* Read More Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {t(post.titleKey)}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {t(post.excerptKey)}
                </p>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm text-muted-foreground">Walid Abdela</span>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="group/arrow hover:text-primary">
                    {t('blog.readmore')}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/arrow:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Blog Posts */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-border hover:border-primary">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="glass-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Stay Updated
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to get the latest articles on AI, machine learning, and technology trends delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                />
                <Button className="btn-hero">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                No spam, unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;