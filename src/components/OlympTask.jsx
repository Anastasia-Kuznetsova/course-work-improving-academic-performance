import React from "react";
import { Link } from "react-router-dom"; 

const OlympTask = () => {
    return (
        
        <div><div className="task_header"></div>
            <div className='olymp_post'>
            <button className='usual__btns'><h3 style={{color: "yellow", fontFamily: "Times New Roman, Times, serif"}}>Математика</h3></button>
            <button className='usual__btns'><h3 style={{color: "yellow", fontFamily: "Times New Roman, Times, serif"}}>Биология</h3></button>
            <button className='usual__btns'><h3 style={{color: "yellow", fontFamily: "Times New Roman, Times, serif"}}>Английский язык</h3></button>
            <button className='usual__btns'><h3 style={{color: "yellow", fontFamily: "Times New Roman, Times, serif"}}>Информатика</h3></button>
            <button className='usual__btns'><h3 style={{color: "yellow", fontFamily: "Times New Roman, Times, serif"}}>Русский язык</h3></button>
            <button className='usual__btns'><h3 style={{color: "yellow", fontFamily: "Times New Roman, Times, serif"}}>География</h3></button>
            <button className='usual__btns'><h3 style={{color: "yellow", fontFamily: "Times New Roman, Times, serif"}}>История</h3></button>
            <button className='usual__btns'><h3 style={{color: "yellow", fontFamily: "Times New Roman, Times, serif"}}>Обществознание</h3></button>
            <button className='usual__btns'><h3 style={{color: "yellow", fontFamily: "Times New Roman, Times, serif"}}>Литература</h3></button>
        </div></div>

    );
};
 
export default OlympTask;
