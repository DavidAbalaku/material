'use client';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const basicTableCode = `<div class="table-responsive">
  <table class="table table-hover align-middle mb-0">
    <thead style="background-color: #f8fafc;">
      <tr>
        <th scope="col" class="border-0 px-4 py-3" style="width: 50px;">
          <input class="form-check-input" type="checkbox">
        </th>
        <th scope="col" class="border-0 py-3 text-muted text-uppercase" style="font-weight:600; font-size:.75rem; letter-spacing:.05em;">
          Employee
          <i class="material-icons" style="font-size:14px; vertical-align:middle;">arrow_downward</i>
        </th>
        <th scope="col" class="border-0 py-3 text-muted text-uppercase text-end px-4" style="font-weight:600; font-size:.75rem; letter-spacing:.05em;">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="px-4 py-3"><input class="form-check-input" type="checkbox"></td>
        <td class="py-3">
          <div class="d-flex align-items-center gap-3">
            <div class="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white fw-bold" style="width:40px;height:40px;">JD</div>
            <div>
              <div class="fw-bold" style="color:#1e293b;">John Doe</div>
              <div class="text-muted small">john.doe@example.com</div>
            </div>
          </div>
        </td>
        <td class="py-3 text-end px-4">
          <button class="btn rounded-circle d-inline-flex align-items-center justify-content-center p-2 text-muted border-0" type="button">
            <i class="material-icons" style="font-size:20px;">edit</i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>`;

const fullTableCode = `<!-- Card-wrapped interactive data table -->
<div class="card shadow-sm border-0 overflow-hidden rounded-3">
  {/* Content includes toolbar, responsive table, and pagination footer */}
</div>`;

const rows = [
  { initials: 'JD', name: 'John Doe', email: 'john.doe@example.com', role: 'Lead Developer', status: 'Active', color: '#1a73e8' },
  { initials: 'JS', name: 'Jane Smith', email: 'jane.smith@example.com', role: 'UX Designer', status: 'On Leave', color: '#f59e0b' },
  { initials: 'MW', name: 'Mike Wilson', email: 'mike.wilson@example.com', role: 'DevOps Engineer', status: 'Offline', color: '#64748b' },
];

const statusStyle: Record<string, { bg: string; color: string }> = {
  'Active':   { bg: 'rgba(26,115,232,0.12)', color: '#1a73e8' },
  'On Leave': { bg: 'rgba(245,158,11,0.12)', color: '#b45309' },
  'Offline':  { bg: 'rgba(100,116,139,0.12)', color: '#475569' },
};

export default function DataTables() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#1a73e8 !important' }}>Data Tables</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                 Data tables display sets of raw data. They feature a toolbar header, sortable columns, and pagination, following Material 3 guidelines.
              </p>
              <Scribble text="Structured Information!" arrow="left" />
            </div>
          </div>

          <div id="basic-row" className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="h4 fw-light mb-0 text-dark">Table Anatomy</h2>
              <Scribble text="Clean & Scalable" arrow="left" className="d-none d-md-flex" />
            </div>
            
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-0 border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0" style={{ minWidth: '540px' }}>
                    <thead style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                      <tr>
                        <th scope="col" className="border-0 px-4 py-3" style={{ width: '50px' }}>
                          <input className="form-check-input border-secondary shadow-none" type="checkbox" readOnly />
                        </th>
                        <th scope="col" className="border-0 py-3 text-muted text-uppercase" style={{ fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                          Employee <i className="material-icons text-dark" style={{ fontSize: '14px', verticalAlign: 'middle' }}>arrow_downward</i>
                        </th>
                        <th scope="col" className="border-0 py-3 text-muted text-uppercase" style={{ fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.05em' }}>Role</th>
                        <th scope="col" className="border-0 py-3 text-muted text-uppercase" style={{ fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.05em' }}>Status</th>
                        <th scope="col" className="border-0 py-3 text-muted text-uppercase text-end px-4" style={{ fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.05em' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((r) => (
                        <tr key={r.email} style={{ cursor: 'pointer' }}>
                          <td className="px-4 py-3"><input className="form-check-input border-secondary shadow-none" type="checkbox" readOnly /></td>
                          <td className="py-3">
                            <div className="d-flex align-items-center gap-3">
                              <div className="d-flex align-items-center justify-content-center rounded-circle text-white fw-bold" style={{ width: '40px', height: '40px', background: r.color, fontSize: '0.8rem' }}>{r.initials}</div>
                              <div>
                                <div className="fw-bold" style={{ color: '#1e293b' }}>{r.name}</div>
                                <div className="text-muted small">{r.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 text-muted small">{r.role}</td>
                          <td className="py-3">
                            <span className="badge rounded-pill px-3 py-2 fw-normal" style={{ background: statusStyle[r.status].bg, color: statusStyle[r.status].color }}>{r.status}</span>
                          </td>
                          <td className="py-3 text-end px-4">
                            <button className="btn rounded-circle d-inline-flex align-items-center justify-content-center p-2 text-muted border-0 bg-transparent" type="button">
                              <i className="material-icons" style={{ fontSize: '20px' }}>edit</i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">Use <code>.table-hover</code> and <code>.align-middle</code> for standard Material-style data presentation.</p>
                <Scribble text="Interaction focus!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={basicTableCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Navigation</div>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary" href="#basic-row">ANATOMY</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>{`
        .hover-primary:hover { color: #1a73e8 !important; }
      `}</style>
    </div>
  );
}
