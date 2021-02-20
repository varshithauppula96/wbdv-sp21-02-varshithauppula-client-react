import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {BrowserRouter,Route} from "react-router-dom";
class CourseManager extends React.Component{
    render(){
        return(
            <div>
            <h1>Hello from course manager</h1>
                <Route path ="/courses/grid" component={CourseGrid}/>
                <Route path ="/courses/table" component={CourseTable}/>

            </div>


        )
    }
}
export default CourseManager

