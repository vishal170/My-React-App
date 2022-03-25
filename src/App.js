import { ReactComponent as Logo } from "./logo.svg";
import Posts from "./components/Posts";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Logo style={{ height: 200 }} />
       <h1>Hello World Project</h1>
      </header>
      <Posts/>
    </div>
  );
}

export default App;
