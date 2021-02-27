import React from 'react'
import {connect} from "react-redux";
const LessonTabs = ({lessons= []}) =>
{
    return(
             <div>

                    <nav className="navbar navbar-dark bg-secondary ">
                        <ul className=" nav nav-pills ">
                            {
                                lessons.map(lesson=>
                                    <li className=" nav-item p-2 pr-3">
                                        <a className=" bg-secondary nav-link text-white" href="#">
                                            {lesson.title}</a>

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