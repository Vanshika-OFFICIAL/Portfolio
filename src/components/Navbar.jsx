import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.href.slice(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}

function smoothScroll(href) {
  document.querySelector(href)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function NavLink({ href, label, active, onClick }) {
  const isActive = active === href.slice(1);

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick(href);
      }}
      className="relative px-4 py-2 text-sm font-medium"
    >
      <span
        className={`relative z-10 transition ${
          isActive ? "text-white" : "text-slate-400 md:hover:text-white"
        }`}
      >
        {label}
      </span>

      {isActive && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            background: "rgba(139,92,246,0.12)",
            border: "1px solid rgba(139,92,246,0.25)",
          }}
        />
      )}
    </a>
  );
}

export default function Navbar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  const handleClick = (href) => {
    setOpen(false);
    smoothScroll(href);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#080810]/80 backdrop-blur border-b border-white/5">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#home");
          }}
          className="text-white font-bold text-lg"
        >
          Vanshika.Dev
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              {...link}
              active={active}
              onClick={handleClick}
            />
          ))}
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden text-white"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="md:hidden bg-[#080810] px-6 py-4 flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className="text-slate-300"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}