import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {BrowserRouter,Route} from "react-router-dom";
import {findAllCourses} from "./services/course-services";


class CourseManager extends React.Component{
    state ={
        courses : []
    }
    componentDidMount() {
        findAllCourses()
            .then(courses => this.setState({courses:courses}))
    }

deleteCourse = (course) =>
{
    alert("DeleteCourse" +course._id)
}
    addCourse =() => {

        const newCourse={
            title:"newTitle",
            owner: "Me",
            lastModified: (new Date()).toDateString()
        }
        this.state.courses.push(newCourse)
        this.setState(this.state)
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

