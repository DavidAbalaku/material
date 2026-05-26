'use client';

import { useState } from 'react';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const tabsCode = `<!-- Basic tabs -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="tab-home" data-bs-toggle="tab" data-bs-target="#content-home" type="button" role="tab">
      Home
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="tab-profile" data-bs-toggle="tab" data-bs-target="#content-profile" type="button" role="tab">
      Profile
    </button>
  </li>
</ul>
<div class="tab-content border border-top-0 p-4 rounded-bottom" id="myTabContent">
  <div class="tab-pane fade show active" id="content-home" role="tabpanel">
    Home content here...
  </div>
</div>`;

const iconTabCode = `<!-- Tabs with icons -->
<ul class="nav nav-tabs">
  <li class="nav-item">
    <button class="nav-link active d-flex align-items-center gap-2" data-bs-toggle="tab" type="button">
      <i class="material-icons" style="font-size:18px;">home</i> Home
    </button>
  </li>
</ul>`;

const tabs = ['Home', 'Profile', 'Settings', 'Activity'];
const tabContent: Record<string, string> = {
  Home: 'Welcome to the Home tab. Display dashboard summaries or key actions here.',
  Profile: 'User profile information goes here — name, avatar, bio, and settings.',
  Settings: 'Application settings and configuration options are shown on this tab.',
  Activity: 'Recent user activity log, notifications, and timeline events.',
};

export default function Tabs() {
  const [active, setActive] = useState('Home');
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#1a73e8 !important' }}>Tabs</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                 Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy.
              </p>
              <Scribble text="Sectionalized Content!" arrow="left" />
            </div>
          </div>

          {/* ── BASIC TABS ── */}
          <div id="basic" className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="h4 fw-light mb-0 text-dark">Basic tabs</h2>
              <Scribble text="Toggle views" arrow="left" className="d-none d-md-flex" />
            </div>
            
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                <ul className="nav nav-tabs border-0" style={{ borderBottom: '2px solid #e2e8f0' }}>
                  {tabs.map(tab => (
                    <li key={tab} className="nav-item">
                      <button
                        className={`nav-link border-0 px-4 fw-medium ${active === tab ? 'active text-primary' : 'text-muted'}`}
                        onClick={() => setActive(tab)}
                        style={{
                          borderBottom: active === tab ? '2px solid #1a73e8' : '2px solid transparent',
                          borderRadius: 0,
                          background: 'transparent',
                          marginBottom: '-2px',
                          color: active === tab ? '#1a73e8' : '#5f6368',
                        }}
                        type="button"
                      >
                        {tab}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="bg-white rounded-bottom border border-top-0 p-4 shadow-sm">
                  <p className="text-muted small mb-0">{tabContent[active]}</p>
                </div>
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">Built on Bootstrap 5's <code>.nav-tabs</code>. M3 tabs use a primary accent under the active label.</p>
                <Scribble text="Material Indicator!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={tabsCode} language="HTML" />
          </div>

          {/* ── ICON TABS ── */}
          <div id="icon-tabs" className="mb-5">
            <h2 className="h4 fw-light mb-4 text-dark">Tabs with icons</h2>
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                <ul className="nav border-0" style={{ borderBottom: '2px solid #e2e8f0' }}>
                  {[['home','Home'], ['person','Profile'], ['settings','Settings']].map(([icon, label], i) => (
                    <li key={label} className="nav-item">
                      <button
                        className="nav-link border-0 d-flex align-items-center gap-2 px-4 fw-medium"
                        type="button"
                        style={{
                          borderBottom: i === 0 ? '2px solid #1a73e8' : '2px solid transparent',
                          color: i === 0 ? '#1a73e8' : '#5f6368',
                          borderRadius: 0,
                          background: 'transparent',
                          marginBottom: '-2px',
                        }}
                      >
                        <i className="material-icons" style={{ fontSize: '18px' }}>{icon}</i> {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">Combining icons with labels improves scanability and visual interest.</p>
                <Scribble text="Visual Cues!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={iconTabCode} language="HTML" />
          </div>
        </div>

        {/* TOC */}
        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Navigation</div>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#basic">BASIC TABS</a></li>
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#icon-tabs">WITH ICONS</a></li>
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
