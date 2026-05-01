import { Layout } from './components/Layout.tsx';
import { Button } from './components/Button.tsx';
import { Input } from './components/Input.tsx';
import { Card } from './components/Card.tsx';
import { Dashboard } from './components/Dashboard.tsx';


function App() {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-black text-orange-900">メインダッシュボード</h2>
            <p className="text-orange-400 text-sm">現在の支出内訳</p>
          </div>
          <Button label="レポート出力" variant="sub" />
        </div>

        {/* 今回作ったダッシュボード */}
        <Dashboard />

      </div>
    </Layout>
  );
}

export default App;