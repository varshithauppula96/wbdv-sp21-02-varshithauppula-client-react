import React, {useEffect}from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import{useParams} from "react-router-dom";
import lessonService from "../services/lesson-service";


const LessonTabs = ({lessons= [],
                        findLessonsForModule,
    to,
    createLesson,
                        updateLesson,
                        deleteLesson
                    }) =>
{
    const {layout,lessonId,moduleId,courseId} = useParams();
    useEffect(()=>{
if(moduleId !== "undefined" && typeof moduleId !== "undefined"){
        findLessonsForModule(moduleId)}
    },[moduleId])
    return(
             <div >

                    <nav className="navbar navbar-dark ">

                        <ul className=" nav nav-tabs ">
                            <li onClick={()=>createLesson(moduleId)} className=" nav-item">
                                <a className=" mt-3 mr-2 bg-secondary text-light nav-link " href="#"
                                   tabIndex="-1 "> Add Lesson + </a>
                            </li>
                            {
                                lessons.map(lesson=>
                                    <li className="nav-item  " >
                                        <a className={`nav-link mt-3 mr-2 ${lesson._id === lessonId ?'bg-primary text-light': ''} `} href="#">
                                            <EditableItem
                                                key={lesson._id}
                                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                                deleteItem={deleteLesson}
                                                updateItem={updateLesson}
                                                item={lesson}/></a>

                                    </li>


                                )



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



    createLesson: (moduleId) =>{
        lessonService.createLesson(moduleId,{title:'new Lesson'}).then(lesson =>dispatch({type: "CREATELESSON", lesson:lesson}))
    },
    updateLesson:(newItem) => {
        lessonService.updateLesson(newItem._id,newItem).then (status=> dispatch({type:"UPDATELESSON", updateLesson:newItem}))

    },
    deleteLesson:  (lessonToDelete) =>{
        lessonService.deleteLesson(lessonToDelete._id).then(
            status => dispatch({type:"DELETELESSON",lessonToDelete:lessonToDelete}))
    },
    findLessonsForModule:(moduleId) =>{

        lessonService.findLessonsForModule(moduleId).then(lessons =>{dispatch({type:"FIND_LESSONS_FOR_MODULE",lessons:lessons})})
    }
})

export default (connect(stpm,dtpm))(LessonTabs)