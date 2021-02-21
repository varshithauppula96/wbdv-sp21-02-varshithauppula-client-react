import React from 'react';
import {Link} from "react-router-dom";

const CourseRow = ( {course,
                        title ="webdev",
                        owner="me",
                        lastModified="1/3/2020",
                        deleteCourse

}) => {
    return (

        <tr>
            <td><Link to="/editor">
                {course.title}
            </Link>
            <input value={course.title}/></td>
            <td>{course.owner}</td>
            <td>{course.lastModified}</td>
            <td><i onClick={() => deleteCourse(course)} className=" float-right fas fa-trash"></i>
                <i className=" float-right fas fa-edit"> </i>
                <i className=" float-right fas fa-check"> </i></td>
        </tr>


    )
}

export default CourseRow