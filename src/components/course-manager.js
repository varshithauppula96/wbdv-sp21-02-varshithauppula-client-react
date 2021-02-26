import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseNavbar from "./course-navbar/course-navbar";
import {BrowserRouter, Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "./services/course-services";

export default class CourseManager extends React.Component {

    state = {
        courses: []
    }
    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(c => {
                        if(c._id === course._id) {
                            return course
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })
    }

    deleteCourse = (course) => {

        courseService.deleteCourse(course._id)
            .then(status => {
                // this.setState({
                //   courses: this.state.courses.filter(c => c._id !== course._id)
                // })
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                }))
            })
    }

    addCourse = (newTitle) => {

        const newCourse = {
            title: newTitle,
            owner: "me",
            lastModified: (new Date()).toDateString()
        }
        document.getElementById('title-fld').value = ""
        courseService.createCourse(newCourse)
            .then(actualCourse => {
                this.state.courses.push(actualCourse)
                this.setState(this.state)
            })
    }

    render() {
        return(

            <div>
<BrowserRouter>
    <Route path="/courses/table" exact={true} >
<div>
    <CourseNavbar addCourse={this.addCourse}/>

</div>
    </Route>
    <Route path="/courses/grid" exact={true} >
        <div>
            <CourseNavbar addCourse={this.addCourse}/>

        </div>
    </Route>


                <Route path="/courses" exact={true} >
                    <div>
                        <h1>Welcome to Course Manager</h1>
                        <div className="list-group">
                            <Link to="/courses/table" className="list-group-item">
                                Courses Table
                            </Link>
                            <Link to="/courses/grid" className="list-group-item">
                                Courses Grid
                            </Link>

                    </div>
                    </div>
                </Route>
<br/>
    <br/>
    <br/>


                {/*<Route path="/courses/table" component={CourseTable}/>*/}
                <Route path="/courses/table" exact={true} >

                    <CourseTable
                        updateCourse={this.updateCourse}
                        addCourse={this.addCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>

                </Route>


                <Route path="/courses/grid" exact={true} >
                    <CourseGrid
                        updateCourse ={this.updateCourse}
                        addCourse={this.addCourse}
                        deleteCourse= {this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>




</BrowserRouter>
            </div>
        )
    }
}
// export default CourseManager