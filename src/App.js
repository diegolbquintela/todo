import Todo from "./components/Todo.js";
import Modal from "./components/Modal.js";
import Backdrop from "./components/Modal.js";

function App(props) {
  return (
    <div>
      <h1 className="title">My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Learn NextJS" />
      <Todo text="Use JavaScript to build a Web Scrapper" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
