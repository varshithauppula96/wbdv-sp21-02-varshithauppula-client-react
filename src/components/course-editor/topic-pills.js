import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {useParams} from 'react-router-dom';
import EditableItem from "./editable-item";
import topicService from "../services/topic-service";
import lessonService from "../services/lesson-service";



const TopicPills = ({topics =[],
            to,
                                createTopic,
                                updateTopic,
                                deleteTopic,
                                findTopicsForLesson,
                        setTopicToEmpty}) =>
        {

            const {layout,courseId,moduleId,topicId,lessonId}=useParams();
            useEffect(()=>{
                if(lessonId !== "undefined" && typeof lessonId !== "undefined" && moduleId != "undefined" &&
                typeof moduleId != "undefined") {
                    findTopicsForLesson(lessonId)
                }
                else{
                    setTopicToEmpty(topicId)
                }
            },[lessonId,moduleId])
            return(

          <div >

              <nav className="navbar navbar-dark ">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a onClick={()=>createTopic(lessonId,moduleId)} className=" mt-3 mr-2 bg-secondary text-light nav-link" href="#" tabIndex="-1 "> Add Topic + </a>
                </li>
        {
            topics.map(topic=>
                <li className=" nav-item "> <a className={` mt-3 mr-2 nav-link ${topic._id === topicId ? 'bg-primary text-light' : ''} `} href="#">
                    <EditableItem
                        key={topic._id}
                        to = {`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                        deleteItem={deleteTopic}
                        updateItem={updateTopic}
                        item={topic}/></a>
            </li>)
        }



            </ul>
              </nav>

            </div>


                    )
        }


            const stpm = (state) => ({
            topics: state.topicReducer.topics
        })

            const dtpm  =(dispatch) =>({
                createTopic: (lessonId,moduleId) => {
                    topicService.createTopic(lessonId, {title: 'new Topic'}).then(topic => dispatch({
                        type: "CREATETOPIC",
                        topic: topic
                    }))
                },

                findTopicsForLesson: (lessonId) => {

                    topicService.findTopicsForLesson(lessonId).then(topics => {
                        dispatch({type: "FIND_TOPICS_FOR_LESSON", topics: topics})
                    })


                },

                setTopicToEmpty: (topicId) => {dispatch({
                    type: "CLEANTOPIC"
                })
                },

                updateTopic:(newItem) => {
                    topicService.updateTopic(newItem._id,newItem).then (status=> dispatch({type:"UPDATETOPIC", updateTopic:newItem}))

                },
                deleteTopic:  (topicToDelete) =>{
                    topicService.deleteTopic(topicToDelete._id).then(status=> dispatch({type:"DELETETOPIC",topicToDelete:topicToDelete}))
                }
            })

            export default (connect(stpm,dtpm))(TopicPills)