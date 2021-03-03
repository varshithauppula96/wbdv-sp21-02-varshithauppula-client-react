import React from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
const ModuleList = ({modules= [],
                    createModule,
                    updateModule,
                        deleteModule}) =>
{
    return(


                <div className="p-3 bg-dark text-black">
    <h1> Module List</h1>
        <ul className="list-group">
            {
            modules.map(module=>
            <li className=" mb-2 list-group-item bg-secondary">
                <EditableItem
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
    }
})

export default (connect(stpm,dtpm))(ModuleList)