import React from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";



        const TopicPills = ({topics= []}) =>
        {
            return(

          <div>
            <ul className="nav nav-pills">
        {
            topics.map(topic=>
                <li className=" nav-item "> <a className=" mt-3 mr-2 bg-dark text-light nav-link" href="#">
                    <EditableItem item={topic}/></a>
            </li>)
        }

            </ul>

            </div>


                    )
        }


            const stpm = (state) => ({
            topics: state.topicReducer.topics
        })

            const dtpm  =(dispatch) =>{}

            export default (connect(stpm,dtpm))(TopicPills)