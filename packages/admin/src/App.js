import logo from './logo.svg';
import './App.css';
import WaterForm  from '@mono-demo/common/components/WaterForm/WaterForm';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WaterForm/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is admin
        </a>
      </header>
    </div>
  );
}

export default App;
