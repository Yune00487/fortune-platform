"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, PlayCircle, Users, Calendar, CreditCard, ChevronRight, Menu, X, Wind, Sun, Heart, Sparkles, Smile, Feather, CheckCircle } from "lucide-react";

// Color Palette Constants
const COLORS = {
  primary: "#6F8F72", // Sage Green
  secondary: "#F3EFE7", // Cream Beige
  accent: "#C9A96A", // Warm Gold
  background: "#FAFAF8", // Warm Grayish White
  textMain: "#4A5D4E", // Darker Green-Grey for text
  textLight: "#8A9A8D", // Lighter Green-Grey
  white: "#FFFFFF",
};

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`min-h-screen font-sans selection:bg-[#C9A96A] selection:text-white`} style={{ backgroundColor: COLORS.background, color: COLORS.textMain }}>
      
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#FAFAF8]/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles size={24} color={COLORS.primary} />
            <span className="text-xl font-serif font-bold tracking-wide" style={{ color: COLORS.primary }}>SoulSpace</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#services" className="hover:text-[#C9A96A] transition-colors">Readings</Link>
            <Link href="#courses" className="hover:text-[#C9A96A] transition-colors">Courses</Link>
            <Link href="/dashboard" className="hover:text-[#C9A96A] transition-colors">Teacher Portal</Link>
            <Link href="/login" className="px-6 py-2 rounded-full text-white transition-transform hover:scale-105 shadow-md hover:shadow-lg" style={{ backgroundColor: COLORS.primary }}>
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#FAFAF8] border-b border-[#F3EFE7] overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                <Link href="#services" onClick={() => setIsMobileMenuOpen(false)}>Readings</Link>
                <Link href="#courses" onClick={() => setIsMobileMenuOpen(false)}>Courses</Link>
                <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>Teacher Portal</Link>
                <Link href="/login" className="w-full py-3 rounded-xl text-white font-bold text-center" style={{ backgroundColor: COLORS.primary }}>Login</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ backgroundColor: "#E8F0E9" }}></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-3xl opacity-30" style={{ backgroundColor: "#F9F5EB" }}></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium tracking-wider uppercase bg-white/50 backdrop-blur-sm border border-[#F3EFE7]" style={{ color: COLORS.textMain }}>
              <Feather size={14} color={COLORS.accent} />
              <span>Heal Your Inner Child</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight" style={{ color: COLORS.primary }}>
              Reconnect with your <br />
              <span className="italic relative inline-block">
                Original Self
                <svg className="absolute w-full h-3 -bottom-1 left-0" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00024 7.00003C53.308 3.52296 113.843 0.281149 198.001 3.50003" stroke={COLORS.accent} strokeWidth="3" strokeLinecap="round"/></svg>
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto leading-relaxed opacity-80" style={{ color: COLORS.textMain }}>
              A sanctuary for spiritual restoration. Use ancient wisdom to navigate your life's journey.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#services" className="px-10 py-5 rounded-full font-bold text-white shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2" style={{ backgroundColor: COLORS.primary }}>
                Begin Healing <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy / About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative shadow-2xl">
              <img src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=1000&auto=format&fit=crop" alt="Meditation" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#6F8F72]/20 mix-blend-overlay"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 p-6 rounded-2xl shadow-xl bg-white max-w-xs animate-bounce-slow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-full bg-[#F3EFE7] text-[#C9A96A]"><Sun size={20} /></div>
                <span className="font-bold text-[#6F8F72]">Daily Guidance</span>
              </div>
              <p className="text-sm text-gray-500">"The universe is not outside of you. Look inside yourself; everything that you want, you already are."</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: COLORS.accent }}>Our Philosophy</h2>
            <h3 className="text-4xl font-serif font-bold mb-6" style={{ color: COLORS.primary }}>You are not broken.<br/>You are just disconnected.</h3>
            <p className="text-lg leading-relaxed mb-6 opacity-80">
              Life's trauma and busyness can separate us from our inner child—the source of our intuition and joy. 
              Our readings and courses are not just about "predicting the future," but about **remembering who you were before the world told you who to be.**
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Restore energetic balance",
                "Uncover hidden trauma patterns",
                "Reclaim your authentic power"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle color={COLORS.primary} />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="#courses" className="text-[#6F8F72] font-bold border-b-2 border-[#C9A96A] pb-1 hover:text-[#C9A96A] transition-colors">
              Read Our Full Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6" style={{ backgroundColor: COLORS.secondary }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4" style={{ color: COLORS.primary }}>Spiritual Readings</h2>
            <p className="max-w-xl mx-auto opacity-70">Choose a session to clarify your path.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Inner Child Healing", desc: "Identify childhood wounds and retrieve lost parts of your soul.", price: "$111", icon: Heart },
              { title: "Soul Purpose Map", desc: "Why are you here? Discover your career and life mission codes.", price: "$88", icon: Star },
              { title: "Relationship Synastry", desc: "Understand the karmic contracts between you and your partner.", price: "$144", icon: Users }
            ].map((service, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all relative border border-transparent hover:border-[#C9A96A]/30">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: COLORS.secondary }}>
                  <service.icon size={32} color={COLORS.primary} />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.textMain }}>{service.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed h-16">{service.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif font-bold" style={{ color: COLORS.primary }}>{service.price}</span>
                  <button className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-colors hover:scale-110" style={{ backgroundColor: COLORS.primary }}>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form (Retained as is, just ensured it's not the Auth form) */}
      <section className="py-24 px-6 relative overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#F3EFE7] rounded-full filter blur-3xl -z-10 opacity-50"></div>
         <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif font-bold mb-2" style={{ color: COLORS.primary }}>Book Your Session</h2>
              <p className="opacity-60">Secure your spot. Energy exchange is handled securely.</p>
            </div>
            {/* ...Simple Booking Form ... */}
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                 <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl bg-[#FAFAF8] border-none focus:ring-2 focus:ring-[#6F8F72] transition-all" />
                 <input type="email" placeholder="Email" className="w-full px-6 py-4 rounded-2xl bg-[#FAFAF8] border-none focus:ring-2 focus:ring-[#6F8F72] transition-all" />
              </div>
              <button className="w-full py-5 rounded-2xl text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all" style={{ backgroundColor: COLORS.primary }}>
                Proceed to Payment
              </button>
            </form>
         </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-2" style={{ color: COLORS.primary }}>Online Journeys</h2>
              <p className="opacity-70">Self-paced courses to heal at your own rhythm.</p>
            </div>
            <Link href="#" className="flex items-center gap-2 font-bold hover:gap-3 transition-all" style={{ color: COLORS.accent }}>
              View all courses <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              { title: "Numerology for Self-Love", desc: "Stop judging yourself. Start understanding your blueprint.", image: "https://images.unsplash.com/photo-1515023115689-589c33041697?q=80&w=1000&auto=format&fit=crop", price: "$129" },
              { title: "The Healer's Path Certification", desc: "Turn your intuition into a career. 12-week intensive.", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop", price: "$699" }
            ].map((course, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="group cursor-pointer rounded-[2rem] overflow-hidden bg-[#FAFAF8] shadow-sm hover:shadow-xl transition-all">
                <Link href="/course/play">
                    <div className="h-64 overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute bottom-6 left-6 z-20">
                        <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block" style={{ color: COLORS.textMain }}>Course</span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-serif font-bold leading-tight max-w-xs" style={{ color: COLORS.textMain }}>{course.title}</h3>
                        <span className="font-bold text-xl" style={{ color: COLORS.accent }}>{course.price}</span>
                      </div>
                      <p className="opacity-70 mb-6">{course.desc}</p>
                      <span className="inline-flex items-center gap-2 font-bold text-sm underline decoration-2 underline-offset-4" style={{ color: COLORS.primary, textDecorationColor: COLORS.accent }}>
                        Enroll Now
                      </span>
                    </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 text-center md:text-left" style={{ backgroundColor: COLORS.primary, color: "#E8F0E9" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
              <Sparkles size={24} color={COLORS.accent} />
              <span className="text-2xl font-serif font-bold">SoulSpace</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              A safe space for you to heal, grow, and remember your magic.
            </p>
          </div>
          {/* ... footer links ... */}
          <div className="max-w-6xl mx-auto border-t border-white/10 mt-16 pt-8 text-center text-xs opacity-50">
             © 2026 SoulSpace Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
