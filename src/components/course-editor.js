import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor =({history}) =>{
    return(
        <div>

            <button onClick={()=>history.goBack()}><i className="fas fa-arrow-left"></i> </button>
            Hello from Course Editor

        </div>
    )
}
export default CourseEditor