import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <Form>
        <Form.Group
          className="mb-3 d-flex align-items-center gap-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>TODO Input</Form.Label>
          <Form.Control type="text" placeholder="할 일을 입력하세요" />
        </Form.Group>
      </Form>
      <hr></hr>
    </div>
  );
}

export default App;
