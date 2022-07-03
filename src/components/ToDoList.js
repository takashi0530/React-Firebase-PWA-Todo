import React from "react";
// api.jsでexportしているものをすべてimportする、という意味
import * as Api from "../service/api";
// import { signInWithGoogle, logOut } from "../service/firebase";
// import dig from "object-dig";
// import { AuthContext } from "../providers/AuthProvider";

const ToDoList = (props) => {
    console.log(props.todos);

    const deleteHandle = async (id) => {
        await Api.todoDelete(id);
        props.fetch();
    };

    // propsをもとにliタグを作る
    const todoList = props.todos.map((todo) => {
        return (
            // keyに一意のidを指定する必要がある
            <li key={todo.id}>{todo.content}
                <button type="button" onClick={() => deleteHandle(todo.id)}>
                    削除
                </button>
            </li>
        );
    });

    return (
        <div>
            <h2>あなたのToDo</h2>
            <ul>{todoList}</ul>
        </div>
    );
}

export default ToDoList;