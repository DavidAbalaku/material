import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

export default function DocsHeader({ toggleSidebar }: { toggleSidebar: () => void }) {
  const pathname = usePathname();
  const pageTitle = pathname.split('/').pop()?.replace(/-/g, ' ') || 'Documentation';

  return (
    <header className="navbar navbar-expand-lg border-bottom sticky-top w-100 bg-white" style={{ minHeight: '64px', zIndex: 1030 }}>
      <div className="container-fluid px-4">
        <div className="d-flex align-items-center w-100">
          <button 
            className="btn btn-link text-dark me-3 p-0 d-lg-none" 
            onClick={toggleSidebar}
          >
            <span className="material-icons">menu</span>
          </button>

          <Link href="/" className="navbar-brand d-flex align-items-center gap-2 text-dark m-0">
            <Logo size={28} />
            <span className="h5 mb-0 fw-bold" style={{ letterSpacing: '-0.04em' }}>Rence Material</span>
          </Link>

          <nav aria-label="breadcrumb" className="ms-4 d-none d-md-block">
            <ol className="breadcrumb mb-0 small fw-medium">
              <li className="breadcrumb-item"><span className="text-secondary opacity-75">Docs</span></li>
              <li className="breadcrumb-item active text-capitalize" style={{ color: '#1a73e8' }}>{pageTitle}</li>
            </ol>
          </nav>

          <div className="ms-auto d-flex align-items-center">
            <a href="https://github.com" className="btn btn-primary btn-sm rounded-pill px-4 d-none d-sm-flex align-items-center gap-2 shadow-none" style={{ backgroundColor: '#1a73e8', border: 'none' }}>
               <span className="small fw-bold">Github</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
