import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About"
import React,{useState} from 'react';
import './App.css';
import Alert from "./components/Alert";

function App() {
  const [mode,setMode]=useState("light"); // Whether dark mode is enabled or not.
  const [alert,setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(()=>{
      setAlert(null);},1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark Mode has been enabled","success");
    } else {
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light Mode has been enabled","success");
    }
  };
  return (
    <>
      <Navbar title="TextUtils!"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
      <TextForm heading="Enter text to analyze below" mode={mode}  showAlert={ showAlert}></TextForm>
      {/* <About></About> */}
      </div>
     
    </>
  );
}

export default App;
