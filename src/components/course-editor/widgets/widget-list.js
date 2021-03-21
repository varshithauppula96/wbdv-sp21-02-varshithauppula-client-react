import React, {useState,useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph_widget";
import {useParams} from "react-router-dom"

const WidgetList =() =>{
    const{topicId}=useParams()
    const [widgets,setWidgets] =useState([])
    
useEffect(()=>{
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`).then(response =>response.json())
        .then(widgets=> setWidgets(widgets))
},[topicId])

    const createWidget = () => {
        // TODO: move all server communication to widgets-service
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
            method: 'POST',
            body: JSON.stringify({type: "HEADING", size: 2, text: "New Widget"}),
            headers: {
                "content-type": 'application/json'
            }
        })
            .then(response => response.json())
            .then(widget => setWidgets((widgets) => [...widgets, widget]))
    }

    return(
        <div>
            <i onClick={createWidget} className="fas fa-plus fa-2x float-right"></i>
            <h1>Widget List</h1>

            <ul className="list-group">

                    {
                    widgets.map(widget =>
                <li key={widget.id} className="list-group-item">
                    <i onClick={() => setWidget(widget)} className="fas fa-cog float-right"></i>
                    {widget.type === "HEADING" &&
                    <HeadingWidget widget ={widget}/>}
                    {widget.type === "PARAGRAPH" &&
                    <ParagraphWidget widget ={widget}/>}

                </li>)
                    }
            </ul>
        </div>
    )
}
export default WidgetList