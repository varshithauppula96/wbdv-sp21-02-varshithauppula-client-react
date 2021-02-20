import React from 'react'
import {Link} from "react-router-dom";

const CourseGrid =()=>{
    return(
        <div className="container-fluid">
        <h2>Course Grid</h2>
    <Link to ="/courses/table">
        <i className="fas fa-table float-right"></i>
    </Link>
        </div>
    )
}
export default CourseGrid