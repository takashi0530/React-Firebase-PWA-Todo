import React from 'react';
import { AuthProvider } from './providers/AuthProvider';
import './App.css';
import './service/firebase';
// ヘッダーコンポーネントのインポート
import Header from './components/Header';


function App() {

  return (

    <AuthProvider>
        <Header />
        {/* TODOを表示するコンポーネント */}
        {/* フッター */}
    </AuthProvider>

  );
}

export default App;
