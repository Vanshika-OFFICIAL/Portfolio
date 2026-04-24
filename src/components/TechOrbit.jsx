import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg";

const TECH = [
  { label: "MongoDB",    angle:   0, color: "#47A248", letter: "M"  },
  { label: "Express",    angle:  60, color: "#9ca3af", letter: "Ex" },
  { label: "React",      angle: 120, color: "#61DAFB", letter: "R"  },
  { label: "Node.js",    angle: 180, color: "#68A063", letter: "N"  },
  { label: "Tailwind",   angle: 240, color: "#38BDF8", letter: "Tw" },
  { label: "JavaScript", angle: 300, color: "#F7DF1E", letter: "JS" },
];

function BadgePosition(angleDeg, radius) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    top:  `calc(50% + ${Math.sin(rad) * radius}px - 20px)`,
    left: `calc(50% + ${Math.cos(rad) * radius}px - 20px)`,
  };
}

export default function TechOrbit() {
  return (
    <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-95 lg:h-95 shrink-0">

      {/* Slowly rotating orbit ring — Framer controls speed precisely */}
      <motion.div
        className="absolute inset-0 rounded-full border border-dashed border-violet-500/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />

      {/* Tech badges — static position, individual hover only */}
      {TECH.map(({ label, angle, color, letter }) => (
        <motion.div
          key={label}
          aria-label={label}
          className="absolute w-10 h-10 rounded-xl flex items-center justify-center text-[11px] font-bold cursor-default"
          style={{
            ...BadgePosition(angle, 150),
            background: "rgba(13,13,24,0.92)",
            border: `1px solid ${color}38`,
            color,
            fontFamily: "'DM Mono', 'JetBrains Mono', monospace",
          }}
          whileHover={{ scale: 1.15, borderColor: color + "88" }}
          transition={{ type: "spring", stiffness: 340, damping: 22 }}
          title={label}
        />
      ))}

      {/* ── Image frame — gradient border via padding trick ── */}
      <div
        className="absolute inset-8 rounded-3xl p-0.5"
        style={{
          background: "linear-gradient(140deg, #7c3aed 0%, #6366f1 55%, #4f46e5 100%)",
          boxShadow: [
            "0 0 0 1px rgba(124,58,237,0.12)",
            "0 8px 30px rgba(124,58,237,0.20)",
            "0 20px 56px rgba(99,102,241,0.12)",
          ].join(", "),
        }}
      >
        {/* Inner clip frame */}
        <div
          className="relative w-full h-full rounded-[22px] overflow-hidden"
          style={{ background: "linear-gradient(160deg, #13102a 0%, #0a0a18 100%)" }}
        >
          {/* Shimmer overlay — top-left highlight */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(145deg, rgba(167,139,250,0.09) 0%, rgba(99,102,241,0.03) 40%, transparent 65%)",
            }}
          />

          {/* Bottom depth fade */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 h-1/3 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(7,7,15,0.52) 0%, transparent 100%)" }}
          />

          {/* Profile image */}
          <img
            src={profileImage}
            alt="Vanshika, MERN Stack Developer"
            decoding="async"
            loading="lazy"
            className="w-full h-full object-cover object-center relative z-0"
          />

          {/* Fallback monogram — always rendered, hidden by img when loaded */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center z-[-1] bg-[#0d0d1c]"
          >
            <span
              className="text-6xl font-bold text-slate-700 select-none"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              VA
            </span>
          </div>
        </div>
      </div>

      {/* Bloom glow — behind the frame, static */}
      <div
        aria-hidden="true"
        className="absolute inset-8 rounded-3xl -z-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(109,40,217,0.16) 0%, rgba(79,70,229,0.07) 55%, transparent 75%)",
          filter: "blur(22px)",
          transform: "scale(1.08) translateY(6px)",
        }}
      />

      {/* Accent chip — bottom right: unique info only */}
      <div
        className="absolute bottom-7 -right-3 z-20 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5"
        style={{
          background: "rgba(9,9,20,0.95)",
          border: "1px solid rgba(139,92,246,0.22)",
          backdropFilter: "blur(8px)",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
        <span
          className="text-[11px] text-slate-400 whitespace-nowrap"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Open to roles
        </span>
      </div>

      {/* Accent chip — top left: location context */}
      <div
        className="absolute top-7 -left-3 z-20 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5"
        style={{
          background: "rgba(9,9,20,0.95)",
          border: "1px solid rgba(99,102,241,0.22)",
          backdropFilter: "blur(8px)",
        }}
      >
        <svg
          aria-hidden="true"
          width="10" height="10" viewBox="0 0 24 24"
          fill="none" stroke="#818cf8" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span
          className="text-[11px] text-slate-400 whitespace-nowrap"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          India
        </span>
      </div>
    </div>
  );
}
