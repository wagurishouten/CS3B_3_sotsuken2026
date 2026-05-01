import { ChevronLeft, ChevronRight } from 'lucide-react';

export const CalendarView = () => {
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  // ダミーの日にち（31日分）
  const dateCells = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-orange-100 shadow-sm">
        <h2 className="text-xl font-black text-orange-900">2026年 5月</h2>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-orange-50 rounded-full text-main transition-colors"><ChevronLeft /></button>
          <button className="p-2 hover:bg-orange-50 rounded-full text-main transition-colors"><ChevronRight /></button>
        </div>
      </div>

      <div className="bg-white p-2 rounded-3xl shadow-xl border border-orange-100 overflow-hidden">
        {/* 曜日ヘッダー */}
        <div className="grid grid-cols-7 border-b border-orange-50">
          {days.map(day => (
            <div key={day} className="py-4 text-center text-sm font-bold text-orange-400">{day}</div>
          ))}
        </div>
        {/* 日にちグリッド */}
        <div className="grid grid-cols-7">
          {dateCells.map(date => (
            <div key={date} className="h-24 md:h-32 border-b border-r border-orange-50 p-2 hover:bg-orange-50/30 transition-colors relative">
              <span className="text-sm font-bold text-gray-400">{date}</span>
              {/* 支払日がある場合のダミー目印 */}
              {date === 10 && (
                <div className="mt-1 bg-main text-white text-[10px] p-1 rounded shadow-sm font-bold truncate">
                  ¥500 Amazon...
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};