import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/walidabdela.pro@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: 'Sending failed',
        description: 'Please try again or email me directly.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'walidabdela.pro@gmail.com',
      href: 'mailto:walidabdela.pro@gmail.com',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Phone,
      title: 'Phone', 
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Available Worldwide',
      href: null,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/walid-abdela/',
      color: 'text-blue-600 hover:text-blue-700',
      bgColor: 'bg-blue-600/10 hover:bg-blue-600/20'
    },
    {
      icon: Github,
      href: 'https://github.com/weloeffect',
      color: 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100',
      bgColor: 'bg-gray-700/10 hover:bg-gray-700/20 dark:bg-gray-300/10'
    },
    {
      icon: Twitter,
      href: 'https://x.com/Welo3ffect',
      color: 'text-sky-500 hover:text-sky-600',
      bgColor: 'bg-sky-500/10 hover:bg-sky-500/20'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            {t('contact.title')}
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to work together? Let's discuss your next AI project or collaboration opportunity.
          </p> */}
        </div>

        <div className="space-y-8">
          {/* Contact Form - centered */}
          <Card className="glass-card max-w-xl mx-auto w-full">
            <CardHeader>
              <h3 className="text-2xl font-bold text-foreground">Send a Message</h3>
              <p className="text-muted-foreground">
                I'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.name')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.email')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.message')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full resize-none"
                    placeholder="Tell me about your project or question..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-hero w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      {t('contact.send')}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Links - below form, centered */}
          <Card className="glass-card max-w-xl mx-auto w-full">
            <CardContent className="p-6">
              <h4 className="font-semibold text-foreground mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${social.bgColor} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110`}
                    >
                      <Icon className={`h-6 w-6 ${social.color}`} />
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            {t('contact.footer')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;