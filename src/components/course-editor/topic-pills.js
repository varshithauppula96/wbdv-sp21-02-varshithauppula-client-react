import React from 'react'
import {connect} from "react-redux";
import {useParams} from 'react-router-dom';
import EditableItem from "./editable-item";



        const TopicPills = ({topics,
            to,
                                createTopic,
                                updateTopic,
                                deleteTopic= []}) =>
        {
            const {layout,courseId,moduleId,topicId,lessonId}=useParams();
            return(

          <div>
              <ul>

                  <li>{layout}</li>
                  <li>{courseId}</li>
                  <li>{moduleId}</li>
                  <li>{lessonId}</li>
                  <li>{topicId}</li>
              </ul>
            <ul className="nav nav-pills">
        {
            topics.map(topic=>
                <li className=" nav-item "> <a className=" mt-3 mr-2 bg-dark text-light nav-link" href="#">
                    <EditableItem
                        to = {`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                        deleteItem={deleteTopic}
                        updateItem={updateTopic}
                        item={topic}/></a>
            </li>)
        }

                <div ><button onClick={createTopic}
                              className=" float-right fa fa-plus"> </button></div>
            </ul>

            </div>


                    )
        }


            const stpm = (state) => ({
            topics: state.topicReducer.topics
        })

            const dtpm  =(dispatch) =>({
                createTopic: () =>{
                    dispatch({type:"CREATETOPIC"})
                },
                updateTopic:(newItem) => {
                    dispatch({type:"UPDATETOPIC", updateTopic:newItem})
                },
                deleteTopic:  (topicToDelete) =>{
                    dispatch({type:"DELETETOPIC",deleteTopic:topicToDelete})
                }
            })

            export default (connect(stpm,dtpm))(TopicPills)