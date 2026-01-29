"use client";

import Link from "next/link";
import { useState } from "react";
import { PlayCircle, CheckCircle, ChevronLeft, Menu, Lock, MessageCircle } from "lucide-react";

export default function CoursePlayerPage() {
  const [activeLesson, setActiveLesson] = useState(0);

  const lessons = [
    { title: "Welcome & Course Overview", duration: "05:20", isCompleted: true },
    { title: "Lesson 1: What is a Life Path Number?", duration: "12:40", isCompleted: true },
    { title: "Lesson 2: Calculating Your Numbers", duration: "18:20", isCompleted: false },
    { title: "Lesson 3: The Meaning of Number 1", duration: "15:00", isCompleted: false },
    { title: "Lesson 4: The Meaning of Number 2", duration: "14:30", isCompleted: false, isLocked: true },
    { title: "Lesson 5: The Meaning of Number 3", duration: "16:10", isCompleted: false, isLocked: true },
  ];

  return (
    <div className="min-h-screen bg-[#111] text-white flex flex-col md:flex-row">
      
      {/* Sidebar (Lesson List) */}
      <aside className="w-full md:w-80 bg-[#1A1A1A] border-r border-gray-800 flex flex-col h-[50vh] md:h-screen overflow-y-auto">
        <div className="p-6 border-b border-gray-800">
           <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-4">
              <ChevronLeft size={16} /> Back to Dashboard
           </Link>
           <h2 className="font-serif font-bold text-lg leading-tight">Numerology 101: The Basics</h2>
           <div className="mt-4 w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#6F8F72] h-full w-[30%]"></div>
           </div>
           <p className="text-xs text-gray-400 mt-2">30% Completed</p>
        </div>

        <div className="flex-1">
           {lessons.map((lesson, i) => (
             <button 
               key={i}
               onClick={() => !lesson.isLocked && setActiveLesson(i)}
               className={`w-full text-left p-4 border-b border-gray-800/50 flex items-start gap-3 hover:bg-white/5 transition-colors ${activeLesson === i ? "bg-white/10 border-l-4 border-[#6F8F72]" : "opacity-70"}`}
             >
                <div className="mt-1">
                   {lesson.isCompleted ? (
                     <CheckCircle size={16} className="text-[#6F8F72]" />
                   ) : lesson.isLocked ? (
                     <Lock size={16} className="text-gray-600" />
                   ) : (
                     <PlayCircle size={16} className={activeLesson === i ? "text-white" : "text-gray-400"} />
                   )}
                </div>
                <div>
                   <p className={`text-sm font-medium ${activeLesson === i ? "text-white" : "text-gray-300"}`}>{lesson.title}</p>
                   <p className="text-xs text-gray-500 mt-1">{lesson.duration}</p>
                </div>
             </button>
           ))}
        </div>
      </aside>

      {/* Main Content (Video Player) */}
      <main className="flex-1 flex flex-col h-[50vh] md:h-screen">
         <div className="flex-1 bg-black relative flex items-center justify-center">
            {/* Simulated Video Player */}
            <div className="w-full h-full max-h-[80vh] aspect-video bg-gray-900 relative group cursor-pointer">
               <img 
                 src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200" 
                 className="w-full h-full object-cover opacity-50" 
                 alt="Video Thumbnail"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#6F8F72] rounded-full flex items-center justify-center pl-2 shadow-2xl hover:scale-110 transition-transform">
                     <PlayCircle size={40} fill="white" className="text-white" />
                  </div>
               </div>
               
               {/* Controls Bar (Visual only) */}
               <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent flex items-end px-6 pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-full space-y-2">
                     <div className="w-full h-1 bg-gray-600 rounded-full cursor-pointer overflow-hidden">
                        <div className="w-[10%] h-full bg-[#6F8F72]"></div>
                     </div>
                     <div className="flex justify-between text-xs font-bold">
                        <span>01:20 / 12:40</span>
                        <span>HD</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-[#111] p-8 border-t border-gray-800">
            <div className="max-w-4xl mx-auto">
               <div className="flex justify-between items-start mb-6">
                  <div>
                     <h1 className="text-2xl font-bold mb-2">{lessons[activeLesson].title}</h1>
                     <p className="text-gray-400">Section 1 • Fundamental Concepts</p>
                  </div>
                  <button className="px-6 py-2 bg-[#6F8F72] text-white rounded-lg font-bold hover:bg-[#5a7a5d] transition-colors">
                     Mark as Complete
                  </button>
               </div>
               
               <div className="border-t border-gray-800 pt-6">
                  <h3 className="font-bold mb-4 flex items-center gap-2"><MessageCircle size={18} /> Lesson Discussion</h3>
                  <div className="flex gap-4 mb-6">
                     <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                     <div className="flex-1">
                        <input type="text" placeholder="Ask a question..." className="w-full bg-[#222] border border-gray-700 rounded-lg px-4 py-3 text-sm text-white focus:border-[#6F8F72] outline-none" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </main>
    </div>
  );
}
