'use client';

interface ScribbleProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  arrow?: 'up' | 'down' | 'left' | 'right';
  color?: string;
}

export default function Scribble({ text, className = '', style = {}, arrow, color = '#1a73e8' }: ScribbleProps) {
  return (
    <div 
      className={`d-inline-flex flex-column align-items-center position-relative ${className}`} 
      style={{ ...style, pointerEvents: 'none', userSelect: 'none' }}
    >
      <span 
        className="fw-bold d-block" 
        style={{ 
          fontFamily: '"Caveat", cursive',
          fontSize: 'clamp(1rem, 4vw, 1.35rem)', 
          transform: 'rotate(-4deg)', 
          color: color,
          marginBottom: arrow === 'down' ? '2px' : '0',
          lineHeight: 1.1,
          opacity: 0.9,
          whiteSpace: 'nowrap'
        }}
      >
        {text}
      </span>
      {arrow === 'up' && (
        <svg viewBox="0 0 40 30" style={{ transform: 'rotate(180deg)', color: color, marginTop: '2px', width: 'clamp(20px, 3vw, 30px)', height: 'auto' }}>
          <path d="M10 25 C 20 25, 30 15, 30 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M25 10 L 30 5 L 35 10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )}
      {arrow === 'down' && (
        <svg viewBox="0 0 40 30" style={{ color: color, marginTop: '2px', width: 'clamp(20px, 3vw, 30px)', height: 'auto' }}>
          <path d="M10 5 C 20 5, 30 15, 30 25" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M25 20 L 30 25 L 35 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )}
      {arrow === 'left' && (
        <svg viewBox="0 0 40 30" style={{ transform: 'rotate(-90deg)', color: color, marginTop: '2px', width: 'clamp(20px, 3vw, 30px)', height: 'auto' }}>
          <path d="M10 5 C 20 5, 30 15, 30 25" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M25 20 L 30 25 L 35 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )}
    </div>
  );
}
