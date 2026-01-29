import Link from "next/link";
import { ArrowRight, Star, PlayCircle, Users, Calendar, BarChart, Shield, CreditCard, ChevronRight, LayoutDashboard, Settings, FileText, ShoppingCart, Leaf, Wind, Bitcoin, Copy, Check } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#4A4A4A] font-sans selection:bg-emerald-200">
      {/* Header / Hero */}
      <header className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-green-800 to-teal-700 text-white py-24 px-6 text-center shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        {/* Decorative Nature Elements */}
        <div className="absolute top-10 left-10 opacity-20 animate-pulse"><Leaf size={48} /></div>
        <div className="absolute bottom-10 right-10 opacity-20 animate-pulse delay-700"><Wind size={48} /></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 tracking-tight text-emerald-50 drop-shadow-md">
            Fortune Academy
          </h1>
          <p className="text-lg md:text-2xl opacity-90 font-light mb-10 max-w-2xl mx-auto leading-relaxed text-emerald-100">
            Decode your destiny with numbers. Navigate life with nature's energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#fortune"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2"
            >
              Get Reading <ArrowRight size={18} />
            </Link>
            <Link
              href="#courses"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-emerald-100/30 text-emerald-50 rounded-full font-bold transition-all flex items-center justify-center gap-2"
            >
              Start Learning <PlayCircle size={18} />
            </Link>
          </div>
        </div>
      </header>

      {/* Auth Section */}
      <section id="auth" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-4">Member Login / Register</h2>
          <p className="text-slate-600">Join us to unlock your spiritual blueprint.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Login Card */}
          <div className="bg-white p-10 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-emerald-200 transition-colors">
            <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-emerald-600 rounded-full"></span>
              Login
            </h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Email</label>
                <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all bg-slate-50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Password</label>
                <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all bg-slate-50" />
              </div>
              <button className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold transition-colors shadow-md shadow-emerald-900/10">
                Sign In
              </button>
            </form>
          </div>

          {/* Register Card */}
          <div className="bg-white p-10 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-emerald-200 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-12 -mt-12 opacity-80"></div>
            <h3 className="text-xl font-bold text-teal-800 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-teal-500 rounded-full"></span>
              Create Account
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1">Name</label>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all bg-slate-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1">Birth Date</label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all bg-slate-50" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Email</label>
                <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all bg-slate-50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Password</label>
                <input type="password" placeholder="Create Password" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all bg-slate-50" />
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl font-bold transition-colors shadow-md shadow-emerald-500/20">
                Register Free
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Admin Dashboard Preview */}
      <section id="admin" className="py-20 px-6 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-800">Admin Dashboard</h2>
              <p className="text-slate-500">Manage your empire: Revenue, Orders, and Content.</p>
            </div>
            <div className="hidden md:flex gap-3">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wide">Live Demo</span>
              <span className="px-3 py-1 bg-slate-200 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wide">Admin Access</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {/* Stats Cards */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-500 text-sm font-bold">Today's Revenue</span>
                <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><CreditCard size={18} /></span>
              </div>
              <p className="text-2xl font-bold text-slate-800">$428.00</p>
              <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">↑ 12% <span className="text-slate-400">vs yesterday</span></p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-500 text-sm font-bold">Monthly Orders</span>
                <span className="p-2 bg-teal-50 text-teal-600 rounded-lg"><ShoppingCart size={18} /></span>
              </div>
              <p className="text-2xl font-bold text-slate-800">128</p>
              <p className="text-xs text-teal-600 mt-1 flex items-center gap-1">↑ 5% <span className="text-slate-400">vs last month</span></p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-500 text-sm font-bold">Active Members</span>
                <span className="p-2 bg-sky-50 text-sky-600 rounded-lg"><Users size={18} /></span>
              </div>
              <p className="text-2xl font-bold text-slate-800">3,456</p>
              <p className="text-xs text-sky-600 mt-1 flex items-center gap-1">↑ 24 <span className="text-slate-400">new this week</span></p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-500 text-sm font-bold">Pending Reply</span>
                <span className="p-2 bg-orange-50 text-orange-600 rounded-lg"><FileText size={18} /></span>
              </div>
              <p className="text-2xl font-bold text-slate-800">8</p>
              <p className="text-xs text-orange-600 mt-1 flex items-center gap-1">Needs attention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fortune Services & Payment */}
      <section id="fortune" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center text-emerald-900 mb-12">Book a Reading</h2>
        
        {/* Order Form with Crypto & Card */}
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 mb-16 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
           <form className="space-y-6">
             <div className="grid md:grid-cols-2 gap-6">
               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all" />
               </div>
               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Birth Date</label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all" />
               </div>
             </div>
             
             <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Service</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all bg-white">
                    <option>Love & Relationship Reading｜US$ 49</option>
                    <option>Career & Wealth Reading｜US$ 59</option>
                    <option>Full Year 2026 Forecast｜US$ 99</option>
                </select>
             </div>

             {/* Payment Method Selector */}
             <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">Payment Method</label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="cursor-pointer">
                    <input type="radio" name="payment" className="peer sr-only" defaultChecked />
                    <div className="p-4 rounded-xl border-2 border-slate-200 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 transition-all flex flex-col items-center justify-center gap-2 text-slate-500 peer-checked:text-emerald-700">
                      <CreditCard size={24} />
                      <span className="font-bold">Credit Card (USD)</span>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input type="radio" name="payment" className="peer sr-only" />
                    <div className="p-4 rounded-xl border-2 border-slate-200 peer-checked:border-teal-500 peer-checked:bg-teal-50 transition-all flex flex-col items-center justify-center gap-2 text-slate-500 peer-checked:text-teal-700">
                      <Bitcoin size={24} />
                      <span className="font-bold">Crypto (USDT)</span>
                    </div>
                  </label>
                </div>
             </div>

             {/* Crypto Info (Hidden by default, shown when checked - simplified for visual) */}
             <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-600 hidden">
                <p className="font-bold mb-2 flex items-center gap-2"><Bitcoin size={16} /> Send USDT (TRC20)</p>
                <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-200">
                  <code className="flex-1 truncate">TVj......(Wallet Address)</code>
                  <button type="button" className="p-1 hover:bg-slate-100 rounded"><Copy size={16} /></button>
                </div>
             </div>

             <button type="submit" className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 text-lg transform hover:-translate-y-0.5">
                Proceed to Payment <ChevronRight size={20} />
             </button>
           </form>
           
           <div className="mt-4 text-center text-xs text-slate-400">
             <p className="flex items-center justify-center gap-2">
               <Shield size={12} /> Secure payment via Lemon Squeezy or Blockchain
             </p>
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Love & Relationship",
              desc: "Understand your attraction patterns and soulmate timing.",
              price: "US$ 49",
              tag: "Best Seller",
              color: "emerald"
            },
            {
              title: "Career & Wealth",
              desc: "Discover your genius zone and wealth flow.",
              price: "US$ 59",
              tag: null,
              color: "teal"
            },
            {
              title: "2026 Full Forecast",
              desc: "A complete guide to your opportunities and risks this year.",
              price: "US$ 99",
              tag: "Recommended",
              color: "green"
            }
          ].map((item, i) => (
            <div key={i} className="group bg-white rounded-2xl p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all border border-slate-100 hover:border-emerald-200 relative">
              {item.tag && (
                <span className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-500 mb-6 min-h-[3rem]">{item.desc}</p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-emerald-800">{item.price}</p>
                <button className="px-5 py-2 bg-emerald-50 text-emerald-700 font-bold rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center text-emerald-900 mb-12">Online Courses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Numerology 101",
                desc: "Decode the secret code of your personality.",
                price: "US$ 129",
                tag: "Starter"
              },
              {
                title: "Love Astrology Masterclass",
                desc: "Advanced techniques for relationship analysis.",
                price: "US$ 249",
                tag: null
              },
              {
                title: "Certified Fortune Mentor",
                desc: "Become a professional consultant and start your career.",
                price: "US$ 699",
                tag: "Career Path"
              }
            ].map((course, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <div className="h-40 bg-slate-200 relative overflow-hidden">
                   <div className={`absolute inset-0 bg-gradient-to-r ${i === 0 ? 'from-emerald-400 to-green-500' : i === 1 ? 'from-teal-400 to-emerald-500' : 'from-green-500 to-teal-600'} opacity-80 group-hover:scale-110 transition-transform duration-500`}></div>
                   <div className="absolute inset-0 flex items-center justify-center text-white/90">
                     <PlayCircle size={48} className="drop-shadow-lg opacity-80 group-hover:opacity-100 transition-opacity" />
                   </div>
                </div>
                <div className="p-8">
                  {course.tag && (
                     <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-2 py-1 rounded mb-3">
                       {course.tag}
                     </span>
                  )}
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{course.title}</h3>
                  <p className="text-slate-500 mb-6 text-sm">{course.desc}</p>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xl font-bold text-teal-600">{course.price}</span>
                    <button className="text-emerald-600 font-bold hover:text-emerald-800 flex items-center gap-1 text-sm">
                      Enroll <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2e26] text-slate-400 py-12 px-6 text-center text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <h3 className="text-white font-bold text-lg mb-2">Fortune Academy</h3>
            <p>Navigate life with nature's energy.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p>© 2026 Fortune Academy All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
