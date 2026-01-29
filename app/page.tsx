import Link from "next/link";
import { ArrowRight, Star, PlayCircle, Users, Calendar, BarChart, Shield, CreditCard, ChevronRight, LayoutDashboard, Settings, User, FileText, ShoppingCart, Leaf, Wind } from "lucide-react";

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
            命理學院
          </h1>
          <p className="text-lg md:text-2xl opacity-90 font-light mb-10 max-w-2xl mx-auto leading-relaxed text-emerald-100">
            用數字讀懂你的人生，讓自然能量成為你的導航系統
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#fortune"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2"
            >
              立即測算 <ArrowRight size={18} />
            </Link>
            <Link
              href="#courses"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-emerald-100/30 text-emerald-50 rounded-full font-bold transition-all flex items-center justify-center gap-2"
            >
              開始學習 <PlayCircle size={18} />
            </Link>
          </div>
        </div>
      </header>

      {/* Auth Section */}
      <section id="auth" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-4">會員登入 / 註冊</h2>
          <p className="text-slate-600">加入我們，開啟您的靈性成長之旅</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Login Card */}
          <div className="bg-white p-10 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-emerald-200 transition-colors">
            <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-emerald-600 rounded-full"></span>
              登入會員
            </h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">電子郵件</label>
                <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all bg-slate-50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">密碼</label>
                <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all bg-slate-50" />
              </div>
              <button className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold transition-colors shadow-md shadow-emerald-900/10">
                登入
              </button>
            </form>
          </div>

          {/* Register Card */}
          <div className="bg-white p-10 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-emerald-200 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-12 -mt-12 opacity-80"></div>
            <h3 className="text-xl font-bold text-teal-800 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-teal-500 rounded-full"></span>
              註冊新會員
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1">姓名</label>
                  <input type="text" placeholder="你的名字" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all bg-slate-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1">生日</label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all bg-slate-50" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">電子郵件</label>
                <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all bg-slate-50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">密碼</label>
                <input type="password" placeholder="設定密碼" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all bg-slate-50" />
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl font-bold transition-colors shadow-md shadow-emerald-500/20">
                免費註冊
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
              <h2 className="text-3xl font-serif font-bold text-slate-800">後台管理系統</h2>
              <p className="text-slate-500">高效管理您的命理事業：清晰、直觀、強大</p>
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
                <span className="text-slate-500 text-sm font-bold">今日營收</span>
                <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><CreditCard size={18} /></span>
              </div>
              <p className="text-2xl font-bold text-slate-800">NT$ 12,800</p>
              <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">↑ 12% <span className="text-slate-400">vs 昨日</span></p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-500 text-sm font-bold">本月訂單</span>
                <span className="p-2 bg-teal-50 text-teal-600 rounded-lg"><ShoppingCart size={18} /></span>
              </div>
              <p className="text-2xl font-bold text-slate-800">128 筆</p>
              <p className="text-xs text-teal-600 mt-1 flex items-center gap-1">↑ 5% <span className="text-slate-400">vs 上月</span></p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-500 text-sm font-bold">活躍會員</span>
                <span className="p-2 bg-sky-50 text-sky-600 rounded-lg"><Users size={18} /></span>
              </div>
              <p className="text-2xl font-bold text-slate-800">356 人</p>
              <p className="text-xs text-sky-600 mt-1 flex items-center gap-1">↑ 24 <span className="text-slate-400">本週新增</span></p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-500 text-sm font-bold">待回覆</span>
                <span className="p-2 bg-orange-50 text-orange-600 rounded-lg"><FileText size={18} /></span>
              </div>
              <p className="text-2xl font-bold text-slate-800">8 則</p>
              <p className="text-xs text-orange-600 mt-1 flex items-center gap-1">需要您的關注</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <LayoutDashboard size={18} className="text-slate-400" /> 近期訂單
                </h3>
                <button className="text-xs font-bold text-emerald-600 hover:text-emerald-800">查看全部</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-500 font-medium">
                    <tr>
                      <th className="px-6 py-4">訂單編號</th>
                      <th className="px-6 py-4">客戶</th>
                      <th className="px-6 py-4">項目</th>
                      <th className="px-6 py-4">金額</th>
                      <th className="px-6 py-4">狀態</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { id: "#1024", name: "王小明", item: "感情命盤解析", price: "NT$ 1,280", status: "待處理", statusColor: "bg-orange-100 text-orange-700" },
                      { id: "#1023", name: "陳雅婷", item: "流年運勢", price: "NT$ 2,880", status: "已完成", statusColor: "bg-emerald-100 text-emerald-700" },
                      { id: "#1022", name: "林志豪", item: "事業諮詢", price: "NT$ 1,580", status: "進行中", statusColor: "bg-blue-100 text-blue-700" },
                      { id: "#1021", name: "張美惠", item: "生命靈數課程", price: "NT$ 3,600", status: "已付款", statusColor: "bg-emerald-100 text-emerald-700" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-mono text-slate-500">{row.id}</td>
                        <td className="px-6 py-4 font-bold text-slate-700">{row.name}</td>
                        <td className="px-6 py-4 text-slate-600">{row.item}</td>
                        <td className="px-6 py-4 font-medium text-slate-700">{row.price}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded text-xs font-bold ${row.statusColor}`}>{row.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Side Menu */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Settings size={18} className="text-slate-400" /> 快速操作
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors flex items-center gap-3 text-slate-600 font-medium">
                  <div className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-400">📝</div>
                  新增命理文章
                </button>
                <button className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors flex items-center gap-3 text-slate-600 font-medium">
                  <div className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-400">🎥</div>
                  上架新課程影片
                </button>
                <button className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors flex items-center gap-3 text-slate-600 font-medium">
                  <div className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-400">💬</div>
                  回覆客戶諮詢
                </button>
                <button className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors flex items-center gap-3 text-slate-600 font-medium">
                  <div className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-400">⚙️</div>
                  平台系統設定
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-6">關於我們</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            命理學院是一個結合算命服務、線上課程與個人成長的專業平台。
            我們相信，每個人都不是隨機出生，而是帶著<span className="text-emerald-600 font-bold bg-emerald-50 px-1">人生藍圖</span>來到這個世界。
            你只需要一位能幫你翻譯這份藍圖的導師。
          </p>
        </div>
      </section>

      {/* Free Content & Quizzes */}
      <section className="py-20 px-6 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-4">免費命理檢測</h2>
            <p className="text-slate-600">30秒快速測驗，初步探索你的靈魂特質</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
             {/* Quiz Card 1 */}
             <div className="bg-gradient-to-br from-white to-emerald-50 p-8 rounded-2xl border border-emerald-100 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-all group">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Star size={32} />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">你的靈魂缺口在哪裡？</h3>
                  <p className="text-slate-600 mb-4 text-sm">透過直覺測驗，找出你現階段最需要療癒的能量中心。</p>
                  <button className="px-6 py-2 bg-emerald-600 text-white text-sm font-bold rounded-full hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-200">
                    開始測驗
                  </button>
                </div>
             </div>

             {/* Quiz Card 2 */}
             <div className="bg-gradient-to-br from-white to-teal-50 p-8 rounded-2xl border border-teal-100 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-all group">
                <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Calendar size={32} />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-xl font-bold text-teal-800 mb-2">2026 流年關鍵字</h3>
                  <p className="text-slate-600 mb-4 text-sm">輸入生日，馬上領取你今年的專屬祝福與警語。</p>
                  <button className="px-6 py-2 bg-teal-500 text-white text-sm font-bold rounded-full hover:bg-teal-600 transition-colors shadow-md shadow-teal-200">
                    立即領取
                  </button>
                </div>
             </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-4">最新命理專欄</h2>
            <p className="text-slate-600">閱讀更多關於靈性成長與命運的知識</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "為什麼總是遇到渣男？從命盤看感情債", tag: "感情", date: "2026.01.20" },
              { title: "生命靈數 1-9 號人的天賦賺錢法", tag: "財運", date: "2026.01.18" },
              { title: "水逆來了怎麼辦？三個居家風水小撇步", tag: "生活", date: "2026.01.15" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="h-48 bg-slate-200 rounded-xl mb-4 overflow-hidden relative">
                   <div className="absolute inset-0 bg-slate-300 group-hover:scale-105 transition-transform duration-700"></div>
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold mb-2">
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-1 rounded">{post.tag}</span>
                  <span className="text-slate-400">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fortune Services & Form */}
      <section id="fortune" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center text-emerald-900 mb-12">算命服務下單</h2>
        
        {/* Order Form */}
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 mb-16 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
           <form className="space-y-6">
             <div className="grid md:grid-cols-2 gap-6">
               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">姓名</label>
                  <input type="text" placeholder="你的名字" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all" />
               </div>
               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">生日</label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all" />
               </div>
             </div>
             
             <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">電子郵件</label>
                  <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all" />
                </div>
                <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">選擇服務項目</label>
                   <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all bg-white">
                      <option>感情命盤解析｜NT$ 1,280</option>
                      <option>事業財運命盤｜NT$ 1,580</option>
                      <option>年度流年全解析｜NT$ 2,880</option>
                   </select>
                </div>
             </div>

             <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">你的問題 / 想了解的內容</label>
                <textarea rows={4} placeholder="請簡單描述你目前最想解答的問題，或人生遇到的卡點..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all resize-none"></textarea>
             </div>

             <button type="submit" className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 text-lg transform hover:-translate-y-0.5">
                送出並前往付款 <ChevronRight size={20} />
             </button>
           </form>
        </div>

        <h2 className="text-2xl font-serif font-bold text-center text-slate-400 mb-8 opacity-60">或瀏覽詳細服務介紹</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "感情命盤解析",
              desc: "看懂你的愛情模式、吸引力來源與正緣時間點。",
              price: "NT$ 1,280",
              tag: "最熱銷",
              color: "emerald"
            },
            {
              title: "事業財運命盤",
              desc: "找出你的天賦定位、財富流動模式與轉運關鍵。",
              price: "NT$ 1,580",
              tag: null,
              color: "teal"
            },
            {
              title: "年度流年全解析",
              desc: "一次看懂你一整年的運勢高低點與避雷區。",
              price: "NT$ 2,880",
              tag: "推薦",
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
                  立即諮詢
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center text-emerald-900 mb-12">線上命理課程</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "生命靈數入門課",
                desc: "從0開始學會看懂自己與他人的人格密碼。",
                price: "NT$ 3,600",
                tag: "入門必修"
              },
              {
                title: "感情命理實戰班",
                desc: "專攻感情諮詢、戀愛分析與關係修復技巧。",
                price: "NT$ 6,800",
                tag: null
              },
              {
                title: "命理導師認證班",
                desc: "從學員進階成為能收費諮詢的專業導師。",
                price: "NT$ 18,000",
                tag: "職涯首選"
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
                      加入課程 <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center text-emerald-900 mb-12">平台特色功能</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: PlayCircle, title: "課程影音後台", desc: "高畫質串流、防盜鏈、進度紀錄" },
            { icon: Shield, title: "專屬命盤管理", desc: "會員專屬資料庫與諮詢紀錄" },
            { icon: Users, title: "老師後台系統", desc: "多老師登入、回覆與分潤制度" },
            { icon: CreditCard, title: "金流訂單管理", desc: "整合支付、對帳與退款流程" },
            { icon: BarChart, title: "數據儀表板", desc: "掌握營收、轉換率與熱門項目" },
            { icon: Calendar, title: "預約與行事曆", desc: "線上預約、自動提醒、同步日曆" }
          ].map((f, i) => (
            <div key={i} className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                <f.icon size={24} />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-b from-emerald-900 to-teal-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">學員與客戶回饋</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "第一次覺得有人真的看懂我在卡什麼，諮詢完三個月內人生真的轉向了。", name: "小雅", role: "感情諮詢學員" },
              { text: "原本只是來算命，最後變成我現在也在幫別人算命，人生多了一條職涯路線。", name: "阿哲", role: "導師認證班學員" },
              { text: "課程結構清楚、影片好吸收，而且真的能實際應用在生活裡。", name: "Vivi", role: "生命靈數課學員" }
            ].map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                <div className="flex gap-1 text-emerald-300 mb-4">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="mb-6 opacity-90 leading-relaxed">"{t.text}"</p>
                <div>
                  <strong className="block font-bold text-lg">{t.name}</strong>
                  <span className="text-sm opacity-60">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-emerald-900 mb-6">準備好看懂你的人生藍圖了嗎？</h2>
        <p className="text-xl text-slate-600 mb-10">從一次諮詢開始，或從一門課程改寫你的未來。</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#fortune" className="px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold shadow-xl shadow-emerald-600/30 transition-all transform hover:-translate-y-1">
            立即測算
          </Link>
          <Link href="#courses" className="px-10 py-4 bg-white text-emerald-800 border-2 border-emerald-100 hover:border-emerald-200 rounded-full font-bold shadow-md transition-all">
            瀏覽課程
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2e26] text-slate-400 py-12 px-6 text-center text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <h3 className="text-white font-bold text-lg mb-2">命理學院</h3>
            <p>用數字讀懂你的人生</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">服務條款</a>
            <a href="#" className="hover:text-white transition-colors">隱私政策</a>
            <a href="#" className="hover:text-white transition-colors">聯絡我們</a>
          </div>
          <p>© 2026 命理學院 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
