import { Home, Calendar, ListTodo, Mail, Settings } from 'lucide-react';

type LayoutProps = {
  children: React.ReactNode;
  currentView: 'home' | 'calendar' | 'list';
  setView: (view: 'home' | 'calendar' | 'list') => void;
};

export const Layout = ({ children, currentView, setView }: LayoutProps) => {
  // 共通のアイコンスタイル
  const getIconStyle = (viewName: string) => 
    `transition-all cursor-pointer ${
      currentView === viewName ? 'text-main scale-110 opacity-100' : 'text-main/40 hover:text-main/70'
    }`;

  return (
    <div className="min-h-screen bg-main-light flex flex-col font-sans">
      <header className="bg-white border-b-2 border-main px-6 py-3 flex items-center justify-between sticky top-0 z-50">
        
        <div className="flex items-center gap-10">
          <h1 className="text-main text-2xl font-black tracking-tight">Next Bill</h1>
          
          <nav className="flex items-center gap-8">
            <button onClick={() => setView('home')} className={getIconStyle('home')}>
              <Home size={28} strokeWidth={currentView === 'home' ? 3 : 2} />
            </button>
            <button onClick={() => setView('calendar')} className={getIconStyle('calendar')}>
              <Calendar size={28} strokeWidth={currentView === 'calendar' ? 3 : 2} />
            </button>
            <button onClick={() => setView('list')} className={getIconStyle('list')}>
              <ListTodo size={28} strokeWidth={currentView === 'list' ? 3 : 2} />
            </button>
            {/* メイルは未実装なので色を薄く固定 */}
            <button className="text-main/20 cursor-not-allowed">
              <Mail size={28} />
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <Settings size={24} className="text-main/50" />
          <div className="w-10 h-10 bg-main rounded-full border-2 border-orange-100 shadow-sm"></div>
        </div>
      </header>

      <main className="flex-1 p-6 max-w-6xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
};