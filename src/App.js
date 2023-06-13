import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Aboutus from "./components/Aboutus";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const [text, setText] = useState("gray");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("white");
      document.body.style.backgroundColor = "#121212";
      showAlert("dark mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode";
    } else {
      setMode("light");
      setText("gray");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" abouttext="About Me"></Navbar> */}
      {/* <Navbar title="TextUtils" mode={mode} text={text} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm  showAlert={showAlert}   mode={mode} text={text}  heading="Enter the text to analyze"></TextForm> 
      <Aboutus  mode={mode} text={text}></Aboutus>
      </div> */}
      <Router>
      <Navbar title="TextUtils" mode={mode} text={text} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<Aboutus mode={mode} text={text} />} />
            <Route
              path="/"
              element={
                <TextForm  showAlert={showAlert}   mode={mode} text={text}  heading="Enter the text to analyze"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
