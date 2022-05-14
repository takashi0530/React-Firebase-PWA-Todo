import React, { useContext, useState } from "react";
import dig from "object-dig";

// メモ) importの際、 export default の場合は{}かっこがいらないが、ひとつのfirebaseファイルから複数の関数をエクスポートする場合は、{}かっこがいる
import { signInWithGoogle, logOut } from "../service/firebase";

import { AuthContext } from "../providers/AuthProvider";

console.log('いいい');

// 関数型コンポーネント
const Header = () => {

    const currentUser = useContext(AuthContext);
    console.log(currentUser);


    const buttonRender = () => {
        let buttonDom

        // ログインしている場合
        if ( dig(currentUser, 'currentUser')) {
            buttonDom = <button onClick={logOut}>ログアウト</button>
        // ログインしていない場合
        } else {
            buttonDom = <button onClick={signInWithGoogle}>ログイン</button>
        }
        return buttonDom;

    };

    return(
        <header>
            ヘッダー
            {buttonRender()}
            {/* <button onClick={signInWithGoogle}>ログイン</button> */}
        </header>
    )
};

// 以下を記述で、 App.js でコンポーネントをインポートすることができる
export default Header;
