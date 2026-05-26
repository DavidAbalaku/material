'use client';
import CodeBlock from '@/app/components/CodeBlock';

const modalCode = `<!-- Modal trigger button -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal markup -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content shadow">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Modal body content goes here. You can add any HTML, forms, or components.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`;

const modalScrollCode = `<!-- Scrollable modal for long content -->
<div class="modal fade" id="scrollModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
    <div class="modal-content shadow">
      <div class="modal-header">
        <h5 class="modal-title">Scrollable modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <!-- Long content scrolls within the modal body -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>`;

const modalSizeCode = `<!-- Modal sizes -->
<div class="modal-dialog modal-sm"> ... </div>    <!-- Small -->
<div class="modal-dialog">         ... </div>    <!-- Default -->
<div class="modal-dialog modal-lg"> ... </div>    <!-- Large -->
<div class="modal-dialog modal-xl"> ... </div>    <!-- Extra large -->`;

export default function Modal() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <h1 className="mb-3 fw-normal" style={{ color: '#0f172a', fontSize: 'clamp(1.8rem,4vw,2.5rem)' }}>Modal</h1>
          <p className="text-muted mb-5" style={{ lineHeight: 1.7, fontSize: 'clamp(0.95rem,2vw,1.1rem)' }}>
            Use Bootstrap's JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content. Rence Material applies Material Design elevation and typography to all modals automatically.
          </p>

          <div className="alert alert-info border-start border-4 border-primary bg-light py-2 px-3 mb-5 small text-muted rounded-2">
            <strong className="text-dark">Tip:</strong> For Material-style alert dialogs (simple confirm/cancel popups), see the <a href="/docs/components/dialogs" className="text-decoration-none" style={{ color: '#1a73e8' }}>Dialogs</a> page.
          </div>

          <div id="example" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Example</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>A modal has three required parts: trigger button, backdrop overlay, and the <code>.modal</code> container with <code>.modal-dialog</code> and <code>.modal-content</code>.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#demoModal">
                Launch demo modal
              </button>
              <div className="modal fade" id="demoModal" tabIndex={-1} aria-labelledby="demoModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content shadow">
                    <div className="modal-header">
                      <h5 className="modal-title" id="demoModalLabel">Modal title</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-muted small">
                      Modal body content goes here. You can add any HTML, forms, images, or other components.
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock code={modalCode} language="HTML" />
          </div>

          <div id="scrollable" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Scrollable modal</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>For long content, add <code>.modal-dialog-scrollable</code> to scroll within the modal body rather than the page.</p>
            <CodeBlock code={modalScrollCode} language="HTML" />
          </div>

          <div id="sizes" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Optional sizes</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Modals have three optional sizes available via modifier classes placed on <code>.modal-dialog</code>: <code>.modal-sm</code>, <code>.modal-lg</code>, and <code>.modal-xl</code>.</p>
            <CodeBlock code={modalSizeCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Contents</div>
            <ul className="nav flex-column">
              {[['#example','Example'],['#scrollable','Scrollable'],['#sizes','Optional sizes']].map(([href,label])=>(
                <li key={href} className="nav-item"><a className="nav-link px-0 py-1" href={href} style={{ color: '#475569', fontSize: '0.88rem' }}>{label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
