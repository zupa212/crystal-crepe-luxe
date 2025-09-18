import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User } from 'lucide-react';
import restaurantImg from '@/assets/restaurant-interior.jpg';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const heroRef = useRef<HTMLElement>(null);
  const articlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      if (heroRef.current) {
        gsap.fromTo(heroRef.current.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.5,
          }
        );
      }

      // Blog articles animations
      gsap.utils.toArray('.blog-article').forEach((article: any) => {
        gsap.fromTo(article,
          { opacity: 0, scale: 0.95, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: article,
              start: 'top 80%',
            },
          }
        );
      });

      // Parallax effect for featured article image
      if (articlesRef.current) {
        const featuredImg = articlesRef.current.querySelector('.featured-img');
        if (featuredImg) {
          gsap.to(featuredImg, {
            y: -30,
            ease: 'none',
            scrollTrigger: {
              trigger: featuredImg,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      }
    });

    return () => ctx.revert();
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Perfect Crêpe Batter',
      excerpt: 'Discover the secrets behind creating the perfect crêpe batter that results in delicate, golden crêpes every time.',
      author: 'Chef Marie Dubois',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: restaurantImg,
      featured: true,
    },
    {
      id: 2,
      title: 'Sweet vs. Savory: A Crêpe Journey',
      excerpt: 'Explore the endless possibilities of crêpes, from traditional sweet fillings to innovative savory combinations.',
      author: 'Julia Laurent',
      date: 'March 10, 2024',
      readTime: '7 min read',
      featured: false,
    },
    {
      id: 3,
      title: 'French Breakfast Traditions',
      excerpt: 'Learn about the cultural significance of crêpes in French cuisine and how they became a breakfast staple.',
      author: 'Pierre Moreau',
      date: 'March 5, 2024',
      readTime: '4 min read',
      featured: false,
    },
    {
      id: 4,
      title: 'Seasonal Ingredients Guide',
      excerpt: 'Make the most of each season with our guide to incorporating fresh, seasonal ingredients into your crêpes.',
      author: 'Sophie Chen',
      date: 'February 28, 2024',
      readTime: '6 min read',
      featured: false,
    },
    {
      id: 5,
      title: 'Behind the Scenes at Crystal Crepe',
      excerpt: 'Take a glimpse into our kitchen and meet the talented team that brings these delicious crêpes to life.',
      author: 'Team Crystal Crepe',
      date: 'February 20, 2024',
      readTime: '8 min read',
      featured: false,
    },
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 parallax-bg">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Stories, recipes, and insights from the world of French crêpes
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section ref={articlesRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Featured Article */}
          {featuredPost && (
            <article className="blog-article featured-article mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-primary text-primary-foreground rounded-full mb-4">
                    Featured
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button variant="default" className="btn-hero">
                    Read Full Article
                  </Button>
                </div>
                <div className="featured-img">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="rounded-2xl shadow-elegant w-full h-auto"
                  />
                </div>
              </div>
            </article>
          )}

          {/* Regular Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="blog-article crepe-card">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span className="font-medium">{post.author}</span>
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="outline" size="sm" className="btn-outline-hero text-sm px-4 py-2">
                    Read More
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest recipes, stories, and updates from Crystal Crepe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background/90 border border-background/20 focus:outline-none focus:ring-2 focus:ring-primary-glow"
            />
            <Button variant="secondary" size="lg" className="px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;