"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, PlayCircle, Users, Calendar, CreditCard, ChevronRight, Menu, X, Wind, Sun, Heart, Sparkles, Smile, Feather, LayoutDashboard, Settings, FileText, ShoppingCart, Check, Mail, Lock, User, LogOut, Bell } from "lucide-react";

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
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

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
            <Link href="#admin" className="hover:text-[#C9A96A] transition-colors">Dashboard</Link>
            <button className="px-6 py-2 rounded-full text-white transition-transform hover:scale-105 shadow-md hover:shadow-lg" style={{ backgroundColor: COLORS.primary }}>
              Login
            </button>
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
                <Link href="#admin" onClick={() => setIsMobileMenuOpen(false)}>Dashboard</Link>
                <button className="w-full py-3 rounded-xl text-white font-bold" style={{ backgroundColor: COLORS.primary }}>Login</button>
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

      {/* OPTIMIZED AUTH SECTION */}
      <section id="auth" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl -z-10"></div>
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(111,143,114,0.1)] border border-[#F3EFE7] overflow-hidden relative">
            
            {/* Toggle Header */}
            <div className="flex border-b border-[#F3EFE7]">
              <button 
                onClick={() => setAuthMode('login')}
                className={`flex-1 py-5 text-center font-bold text-sm uppercase tracking-wider transition-all ${authMode === 'login' ? 'text-[#6F8F72] bg-white' : 'text-gray-400 bg-[#FAFAF8]'}`}
              >
                Sign In
              </button>
              <button 
                onClick={() => setAuthMode('register')}
                className={`flex-1 py-5 text-center font-bold text-sm uppercase tracking-wider transition-all ${authMode === 'register' ? 'text-[#6F8F72] bg-white' : 'text-gray-400 bg-[#FAFAF8]'}`}
              >
                Join Us
              </button>
            </div>

            <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#F3EFE7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles size={28} color={COLORS.primary} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#4A5D4E]">
                  {authMode === 'login' ? 'Welcome Back' : 'Start Your Journey'}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {authMode === 'login' ? 'Enter your details to access your soul map.' : 'Create an account to track your spiritual growth.'}
                </p>
              </div>

              <form className="space-y-4">
                {authMode === 'register' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#6F8F72] transition-colors" size={20} />
                      <input type="text" placeholder="Your Name" className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#FAFAF8] border border-transparent focus:bg-white focus:border-[#6F8F72] focus:ring-4 focus:ring-[#6F8F72]/10 outline-none transition-all" />
                    </div>
                  </motion.div>
                )}
                
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#6F8F72] transition-colors" size={20} />
                  <input type="email" placeholder="Email Address" className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#FAFAF8] border border-transparent focus:bg-white focus:border-[#6F8F72] focus:ring-4 focus:ring-[#6F8F72]/10 outline-none transition-all" />
                </div>
                
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#6F8F72] transition-colors" size={20} />
                  <input type="password" placeholder="Password" className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#FAFAF8] border border-transparent focus:bg-white focus:border-[#6F8F72] focus:ring-4 focus:ring-[#6F8F72]/10 outline-none transition-all" />
                </div>

                <button className="w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2" style={{ backgroundColor: COLORS.primary }}>
                  {authMode === 'login' ? 'Sign In' : 'Create Account'} <ArrowRight size={20} />
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-[#F3EFE7] text-center">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Or continue with</p>
                <div className="flex gap-4 justify-center">
                  <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <img src="https://www.svgrepo.com/show/448234/apple.svg" alt="Apple" className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
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

      {/* OPTIMIZED ADMIN DASHBOARD */}
      <section id="admin" className="py-24 px-6 bg-[#FAFAF8] relative">
        <div className="max-w-7xl mx-auto">
           <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-4">
              <div>
                <span className="text-[#C9A96A] font-bold tracking-widest text-xs uppercase mb-2 block">Practitioner Portal</span>
                <h2 className="text-4xl font-serif font-bold text-[#4A5D4E]">My Sanctuary</h2>
                <p className="text-gray-500 mt-2">Manage your sessions, students, and energy exchange.</p>
              </div>
              <div className="flex gap-4">
                 <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-sm text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    System Operational
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Sidebar / Profile Card */}
              <div className="lg:col-span-3 space-y-6">
                 <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-gray-100 text-center">
                    <div className="w-24 h-24 rounded-full bg-[#F3EFE7] mx-auto mb-4 p-1 border-2 border-[#C9A96A]">
                       <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop" alt="Profile" className="w-full h-full rounded-full object-cover" />
                    </div>
                    <h3 className="font-serif font-bold text-lg">Master Healer</h3>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-6">Administrator</p>
                    
                    <nav className="space-y-2 text-left">
                       {[
                         { icon: LayoutDashboard, label: "Overview", active: true },
                         { icon: Calendar, label: "Appointments", active: false },
                         { icon: Users, label: "Students", active: false },
                         { icon: FileText, label: "Content", active: false },
                         { icon: Settings, label: "Settings", active: false },
                       ].map((item, i) => (
                         <button key={i} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${item.active ? 'bg-[#6F8F72] text-white' : 'text-gray-500 hover:bg-[#F3EFE7]'}`}>
                            <item.icon size={18} />
                            {item.label}
                         </button>
                       ))}
                    </nav>
                 </div>
                 
                 <div className="bg-[#6F8F72] p-6 rounded-[1.5rem] text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                       <h4 className="font-serif font-bold text-xl mb-1">$4,280</h4>
                       <p className="text-emerald-100 text-sm mb-4">Total Energy Exchange</p>
                       <button className="w-full py-2 bg-white/20 backdrop-blur rounded-lg text-sm font-bold hover:bg-white/30 transition-colors">Withdraw Funds</button>
                    </div>
                 </div>
              </div>

              {/* Main Dashboard Area */}
              <div className="lg:col-span-9 space-y-8">
                 {/* Stats Row */}
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { label: "Pending Readings", val: "8", icon: Mail, color: "text-orange-500", bg: "bg-orange-50" },
                      { label: "Active Students", val: "342", icon: Users, color: "text-[#6F8F72]", bg: "bg-[#E8F0E9]" },
                      { label: "Upcoming Sessions", val: "12", icon: Calendar, color: "text-blue-500", bg: "bg-blue-50" },
                    ].map((stat, i) => (
                       <div key={i} className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-gray-100 flex items-center justify-between">
                          <div>
                             <p className="text-gray-400 text-xs font-bold uppercase tracking-wide mb-1">{stat.label}</p>
                             <h4 className="text-3xl font-serif font-bold text-[#4A5D4E]">{stat.val}</h4>
                          </div>
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                             <stat.icon size={24} />
                          </div>
                       </div>
                    ))}
                 </div>

                 {/* Recent Activity Table */}
                 <div className="bg-white rounded-[1.5rem] shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                       <h3 className="font-bold text-[#4A5D4E]">Recent Soul Contracts</h3>
                       <button className="text-sm text-[#C9A96A] font-bold hover:underline">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                       <table className="w-full text-sm text-left">
                          <thead className="bg-[#FAFAF8] text-gray-400 font-medium uppercase text-xs">
                             <tr>
                                <th className="px-6 py-4">Client</th>
                                <th className="px-6 py-4">Service</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4"></th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-50">
                             {[
                               { name: "Sarah L.", service: "Inner Child Healing", status: "Completed", amount: "$111", img: "1" },
                               { name: "Michael C.", service: "Soul Purpose Map", status: "Pending", amount: "$88", img: "2" },
                               { name: "Jessica T.", service: "Relationship Synastry", status: "Scheduled", amount: "$144", img: "3" },
                             ].map((row, i) => (
                               <tr key={i} className="hover:bg-[#FAFAF8] transition-colors">
                                  <td className="px-6 py-4">
                                     <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                                           <img src={`https://source.unsplash.com/random/100x100?face,${row.img}`} alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <span className="font-bold text-[#4A5D4E]">{row.name}</span>
                                     </div>
                                  </td>
                                  <td className="px-6 py-4 text-gray-500">{row.service}</td>
                                  <td className="px-6 py-4">
                                     <span className={`px-3 py-1 rounded-full text-xs font-bold 
                                        ${row.status === 'Completed' ? 'bg-[#E8F0E9] text-[#6F8F72]' : 
                                          row.status === 'Pending' ? 'bg-orange-50 text-orange-500' : 'bg-blue-50 text-blue-500'}`}>
                                        {row.status}
                                     </span>
                                  </td>
                                  <td className="px-6 py-4 font-bold text-[#4A5D4E]">{row.amount}</td>
                                  <td className="px-6 py-4 text-right">
                                     <button className="text-gray-300 hover:text-[#6F8F72]"><Settings size={16} /></button>
                                  </td>
                               </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                 </div>
              </div>
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
          
          <div>
            <h4 className="font-bold mb-6 text-white">Offerings</h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li><Link href="#" className="hover:text-white transition-colors">Readings</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Courses</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Newsletter</h4>
            <div className="flex">
              <input type="email" placeholder="Email" className="bg-white/10 border-none rounded-l-lg px-4 py-2 text-sm w-full placeholder-white/50 focus:ring-1 focus:ring-white" />
              <button className="bg-[#C9A96A] text-white px-4 rounded-r-lg font-bold hover:bg-[#b8985e] transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-white/10 mt-16 pt-8 text-center text-xs opacity-50">
          © 2026 SoulSpace Academy. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
