//import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Dasboard from './components/Dasboard';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dash' element={<Dasboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
