'use client';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const carouselCode = `<!-- Carousel with indicators and controls -->
<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
  </div>

  <div class="carousel-inner rounded-4 shadow">
    <div class="carousel-item active">
      <div class="p-5 text-center text-white" style="background:#152d61; min-height:200px;">
        <h5>First slide label</h5>
        <p>Material Design 3 aesthetic applied to carousels.</p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="p-5 text-center text-white" style="background:#185abc; min-height:200px;">
        <h5>Second slide label</h5>
        <p>Responsive and tactile interactions.</p>
      </div>
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>`;

const slides = [
  { bg: 'linear-gradient(135deg,#152d61,#0d1c3c)', label: 'Material Design', text: 'Beautiful, high-quality design for every screen.' },
  { bg: 'linear-gradient(135deg,#1e293b,#334155)', label: 'Bootstrap 5 Base', text: 'All the power of Bootstrap 5 with Material skin.' },
  { bg: 'linear-gradient(135deg,#185abc,#152d61)', label: 'Rence Material', text: 'Your custom framework — available offline or via CDN.' },
];

export default function Carousel() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#152d61 !important' }}>Carousel</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                 A slideshow component for cycling through elements. Rence Material coordinates transitions and indicators for a premium feel.
              </p>
              <Scribble text="Fluid Transitions!" arrow="left" />
            </div>
          </div>

          <div id="example" className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="h4 fw-light mb-0 text-dark">Interactive Example</h2>
              <Scribble text="Auto-playing" arrow="left" className="d-none d-md-flex" />
            </div>
            
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                <div id="demoCarousel" className="carousel slide shadow rounded-4 overflow-hidden mx-auto" data-bs-ride="carousel" style={{ maxWidth: '600px' }}>
                  <div className="carousel-indicators">
                    {slides.map((_, i) => (
                      <button key={i} type="button" data-bs-target="#demoCarousel" data-bs-slide-to={i} className={i === 0 ? 'active' : ''} aria-label={`Slide ${i+1}`} aria-current={i === 0 ? 'true' : undefined}></button>
                    ))}
                  </div>
                  <div className="carousel-inner">
                    {slides.map((s, i) => (
                      <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                        <div style={{ background: s.bg, height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} className="p-4 p-md-5 text-white">
                          <div className="animate__animated animate__fadeInUp">
                            <h3 className="fw-bold mb-3">{s.label}</h3>
                            <p className="mb-0 opacity-75">{s.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#demoCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#demoCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">Bootstrap's carousel is enhanced with rounded containers and Material-style indicators.</p>
                <Scribble text="Modern Motion!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={carouselCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #152d61', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Navigation</div>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#example">EXAMPLE</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>{`
        .hover-primary:hover { color: #152d61 !important; }
        .transition-all { transition: all 0.2s ease-in-out; }
      `}</style>
    </div>
  );
}
