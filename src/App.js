import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className='cont2 w-max h-full'>
    
    {/* <Navbar/> */}
    <Navbar/>
    <Home/>
    </div>
  );
}

export default App;

// this is a file