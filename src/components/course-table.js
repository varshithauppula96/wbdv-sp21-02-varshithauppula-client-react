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



    render() {
        return (
            <div>
            <h2>Course Table</h2>
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