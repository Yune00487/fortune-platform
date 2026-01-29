"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Star, CheckCircle, Clock, BookOpen, PlayCircle, Users, ArrowRight, Sparkles, ChevronDown, Lock } from "lucide-react";

// Color Palette Constants
const COLORS = {
  primary: "#6F8F72", // Sage Green
  secondary: "#F3EFE7", // Cream Beige
  accent: "#C9A96A", // Warm Gold
  background: "#FAFAF8", // Warm Grayish White
  textMain: "#4A5D4E", // Darker Green-Grey
  textLight: "#8A9A8D", // Lighter Green-Grey
  white: "#FFFFFF",
};

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#4A5D4E] font-sans">
      
      {/* Navigation (Simplified) */}
      <nav className="bg-white border-b border-gray-100 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
           <Link href="/" className="flex items-center gap-2 font-serif font-bold text-[#6F8F72] text-xl">
             <Sparkles size={20} /> SoulSpace
           </Link>
           <Link href="/login" className="px-4 py-2 rounded-full text-sm font-bold bg-[#F3EFE7] text-[#6F8F72] hover:bg-[#E8F0E9] transition-colors">
             Login
           </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-[#F3EFE7] py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video group">
             <img 
               src="https://images.unsplash.com/photo-1515023115689-589c33041697?q=80&w=1200&auto=format&fit=crop" 
               alt="Course Cover" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                   <PlayCircle size={40} fill="white" className="opacity-90" />
                </div>
             </div>
          </div>

          {/* Right: Info */}
          <div>
             <div className="flex gap-2 mb-4">
               <span className="px-3 py-1 bg-[#6F8F72] text-white text-xs font-bold uppercase tracking-wider rounded-full">Online Course</span>
               <span className="px-3 py-1 bg-white border border-[#C9A96A] text-[#C9A96A] text-xs font-bold uppercase tracking-wider rounded-full">Beginner</span>
             </div>
             
             <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#4A5D4E] mb-4">
               Numerology for Self-Love: Decoding Your Blueprint
             </h1>
             <p className="text-lg text-gray-500 mb-6 leading-relaxed">
               Stop judging yourself. Learn to read your own Soul Numbers to uncover your hidden talents, karmic lessons, and authentic purpose.
             </p>

             <div className="flex items-center gap-6 text-sm font-medium text-gray-500 mb-8">
               <div className="flex items-center gap-2"><Clock size={16} /> 4.5 Hours</div>
               <div className="flex items-center gap-2"><BookOpen size={16} /> 12 Lessons</div>
               <div className="flex items-center gap-2"><Users size={16} /> 1,203 Students</div>
             </div>

             <div className="flex items-center gap-4">
               <span className="text-4xl font-serif font-bold text-[#6F8F72]">$129</span>
               <span className="text-xl text-gray-400 line-through">$199</span>
             </div>

             <div className="mt-8 flex gap-4">
               <button className="flex-1 py-4 bg-[#6F8F72] hover:bg-[#5a7a5d] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                 Enroll Now <ArrowRight size={20} />
               </button>
               <button className="px-6 py-4 bg-white border-2 border-[#F3EFE7] hover:border-[#6F8F72] text-[#6F8F72] rounded-xl font-bold transition-all">
                 Preview
               </button>
             </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-6">
         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-2">
               {/* Tabs */}
               <div className="flex border-b border-gray-100 mb-8 sticky top-[73px] bg-[#FAFAF8] z-40">
                  {["overview", "curriculum", "reviews"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 font-bold text-sm uppercase tracking-wider transition-all border-b-2 ${activeTab === tab ? "border-[#6F8F72] text-[#6F8F72]" : "border-transparent text-gray-400 hover:text-gray-600"}`}
                    >
                      {tab}
                    </button>
                  ))}
               </div>

               {/* Overview Content */}
               {activeTab === "overview" && (
                 <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div>
                      <h3 className="text-2xl font-serif font-bold mb-4">About This Course</h3>
                      <div className="prose prose-stone text-gray-600 leading-relaxed">
                        <p className="mb-4">
                          Many of us walk through life feeling like we don't fit in, or that we're "too much" of something and "not enough" of another. Numerology teaches us that these traits aren't flaws—they are features of your unique design.
                        </p>
                        <p>
                          In this comprehensive course, Master Elena guides you through the ancient Pythagorean system to calculate and interpret your core numbers. You will leave with a complete "User Manual" for your life.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                       <h3 className="font-bold text-lg mb-4">What You Will Learn</h3>
                       <div className="grid md:grid-cols-2 gap-4">
                          {[
                            "Calculate your Life Path, Destiny, and Soul Urge numbers",
                            "Identify your 'Karmic Debt' numbers and how to clear them",
                            "Understand your personal year cycles for better timing",
                            "Discover your compatibility with partners and friends",
                            "Create a personalized numerology chart"
                          ].map((item, i) => (
                            <div key={i} className="flex gap-3">
                               <CheckCircle className="text-[#6F8F72] flex-shrink-0" size={20} />
                               <span className="text-sm text-gray-600">{item}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
               )}

               {/* Curriculum Content */}
               {activeTab === "curriculum" && (
                 <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {[
                      { title: "Module 1: The Foundations", lessons: 3, duration: "45 min" },
                      { title: "Module 2: The Core Numbers", lessons: 5, duration: "120 min" },
                      { title: "Module 3: Forecasting Your Future", lessons: 4, duration: "90 min" },
                    ].map((module, i) => (
                      <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden">
                         <div className="p-4 bg-gray-50 flex justify-between items-center font-bold text-sm">
                            <span>{module.title}</span>
                            <span className="text-gray-400 font-normal">{module.lessons} Lessons • {module.duration}</span>
                         </div>
                         <div className="divide-y divide-gray-50">
                            {[1, 2, 3].map((l) => (
                              <div key={l} className="p-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
                                 <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#E8F0E9] flex items-center justify-center text-[#6F8F72]">
                                       <PlayCircle size={14} />
                                    </div>
                                    <span className="text-sm text-gray-600">Lesson {l}: Introduction to Energy</span>
                                 </div>
                                 {i === 0 && l === 1 ? (
                                    <span className="text-xs text-[#6F8F72] font-bold border border-[#6F8F72] px-2 py-0.5 rounded">Preview</span>
                                 ) : (
                                    <Lock size={14} className="text-gray-300" />
                                 )}
                              </div>
                            ))}
                         </div>
                      </div>
                    ))}
                 </div>
               )}

               {/* Reviews Content */}
               {activeTab === "reviews" && (
                 <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center gap-4 bg-[#F3EFE7] p-6 rounded-xl">
                       <div className="text-center">
                          <span className="text-4xl font-bold text-[#6F8F72]">4.9</span>
                          <div className="flex text-[#C9A96A] text-xs mt-1">
                             {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                          </div>
                       </div>
                       <div className="flex-1 border-l border-gray-300 pl-4">
                          <p className="text-sm font-bold mb-1">Student Feedback</p>
                          <p className="text-xs text-gray-500">Based on 124 reviews</p>
                       </div>
                    </div>

                    {[
                      { name: "Jessica M.", rating: 5, text: "This course changed how I view myself. I finally understand why I've always felt different." },
                      { name: "David K.", rating: 5, text: "Master Elena explains complex concepts so simply. Highly recommended!" },
                      { name: "Sarah L.", rating: 4, text: "Great content, I just wish there were more PDF worksheets." }
                    ].map((review, i) => (
                      <div key={i} className="border-b border-gray-100 pb-6">
                         <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-sm">{review.name}</span>
                            <div className="flex text-[#C9A96A]">
                               {[...Array(review.rating)].map((_, r) => <Star key={r} size={14} fill="currentColor" />)}
                            </div>
                         </div>
                         <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
                      </div>
                    ))}
                 </div>
               )}
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="relative">
               <div className="sticky top-24 space-y-6">
                  {/* Instructor Card */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                     <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">Instructor</h4>
                     <div className="flex items-center gap-4 mb-4">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100" alt="Instructor" className="w-16 h-16 rounded-full object-cover" />
                        <div>
                           <p className="font-serif font-bold text-lg">Master Elena</p>
                           <p className="text-xs text-[#6F8F72] font-bold">SoulSpace Founder</p>
                        </div>
                     </div>
                     <p className="text-sm text-gray-500 mb-4">
                        Certified Numerologist with 10+ years of experience helping people find their soul purpose.
                     </p>
                     <button className="w-full py-2 border border-[#E8F0E9] rounded-lg text-sm font-bold text-gray-600 hover:bg-[#FAFAF8] transition-colors">
                        View Profile
                     </button>
                  </div>

                  {/* Guarantee */}
                  <div className="bg-[#E8F0E9] p-6 rounded-2xl text-center">
                     <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#6F8F72] mx-auto mb-3">
                        <Sparkles size={20} />
                     </div>
                     <h4 className="font-bold text-sm mb-1">30-Day Guarantee</h4>
                     <p className="text-xs text-gray-500">Not satisfied? Get a full refund within 30 days. No questions asked.</p>
                  </div>
               </div>
            </div>

         </div>
      </div>

      {/* Floating Sticky CTA (Mobile Only or Scroll Trigger) */}
      <div className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] transition-transform duration-300 z-50 flex items-center justify-between md:hidden ${isScrolled ? "translate-y-0" : "translate-y-full"}`}>
         <div>
            <p className="text-xs text-gray-500">Total Price</p>
            <p className="text-xl font-bold text-[#6F8F72]">$129</p>
         </div>
         <button className="px-8 py-3 bg-[#6F8F72] text-white rounded-xl font-bold shadow-lg">
            Enroll Now
         </button>
      </div>

    </div>
  );
}
