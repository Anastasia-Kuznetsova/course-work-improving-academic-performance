import React from "react";
import { Link } from "react-router-dom";

const Task = () => {
    return (
        <div>
            <ul>
                <li><div className='post'>
                    <Link to="/UsualTask"><button className='post__btns'>Задачи</button></Link>
                    </div></li>
                <li> <div className='post'>
                    <Link to="/OlympTask"><button className='post__btns'>Олимпиадные задачи</button></Link>
                    </div></li>
            </ul>
        </div>
    );
};
 
export default Task;