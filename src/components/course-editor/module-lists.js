import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {useParams} from 'react-router-dom';
import EditableItem from "./editable-item";
import {findModulesForCourse} from "../services/module-services";

const ModuleList = ({modules= [],
                    createModule,
                    updateModule,
                        deleteModule,
                    findModulesForCourse}) =>
{
    const {layout,courseId,moduleId}=useParams();
useEffect(()=>{findModulesForCourse(courseId)},[])
    return(


                <div className="p-3 bg-dark text-black">
    <h1> Module List</h1>
                    <ul>

                        <li>{layout}</li>
                        <li>{courseId}</li>
                        <li>{moduleId}</li>
                    </ul>
        <ul className="list-group">
            {
            modules.map(module=>
            <li className=" mb-2 list-group-item bg-secondary">
                <EditableItem
                    to = {`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                    deleteItem={deleteModule}
                    updateItem={updateModule}
                    item={module}/>
                </li>)
        }
            <div ><button onClick={createModule}
                className=" float-right fa fa-plus"> </button></div>
 </ul>

        </div>



    )
}

const stpm = (state) => ({
    modules : state.moduleReducer.modules
})

const dtpm  =(dispatch) =>({
    createModule: () =>{
dispatch({type:"CREATEMODULE"})
    },
    updateModule:(newItem) => {
        dispatch({type:"UPDATEMODULE", updateModule:newItem})
    },
    deleteModule:  (moduleToDelete) =>{
        dispatch({type:"DELETEMODULE",deleteModule:moduleToDelete})
    },
    findModulesForCourse:(courseID)=>{
findModulesForCourse(courseID).then(modules =>dispatch({type:"FIND_MODULE_FOR_COURSE",modules:modules}))
    }
})

export default (connect(stpm,dtpm))(ModuleList)