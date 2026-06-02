import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import profileImage from "../assets/profile.jpg";

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
    top: `calc(50% + ${Math.sin(rad) * radius}px - 20px)`,
    left: `calc(50% + ${Math.cos(rad) * radius}px - 20px)`,
  };
}

export default function TechOrbit() {
  const containerRef = useRef(null);
  const [radius, setRadius] = useState(120);
  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 1000], [0, 30]);

  const orbitY = useTransform(scrollY, [0, 1000], [0, -20]);

  const glowY = useTransform(scrollY, [0, 1000], [0, 15]);
  useEffect(() => {
    const updateRadius = () => {
      if (!containerRef.current) return;

      const size = containerRef.current.offsetWidth;

      setRadius(size / 2.1);
    };

    updateRadius();

    window.addEventListener("resize", updateRadius);

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] shrink-0"
    >
      {/* Main Orbit Ring */}

      <motion.div
        className="absolute inset-0 rounded-full border border-dashed border-violet-500/15"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Orbiting Particle */}

      <motion.div
        className="absolute inset-0"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-violet-400 blur-[2px]" />
      </motion.div>

      {/* Tech Badges Orbit */}

      <motion.div
        className="absolute inset-0"
        animate={{
          y: orbitY,
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {TECH.map(({ label, angle, color, Icon }) => (
          <motion.div
            key={label}
            style={{
              ...BadgePosition(angle, radius),
              background: "rgba(13,13,24,0.92)",
              border: `1px solid ${color}38`,
              color,
            }}
            className="absolute w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md"
            whileHover={{
              scale: 1.18,
              y: -2,
            }}
            animate={{
              y: angle % 120 === 0 ? [0, -5, 0] : [0, 5, 0],
            }}
            transition={{
              duration: 5 + angle / 100,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            title={label}
          >
            <Icon className="text-[17px]" />
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Profile Card */}

      <motion.div
        className="absolute inset-10 rounded-3xl p-[2px]"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "linear-gradient(140deg,#7c3aed 0%,#6366f1 55%,#4f46e5 100%)",
          boxShadow:
            "0 0 0 1px rgba(124,58,237,0.12),0 8px 30px rgba(124,58,237,0.20),0 20px 56px rgba(99,102,241,0.12)",
        }}
      >
        <div
          className="relative w-full h-full rounded-[24px] overflow-hidden"
          style={{
            background: "linear-gradient(160deg,#13102a 0%,#0a0a18 100%)",
          }}
        >
          {/* Shimmer Overlay */}

          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(145deg,rgba(167,139,250,0.08) 0%,rgba(99,102,241,0.03) 45%,transparent 70%)",
            }}
          />

          {/* Bottom Fade */}

          <div
            className="absolute bottom-0 left-0 right-0 h-1/3 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top,rgba(7,7,15,0.55),transparent)",
            }}
          />

          <img
            src={profileImage}
            alt="Vanshika Aggarwal"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </motion.div>

      {/* Animated Glow */}

      <motion.div
        className="absolute inset-8 rounded-3xl -z-10 pointer-events-none"
        animate={{
          opacity: [0.55, 1, 0.55],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(ellipse at center,rgba(109,40,217,0.18) 0%,rgba(79,70,229,0.08) 55%,transparent 75%)",
          filter: "blur(28px)",
        }}
      />
    </div>
  );
}
