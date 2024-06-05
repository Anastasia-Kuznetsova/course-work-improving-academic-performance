import React from 'react';
import './styles/App.css';
import Task from "./components/Task";
import OlympTask from './components/OlympTask';
import UsualTask from './components/UsualTask';
import OlympMat from './components/OlympMat';
import { BrowserRouter as Router, Routes, Route, NavLink, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <div className="bg"><BrowserRouter>
    <form style={{backgroundColor: "rgba(255,255,255,0.3)"}}>
    
      <div style = {{poistion: "absolute", right:"0px"}}>
      <NavLink to="/"><button className='menu_castle'></button></NavLink>
      <NavLink to="/UsualTask"><button className='menu_magician'></button></NavLink>
      <NavLink to="/OlympTask"><button className='menu_dragon'></button></NavLink></div>

    </form>
                <Routes>
                    <Route exact path="/" element={<Task />}/>
                    <Route exact path="/UsualTask" element={<UsualTask />}/>
                    <Route exact path="/OlympTask" element={<OlympTask />}/>
                    <Route exact path="/OlympTask/OlympMat" element={<OlympMat />}/>
                </Routes>
            </BrowserRouter>
    </div>
    </div>
  );
}
export default App;
