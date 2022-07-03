import React from 'react';
import { AuthProvider } from './providers/AuthProvider';
import './App.css';
import './service/firebase';
// ヘッダーコンポーネントのインポート
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {

  return (

    <AuthProvider>

        {/* ヘッダーを表示するコンポーネント */}
        <Header />

        {/* TODOを表示するコンポーネント */}
        <Dashboard />

        {/* フッターを表示するコンポーネント */}
    </AuthProvider>

  );
}

export default App;
