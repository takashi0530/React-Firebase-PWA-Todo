import React, { useContext } from "react";
import dig from "object-dig";
// メモ) importの際、 export default の場合は{}かっこがいらないが、ひとつのfirebaseファイルから複数の関数をエクスポートする場合は、{}かっこがいる
import { signInWithGoogle, logOut } from "../service/firebase";
import { AuthContext } from "../providers/AuthProvider";

// Header.jsファイルにだけにスタイルを適応することができる（カプセル化）
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
    toolbar: {
        justifyContent: 'space-between'
    }
}));

// 関数型コンポーネント
const Header = () => {

    const currentUser = useContext(AuthContext);
    console.log(currentUser);

    const buttonRender = () => {
        let buttonDom;

        // ログインしている場合
        if ( dig(currentUser, 'currentUser', 'uid')) {
            buttonDom = <button onClick={logOut}>ログアウト</button>
        // ログインしていない場合
        } else {
            buttonDom = <button onClick={signInWithGoogle}>ログイン</button>
        }

        return buttonDom;
    };

    // 上記で定義した useStyles がコンポーネント内で取り込まれる
    const classes = useStyles();

    return(
        // position static スクロールしてもヘッダーが追従してくる
        <AppBar position="static" >
            <Toolbar className={classes.toolbar}>

                {/* variant h6サイズの見出しを使用する */}
                <Typography variant="h6">
                    ReactToDo
                </Typography>

            </Toolbar>
            {buttonRender()}

        </AppBar>

        // <header>
            // {/* ヘッダー */}
            // {buttonRender()}
            // {/* <button onClick={signInWithGoogle}>ログイン</button> */}
        // {/* </header> */}

    )
};

// 以下を記述で、 App.js でコンポーネントをインポートすることができる
export default Header;
