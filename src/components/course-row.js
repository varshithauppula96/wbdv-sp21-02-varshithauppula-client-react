import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
        course,
        lastModified="1/1/2021",
        owner="who knows?",
        deleteCourse,
        updateCourse
    }) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }
        updateCourse(newCourse)
    }

    return(
        <tr>
            <td>
                {
                    !editing &&
                    <a href ="/editor">
                        {course.title}
                    </a>
                }
                {
                    editing &&
                    <input
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}/>
                }
            </td>
            <td>{course.owner}</td>
            <td>{course.lastModified}</td>
            <td>
                {editing &&
                <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
                }

                {
                    editing &&
                    <i onClick={() => saveCourse()} className="fas fa-check"></i>
                }

                {
                    !editing &&
                    <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                }


            </td>
        </tr>)
}

export default CourseRow