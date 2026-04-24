import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const sendEmail = async (e) => {
    e.preventDefault();

    if (loading) return;

    const formData = new FormData(form.current);
    const name = formData.get("user_name")?.trim();
    const email = formData.get("user_email")?.trim();
    const message = formData.get("message")?.trim();

    // ✅ Improved validation
    if (!name || name.length < 3) {
      toast.error("Please enter a valid name");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!message || message.length < 10) {
      toast.error("Message should be at least 10 characters");
      return;
    }

    try {
      setLoading(true);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // ✅ Success feedback
      toast.success("Message sent successfully 🚀 I'll get back to you soon!");
      setStatus("success");
      form.current.reset();

    } catch (error) {
      console.error("EmailJS Error:", error);

     
      toast.error(
        error?.text || "Failed to send message ❌ Try again later."
      );
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#07070f] px-6 md:px-12 lg:px-20 py-24 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-16">

        {/* 🔥 HEADLINE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            I’m currently{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-indigo-400">
              open to opportunities
            </span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-xl">
            Looking for roles where I can build scalable MERN applications,
            contribute to real-world products, and grow as a full-stack developer.
          </p>
        </motion.div>

        {/* 🔥 MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-white/10 bg-[#0f0f1c]/70 backdrop-blur-xl p-8 shadow-xl"
        >
          <div className="absolute inset-0 bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500 opacity-10 blur-2xl rounded-2xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10">

            {/* LEFT */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold text-white">Let’s connect</h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                If you’re hiring, building something interesting, or just want to connect —
                feel free to reach out. I usually respond within 24 hours.
              </p>

              <div className="flex flex-col gap-4 mt-2">
                <a href="mailto:vanshika9354@gmail.com" className="bg-[#07070f] border border-white/10 px-4 py-3 rounded-lg text-sm hover:border-violet-400 transition">
                  📧 vanshika9354@gmail.com
                </a>

                <a href="https://www.linkedin.com/in/vanshika-027518286/" target="_blank" rel="noopener noreferrer" className="bg-[#07070f] border border-white/10 px-4 py-3 rounded-lg text-sm hover:border-violet-400 transition">
                  🔗 LinkedIn Profile
                </a>

                <a href="https://github.com/Vanshika-OFFICIAL" target="_blank" rel="noopener noreferrer" className="bg-[#07070f] border border-white/10 px-4 py-3 rounded-lg text-sm hover:border-violet-400 transition">
                  💻 GitHub
                </a>
              </div>

              <p className="text-xs text-slate-500 mt-4">
                Available for full-time roles, internships, and freelance work.
              </p>
            </div>

            {/* RIGHT FORM */}
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">

              <label htmlFor="user_name" className="sr-only">Your Name</label>

              <input
                id="user_name"
                type="text"
                name="user_name"
                placeholder="Your Name"
                autoComplete="name"
                required
                className="bg-[#07070f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500"
              />

              <label htmlFor="user_email" className="sr-only">Your Email</label>

              <input
                id="user_email"
                type="email"
                name="user_email"
                placeholder="Your Email"
                autoComplete="email"
                required
                className="bg-[#07070f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500"
              />

              <label htmlFor="message" className="sr-only">Your Message</label>

              <textarea
                id="message"
                rows="4"
                name="message"
                placeholder="Brief about the opportunity..."
                required
                className="bg-[#07070f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-2 bg-linear-to-r from-violet-500 to-indigo-500 text-white font-semibold py-3 rounded-lg transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
{status === "success" && (
  <p className="text-green-400 text-sm mt-2">
    Message sent successfully 🚀
  </p>
)}
            </form>

          </div>
        </motion.div>

      </div>
    </section>
  );
}