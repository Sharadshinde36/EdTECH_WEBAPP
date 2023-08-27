import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Nabar from './components/common/Navbar'
import Navbar from './components/common/Navbar';
function App() {
  return (
    <div className='w-[100bw] h-[100vh] overflow-x-hidden bg-black flex flex-col ' >
          <Navbar/>   
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
