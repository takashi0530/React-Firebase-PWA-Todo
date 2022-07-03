import React, {useState, useContext, useEffect} from "react";
// api.jsでexportしているものをすべてimportする、という意味
import * as Api from "../service/api";
import { signInWithGoogle } from "../service/firebase";
import dig from "object-dig";
import { AuthContext } from "../providers/AuthProvider";
import ToDoList from "./ToDoList";

const Dashboard = () => {
    const currentUser = useContext(AuthContext);
    const [inputName, setInputName] = useState('');
    const [todos, setTodos] = useState([]); // 初期値は配列を指定する

    console.log(inputName); // formに文字を入力するたびに値を取得する
    console.log(todos); // firebaseから取得したtodoの一覧データが表示

    useEffect(() => {
        // todo一覧を取得
        fetch();
    }, [currentUser]);

    const fetch = async () => {

        if ( dig(currentUser, 'currentUser', 'uid') ){
            const data = await Api.initGet(currentUser.currentUser.uid)
            console.log(data);
            await setTodos(data);
        }

    }



    const formRender = () => {
        let dom;

        // ログインしている場合、todoの入力フォームを表示
        if ( dig(currentUser, 'currentUser', 'uid') ) {
            dom =
                <form>
                    <input value={inputName} placeholder="ToDoName" onChange={(event) => setInputName(event.currentTarget.value)}/>
                {/* buttonがsubmitされないように、typeをbuttonにする */}
                <button type="button" onClick={() => post()}>追加</button>
            </form>;
        // ログインしていない場合、ログインボタンを表示
        } else {
            dom = <button onClick={signInWithGoogle}>ログイン</button>
        }
        return dom;
    };

    // ローカル関数
    const post = async () => {
        await Api.addTodo(inputName, currentUser.currentUser.uid);
        // todo追加後フォームを空欄にする
        await setInputName("");
        fetch();
    }

    return(
        <div>
            ダッシュボード
            {formRender()}

            <ToDoList todos={todos} fetch={fetch}/>
        </div>
    )
};

export default Dashboard;