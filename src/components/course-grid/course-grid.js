import React  from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import CourseRow from "../course-table/course-row";



const CourseGrid =({courses, deleteCourse, updateCourse})=>{
    return(
<div>
        <table className="table">
            <thead>
            <tr>
                <th className="d-none d-md-table-cell">Recent documents</th>
                <th className="d-none d-md-table-cell">Owned by me</th>

                <th>
                    <div className="float-right">
                    <a className="ml-2" href="#"><i className="fa fa-folder"/></a>
                        <a className="ml-2" href="#"><i className=" pl-2 fas fa-sort"/></a>
                    <Link to="/courses/table"><i className="pl-2 fa fa-list"/></Link>
                    </div>
                </th>
            </tr>
            </thead>
        </table>

        <div className="card-deck mt-2">




            {
                courses.map( course =>
                    <CourseCard
                        key={course._id}
                    deleteCourse= {deleteCourse}
                    updateCourse= {updateCourse}
                    course={course}
                /> )

            }
        </div>


        </div>
    )
}
export default CourseGrid