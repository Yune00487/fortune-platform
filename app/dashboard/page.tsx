"use client";

import { useState } from "react";
import Link from "next/link";
import { LayoutDashboard, Users, Calendar, Settings, UploadCloud, FileVideo, Plus, CheckCircle, X, Search, MoreHorizontal, LogOut, Film } from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("content");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate upload
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setShowUploadModal(false);
          setUploadProgress(0);
          alert("Lesson uploaded successfully!");
        }, 500);
      }
    }, 200);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#4A5D4E] flex font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 hidden md:flex flex-col fixed inset-y-0 z-10">
        <div className="p-8">
          <Link href="/" className="text-2xl font-serif font-bold text-[#6F8F72] flex items-center gap-2">
            SoulSpace
          </Link>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          {[
            { id: "overview", label: "Overview", icon: LayoutDashboard },
            { id: "students", label: "Students", icon: Users },
            { id: "content", label: "Courses & Content", icon: Film },
            { id: "schedule", label: "Schedule", icon: Calendar },
            { id: "settings", label: "Settings", icon: Settings },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                activeTab === item.id 
                ? "bg-[#6F8F72] text-white shadow-md shadow-[#6F8F72]/20" 
                : "text-gray-500 hover:bg-[#F3EFE7]"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-500 hover:text-red-500 transition-colors">
            <LogOut size={18} /> Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-serif font-bold text-[#4A5D4E]">Course Manager</h1>
            <p className="text-gray-500">Manage your curriculum and video lessons.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-[#C9A96A] text-white flex items-center justify-center font-bold">M</div>
          </div>
        </header>

        {/* Content Area */}
        {activeTab === "content" && (
          <div className="space-y-8">
            {/* Action Bar */}
            <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="text" placeholder="Search lessons..." className="pl-10 pr-4 py-2 bg-[#FAFAF8] rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#6F8F72] w-64" />
              </div>
              <button 
                onClick={() => setShowUploadModal(true)}
                className="px-6 py-2 bg-[#6F8F72] text-white rounded-lg font-bold text-sm shadow-md hover:bg-[#5a7a5d] transition-colors flex items-center gap-2"
              >
                <Plus size={18} /> Upload New Lesson
              </button>
            </div>

            {/* Course List */}
            <div className="grid gap-6">
               <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                 <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-4">
                       <div className="w-24 h-16 bg-gray-200 rounded-lg overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1515023115689-589c33041697?q=80&w=300" className="w-full h-full object-cover" />
                       </div>
                       <div>
                          <h3 className="font-bold text-lg">Numerology 101: The Basics</h3>
                          <p className="text-sm text-gray-500">12 Lessons • 4.5 Hours • 1,203 Students</p>
                       </div>
                    </div>
                    <button className="text-gray-400 hover:text-[#6F8F72]"><Settings size={20} /></button>
                 </div>

                 {/* Lessons List within Course */}
                 <div className="space-y-3">
                    {[
                      { title: "Introduction to Soul Numbers", duration: "12:40", status: "Published" },
                      { title: "Calculating Your Life Path", duration: "18:20", status: "Published" },
                      { title: "Master Numbers Explained", duration: "22:15", status: "Draft" },
                    ].map((lesson, i) => (
                      <div key={i} className="flex items-center justify-between p-3 hover:bg-[#FAFAF8] rounded-lg transition-colors group">
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-[#E8F0E9] text-[#6F8F72] flex items-center justify-center">
                               <FileVideo size={16} />
                            </div>
                            <span className="text-sm font-medium text-[#4A5D4E]">{lesson.title}</span>
                         </div>
                         <div className="flex items-center gap-6">
                            <span className="text-xs text-gray-400">{lesson.duration}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${lesson.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                              {lesson.status}
                            </span>
                            <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-[#6F8F72]"><MoreHorizontal size={16} /></button>
                         </div>
                      </div>
                    ))}
                 </div>
               </div>
            </div>
          </div>
        )}
      </main>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
           <div className="bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl relative">
              <button onClick={() => setShowUploadModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><X size={24} /></button>
              
              <div className="text-center mb-8">
                 <div className="w-16 h-16 bg-[#E8F0E9] text-[#6F8F72] rounded-full flex items-center justify-center mx-auto mb-4">
                    <UploadCloud size={32} />
                 </div>
                 <h3 className="text-2xl font-serif font-bold text-[#4A5D4E]">Upload Lesson</h3>
                 <p className="text-sm text-gray-500">Select a video file to add to your course.</p>
              </div>

              <form onSubmit={handleUpload} className="space-y-6">
                 <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Lesson Title</label>
                    <input type="text" placeholder="e.g. Understanding Karma" className="w-full px-4 py-3 rounded-xl bg-[#FAFAF8] border border-gray-200 focus:border-[#6F8F72] outline-none" required />
                 </div>
                 
                 <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:bg-[#FAFAF8] transition-colors cursor-pointer">
                    <p className="text-sm text-gray-500">Drag and drop video file here, or click to browse</p>
                    <p className="text-xs text-gray-400 mt-2">MP4, MOV up to 2GB</p>
                 </div>

                 {uploadProgress > 0 && (
                   <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-[#6F8F72] h-full transition-all duration-200" style={{ width: `${uploadProgress}%` }}></div>
                   </div>
                 )}

                 <button type="submit" disabled={uploadProgress > 0} className="w-full py-3 bg-[#6F8F72] text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50">
                    {uploadProgress > 0 ? `Uploading... ${uploadProgress}%` : "Start Upload"}
                 </button>
              </form>
           </div>
        </div>
      )}
    </div>
  );
}
