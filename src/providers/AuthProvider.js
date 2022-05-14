// react と hook の useState と useEffect をインポートする
import React, { useState, useEffect } from "react";
import { auth } from "../service/firebase";

// コンテキストを作る
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);

    // 第２引数なし：
    useEffect(() => {
        // ログインしているか判断する。
        // ログインユーザの情報が変わったときに,その情報をセットする
        auth.onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        //  contextを使用して認証に必要な情報をコンポーネントツリーに流し込む
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default  AuthProvider;