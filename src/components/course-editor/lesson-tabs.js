import React from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import{useParams} from "react-router-dom"
const LessonTabs = ({lessons= [],
    to,
                        updateLesson,
                        deleteLesson}) =>
{
    const {layout,lessonId,moduleId,courseId} = useParams();
    return(
             <div>
                
                    <nav className="navbar navbar-dark bg-secondary ">

                        <ul className=" nav nav-tabs ">

                            {
                                lessons.map(lesson=>
                                    <li className=" nav-item">
                                        <a className=" bg-secondary nav-link text-white" href="#">
                                            <EditableItem
                                                to = {`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                                deleteItem={deleteLesson}
                                                            updateItem={updateLesson}
                                                            item={lesson}/></a>

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

const dtpm  =(dispatch) =>({

    updateLesson:(newItem) => {
        dispatch({type:"UPDATELESSON", updateLesson:newItem})
    },
    deleteLesson:  (lessonToDelete) =>{
        dispatch({type:"DELETELESSON",deleteLesson:lessonToDelete})
    }
})

export default (connect(stpm,dtpm))(LessonTabs)