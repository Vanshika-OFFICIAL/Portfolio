import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { end: 5,   suffix: "+",   label: "Apps shipped",    sub: "deployed & live"   },
  { end: 15,  suffix: "+",  label: "Technologies",    sub: "across the stack"  },
  { end: 2026, suffix: "",  label: "B.Tech",        sub: "IT graduate"       },
];

function useCountUp(target, isActive, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isActive, target, duration]);

  return count;
}

function StatCell({ end, suffix, label, sub, isActive, delay }) {
  const count = useCountUp(end, isActive);

  return (
    <motion.div
      className="flex-1 min-w-[100px] flex flex-col gap-0.5 px-5 py-4"
      initial={{ opacity: 0, y: 10 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <span
        className="text-[22px] font-bold text-white tracking-tight tabular-nums leading-none"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {count}{suffix}
      </span>
      <span
        className="text-[12px] text-slate-300 font-medium mt-1 leading-none"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        {label}
      </span>
      <span
        className="text-[10.5px] text-slate-600 mt-0.5 leading-none"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        {sub}
      </span>
    </motion.div>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="flex flex-nowrap rounded-xl overflow-hidden"
      style={{
        background: "rgba(13,13,22,0.7)",
        border: "1px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(8px)",
      }}
    >
      {STATS.map(({ end, suffix, label, sub }, i) => (
        <div
          key={label}
          className="flex flex-1"
          style={{
            borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
          }}
        >
          <StatCell
            end={end}
            suffix={suffix}
            label={label}
            sub={sub}
            isActive={isInView}
            delay={i * 0.08}
          />
        </div>
      ))}
    </div>
  );
}
