import React ,{useState} from 'react';
import {Link} from "react-router-dom";

const CourseCard = ( {course,

                        owner="me",
                        lastModified="1/3/2020",
    deleteCourse,
                         updateCourse
                    }) =>
{

    const [editing,setEditing] =useState(false)
    const [title,setTitle] =useState("")


    const saveCourse =() => {
        setEditing(false)
        const newCourse ={
            ...course,
            title:title
        }
        updateCourse(newCourse)
    }
    return (
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-1">
    <div className="card" >
        <img className="card-img-top" src="https://picsum.photos/300/200" alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">
            {!editing &&
           <a href="/editor">
                {course.title}
            </a>
                }
                {editing &&
                <input
                    className="form-control"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}/>
                }
            </h5>
            <p className="card-text">Some Description</p>
            <div>

                {!editing &&
                <i onClick={() => setEditing(true)} className=" float-right fas fa-edit"> </i>
                }
                {editing &&
                <i onClick={() => saveCourse()} className=" float-right fas fa-check"> </i>
                }
                {editing &&
                <i onClick={() => deleteCourse(course)} className=" float-right fas fa-trash"></i>
                }

            </div>
        </div>
    </div>
        </div>
    )}




export default CourseCard