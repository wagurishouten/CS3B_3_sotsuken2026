export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-main-light flex flex-col">
      {/* 固定ヘッダー */}
      <header className="bg-main text-white py-4 px-6 shadow-md flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-xl font-black tracking-tighter">SubscManager</h1>
        <div className="w-8 h-8 bg-orange-200 rounded-full"></div> {/* ユーザーアイコン風 */}
      </header>

      {/* メインコンテンツエリア */}
      <main className="flex-1 p-6 max-w-4xl mx-auto w-full">
        {children}
      </main>

      {/* 簡単なフッター */}
      <footer className="py-6 text-center text-orange-300 text-xs">
        © 2026 Team Adult - Subsc Management App
      </footer>
    </div>
  );
};