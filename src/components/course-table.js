import React from 'react';
import CourseRow from "./course-row";

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
            <div>
            <h2>Course Table</h2>
                <button onClick={this.addCourse}>Add Course</button>
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