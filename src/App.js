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

function App() {
  return (
    <Router>
      <div className="App">
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
        </ChipState>
      </div>
    </Router>
  );
}

export default App;
