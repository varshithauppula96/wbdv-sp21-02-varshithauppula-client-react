import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {BrowserRouter,Route} from "react-router-dom";
class CourseManager extends React.Component{
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
                   <CourseTable courses = {this.state.courses}/>
                </Route>
                <Route path ="/courses/grid">
                    <CourseGrid courses ={this.state.courses}/>
                </Route>


            </div>


        )
    }
}
export default CourseManager

