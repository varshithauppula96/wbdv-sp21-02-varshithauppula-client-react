import React,{useState,useEffect} from 'react'
import {BrowserRouter,useParams,Link, Route} from "react-router-dom";
import {combineReducers} from 'redux'
import ModuleList from "./module-lists";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import {findCourseById} from "../services/course-services";

import {Provider} from "react-redux";
import {createStore} from "redux";
import lessonReducer from "../reducers/lesson-reducer";
import moduleReducer from "../reducers/modules-reducer";
import topicReducer from "../reducers/topic-reducer";

const reducer =combineReducers({moduleReducer:moduleReducer,
lessonReducer:lessonReducer,
topicReducer:topicReducer})

const store = createStore(reducer)
const CourseEditor =({history}) =>{

const {layout,courseId,moduleId}=useParams();
    const [courseName, setCourseName] = useState({title: ""})
    useEffect(() => {
        findCourseById(courseId).then(course => {setCourseName({title:course.title})})
    }, [courseId])
    return(
        <Provider store={store}>
<div className="container-fluid">
            <h1 >
                <button>
                      <a href={`/courses/${layout}`} className="fa fa-times" aria-hidden="true"> </a>

</button>
           Course Editor
            </h1>


            <div className="row ">
                <div className="col-4">

                    <ModuleList/>
                </div>
                <div className="col-8">
                    <LessonTabs/>
                    <br/>
                    <TopicPills/>
                </div>
                </div>
</div>







    </Provider>
    )

}

export default CourseEditor