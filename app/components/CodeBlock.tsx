'use client';

import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'HTML' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="position-relative rounded overflow-hidden border mb-5 w-100" style={{ background: '#f8f9fa' }}>
      <div
        className="d-flex align-items-center justify-content-between px-4 py-2 border-bottom"
        style={{ background: '#f1f5f9' }}
      >
        <span className="text-muted small fw-bold text-uppercase" style={{ letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          {language}
        </span>
        <button
          className="btn btn-sm d-flex align-items-center gap-1 border-0 text-muted px-2 py-1 rounded"
          style={{ background: 'transparent', fontSize: '0.78rem', transition: 'color 0.2s' }}
          onClick={handleCopy}
          title="Copy code"
        >
          {copied ? (
            <>
              <i className="material-icons" style={{ fontSize: '15px', color: '#152d61' }}>check</i>
              <span style={{ color: '#152d61' }}>Copied!</span>
            </>
          ) : (
            <>
              <i className="material-icons" style={{ fontSize: '15px' }}>content_copy</i>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre
        className="m-0 p-4"
        style={{
          fontSize: '0.84rem',
          overflowX: 'auto',
          whiteSpace: 'pre',
          color: '#334155',
          lineHeight: 1.65,
          background: '#f8f9fa',
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}
