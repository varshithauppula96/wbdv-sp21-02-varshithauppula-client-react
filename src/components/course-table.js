import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends
    React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>


                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th className="d-none d-sm-table-cell">Owned by</th>
                        <th className="d-none d-lg-table-cell">Last Modified</th>
                        <th>
                            <a className="ml-2" href="#"><i className="pl-2 fa fa-folder fa-2x"/></a>
                            <a className="ml-2" href="#"><i className=" pl-2 fa fa-folder fa-2x"/></a>
                            <Link to="/courses/grid">
                                <i className=" pl-3 fas fa-th fa-2x"></i>
                            </Link>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*<CourseRow title="CS5610" owner="me"/>*/}
                    {/*<CourseRow title="CS3200" owner="you"/>*/}
                    {/*<CourseRow title="CS5200" owner="him"/>*/}
                    {/*<CourseRow title="CS4550" owner="she"/>*/}
                    {
                        this.props.courses.map(course =>
                            <CourseRow
                                key={course._id}
                                deleteCourse={this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
                                course={course}
                                title={course.title}
                                lastModified={course.lastModified}
                                owner={course.owner}/>)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}