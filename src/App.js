import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
import About from './components/About.js';
// import {
//   BrowserRouter as Router,
//   Route,
//   // Switch,
//   Routes,
//   Link
// } from "react-router-dom";




export default function App() {

  const [switchText,setSwitchText]=useState('Switch Dark');

  const [darkMode,setDarkMode]=useState('light');

  const [customMode,setCustomMode]=useState("Custom Mode");

  const [aalert,setAlert]=useState(null);

  const showAlert= (message, type)=>{
      setAlert({
        msg: message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 3000);
  }

  const handleDarkMode=()=>{
    if(switchText === "Switch Dark"){
      setDarkMode("dark");
      setSwitchText("Switch Light");
      document.body.style.backgroundColor="Black";
      document.body.style.color="white";
      showAlert("Dark Mode has been enabled", "success");
    }else{
      setDarkMode("light");
      setSwitchText("Switch Dark");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Light Mode has been enabled", "success");
    }
  }

  const handleCustomMode=()=>{
    if(customMode === "Custom Mode"){
      setDarkMode("primary");
      setSwitchText("please turn off Custom Mode");
      document.body.style.backgroundColor="blue";
      document.body.style.color="lightblue";
      showAlert("Custom Mode has been enabled", "success");
      setCustomMode("Switch Light");
    }
    else{
      setDarkMode("light");
      setSwitchText("Switch Dark");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Light Mode has been enabled", "success");
      setCustomMode("Custom Mode");
    }
  }

  return (
    <>
    {/* <Router> */}
    {/* <Navbar title="TextUtils" about="About"/> */}
    <Navbar title="Text Utils" about="About" mode={darkMode} customMode={customMode} handleCustomMode={handleCustomMode}/>
    <Alert alert={aalert}/>
    <div className="container">
    {/* <Switch> */}
    {/* <Routes> */}
      {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to analyze" mode={darkMode}/>} /> */}
      <TextForm showAlert={showAlert} heading="Enter the Text to analyze" mode={darkMode}/>
      {/* <Route path="/About" element={<About/>}/> */}
      <About/>
    {/* </Routes> */}
    {/* </Switch>    */}
      <div class="form-check form-switch">
          <button className={`btn btn-${switchText === 'Switch Dark' ? 'primary':'secondary'}`} onClick={handleDarkMode}> {switchText} </button>
      </div>
    </div>
    {/* </Router> */}
    </>
  );
}
// export default App;
