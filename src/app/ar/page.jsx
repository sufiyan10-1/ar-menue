'use client';

export default function ARPage() {
  return (
    <iframe
      src="/ar-view.html"
      style={{
        width: '90vw',
        height: '90vh',
        border: 'none',
        overflow: 'hidden',
       
      }}
      allow="camera"
      title="AR View"
    />
  );
}
