
import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypewriterText = ({ text, delay = 60, className = "" }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      // After typing is complete, continue blinking cursor for a while
      const cursorTimeout = setTimeout(() => {
        setShowCursor(false);
      }, 2000);
      return () => clearTimeout(cursorTimeout);
    }
  }, [currentIndex, text, delay]);

  // Cursor blinking effect with realistic timing
  useEffect(() => {
    if (showCursor) {
      const interval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 530);
      return () => clearInterval(interval);
    }
  }, [showCursor]);

  return (
    <div className={`${className} relative inline-block`}>
      <span>{displayText}</span>
      {currentIndex <= text.length && (
        <span 
          className={`inline-block bg-terminal ml-1 ${
            showCursor ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-100 macos-cursor`}
        />
      )}
    </div>
  );
};

export default TypewriterText;
