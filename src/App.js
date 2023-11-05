import './App.css';
import React, {useState} from 'react';
import {Card} from './components/Card';

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
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
    setTitle('');
    setContent('');
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
            <input className="title-input" value={title} onChange={titleChangeHandler} />
            내용
            <input className="content-input" value={content} onChange={contentChangeHendler} />
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
            <Card
              index={index}
              work={work}
              clickDeleteButtonHandler={clickDeleteButtonHandler}
              clickCompleteButtonHandler={clickCompleteButtonHandler}
            />
          ))}
      </div>
      <div className="working">👌Done👌</div>
      <div className="working-box">
        {todos
          .filter((todo) => todo.isDone === true)
          .map((work, index) => (
            <Card
              index={index}
              work={work}
              clickDeleteButtonHandler={clickDeleteButtonHandler}
              clickCompleteButtonHandler={clickCompleteButtonHandler}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
