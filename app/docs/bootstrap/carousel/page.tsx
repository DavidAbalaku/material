'use client';
import CodeBlock from '@/app/components/CodeBlock';

const carouselCode = `<!-- Carousel with indicators and controls -->
<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
  <!-- Indicators -->
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <!-- Slides -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="image1.jpg" class="d-block w-100" alt="Slide 1">
      <div class="carousel-caption">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="image2.jpg" class="d-block w-100" alt="Slide 2">
    </div>
    <div class="carousel-item">
      <img src="image3.jpg" class="d-block w-100" alt="Slide 3">
    </div>
  </div>

  <!-- Controls -->
  <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`;

const slides = [
  { bg: 'linear-gradient(135deg,#1a73e8,#174ea6)', label: 'Material Design', text: 'Beautiful, high-quality design for every screen.' },
  { bg: 'linear-gradient(135deg,#1e293b,#334155)', label: 'Bootstrap 5 Base', text: 'All the power of Bootstrap 5 with Material skin.' },
  { bg: 'linear-gradient(135deg,#1967d2,#1a73e8)', label: 'Rence Material', text: 'Your custom framework — available offline or via CDN.' },
];

export default function Carousel() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <h1 className="mb-3 fw-normal" style={{ color: '#0f172a', fontSize: 'clamp(1.8rem,4vw,2.5rem)' }}>Carousel</h1>
          <p className="text-muted mb-5" style={{ lineHeight: 1.7, fontSize: 'clamp(0.95rem,2vw,1.1rem)' }}>
            A slideshow component for cycling through elements — images or slides of text — like a carousel. Works with Bootstrap 5's JS plugin.
          </p>

          <div id="example" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Example</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Carousels require an <code>id</code>, a <code>.carousel-inner</code> with at least one <code>.carousel-item.active</code>, and optional <code>.carousel-control-prev/next</code> buttons.</p>
            <div className="rounded-top border border-bottom-0 overflow-hidden">
              <div id="demoCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  {slides.map((_, i) => (
                    <button key={i} type="button" data-bs-target="#demoCarousel" data-bs-slide-to={i} className={i === 0 ? 'active' : ''} aria-label={`Slide ${i+1}`} aria-current={i === 0 ? 'true' : undefined}></button>
                  ))}
                </div>
                <div className="carousel-inner">
                  {slides.map((s, i) => (
                    <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                      <div style={{ background: s.bg, height: '280px', display: 'flex', alignItems: 'flex-end' }}>
                        <div className="carousel-caption pb-4">
                          <h5 className="fw-medium">{s.label}</h5>
                          <p className="mb-0 small opacity-75">{s.text}</p>
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
            <CodeBlock code={carouselCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Contents</div>
            <ul className="nav flex-column">
              <li className="nav-item"><a className="nav-link px-0 py-1" href="#example" style={{ color: '#475569', fontSize: '0.88rem' }}>Example</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
