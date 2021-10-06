import './App.css';
import FrozenDept from './components/app components/FrozenDept';
import { MeatDept } from './components/app components/MeatDept';
import { ProduceDept } from './components/app components/ProduceDept';

function App() {
  return (
    <div className="App">
      <FrozenDept/>
      <MeatDept/>
      <ProduceDept/>
    </div>
  );
}

export default App;
