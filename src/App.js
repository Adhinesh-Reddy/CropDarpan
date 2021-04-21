import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Background from './Components/Background';
import Home from './Components/Home/Home';

function App() {
  return(
    <div>
      <Home />
      <Background />
    </div>
  )
}

export default App;
