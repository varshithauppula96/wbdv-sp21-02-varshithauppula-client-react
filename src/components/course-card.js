import React from 'react';
import {Link} from "react-router-dom";

const CourseCard = ( {course,
                        title ="webdev",
                        owner="me",
                        lastModified="1/3/2020",
    deleteCourse
                    }) =>


    <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src="..." alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title"><Link to="/editor">
                {course.title}
            </Link>
                <input value={course.title}/></h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk
                of the card's content.</p>
            <div>
                <i onClick={() => deleteCourse(course)} className=" float-right fas fa-trash"></i>
                <i className=" float-right fas fa-edit"> </i>
                <i className=" float-right fas fa-check"> </i>
            </div>
        </div>
    </div>





export default CourseCard