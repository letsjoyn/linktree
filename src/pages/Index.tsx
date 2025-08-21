
import { useState, useEffect } from 'react';
import { Linkedin, Github, Twitter, Swords, Puzzle, Youtube, Instagram, Cloud } from 'lucide-react';
import MatrixRain from '../components/MatrixRain';
import TypewriterText from '../components/TypewriterText';
import GlitchText from '../components/GlitchText';
import LinkCard from '../components/LinkCard';

const Index = () => {
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    // Show links after typewriter animation completes (reduced time due to faster typing)
    const timer = setTimeout(() => {
      setShowLinks(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const links = [
    {
      title: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/letsjoyn/',
      delay: 100
    },
    {
      title: 'GitHub',
      icon: Github,
      href: 'https://github.com/letsjoyn',
      delay: 200
    },
    {
      title: 'Twitter/X',
      icon: Twitter,
      href: 'https://x.com/letsjoyn',
      delay: 300
    },
    {
      title: 'YouTube',
      icon: Youtube,
      href: 'https://youtube.com/@letsjoyn',
      delay: 400
    },
    {
      title: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/letsjoyn',
      delay: 500
    },
    {
      title: 'Codeforces',
      icon: Swords,
      href: 'https://codeforces.com/profile/joynnayvedya',
      delay: 600
    },
    {
      title: 'LeetCode',
      icon: Puzzle,
      href: 'https://leetcode.com/u/letsjoyn/',
      delay: 700
    },
    {
      title: 'AWS Builder ID',
      icon: Cloud,
      href: 'https://community.aws/@letsjoyn',
      delay: 800
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <MatrixRain />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto">
            <img
              src="/lovable-uploads/a93029cc-2bbe-4a09-bb32-5c6bd97f5ab3.png"
              alt="Nayvedya Shrivastava"
              className="w-full h-full rounded-full object-cover border-2 border-neon-green shadow-lg profile-glow"
            />
            <div className="absolute inset-0 rounded-full border-2 border-neon-cyan animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Main Title with Typewriter Effect */}
        <div className="text-center mb-16">
          <TypewriterText
            text="Hi! I am Nayvedya Shrivastava"
            delay={60}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-terminal mb-4"
          />
          
          <div className="mt-6 md:mt-8">
            <GlitchText
              text="< connect with this different and unique personality />"
              className="text-base sm:text-lg md:text-xl opacity-90 font-semibold"
            />
          </div>
        </div>

        {/* Links Section */}
        <div 
          className={`w-full px-4 transition-all duration-1000 ${
            showLinks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {links.map((link, index) => (
              <LinkCard
                key={link.title}
                title={link.title}
                icon={link.icon}
                href={link.href}
                delay={link.delay}
              />
            ))}
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-muted-foreground text-xs sm:text-sm font-mono">
          <div className="flex items-center space-x-2">
            <span className="text-neon-green">$</span>
            <span className="hidden sm:inline">./portfolio --version 1.0.0</span>
            <span className="sm:hidden">v1.0.0</span>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 text-muted-foreground text-xs sm:text-sm font-mono">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
            <span>ONLINE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
