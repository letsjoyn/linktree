
import { LucideIcon } from 'lucide-react';

interface LinkCardProps {
  title: string;
  icon: LucideIcon;
  href: string;
  delay?: number;
}

const LinkCard = ({ title, icon: Icon, href, delay = 0 }: LinkCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="neon-card rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center sm:space-x-4 space-y-3 sm:space-y-0 transform transition-all duration-300 hover:scale-105 pulse-glow min-h-[120px] sm:min-h-[100px]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-neon-green flex-shrink-0">
        <Icon size={28} className="sm:w-8 sm:h-8" />
      </div>
      <div className="text-center sm:text-left">
        <h3 className="text-terminal font-semibold text-base sm:text-lg tracking-wide">
          {title}
        </h3>
        <div className="text-muted-foreground text-xs sm:text-sm">
          Click to visit
        </div>
      </div>
    </a>
  );
};

export default LinkCard;
