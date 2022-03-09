import './App.css';
import { useState } from 'react';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React from "react";
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setmode]=useState('light');//whether dark mode is enabled or not
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type

    });
        setTimeout(() => {
          setAlert(null);
      }, 1500);//so that vo khud chla jae coz once we dismiss alert it don't come again until refreshed

  }
  //type used for type of alert in bootstrap
  const togglemode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled","success");
      document.title='Textutils-Darkmode';//to change title dynamically
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enabled","success");
      document.title='Textutils-Lightmode';
    }
  }
  return (
    <>
    <Router>
   {/** <Navbar title="TextUtils" aboutext="About Us" mode={mode}/>whether navbar will be dark or light initially */} 
   {/**pack switch inside <Router>*/} 
   <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
   <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
          </Route>
    </Switch>
    
    {/* <TextForm showAlert={showAlert} heading="Enter the Text to Analyse" mode={mode} /> */}
    </div>
    
     {/**passing alert to textform to tell that whenevre u wan to show alert jst call this function*/}
    {/**<About mode={mode}/>*/} 
   
    </Router>
    </>
    

  );
}

export default App;
