
interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  const words = text.split(' ');
  const colors = [
    'text-neon-cyan',
    'text-neon-purple', 
    'text-neon-green',
    'text-yellow-400',
    'text-pink-400',
    'text-blue-400',
    'text-orange-400',
    'text-red-400'
  ];

  return (
    <span
      className={`font-mono font-semibold ${className}`}
      style={{
        fontFamily: "'JetBrains Mono', 'Courier New', monospace",
      }}
    >
      {words.map((word, index) => (
        <span key={index} className={colors[index % colors.length]}>
          {word}
          {index < words.length - 1 && ' '}
        </span>
      ))}
    </span>
  );
};

export default GlitchText;
