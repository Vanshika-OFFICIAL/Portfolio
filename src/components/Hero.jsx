import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import TechOrbit from "./TechOrbit";
import StatsBar from "./StatsBar";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  const glowRef = useRef(null);

  useEffect(() => {
    let raf;
    const move = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!glowRef.current) return;
        glowRef.current.style.transform = `translate(${e.clientX - 96}px, ${e.clientY - 96}px)`;
      });
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-screen bg-[#07070f] flex items-center overflow-hidden px-6 md:px-12 lg:px-20 py-24"
    >
      {/* Cursor glow — transform-only, zero reflow cost */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-0 h-48 w-48 rounded-full will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.26) 0%, transparent 70%)",
        }}
      />

      {/* Dot-grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(rgba(167,139,250,0.85) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Ambient blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-48 -left-48 h-130 w-130 rounded-full bg-violet-700/6 blur-[130px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 right-0 h-105 w-105 rounded-full bg-indigo-700/6 blur-[130px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

        {/* ── LEFT ── */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">

          {/* Availability signal */}
          <motion.div {...fadeUp(0.08)} className="flex items-center gap-2.5">
            <span aria-hidden="true" className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span
              className="text-[11px] tracking-[0.2em] uppercase text-slate-500"
              style={{ fontFamily: "'DM Mono', 'JetBrains Mono', monospace" }}
            >
              Open to full-time roles
            </span>
          </motion.div>

          {/* Name — primary visual anchor */}
          <motion.div {...fadeUp(0.16)} className="flex flex-col gap-2.5">
            <h1
              className="text-6xl sm:text-7xl xl:text-8xl font-bold leading-none tracking-tight text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Vanshika
            </h1>
            <span
              className="inline-flex w-fit text-[11px] font-medium text-violet-400/75 bg-violet-500/8 border border-violet-500/18 rounded-md px-2.5 py-1 tracking-widest uppercase"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              MERN Stack Developer
            </span>
          </motion.div>

          {/* Headline — static, complete, punchy */}
          <motion.p
            {...fadeUp(0.24)}
            className="text-2xl sm:text-3xl xl:text-[2.1rem] font-bold leading-[1.22] tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <span className="text-slate-200">I ship full-stack apps</span>
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-indigo-400">
              that hold up in production.
            </span>
          </motion.p>

          {/* Impact — adds new information, earns its line */}
          <motion.p
            {...fadeUp(0.32)}
            className="text-[14.5px] text-slate-500 leading-relaxed max-w-100 border-l-2 border-violet-600/30 pl-4"
          >
            From schema design to deployed UI — I own the full MERN stack.
            Five shipped products. Clean code. No half-finished repos.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.40)} className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 active:bg-violet-700 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070f]"
            >
              <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 border border-slate-700/80 hover:border-violet-500/50 hover:text-violet-400 text-slate-400 text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070f]"
            >
              <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.48)}>
            <StatsBar />
          </motion.div>
        </div>

        {/* ── RIGHT ── */}
        <motion.div
          className="flex items-center justify-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <TechOrbit />
        </motion.div>
      </div>
    </section>
  );
}
