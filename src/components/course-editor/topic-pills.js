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

          <div>

            <ul className="nav nav-pills">
        {
            topics.map(topic=>
                <li className=" nav-item "> <a className=" mt-3 mr-2 bg-dark text-light nav-link" href="#">
                    <EditableItem
                        key={topic._id}
                        to = {`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                        deleteItem={deleteTopic}
                        updateItem={updateTopic}
                        item={topic}/></a>
            </li>)
        }

                <div ><button onClick={()=>createTopic(lessonId,moduleId)}
                              className=" float-right fa fa-plus"> </button></div>
            </ul>

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