import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center p-6 font-sans">
      {/* メインカード */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100">
        
        {/* ヘッダー部分（濃いオレンジ） */}
        <div className="bg-orange-500 p-8 text-white text-center">
          <p className="text-orange-100 text-sm font-medium mb-1">今月の合計支出</p>
          <h1 className="text-5xl font-black">¥12,480</h1>
        </div>

        {/* コンテンツ部分 */}
        <div className="p-6">
          <h2 className="text-orange-900 font-bold mb-4 flex items-center">
            <span className="w-2 h-6 bg-orange-500 rounded-full mr-2"></span>
            直近の支払い
          </h2>

          <div className="space-y-4">
            {/* サブスクアイテム1 */}
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-2xl border border-orange-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-xl">🎬</span>
                </div>
                <div>
                  <p className="font-bold text-gray-800">Netflix</p>
                  <p className="text-xs text-gray-500">次回：05/01</p>
                </div>
              </div>
              <p className="font-bold text-orange-600">¥1,490</p>
            </div>

            {/* サブスクアイテム2 */}
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-2xl border border-orange-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-xl">🍏</span>
                </div>
                <div>
                  <p className="font-bold text-gray-800">Apple Music</p>
                  <p className="text-xs text-gray-500">次回：05/15</p>
                </div>
              </div>
              <p className="font-bold text-orange-600">¥1,080</p>
            </div>
          </div>

          {/* アクションボタン */}
          <button className="w-full mt-8 py-4 bg-orange-500 text-white font-bold rounded-2xl shadow-lg shadow-orange-200 hover:bg-orange-600 active:scale-95 transition-all">
            新しいサブスクを追加
          </button>
        </div>
      </div>

      <p className="mt-6 text-orange-400 text-sm font-medium cursor-default">
        SubscManager v1.0 - Team Adult
      </p>
    </div>
  );
}

export default App;