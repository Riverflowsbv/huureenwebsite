// Inline SVG icons (Lucide-style, stroke = currentColor).
// Server-component safe: no hooks, no client directives.

type IconProps = {
  className?: string;
  size?: number;
};

export function Check({ className, size = 20 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function CheckCircle({ className, size = 20 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Cross({ className, size = 20 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function Info({ className, size = 18 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-5M12 8h.01" />
    </svg>
  );
}

export function Star({ className, size = 18 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      aria-hidden="true"
    >
      <path d="M11.48 3.5a.6.6 0 0 1 1.04 0l2.28 4.62a.6.6 0 0 0 .45.33l5.1.74a.6.6 0 0 1 .33 1.02l-3.69 3.6a.6.6 0 0 0-.17.53l.87 5.08a.6.6 0 0 1-.87.63l-4.56-2.4a.6.6 0 0 0-.56 0l-4.56 2.4a.6.6 0 0 1-.87-.63l.87-5.08a.6.6 0 0 0-.17-.53l-3.69-3.6a.6.6 0 0 1 .33-1.02l5.1-.74a.6.6 0 0 0 .45-.33Z" />
    </svg>
  );
}

export function ArrowRight({ className, size = 18 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Menu({ className, size = 26 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseMenu({ className, size = 26 }: IconProps) {
  return <Cross className={className} size={size} />;
}

// --- Feature / card icons (Lucide-style, stroke) ---

function Svg({
  className,
  size = 26,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function Palette(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-4.7-4.5-8.6-10-8.6Z" />
    </Svg>
  );
}

export function Wrench(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.3L3 18l3 3 6.4-6.3a4 4 0 0 0 5.3-5.4l-2.4 2.4a2 2 0 1 1-2.3-2.3Z" />
    </Svg>
  );
}

export function TrendingUp(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M17 7h4v4" />
    </Svg>
  );
}

export function Search(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </Svg>
  );
}

export function Sliders(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
    </Svg>
  );
}

export function BarChart(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3 3v18h18" />
      <rect x="7" y="12" width="3" height="6" rx="1" />
      <rect x="12" y="8" width="3" height="10" rx="1" />
      <rect x="17" y="5" width="3" height="13" rx="1" />
    </Svg>
  );
}

export function Rocket(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M4.5 16.5c-1.5 1-2 5-2 5s4-.5 5-2c.6-.8.5-2-.2-2.7a2 2 0 0 0-2.8-.3Z" />
      <path d="M12 15l-3-3a12 12 0 0 1 4-8c1.5-1.5 4-2 6-2 0 2-.5 4.5-2 6a12 12 0 0 1-8 4Z" />
      <path d="M9 12H5s.5-2.5 2-3.5c1.7-1 3 0 3 0M12 15v4s2.5-.5 3.5-2c1-1.7 0-3 0-3" />
    </Svg>
  );
}

export function Shield(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  );
}

export function Chat(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12Z" />
    </Svg>
  );
}

export function Zap(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </Svg>
  );
}

export function Target(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </Svg>
  );
}

export function Handshake(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l3.6-3.6a1 1 0 0 0 0-1.4L14 10" />
      <path d="m14 11-3-3a1 1 0 0 0-1.4 0L6 11.6a1 1 0 0 0 0 1.4l2 2a1 1 0 0 0 1.4 0L11 14" />
      <path d="M18 15.5 21 12M3 12l3 3.5M13 8l1.5-1.5a2 2 0 0 1 2.8 0L21 10M3 10l3.7-3.5a2 2 0 0 1 2.8 0L11 8" />
    </Svg>
  );
}

export function Phone(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M6.5 3h-2A1.5 1.5 0 0 0 3 4.6C3 13 11 21 19.4 21a1.5 1.5 0 0 0 1.6-1.5v-2a1.5 1.5 0 0 0-1.3-1.5l-2.5-.3a1.5 1.5 0 0 0-1.3.5l-1 1.1a13 13 0 0 1-5.5-5.5l1.1-1a1.5 1.5 0 0 0 .5-1.3L10.2 6A1.5 1.5 0 0 0 8.7 4.7Z" />
    </Svg>
  );
}

export function Mail(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Svg>
  );
}

export function Calendar(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="3" y="4.5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v3M16 3v3" />
    </Svg>
  );
}

export function PriceTag(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3 12V4a1 1 0 0 1 1-1h8l9 9a1.5 1.5 0 0 1 0 2.1l-6.9 6.9a1.5 1.5 0 0 1-2.1 0L3 12Z" />
      <circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" />
    </Svg>
  );
}

export function Cart(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="9" cy="20" r="1.4" fill="currentColor" />
      <circle cx="18" cy="20" r="1.4" fill="currentColor" />
      <path d="M2 3h2.2l2.1 12.2a1.5 1.5 0 0 0 1.5 1.3h9.4a1.5 1.5 0 0 0 1.5-1.2L21 7H5.2" />
    </Svg>
  );
}
