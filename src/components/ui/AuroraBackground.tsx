export function AuroraBackground() {
  return (
    <div className="aurora-dark pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="aurora-dark-blob aurora-dark-blob--pink" />
      <div className="aurora-dark-blob aurora-dark-blob--orange" />
      <div className="aurora-dark-blob aurora-dark-blob--blend" />
    </div>
  );
}
