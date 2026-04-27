export const SubscriptionCard = () => {
  return (
    // bg-white: 背景白, p-4: 余白, shadow: 影, rounded: 角丸
    <div className="bg-white p-4 shadow-md rounded-lg border border-gray-200">
      <h2 className="text-lg font-bold text-gray-800">Netflix</h2>
      <p className="text-blue-600 font-semibold">¥1,490 / 月</p>
      {/* hover: でマウスホバー時の色も指定可能 */}
      <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600">
        詳細を見る
      </button>
    </div>
  );
};