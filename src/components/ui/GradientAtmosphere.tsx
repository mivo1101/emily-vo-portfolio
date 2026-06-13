export function GradientAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="animate-float absolute -left-20 -top-10 h-72 w-72 rounded-full bg-[#FE27C1]/10 blur-[90px] sm:h-80 sm:w-80" />
      <div className="animate-float-delayed absolute -right-16 top-1/4 h-80 w-80 rounded-full bg-[#F59E0B]/10 blur-[95px] sm:h-96 sm:w-96" />
      <div className="animate-pulse-glow absolute bottom-8 left-1/3 h-56 w-56 rounded-full bg-[#FE27C1]/[0.07] blur-[80px]" />
    </div>
  );
}
