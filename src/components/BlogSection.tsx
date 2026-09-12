import { ArrowUpRight, CalendarDays } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import posts from '@/data/substack-posts.json';

const BlogSection = () => {
  const { language, t } = useLanguage();

  const formatDate = (date: string) =>
    new Intl.DateTimeFormat(language === 'fr' ? 'fr-FR' : 'en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(date));

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-muted/30 px-4 py-20"
    >
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold gradient-text md:text-5xl">
            {t('blog.title')}
          </h2>
        </div>

        <div className={`grid gap-6 ${posts.length > 1 ? 'md:grid-cols-2 lg:grid-cols-3' : 'mx-auto max-w-3xl'}`}>
          {posts.map((post) => (
            <article key={post.url} className="glass-card group overflow-hidden">
              {post.image && (
                <img
                  src={post.image}
                  alt=""
                  className="h-52 w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
                />
              )}
              <div className="flex h-full flex-col p-7">
                <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                </div>
                <h3 className="text-2xl font-bold leading-tight text-foreground">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="mt-4 line-clamp-3 text-muted-foreground">{post.excerpt}</p>
                )}
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-foreground hover:underline"
                >
                  {t('blog.readmore')}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
