import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {BrowserRouter,Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "./services/course-services";


class CourseManager extends React.Component{
    state ={
        courses : []
    }
    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({courses:courses}))
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
    addCourse = () => {
        // alert('add course')
        const newCourse = {
            title: "New Course",
            owner: "me",
            lastModified: "2/10/2021"
        }
        courseService.createCourse(newCourse)
            .then(actualCourse => {
                this.state.courses.push(actualCourse)
                this.setState(this.state)
            })
    }


    render(){
        return(
            <div>
            <h1>Hello from course manager</h1>


                <button onClick={this.addCourse}>Add Course</button>
                <Route path ="/courses/table">
                   <CourseTable deleteCourse= {this.deleteCourse} courses = {this.state.courses}/>
                </Route>
                <Route path ="/courses/grid">
                    <CourseGrid courses ={this.state.courses}/>
                </Route>


            </div>


        )
    }
}
export default CourseManager

