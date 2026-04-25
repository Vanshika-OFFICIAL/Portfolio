import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg";
import { useRef, useEffect, useState } from "react";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiJavascript,
} from "react-icons/si";

const TECH = [
  { label: "MongoDB", angle: 0, color: "#47A248", Icon: SiMongodb },
  { label: "Express", angle: 60, color: "#9ca3af", Icon: SiExpress },
  { label: "React", angle: 120, color: "#61DAFB", Icon: SiReact },
  { label: "Node.js", angle: 180, color: "#68A063", Icon: SiNodedotjs },
  { label: "Firebase", angle: 240, color: "#FFCB2B", Icon: SiFirebase },
  { label: "JavaScript", angle: 300, color: "#F7DF1E", Icon: SiJavascript },
];

function BadgePosition(angleDeg, radius) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    top: `calc(50% + ${Math.sin(rad) * radius}px - 18px)`,
    left: `calc(50% + ${Math.cos(rad) * radius}px - 18px)`,
  };
}

export default function TechOrbit() {
  const containerRef = useRef(null);
  const [radius, setRadius] = useState(120);

  useEffect(() => {
    const updateRadius = () => {
      if (!containerRef.current) return;

      const size = containerRef.current.offsetWidth;

      // 🔥 ONLY FIX: dynamic radius based on container
      const calculatedRadius = size / 2.1;

      setRadius(calculatedRadius);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] shrink-0"
    >

      {/* Orbit ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-dashed border-violet-500/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />

      {/* Tech badges */}
      {TECH.map(({ label, angle, color, Icon }) => (
        <motion.div
          key={label}
          aria-label={label}
          className="absolute w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-[11px] font-bold cursor-default"
          style={{
            ...BadgePosition(angle, radius),
            background: "rgba(13,13,24,0.92)",
            border: `1px solid ${color}38`,
            color,
          }}
          whileHover={{ scale: 1.15, borderColor: color + "88" }}
          transition={{ type: "spring", stiffness: 340, damping: 22 }}
          title={label}
        >
          <Icon className="text-[14px] sm:text-[16px]" />
        </motion.div>
      ))}

      {/* Image frame */}
      <div
        className="absolute inset-10 sm:inset-8 lg:inset-10 rounded-3xl p-0.5"
        style={{
          background:
            "linear-gradient(140deg, #7c3aed 0%, #6366f1 55%, #4f46e5 100%)",
          boxShadow: [
            "0 0 0 1px rgba(124,58,237,0.12)",
            "0 8px 30px rgba(124,58,237,0.20)",
            "0 20px 56px rgba(99,102,241,0.12)",
          ].join(", "),
        }}
      >
        <div
          className="relative w-full h-full rounded-[22px] overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, #13102a 0%, #0a0a18 100%)",
          }}
        >
          {/* Shimmer */}
          <div
            className="absolute inset-0 z-30 pointer-events-none"
            style={{
              background:
                "linear-gradient(145deg, rgba(167,139,250,0.09) 0%, rgba(99,102,241,0.03) 40%, transparent 65%)",
            }}
          />

          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1/3 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(7,7,15,0.52) 0%, transparent 100%)",
            }}
          />

          {/* Image */}
          <img
            src={profileImage}
            alt="Vanshika, MERN Stack Developer"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Glow */}
      <div
        className="absolute inset-8 rounded-3xl -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(109,40,217,0.16) 0%, rgba(79,70,229,0.07) 55%, transparent 75%)",
          filter: "blur(22px)",
          transform: "scale(1.08) translateY(6px)",
        }}
      />
    </div>
  );
}