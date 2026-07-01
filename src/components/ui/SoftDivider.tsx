export default function SoftDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`pointer-events-none relative h-16 w-full ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1440 80" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <path
          d="M0,40 C240,90 480,0 720,20 C960,40 1200,90 1440,30 L1440,80 L0,80 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
