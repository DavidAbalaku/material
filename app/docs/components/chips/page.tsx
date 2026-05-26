'use client';

import { useState } from 'react';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const chipCode = `<!-- Basic chips -->
<div class="d-flex flex-wrap gap-2">
  <span class="badge rounded-pill border px-3 py-2 fw-normal bg-white text-dark">Design</span>
</div>`;

export default function Chips() {
  const [selectedChips, setSelectedChips] = useState<string[]>(['Design']);
  const allChips = ['Design', 'UX Research', 'Prototyping', 'Development', 'Testing'];

  const toggleChip = (c: string) => {
    setSelectedChips(prev => 
      prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]
    );
  };

  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#1a73e8 !important' }}>Chips</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                 Chips are compact elements that represent an input, attribute, or action.
              </p>
              <Scribble text="Compact & Interactive!" arrow="left" />
            </div>
          </div>

          <div id="interactive" className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="h4 fw-light mb-0 text-dark">Interactive filtering</h2>
              <Scribble text="Click to select!" arrow="left" className="d-none d-md-flex" />
            </div>
            
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 d-flex flex-wrap gap-3 align-items-center justify-content-center border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                {allChips.map(c => {
                  const isSelected = selectedChips.includes(c);
                  return (
                    <button 
                      key={c} 
                      className={`btn rounded-pill border px-3 py-2 fw-normal transition-all shadow-sm d-flex align-items-center gap-2`}
                      style={{ 
                        fontSize: '0.875rem',
                        backgroundColor: isSelected ? 'rgba(26,115,232,0.12)' : '#fff',
                        color: isSelected ? '#1a73e8' : '#334155',
                        borderColor: isSelected ? '#1a73e8' : '#e2e8f0'
                      }}
                      onClick={() => toggleChip(c)}
                    >
                      {isSelected && <i className="material-icons" style={{ fontSize: '18px' }}>check</i>}
                      {c}
                    </button>
                  );
                })}
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">Build chips that users can toggle. The example above uses React state, but you can achieve this with standard CSS classes.</p>
                <Scribble text="Toggle States!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={chipCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Navigation</div>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#interactive">INTERACTIVE FILTERING</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>{`
        .hover-primary:hover { color: #1a73e8 !important; }
        .transition-all { transition: all 0.2s ease-in-out; }
      `}</style>
    </div>
  );
}
