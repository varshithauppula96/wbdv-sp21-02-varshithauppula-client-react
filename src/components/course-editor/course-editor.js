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
        <div>
            <h1>
                <button onClick={()=>history.goBack()}><i className="fa fa-times" aria-hidden="true"> </i> </button>
           Course Editor
            </h1>

            <div className="container-fill">
                <div className="row">

                    <div className="col-12">
                    <LessonTabs/>

                        <div className="row">
                            <ModuleList/>

                            <br/>
                            <div className=" row">
                                <div className="col-12">
                            <TopicPills/>

                                    <form className="m-5 border container-fluid">
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-lg-6"><h2> Heading Widget</h2></div>
                                                <div className="col-lg-1">
                                                    <button className="btn btn-warning"><em
                                                        className="fa fa-arrow-up fa-lg fa-2x"></em></button>
                                                </div>
                                                <div className="col-lg-1">
                                                    <button className="btn btn-warning"><em
                                                        className="fa fa-arrow-down fa-lg fa-2x"></em></button>
                                                </div>
                                                <div className="col-lg-2">
                                                    <select className="form-control">
                                                        <option>List</option>
                                                        <option>Heading</option>
                                                        <option>Image</option>
                                                        <option>Paragraph</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-1">
                                                    <button className="btn btn-danger"><em
                                                        className="fa fa-times fa-lg fa-2x"></em></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Heading text"/>
                                        </div>
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option value="o1">Heading 1</option>
                                                <option value="o2">Heading 2</option>
                                                <option value="o3">Heading 3</option>
                                                <option value="o4">Heading 4</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Widget name"/>
                                        </div>
                                        <div className="form-group ">
                                            <label><h4>Preview</h4></label>
                                        </div>
                                        <div className="form-group ">
                                            <label><h3>Heading Text</h3></label>
                                        </div>
                                    </form>


                                </div>
                </div>
            </div>

                    </div>
                </div>
            </div>
        </div>

    </Provider>
    )

}

export default CourseEditor