export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container py-4 py-md-5">
      <div className="row justify-content-center">
        <div className="col-12 col-xl-10">
          <div className="docs-content mx-auto bg-white" style={{maxWidth: '850px'}}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
