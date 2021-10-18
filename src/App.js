import './App.css';
import { ListKontak, AddKontak } from './components';

function App() {
  return (
    <div style={{
      padding: "30px"
    }}>
      <h1>Welcome to Contact App</h1>
      <hr />
      <AddKontak />
      <hr />
      <ListKontak />
    </div >
  );
}

export default App;
