import React from 'react';
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends React.Component {


constructor(props) {
    super(props);
}


    render() {
        return (
            <div className="container-fluid">
            <h2>Course Table</h2>


                <table className="table">

                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Owned By</th>
                        <th>Last Modified</th>

                        <th>
                            <Link to ="/courses/grid">
                                <i className=" p-1 fas fa-list float-right "></i>
                            </Link>

                                <i className=" p-1 fas fa-folder float-right "></i>


                                <i className=" p-1 fas fa-folder float-right"></i>


                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map( course =>
                            <CourseRow
                                key={course._id}
                                deleteCourse={this.props.deleteCourse}
                                       course={course}/>)
                    }
                    </tbody>
                    </table>

            </div>
        )

    }
}