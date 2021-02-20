import React from 'react';
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends React.Component {
state ={
    courses : [
        {title:"CS5610", owner:"me", lastModified:"01/02/2021"},
        {title:"CS5610", owner:"me", lastModified:"01/02/2021"},
        {title:"CS5610", owner:"me", lastModified:"01/02/2021"},
        {title:"CS5610", owner:"me", lastModified:"01/02/2021"},
        {title:"CS5610", owner:"me", lastModified:"01/02/2021"},
        {title:"CS56800",owner:"me", lastModified:"01/02/2021"},
    ]
}


addCourse =() => {
    alert("course added")
    const newCourse={
        title:"New Course",
        owner: "Me",
        lastModified:"20/02/2021"
    }
    this.state.courses.push(newCourse)
    this.setState(this.state)
}


    render() {
        return (
            <div className="container-fluid">
            <h2>Course Table</h2>
                <button onClick={this.addCourse}>Add Course</button>
                <Link to ="/courses/grid">
                <i className="fas fa-list float-right"></i>
                </Link>
                <table className="table">
                    {
                        this.state.courses.map( course =>
                            <CourseRow course={course}/>)
                    }
                    </table>

            </div>
        )

    }
}