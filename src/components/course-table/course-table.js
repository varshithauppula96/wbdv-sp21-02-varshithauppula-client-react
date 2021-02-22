import React from 'react'
import CourseRow from "../course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends
    React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container-fluid">
                <table className="table table-striped" responsive="sm">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th className="  d-none d-sm-table-cell">Owned by</th>
                        <th className="  d-none d-lg-table-cell">Last Modified</th>
                        <th>
                            <div className="float-right">
                                <Link to="/courses/grid">
                                    <i className=" pl-3 fas fa-th float-right"></i>
                                </Link>
                                <a className="ml-2" href="#"><i className=" pl-2 fas fa-sort float-right"/></a>
                            <a className="ml-2" href="#"><i className="pl-2 fa fa-folder float-right " /></a>


            </div>
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