import { Plus } from 'lucide-react';

const subs = [
  { id: 1, name: 'Netflix', price: '¥1,490', icon: 'N', next: '05/01' },
  { id: 2, name: 'AmazonPrime', price: '¥500', icon: 'F', next: '05/10' },
  { id: 3, name: 'YouTube', price: '¥1,280', icon: 'Y', next: '05/28' },
];

export const SubscriptionList = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-black text-orange-900">登録済みサブスク</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {subs.map(sub => (
          <div key={sub.id} className="bg-white rounded-card shadow-lg border border-orange-100 p-6 flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer">
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-3xl font-black text-white mb-4 shadow-orange-200 shadow-lg">
              {sub.icon}
            </div>
            <h3 className="font-bold text-orange-900 text-lg">{sub.name}</h3>
            <p className="text-main font-black text-xl">{sub.price}</p>
            <p className="text-gray-400 text-xs mt-2 font-bold">次回：{sub.next}</p>
          </div>
        ))}

        {/* 新規追加ボタン（デザイン案の ＋） */}
        <button className="bg-orange-50 rounded-card border-4 border-dashed border-orange-200 p-6 flex flex-col items-center justify-center text-orange-300 hover:bg-orange-100 hover:border-main hover:text-main transition-all group">
          <Plus size={48} strokeWidth={3} className="group-hover:rotate-90 transition-transform" />
          <span className="font-bold mt-2">新規登録</span>
        </button>
      </div>
    </div>
  );
};