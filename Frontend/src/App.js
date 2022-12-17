
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import MainRoutes from './Pages/MainRoutes';

function App() {
   // Do not modify anything in this file
  return (
    <div className="App">
      <Navbar/>
      <Login />
      <MainRoutes/>
    </div>
  );
}

export default App;
