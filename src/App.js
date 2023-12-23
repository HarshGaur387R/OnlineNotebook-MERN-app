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
import Profile from './components/Profile';
import Alert from 'react-bootstrap/Alert';
import UserContext from './context/user/userContext';
import AlertContext from './context/alert/alertContext';
import { useContext, useEffect, useState } from 'react';

function App() {
  const { isUserLoggedIn, isUserLoggedInState, setIsUserLoggedInState } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const {alertState, setAlertState} = useContext(AlertContext);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const loggedInState = await isUserLoggedIn();
      setIsUserLoggedInState(loggedInState);
      setLoading(false);
    };
    checkUserLoggedIn();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <div className='loading d-flex flex-column justify-content-center align-items-center'><i className="fa-solid fa-atom"></i></div>; // Or replace with a loading spinner
  }

  return (
    <Router>
      <div className="App">

        {alertState.show ?
          <Alert className='position-fixed w-100' style={{ zIndex: 11 }} variant={alertState.variant} onClose={() => setAlertState({show:false})} dismissible>
            <Alert.Heading>{alertState.heading}</Alert.Heading>
            <p>
             {alertState.para}
            </p>
          </Alert> : ''
        }

        {isUserLoggedInState ? <Navbar /> : <span></span>}
        <div className="container">
          <Routes>
            <Route path="/" element={isUserLoggedInState ? <Home /> : <Login />} />
            <Route path="/login" element={isUserLoggedInState ? <Home /> : <Login />} />
            <Route path="/signup" element={isUserLoggedInState ? <Home /> : <Signup />} />
            <Route path="/profile" element={isUserLoggedInState ? <Profile /> : <Login />} />
            <Route path="/about" element={isUserLoggedInState ? <About /> : <Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
