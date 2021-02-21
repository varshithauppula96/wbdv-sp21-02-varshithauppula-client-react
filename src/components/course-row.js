import React,{useState} from 'react';
import {Link} from "react-router-dom";

const CourseRow = ( {course,
                        title ="webdev",
                        owner="me",
                        lastModified="1/3/2020",
                        deleteCourse

}) => {

   const [editing,setEditing] =useState(false)
    return (

        <tr>
            <td>
                {!editing &&
                <Link to="/editor">
                    {course.title}
                </Link>
                }
                { editing &&
                    <input value={course.title}/>
                }
                </td>

            <td>{course.owner}</td>
            <td>{course.lastModified}</td>

            <td>


                {!editing &&
                    <i onClick={() => setEditing(true)} className=" float-right fas fa-edit"> </i>
                }
                {editing &&
                <i onClick={() => setEditing(false)} className=" float-right fas fa-check"> </i>
                }
                { editing &&
                <i onClick={() => deleteCourse(course)} className=" float-right fas fa-trash"></i>
                    }
            </td>
        </tr>


    )
}

export default CourseRow