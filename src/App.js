import "./App.css";
import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([]);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentChangeHendler = (event) => {
    setContent(event.target.value);
  };

  const clickAddButtonHandler = () => {
    setTodos([
      ...todos,
      {
        title: title,
        content: content,
        isDone: false,
      },
    ]);
    // setWorks((prev) => [
    //   ...prev,
    //   {
    //     title: title,
    //     content: content,
    //   },
    // ]);
    setTitle("");
    setContent("");
  };

  const clickDeleteButtonHandler = (index) => {
    const newWork = todos.filter((work) => work !== todos[index]);
    setTodos(newWork);
    // setTodos((prev) => prev.filter((work) => work !== todos[index]));
  };

  const clickCompleteButtonHandler = (index) => {
    // const working = todos.find((work) => work === todos[index])
    // console.log(working);
    // console.log(todos[index])
    todos[index].isDone = !todos[index].isDone;
    setTodos([...todos]);
  };

  // const onChangeButtonHandler = (index) => {
  //   todos[index].isDone = false;
  //   setTodos([...todos])
  // };

  return (
    <div className="main-box">
      <div className="nav-box">
        <h1>My Todo List💡</h1>
        <div className="sub-title">React</div>
      </div>
      <div className="input-box">
        <div className="input">
          <div>
            제목
            <input
              className="title-input"
              value={title}
              onChange={titleChangeHandler}
            />
            내용
            <input
              className="content-input"
              value={content}
              onChange={contentChangeHendler}
            />
          </div>
        </div>
        <div>
          <button className="button" onClick={clickAddButtonHandler}>
            추가하기
          </button>
        </div>
      </div>
      <div className="working">🔥working🔥</div>
      <div className="working-box">
        {todos
          .filter((todo) => todo.isDone === false)
          .map((work, index) => (
            <div className="working-card" key={index}>
              <div className="title-working">{work.title}</div>
              <div className="content-working">{work.content}</div>
              <div className="button-working">
                <button
                  className="delete-button"
                  onClick={() => clickDeleteButtonHandler(index)}
                >
                  삭제하기
                </button>
                <button
                  className="complete-button"
                  onClick={() => clickCompleteButtonHandler(index)}
                >
                  완료
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="working">👌Done👌</div>
      <div className="working-box">
        {todos
          .filter((todo) => todo.isDone === true)
          .map((work, index) => (
            <div className="done-card" key={index}>
              <div className="title-working">{work.title}</div>
              <div className="content-working">{work.content}</div>
              <div className="button-working">
                <button
                  className="delete-button"
                  onClick={() => clickDeleteButtonHandler(index)}
                >
                  삭제하기
                </button>
                <button
                  className="complete-button"
                  onClick={() => clickCompleteButtonHandler(index)}
                >
                  취소
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
