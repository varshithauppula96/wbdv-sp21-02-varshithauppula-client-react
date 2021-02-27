import React from 'react'
import {connect} from "react-redux";
const ModuleList = ({modules= []}) =>
{
    return(

            <div className="col-4">
                <div className="p-3 bg-dark text-black">
    <h1> Module List</h1>
        <ul className="list-group">
            {
            modules.map(module=>
            <li className=" mb-2 list-group-item bg-secondary"> {module.title}
                <i
                    className="float-right fa fa-folder"> </i></li>)
        }
            <div className="mb-2 pr-3 pt-3 float-left"><i
                className=" text-white pull-right fa fa-plus"> </i></div>
 </ul>

        </div>
            </div>


    )
}

const stpm = (state) => ({
    modules : state.moduleReducer.modules
})

const dtpm  =(dispatch) =>{}

export default (connect(stpm,dtpm))(ModuleList)