import { useState } from 'react';
import { Layout } from './components/Layout.tsx';
import { Dashboard } from './components/Dashboard.tsx';
import { CalendarView } from './components/CalendarView.tsx';
import { SubscriptionList } from './components/SubscriptionList.tsx';

function App() {
  const [view, setView] = useState<'home' | 'calendar' | 'list'>('home');

  return (
    <Layout currentView={view} setView={setView}>
      {/* 選択された view に応じて、その画面だけを表示する */}
      {view === 'home' && <Dashboard />}
      {view === 'calendar' && <CalendarView />}
      {view === 'list' && <SubscriptionList />}
    </Layout>
  );
}

export default App;