import React from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
const LessonTabs = ({lessons= []}) =>
{
    return(
             <div>

                    <nav className="navbar navbar-dark bg-secondary ">

                        <ul className=" nav nav-tabs ">

                            {
                                lessons.map(lesson=>
                                    <li className=" nav-item">
                                        <a className=" bg-secondary nav-link text-white" href="#">
                                            <EditableItem item={lesson}/></a>

                                    </li>)
                            }
                                    </ul>
                    </nav>


            </div>



    )
}

const stpm = (state) => ({
    lessons : state.lessonReducer.lessons
})

const dtpm  =(dispatch) =>{}

export default (connect(stpm,dtpm))(LessonTabs)