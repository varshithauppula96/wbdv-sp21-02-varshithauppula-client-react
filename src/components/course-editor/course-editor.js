import React from 'react'
import {Link} from "react-router-dom";
import {combineReducers} from 'redux'
import ModuleList from "./module-lists";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";


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

    return(
        <Provider store={store}>

            <h1>
                <button onClick={()=>history.goBack()}><i className="fa fa-times" aria-hidden="true"> </i> </button>
           Course Editor
            </h1>


            <div className="row">
                <div className="col-4">
                    <ModuleList/>
                </div>
                <div className="col-8">
                    <LessonTabs/>
                    <TopicPills/>
                </div>
                </div>







    </Provider>
    )

}

export default CourseEditor