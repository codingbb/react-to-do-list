import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Todo from "./Todo";

function App() {
  // const [todo, setTodo] = useState([
  //   { id: 1, text: "Learn Web", checked: false },
  //   { id: 2, text: "Get a job", checked: false },
  // ]);
  const [todo, setTodo] = useState([]);
  const [todoId, setTodoId] = useState(0);

  const getTodoList = () => {
    const todoStrFromStorage = window.localStorage.getItem("todo");
    console.log(todoStrFromStorage);
    if (todoStrFromStorage !== null) {
      const todoObj = JSON.parse(todoStrFromStorage);
      setTodo(todoObj);
    }
  };

  const setStorage = () => {
    const todoString = JSON.stringify(todo);
    window.localStorage.setItem("todo", todoString);
  };

  // 첫 실행시 처음 1번만 실행
  useEffect(() => {
    getTodoList();
  }, []);

  // todo가 변경되면 그때만 작동하는 함수 (첫 실행시 작동 X)
  useEffect(() => {
    setStorage();
  }, [todo]);

  const deleteTodo = (id) => {
    let newTodos = [...todo];
    let index = newTodos.findIndex((item) => item.id === id);
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

  const setChecked = (id, check) => {
    let newTodos = [...todo];
    let index = newTodos.findIndex((item) => item.id === id);
    newTodos[index] = { id: id, text: newTodos[index].text, check };
    setTodo(newTodos);
  };

  const update = (id, val) => {
    let newTodos = [...todo];
    let index = newTodos.findIndex((item) => item.id === id);
    newTodos[index] = { id: id, text: val, checked: newTodos[index].checked };
    setTodo(newTodos);
  };

  let todos = todo.map((item) => (
    <Todo
      key={item.id}
      data={item}
      deleteTodo={deleteTodo}
      setChecked={setChecked}
      update={update}
    />
  ));
  let addTodo = (value) => {
    // 스프레드 (전개연산자)를 이용해서 복사본을 만들었다
    let newTodos = [...todo];
    let newId = todoId + 1;
    setTodoId(newId);
    newTodos.push({ id: newId, text: value, checked: false });
    setTodo(newTodos);
    // 값 추가되면 text 입력란 빈칸으로 비우기
    document.getElementById("todo").value = "";
  };
  console.log(todo);
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target.todo.value);
          addTodo(e.target.todo.value);
        }}
      >
        <Form.Group
          className="mb-3 d-flex align-items-center gap-3"
          controlId="todo"
        >
          <Form.Label>TODO Input</Form.Label>
          <Form.Control
            type="text"
            name="todo"
            placeholder="할 일을 입력하세요"
          />
        </Form.Group>
      </Form>
      <hr></hr>
      <div>{todos}</div>
    </div>
  );
}

export default App;
