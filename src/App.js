
import './App.css';
import Counter from './component/Counter';
import { GlobalProvider } from "./context/GlobalContext";
import Home from './component/Home';

function App() {
  return (
    <GlobalProvider>
      <Home />
      <Counter />
    </GlobalProvider>

  );
}

export default App;
