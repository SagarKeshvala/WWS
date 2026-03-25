const FloatingShapes = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Top-right — soft rotating ring */}
      <svg
        className="absolute -top-20 -right-20 w-[420px] h-[420px] opacity-[0.045]"
        viewBox="0 0 420 420"
      >
        <circle
          cx="210"
          cy="210"
          r="160"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeDasharray="12 8"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 210 210"
            to="360 210 210"
            dur="90s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* Left mid — floating triangle outline */}
      <svg
        className="absolute top-[35%] -left-12 w-[200px] h-[200px] opacity-[0.04]"
        viewBox="0 0 200 200"
      >
        <polygon
          points="100,20 180,170 20,170"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="120s"
            repeatCount="indefinite"
          />
        </polygon>
      </svg>

      {/* Right mid — pulsing dot cluster */}
      <svg
        className="absolute top-[55%] -right-8 w-[160px] h-[160px] opacity-[0.06]"
        viewBox="0 0 160 160"
      >
        <circle cx="40" cy="80" r="4" fill="hsl(var(--primary))">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="40" r="3" fill="hsl(var(--primary))">
          <animate attributeName="opacity" values="1;0.3;1" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="120" cy="100" r="5" fill="hsl(var(--primary))">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="60" cy="130" r="3.5" fill="hsl(var(--primary))">
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="6s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Bottom-left — slowly rotating square */}
      <svg
        className="absolute bottom-[15%] left-[5%] w-[140px] h-[140px] opacity-[0.035]"
        viewBox="0 0 140 140"
      >
        <rect
          x="30"
          y="30"
          width="80"
          height="80"
          rx="4"
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeWidth="1.2"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 70 70"
            to="360 70 70"
            dur="100s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>

      {/* Top-left — arc sweep */}
      <svg
        className="absolute top-[12%] left-[8%] w-[180px] h-[180px] opacity-[0.04]"
        viewBox="0 0 180 180"
      >
        <path
          d="M 30 90 A 60 60 0 0 1 150 90"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 90 90"
            to="360 90 90"
            dur="80s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {/* Bottom-right — cross shape */}
      <svg
        className="absolute bottom-[30%] right-[10%] w-[100px] h-[100px] opacity-[0.04]"
        viewBox="0 0 100 100"
      >
        <g>
          <line x1="50" y1="20" x2="50" y2="80" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
          <line x1="20" y1="50" x2="80" y2="50" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="60s"
            repeatCount="indefinite"
          />
        </g>
      </svg>
    </div>
  );
};

export default FloatingShapes;
