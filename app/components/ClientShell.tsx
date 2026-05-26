'use client';
import { useState, useEffect } from 'react';
import DocsHeader from "./DocsHeader";
import Sidebar from "./Sidebar";
import { usePathname } from 'next/navigation';

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // @ts-ignore
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  
  // Only show the Documentation UI if we are in the /docs path
  const isDocs = pathname.startsWith('/docs');

  if (!isDocs) {
    return (
      <div className="landing-shell min-vh-100 bg-white">
        {children}
      </div>
    );
  }

  return (
    <div className="docs-shell min-vh-100 d-flex flex-column w-100 bg-white">
      {/* 1. STICKY HEADER (DOCS ONLY) */}
      <DocsHeader toggleSidebar={() => setSidebarOpen(true)} />
      
      <div className="d-flex flex-grow-1 w-100" style={{ overflow: 'hidden' }}>
        {/* 2. STICKY SIDEBAR (DOCS ONLY) */}
        <div
          className="d-none d-lg-block flex-shrink-0"
          style={{
            position: 'sticky',
            top: '64px',
            height: 'calc(100vh - 64px)',
            width: '280px',
            borderRight: '1px solid #dee2e6',
            backgroundColor: '#f8f9fa',
          }}
        >
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>

        {/* Mobile Sidebar (overlay) */}
        <div className="d-lg-none">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>
        
        {/* 3. MAIN CONTENT — this is the only part that scrolls */}
        <main className="docs-main-content flex-grow-1 min-vw-0 d-flex flex-column bg-white" style={{ overflowY: 'auto', height: 'calc(100vh - 64px)' }}>
          <div className="flex-grow-1 w-100">
             {children}
          </div>
        </main>
      </div>
      
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-lg-none" 
          style={{ 
            zIndex: 1040, 
            backgroundColor: 'rgba(0,0,0,0.3)',
            backdropFilter: 'blur(4px)'
          }}
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <style jsx global>{`
        .ls-tight { letter-spacing: -0.04em; }
        .transition-all { transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-bg-light:hover { background-color: #f1f5f9; }
      `}</style>
    </div>
  );
}
