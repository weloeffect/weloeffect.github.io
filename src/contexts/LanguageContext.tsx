import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.name': 'Walid Abdela',
    'hero.title': 'AI Research ➕ Engineering',
    'hero.tagline': 'Bringing Intelligent Systems with Positive Real-World Impacts to Life 🦾',
    'hero.cta': 'Get in Touch',
    
    // About Section
    'about.title': 'About Me',
    'about.bio': `I am an Artificial Intelligence Researcher and Engineer with a strong focus on building intelligent, 
    scalable, and future-ready systems. My experience spans from cutting-edge research and development to full-stack implementations, 
    giving me a unique balance of academic insight and practical expertise. I have worked on creating AI-powered applications, optimizing backend systems,
    and developing knowledge-driven automation solutions that accelerate innovation. 
    I am particularly passionate about advancing the reasoning capabilities of AI agents and exploring pathways toward achieving General Intelligence.
`,
    'about.download': 'View CV',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.demo': 'Demo',
    'projects.github': 'GitHub',
    'projects.project1.title': 'Cod3r',
    'projects.project1.desc': 'AI agent capable of transforming a user request into a complete application.',
    'projects.project2.title': 'FounderMatch',
    'projects.project2.desc': 'A recommendation engine for individuals to find like-minded founders for an adventure of a lifetime.',
    'projects.project3.title': 'NeuroSymbolic Agents',
    'projects.project3.desc': 'AI agents for healthcare that combine neural learning with symbolic reasoning to deliver interpretable, reliable, and domain-aware clinical decision support',
    'projects.project4.title': 'Crawlers',
    'projects.project4.desc': 'A multi-agent system that autonomously navigates, extracts, and organizes web data through collaborative agent coordination.',

    // Experience Section
    'experience.title': 'Experience',
    'experience.subtitle': 'My professional journey and academic background',
    'experience.workTitle': 'Work',
    'experience.eduTitle': 'Education',
    'experience.work1.title': 'AI Engineer',
    'experience.work1.company': 'Independent',
    'experience.work1.period': 'May 2024 - Present',
    'experience.work1.description': 'Providing state-of-the-art AI solutions and consultancy.',
    'experience.work1.location': 'Remote',
    'experience.work2.title': 'Research Engineering Intern',
    'experience.work2.company': 'École des Mines de Saint-Étienne',
    'experience.work2.period': 'April 2025 - July 2025',
    'experience.work2.description': `Ideated and Implemented an algorithm for automating the synthesis of JaCaMo-based agents based on the available information on a Knowledge Graph, cutting manual setup by 100% and enabling multiple agents to be generated instantly.
Modeled and structured inter-agent communication protocols to be stored within a Knowledge Graph, boosting simulation experimentation throughput by 70%.
`,
    'experience.work2.location': 'Saint-Étienne, France',
    'experience.work3.title': 'Software Engineer',
    'experience.work3.company': 'Borsa',
    'experience.work3.period': 'December 2022 - May 2024',
    'experience.work3.description': `Developed and optimized Node.js/Express APIs to enhance scalability, resulting in a 65% increase in system reliability.
Migrated a codebase from JavaScript to TypeScript, integrating state management with Redux Saga to improve deployment speed by 30% and reduce production bugs by 40%.
Collaborated on CI/CD pipelines to streamline deployments and improve testing processes.
`,
    'experience.work3.location': 'Washington, DC, U.S.A',

    'experience.edu1.degree': 'Master of Science in Cyber Physical and Social Systems: Artificial Intelligence and Internet of Things',
    'experience.edu1.institution': 'Université de Lyon + École des Mines de Saint-Étienne + Université Jean Monnet  ',
    'experience.edu1.period': 'September 2024 - July 2026',
    'experience.edu1.location': 'Lyon / Saint-Étienne, France',
    'experience.edu1.courses': `
Machine Learning
Symbolic Representation
Multi-Agent Systems
Knowledge Graphs
Reinforcement Learning
Data Mining
Statistics
Internet of Things`,
    'experience.edu1.activities': `Digital Twins for Health
AI for Industry 4.0`,
    

    'experience.edu2.degree': 'Bachelor of Science in Computer Science',
    'experience.edu2.institution': 'Addis Ababa University',
    'experience.edu2.period': 'September 2018 - July 2022',
    'experience.edu2.location': 'Addis Ababa, Ethiopia',
    'experience.edu2.courses': `
Artificial Intelligence
Object-Oriented Programming
Operating Systems
Computer Graphics
Calculus
Discrete Mathematics
Probability
Data Structures`,
    'experience.edu2.activities': `ACM Programming Team
Open-source Club
GDSC Club`,

    
    // Skills Section
    'skills.title': 'Skills',
    'skills.ai': 'Artificial Intelligence',
    'skills.cloud': 'Cloud & MLOps',
    'skills.programming': 'Programming Languages',
    'skills.fullstack': 'Full-Stack Development',
    
    // Blog Section
    'blog.title': 'Latest Articles',
    'blog.readmore': 'Read More',
    'blog.post1.title': 'The Future of AI in Healthcare',
    'blog.post1.excerpt': 'Exploring how artificial intelligence is revolutionizing medical diagnosis and treatment.',
    'blog.post2.title': 'Building Scalable ML Pipelines',
    'blog.post2.excerpt': 'Best practices for creating robust and scalable machine learning production systems.',
    'blog.post3.title': 'Reinforcement Learning in Real-World Applications',
    'blog.post3.excerpt': 'Practical applications of RL algorithms in autonomous systems and decision-making.',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.footer': '© 2025 Walid Abdela. All rights reserved.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.name': 'Walid Abdela',
    'hero.title': 'IA Recherche ➕ Ingénierie',
    'hero.tagline': 'Donner vie à des systèmes intelligents à impact positif réel 🦾',
    'hero.cta': 'Voir les Projets',
    
    // About Section
    'about.title': 'À propos de moi',
    'about.bio': 'Je suis un Ingénieur IA spécialisé dans la création d\'applications intelligentes utilisant des technologies de pointe telles que l\'apprentissage automatique, le NLP, l\'apprentissage par renforcement et le développement IA full-stack.',
    'about.download': 'Télécharger CV',
    
    // Projects Section
    'projects.title': 'Projets phares',
    'projects.demo': 'Démo',
    'projects.github': 'GitHub',
    'projects.project1.title': 'Système de Logistique Alimenté par IA',
    'projects.project1.desc': 'Système de gestion logistique intelligent utilisant l\'apprentissage automatique pour l\'optimisation des itinéraires et la prévision de la demande.',
    'projects.project2.title': 'Application SaaS avec Intégration ML',
    'projects.project2.desc': 'Plateforme SaaS full-stack avec analyses prédictives et capacités de prise de décision automatisée.',
    'projects.project3.title': 'Système d\'Irrigation Intelligent IA & IoT',
    'projects.project3.desc': 'Système d\'irrigation IoT avec surveillance des cultures pilotée par IA et algorithmes d\'optimisation de l\'eau.',
    'projects.project4.title': 'Plateforme Marketplace d\'Agents IA',
    'projects.project4.desc': 'Marketplace pour agents IA avec correspondance intelligente et fonctionnalités de déploiement automatisé.',

    // Experience Section
    'experience.title': 'Expérience',
    'experience.subtitle': 'Mon parcours professionnel et académique',
    'experience.workTitle': 'Expérience',
    'experience.eduTitle': 'Formation',
    'experience.work1.title': 'Ingénieur IA',
    'experience.work1.company': 'Indépendant',
    'experience.work1.period': 'Mai 2024 - Présent',
    'experience.work1.description': 'Fourniture de solutions IA de pointe et de conseils.',
    'experience.work1.location': 'À distance',
    'experience.work2.title': 'Stagiaire Ingénieur Recherche',
    'experience.work2.company': 'École des Mines de Saint-Étienne',
    'experience.work2.period': 'Avril 2025 - Juillet 2025',
    'experience.work2.description': `Conception et implémentation d\'un algorithme pour automatiser la synthèse d\'agents basés sur JaCaMo à partir d\'un graphe de connaissances, éliminant la configuration manuelle et permettant la génération instantanée de plusieurs agents.
Modélisation et structuration de protocoles de communication inter-agents stockés dans un graphe de connaissances, augmentant le débit d\'expérimentation de 70%.`,
    'experience.work2.location': 'Saint-Étienne, France',
    'experience.work3.title': 'Ingénieur Logiciel',
    'experience.work3.company': 'Borsa',
    'experience.work3.period': 'Décembre 2022 - Mai 2024',
    'experience.work3.description': `Développement et optimisation d\'APIs Node.js/Express pour améliorer l\'évolutivité, augmentant la fiabilité du système de 65%.
Migration d\'une base de code de JavaScript vers TypeScript, intégration de Redux Saga pour améliorer la vitesse de déploiement de 30% et réduire les bugs en production de 40%.
Collaboration sur des pipelines CI/CD pour rationaliser les déploiements et améliorer les tests.`,
    'experience.work3.location': 'Addis-Abeba, Éthiopie',
    'experience.edu1.degree': 'Master en systèmes cyber-physiques et sociaux : IA et Internet des objets',
    'experience.edu1.institution': 'Université de Lyon + École des Mines de Saint-Étienne + Université Jean Monnet',
    'experience.edu1.period': 'Septembre 2024 - Juillet 2026',
    'experience.edu1.location': 'Lyon / Saint-Étienne, France',
   'experience.edu1.courses': `Apprentissage automatique
Représentation symbolique
Systèmes multi‑agents
Graphes de connaissances
Apprentissage par renforcement
Fouille de données
Statistiques
Internet des objets`,
    'experience.edu1.activities': `Jumeaux numériques pour la santé
IA pour l'industrie 4.0`,
    'experience.edu2.degree': 'Licence en Informatique',
    'experience.edu2.institution': 'Université d\'Addis-Abeba',
    'experience.edu2.period': 'Septembre 2018 - Juillet 2022',
    'experience.edu2.location': 'Addis-Abeba, Éthiopie',
    'experience.edu2.courses': `Structures de données
Systèmes d\'exploitation
Systèmes distribués`,
    'experience.edu2.activities': `Équipe de programmation ACM
Club open-source`,

    
    // Skills Section
    'skills.title': 'Compétences',
    'skills.ai': 'Intelligence Artificielle',
    'skills.cloud': 'Cloud & MLOps',
    'skills.programming': 'Langages de Programmation',
    'skills.fullstack': 'Développement Full-Stack',
    
    // Blog Section
    'blog.title': 'Derniers Articles',
    'blog.readmore': 'Lire Plus',
    'blog.post1.title': 'L\'Avenir de l\'IA dans la Santé',
    'blog.post1.excerpt': 'Explorer comment l\'intelligence artificielle révolutionne le diagnostic médical et le traitement.',
    'blog.post2.title': 'Construire des Pipelines ML Évolutifs',
    'blog.post2.excerpt': 'Meilleures pratiques pour créer des systèmes de machine learning robustes et évolutifs en production.',
    'blog.post3.title': 'Apprentissage par Renforcement dans les Applications Réelles',
    'blog.post3.excerpt': 'Applications pratiques des algorithmes RL dans les systèmes autonomes et la prise de décision.',
    
    // Contact Section
    'contact.title': 'Contactez-Moi',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le Message',
    'contact.footer': '© 2025 Walid Abdela. Tous droits réservés.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};