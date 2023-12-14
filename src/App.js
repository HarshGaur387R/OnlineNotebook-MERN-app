import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import UserContext from './context/user/userContext';
import { useContext, useEffect } from 'react';

function App() {

  const { isUserLoggedIn,isUserLoggedInState, setIsUserLoggedInState } = useContext(UserContext);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const loggedInState = await isUserLoggedIn();
      setIsUserLoggedInState(loggedInState);
    };
    checkUserLoggedIn();
    // eslint-disable-next-line
  }, []);

  console.log(isUserLoggedInState);
  return (
    <Router >
      <div className="App" >
        {isUserLoggedInState ? <Navbar /> : <span></span>}
        <div className="container">
          <Routes>
            <Route path="/" element={isUserLoggedInState ? <Home /> : <Login />} />
            <Route path="/login" element={isUserLoggedInState ? <Home /> : <Login />} />
            <Route path="/signup" element={isUserLoggedInState ? <Home /> : <Signup />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router >
  );
}

export default App;
