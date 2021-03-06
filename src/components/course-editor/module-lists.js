import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {useParams} from 'react-router-dom';
import EditableItem from "./editable-item";
import {findModulesForCourse,createModule,deleteModule} from "../services/module-services";
import moduleService from "../services/module-services"

const ModuleList = ({modules= [],
                    createModule,
                    updateModule,
                        deleteModule,
                    findModulesForCourse}) =>
{
    const {layout,courseId,moduleId}=useParams();
    useEffect(() => {
        // console.log(courseId)
        findModulesForCourse(courseId)
    }, [])
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
                    key={module._id}
                    to = {`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                    deleteItem={deleteModule}
                    updateItem={updateModule}
                    item={module}/>
                </li>)
        }
            <div ><button onClick={()=>createModule(courseId)}
                className=" float-right fa fa-plus"> </button></div>
 </ul>

        </div>



    )
}

const stpm = (state) => ({
    modules : state.moduleReducer.modules
})

const dtpm  =(dispatch) =>({
    createModule: (courseId) =>{
        moduleService.createModule(courseId,{title:'new Module'}).then(module => dispatch({type: "CREATEMODULE", module: module}))
    },
    updateModule:(newItem) => {
        moduleService.updateModule(newItem._id,newItem).then (status=> dispatch({type:"UPDATEMODULE", updateModule:newItem}))
    },
    deleteModule:  (moduleToDelete) =>{
        moduleService.deleteModule(moduleToDelete._id).then(
            status => dispatch({type:"DELETEMODULE",moduleToDelete:moduleToDelete}))
    },
    findModulesForCourse:(courseID)=>{
moduleService.findModulesForCourse(courseID).then(modules =>dispatch({type:"FIND_MODULE_FOR_COURSE",modules:modules}))
    }
})

export default (connect(stpm,dtpm))(ModuleList)