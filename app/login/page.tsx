"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Mail, Lock, User, ArrowLeft, Sparkles, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-[#F3EFE7] font-sans text-[#4A5D4E]">
      
      {/* Background with Blur Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#6F8F72] opacity-10"></div>
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#C9A96A] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-40 w-[500px] h-[500px] bg-[#6F8F72] rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        
        {/* Logo Area */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-2 group">
             <div className="w-10 h-10 bg-[#6F8F72] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
               <Sparkles size={20} />
             </div>
             <span className="text-2xl font-serif font-bold text-[#4A5D4E]">SoulSpace</span>
          </Link>
          <p className="text-sm text-gray-500">
            {authMode === 'login' ? 'Welcome back to your sanctuary.' : 'Start your healing journey today.'}
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(111,143,114,0.15)] border border-white p-8 md:p-10">
            
            {/* Toggle Tabs */}
            <div className="flex p-1.5 bg-[#FAFAF8] rounded-xl mb-8 border border-gray-100">
              <button 
                onClick={() => setAuthMode('login')}
                className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${authMode === 'login' ? 'bg-white text-[#6F8F72] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Sign In
              </button>
              <button 
                onClick={() => setAuthMode('register')}
                className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${authMode === 'register' ? 'bg-white text-[#6F8F72] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Sign Up
              </button>
            </div>

            <form className="space-y-5">
                {authMode === 'register' && (
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wide">Full Name</label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#6F8F72] transition-colors" size={18} />
                        <input type="text" className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#FAFAF8] border border-gray-200 focus:bg-white focus:border-[#6F8F72] focus:ring-4 focus:ring-[#6F8F72]/10 outline-none transition-all text-sm font-medium" placeholder="e.g. Alice Chen" />
                      </div>
                    </div>
                )}
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wide">Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#6F8F72] transition-colors" size={18} />
                    <input type="email" className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#FAFAF8] border border-gray-200 focus:bg-white focus:border-[#6F8F72] focus:ring-4 focus:ring-[#6F8F72]/10 outline-none transition-all text-sm font-medium" placeholder="name@example.com" />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center ml-1">
                     <label className="text-xs font-bold text-gray-400 uppercase tracking-wide">Password</label>
                     {authMode === 'login' && <Link href="#" className="text-xs font-bold text-[#C9A96A] hover:underline">Forgot?</Link>}
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#6F8F72] transition-colors" size={18} />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      className="w-full pl-11 pr-11 py-3.5 rounded-xl bg-[#FAFAF8] border border-gray-200 focus:bg-white focus:border-[#6F8F72] focus:ring-4 focus:ring-[#6F8F72]/10 outline-none transition-all text-sm font-medium" 
                      placeholder="••••••••" 
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500">
                       {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                   <Link 
                      href={authMode === 'login' ? "/dashboard" : "/course/play"}
                      className="w-full py-3.5 rounded-xl text-white font-bold text-sm shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 bg-[#6F8F72]"
                   >
                     {authMode === 'login' ? 'Continue' : 'Create Account'} <ArrowRight size={18} />
                   </Link>
                </div>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium text-gray-600">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                    Google
                  </button>
                  <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium text-gray-600">
                    <img src="https://www.svgrepo.com/show/448234/apple.svg" alt="Apple" className="w-5 h-5" />
                    Apple
                  </button>
              </div>
            </div>
        </div>

        {/* Footer Links */}
        <div className="text-center mt-8 text-xs text-gray-400 flex justify-center gap-4">
           <Link href="#" className="hover:text-[#6F8F72]">Terms of Service</Link>
           <span>•</span>
           <Link href="#" className="hover:text-[#6F8F72]">Privacy Policy</Link>
        </div>

      </div>
    </div>
  );
}
