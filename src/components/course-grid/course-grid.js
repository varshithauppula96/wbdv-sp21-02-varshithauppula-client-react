import React  from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import CourseRow from "../course-row";


const CourseGrid =({courses, deleteCourse, updateCourse})=>{
    return(
<div>
        <table className="table" style={{marginTop: "60px"}}>
            <thead>
            <tr>
                <th className="d-none d-sm-table-cell">Recent documents</th>
                <th className="d-none d-sm-table-cell">Owned by me</th>
                <th>
                    <a className="ml-2" href="#"><i className="fa fa-folder"/></a>
                    <a className="ml-2" href="#"><i className="fa fa-sort-alpha-asc"/></a>
                    <Link to="/courses/table"><i className="pl-2 fa fa-list"/></Link>
                </th>
            </tr>
            </thead>
        </table>

        <div className="card-deck mt-5">




            {
                courses.map( course => <CourseCard updateCourse= {updateCourse}
                                                   deleteCourse= {deleteCourse}
                                                   course={course}/> )

            }
        </div>


        </div>
    )
}
export default CourseGrid