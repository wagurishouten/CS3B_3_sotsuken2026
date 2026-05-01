import { PieChart, Pie, Cell, ResponsiveContainer, Text } from 'recharts';

const data = [
  { name: 'Netflix', value: 1490, color: '#FF8C00' },
  { name: 'AmazonPrime', value: 500, color: '#FFA500' },
  { name: 'YouTube', value: 1000, color: '#FFB732' },
  { name: 'その他', value: 3000, color: '#FFE4B5' },
];

const COLORS = data.map(d => d.color);

export const Dashboard = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-card shadow-xl overflow-hidden border border-orange-100 min-h-[400px]">
      
      {/* 左側：円グラフエリア */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center relative">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
              label={({ name }) => name} // グラフ内に名前を表示
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {/* 右下の合計表示 */}
        <div className="absolute bottom-4 right-8 text-right">
          <p className="text-gray-500 text-xs font-bold">合計</p>
          <p className="text-2xl font-black text-orange-900">¥{total.toLocaleString()}</p>
        </div>
      </div>

      {/* 中央の区切り線（PC版のみ） */}
      <div className="hidden md:block w-[1px] bg-orange-100 self-stretch my-8"></div>

      {/* 右側：詳細リストエリア */}
      <div className="w-full md:w-80 p-6 bg-orange-50/30">
        <div className="space-y-4">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="font-bold text-gray-700 group-hover:text-main transition-colors">{item.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-600 font-medium">¥{item.value.toLocaleString()}</span>
                <button className="text-orange-300 hover:text-main">
                  {/* 目のアイコン（簡易版） */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="Refers to eye icon: M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};