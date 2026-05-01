import { Home, Calendar, ListTodo, Mail, Settings } from 'lucide-react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-main-light flex flex-col font-sans">
      <header className="bg-white border-b-2 border-main px-6 py-3 flex items-center justify-between sticky top-0 z-50">
        
        {/* 左側：ロゴとナビゲーション */}
        <div className="flex items-center gap-10">
          <h1 className="text-main text-2xl font-black tracking-tight">
            Next Bill
          </h1>
          
          <nav className="flex items-center gap-8">
            <button className="text-main hover:scale-110 transition-transform cursor-pointer">
              <Home size={28} strokeWidth={2.5} />
            </button>
            <button className="text-main/50 hover:text-main hover:scale-110 transition-transform cursor-pointer">
              <Calendar size={28} />
            </button>
            <button className="text-main/50 hover:text-main hover:scale-110 transition-transform cursor-pointer">
              <ListTodo size={28} />
            </button>
            <button className="text-main/50 hover:text-main hover:scale-110 transition-transform cursor-pointer">
              <Mail size={28} />
            </button>
          </nav>
        </div>

        {/* 右側：設定とプロフィール */}
        <div className="flex items-center gap-5">
          <button className="text-main/70 hover:text-main hover:rotate-45 transition-all cursor-pointer">
            <Settings size={24} />
          </button>
          <div className="w-10 h-10 bg-main rounded-full border-2 border-orange-100 shadow-sm overflow-hidden">
             {/* ここにユーザー画像が入ります */}
          </div>
        </div>
      </header>

      <main className="flex-1 p-6 max-w-6xl mx-auto w-full">
        {children}
      </main>

      <footer className="py-4 text-center text-orange-300 text-xs font-medium">
        © 2026 Next Bill - Team Adult
      </footer>
    </div>
  );
};