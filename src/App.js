import './App.css';
import {
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import  Alert  from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';



function App() {

  const [alert, setAlert] = useState(null);

 const showAlert = (message, type) => {
   setAlert({
     msg: message,
     type: type,
   });
   setTimeout(() => {
     setAlert(null);
   }, 1500);
 };



  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="r" />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/about" element={<About />} />

              <Route
                exact
                path="/login"
                element={<Login showAlert={showAlert} />}
              />
              <Route
                exact
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
