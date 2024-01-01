import './App.css';
import Alert from './components/Alert';
import Modes from './components/Modes';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react';

function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
   setAlert({
    msg:message,
    type:type
   })
   setTimeout(() => {
    setAlert(null);
   }, 2500);
  }

  const changeMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#061728'
      showAlert("Dark mode enabled","success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  const changeIt = (mod) =>
  {
    if(mod==='danger' )
    {
      setMode('danger');
      document.body.style.backgroundColor = '#580000'
      //showAlert("Red Mode Enabled",'danger');
    }
    if(mod==='secondary' )
    {
      setMode('secondary');
      document.body.style.backgroundColor = '#303030'
      //showAlert("Black Mode Enabled",'secondary');
    }
    if(mod==='success' )
    {
      setMode('success');
      document.body.style.backgroundColor = '#003300'
      //showAlert("Green Mode Enabled",'success');
    }
  }

  return (
    <div>
     <Navbar title="TextUtils" aboutText="About us" mode ={mode} changeMode={changeMode}/>
     <Modes mode = {mode}  changeIt={changeIt} />
     <Alert alert={alert}/>
     <div className="container my-3">
     <TextArea showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>
     {/* <About/> */}
     </div>
    </div>
  );
}

export default App;
