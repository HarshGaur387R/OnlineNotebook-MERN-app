import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/noteState';
import ChipState from './context/filter chips/chipState';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  const isUserLogin = false;

  return (
    <Router >
      <div className="App" >
        {isUserLogin ?
          <ChipState>
            <NoteState>
              <Navbar />
              <div className="container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </div>
            </NoteState>
          </ChipState> :
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>}
      </div>
    </Router >
  );
}

export default App;
