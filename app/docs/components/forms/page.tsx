'use client';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const formLayoutCode = `<!-- Material 3 Form Layout -->
<form class="card p-4 shadow-sm border-0 rounded-4">
  <h5 class="mb-4">Contact Us</h5>
  
  <div class="row g-3">
    <div class="col-md-6 mb-3">
      <label class="form-label text-primary small fw-bold">First Name</label>
      <input type="text" class="form-control" placeholder="John">
    </div>
    <div class="col-md-6 mb-3">
      <label class="form-label text-primary small fw-bold">Last Name</label>
      <input type="text" class="form-control" placeholder="Doe">
    </div>
    
    <div class="col-12 mb-3">
      <label class="form-label text-primary small fw-bold">Email</label>
      <input type="email" class="form-control" placeholder="john.doe@example.com">
    </div>
    
    <div class="col-12 mb-4">
      <label class="form-label text-primary small fw-bold">Message</label>
      <textarea class="form-control" rows="4"></textarea>
    </div>
    
    <div class="col-12 text-end">
      <button type="submit" class="btn btn-primary px-5 rounded-pill">SEND</button>
    </div>
  </div>
</form>`;

export default function MaterialForms() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#152d61 !important' }}>Forms</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                 Combine inputs, selection controls, and buttons into cohesive, user-friendly Material Design 3 form layouts.
              </p>
              <Scribble text="Structured Data Entry!" arrow="left" />
            </div>
          </div>

          <div id="material-form" className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="h4 fw-light mb-0 text-dark">Material 3 Form Layout</h2>
              <Scribble text="Clean & Focused" arrow="left" className="d-none d-md-flex" />
            </div>
            
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 d-flex justify-content-center border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                 <div className="bg-white p-4 p-md-5 shadow border rounded-4 w-100" style={{ maxWidth: '500px' }}>
                    <form onSubmit={e => e.preventDefault()}>
                      <h5 className="mb-4 fw-bold">Get in Touch</h5>
                      
                      <div className="row g-3">
                        <div className="col-md-6">
                           <label className="form-label text-primary small fw-bold mb-1" style={{ fontSize: '0.75rem' }}>FIRST NAME</label>
                           <input type="text" className="form-control border-0 bg-light py-2 px-3" placeholder="John" style={{ borderRadius: '8px' }} />
                        </div>
                        <div className="col-md-6">
                           <label className="form-label text-primary small fw-bold mb-1" style={{ fontSize: '0.75rem' }}>LAST NAME</label>
                           <input type="text" className="form-control border-0 bg-light py-2 px-3" placeholder="Doe" style={{ borderRadius: '8px' }} />
                        </div>
                        <div className="col-12 mt-3">
                           <label className="form-label text-primary small fw-bold mb-1" style={{ fontSize: '0.75rem' }}>EMAIL ADDRESS</label>
                           <input type="email" className="form-control border-0 bg-light py-2 px-3" placeholder="john.doe@example.com" style={{ borderRadius: '8px' }} />
                        </div>
                        <div className="col-12 mt-3">
                           <label className="form-label text-primary small fw-bold mb-1" style={{ fontSize: '0.75rem' }}>MESSAGE</label>
                           <textarea className="form-control border-0 bg-light py-2 px-3" rows={4} placeholder="How can we help?" style={{ borderRadius: '8px' }}></textarea>
                        </div>
                        <div className="col-12 mt-5 text-end">
                           <button type="submit" className="btn btn-primary px-5 rounded-pill shadow-sm" style={{ letterSpacing: '0.05em' }}>SEND MESSAGE</button>
                        </div>
                      </div>
                    </form>
                 </div>
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">Build beautiful forms by combining <code>.bg-light</code> inputs with <code>.rounded-4</code> cards and primary buttons.</p>
                <Scribble text="Seamless Design!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={formLayoutCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #152d61', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Navigation</div>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#material-form">FORM LAYOUT</a></li>
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
