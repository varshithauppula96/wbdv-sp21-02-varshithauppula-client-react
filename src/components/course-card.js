import React ,{useState} from 'react';
import {Link} from "react-router-dom";

const CourseCard = ( {course,
                        title ="webdev",
                        owner="me",
                        lastModified="1/3/2020",
    deleteCourse
                    }) =>
{

    const [editing,setEditing] =useState(false)
    return (

    <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src="..." alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">
            {!editing &&
           <Link to="/editor">
                {course.title}
            </Link>
                }
                {editing &&
                <input value={course.title}/>
                    }
            </h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk
                of the card's content.</p>
            <div>

                {!editing &&
                <i onClick={() => setEditing(true)} className=" float-right fas fa-edit"> </i>
                }
                {editing &&
                <i onClick={() => setEditing(false)} className=" float-right fas fa-check"> </i>
                }
                {editing &&
                <i onClick={() => deleteCourse(course)} className=" float-right fas fa-trash"></i>
                }

            </div>
        </div>
    </div>
    )}




export default CourseCard