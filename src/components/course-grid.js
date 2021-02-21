import React  from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import CourseRow from "./course-row";


const CourseGrid =({courses, deleteCourse, updateCourse})=>{
    return(
        <div className="container-fluid">
        <h2>Course Grid {courses.length}</h2>


    <Link to ="/courses/table">
        <i className="fas fa-table float-right"></i>
    </Link>
            {
                courses.map( course => <CourseCard updateCourse= {updateCourse}
                                                   deleteCourse= {deleteCourse}
                                                   course={course}/> )

            }



        </div>
    )
}
export default CourseGrid