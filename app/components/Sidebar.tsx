'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();

  const menuItems = [
    {
      title: 'Getting Started',
      items: [
        { name: 'Introduction', href: '/docs/introduction' },
        { name: 'Installation', href: '/docs/installation' },
        { name: 'Theming', href: '/docs/theming' },
      ],
    },
    {
      title: 'Material Components',
      items: [
        { name: 'Buttons', href: '/docs/components/buttons' },
        { name: 'Cards', href: '/docs/components/cards' },
        { name: 'Chips', href: '/docs/components/chips' },
        { name: 'Colours', href: '/docs/components/colours' },
        { name: 'Data Tables', href: '/docs/components/tables' },
        { name: 'Dialogs', href: '/docs/components/dialogs' },
        { name: 'Forms', href: '/docs/components/forms' },
        { name: 'Elevation & Shadows', href: '/docs/components/elevation' },
        { name: 'Expansion Panels', href: '/docs/components/expansion-panels' },
        { name: 'Icons', href: '/docs/components/icons' },
        { name: 'Menu', href: '/docs/components/menu' },
        { name: 'Navigation Drawer', href: '/docs/components/nav-drawer' },
        { name: 'Pickers', href: '/docs/components/pickers' },
        { name: 'Progress', href: '/docs/components/progress' },
        { name: 'Selection Controls', href: '/docs/components/selection-controls' },
        { name: 'Snackbars', href: '/docs/components/snackbars' },
        { name: 'Steppers', href: '/docs/components/steppers' },
        { name: 'Tabs', href: '/docs/components/tabs' },
        { name: 'Text Fields', href: '/docs/components/text-fields' },
        { name: 'Typography', href: '/docs/components/typography' },
      ],
    },
    {
      title: 'Bootstrap Components',
      items: [
        { name: 'Alerts', href: '/docs/bootstrap/alerts' },
        { name: 'Badges', href: '/docs/bootstrap/badges' },
        { name: 'Breadcrumb', href: '/docs/bootstrap/breadcrumb' },
        { name: 'Button Group', href: '/docs/bootstrap/button-group' },
        { name: 'Carousel', href: '/docs/bootstrap/carousel' },
        { name: 'Collapse', href: '/docs/bootstrap/collapse' },
        { name: 'Dropdowns', href: '/docs/bootstrap/dropdowns' },
        { name: 'Forms', href: '/docs/bootstrap/forms' },
        { name: 'List Group', href: '/docs/bootstrap/list-group' },
        { name: 'Modal', href: '/docs/bootstrap/modal' },
        { name: 'Navbar', href: '/docs/bootstrap/navbar' },
        { name: 'Navs', href: '/docs/bootstrap/navs' },
        { name: 'Pagination', href: '/docs/bootstrap/pagination' },
        { name: 'Scrollspy', href: '/docs/bootstrap/scrollspy' },
        { name: 'Tooltips', href: '/docs/bootstrap/tooltips' },
      ],
    },
  ];

  return (
    <aside className={`docs-sidebar shadow-none h-100 ${isOpen ? 'open' : ''}`}>
      <div className="h-100 overflow-auto p-0 pb-5 pt-4">
        <nav className="px-3">
          {menuItems.map((group, idx) => (
            <div key={idx} className="mb-4">
              <h6 className="text-uppercase fw-medium mb-3 ms-3 text-muted" style={{ fontSize: '0.62rem', letterSpacing: '0.12em', opacity: 0.6 }}>
                {group.title}
              </h6>
              <ul className="list-unstyled mb-0">
                {group.items.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                     <li key={i} className="mb-1">
                       <Link
                         href={item.href}
                         onClick={onClose}
                         className={`nav-link d-flex align-items-center px-4 py-2 transition-all nav-item-m3 ${isActive ? 'active' : ''}`}
                         style={{ 
                           fontSize: '0.85rem',
                           color: isActive ? '#ffffff' : '#5f6368',
                           backgroundColor: isActive ? '#152d61' : 'transparent',
                           borderRadius: '4px',
                           fontWeight: isActive ? '600' : '400',
                         }}
                       >
                         {item.name}
                       </Link>
                     </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <style jsx>{`
        .nav-item-m3:hover {
          background-color: rgba(21, 45, 97, 0.08) !important;
          color: #152d61 !important;
        }
        .nav-item-m3.active:hover {
          background-color: #0d1c3c !important;
          color: #ffffff !important;
          box-shadow: 0 4px 12px rgba(21, 45, 97, 0.2);
        }
      `}</style>
    </aside>
  );
}
