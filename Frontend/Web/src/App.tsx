import { Layout } from './components/Layout.tsx';
import { Button } from './components/Button.tsx';
import { Input } from './components/Input.tsx';
import { Card } from './components/Card.tsx';

function App() {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-orange-900">ダッシュボード</h2>
        
        <Card title="クイック追加">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="サービス名" placeholder="Netflix" />
            <Input label="月額費用" type="number" placeholder="1490" />
            <div className="md:col-span-2 flex justify-end mt-2">
              <Button label="登録する" variant="main" />
            </div>
          </div>
        </Card>

        <Card title="登録中のサブスク">
          <p className="text-gray-500 text-sm italic">まだ登録されているサービスはありません。</p>
        </Card>
      </div>
    </Layout>
  );
}

export default App;