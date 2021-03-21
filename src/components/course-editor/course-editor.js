import React,{useState,useEffect} from 'react'
import {BrowserRouter,useParams,Link, Route} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import ModuleList from "./module-lists";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import widgetReducer from "../reducers/widget_reducer";
import WidgetList from "./widgets/widget-list";
import {findCourseById} from "../services/course-services";

import {Provider} from "react-redux";

import lessonReducer from "../reducers/lesson-reducer";
import moduleReducer from "../reducers/modules-reducer";
import topicReducer from "../reducers/topic-reducer";


const reducer =combineReducers({moduleReducer:moduleReducer,
lessonReducer:lessonReducer,
topicReducer:topicReducer,
widgetReducer: widgetReducer})
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
<br/>

            <div className="row ">
                <div className="col-3">
                    <div className="p-3 bg-dark ">
                    <ModuleList/>
                    </div>
                </div>
                <div className="col-9">

                    <LessonTabs/>

                    <br/>
                    <TopicPills/>

                    <br/>
                    <WidgetList/>
                </div>
                </div>
</div>







    </Provider>
    )

}

export default CourseEditor