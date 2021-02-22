import React from 'react'
import {Link} from "react-router-dom";

export default class CourseNavbar extends React.Component {

    constructor(props) {
        super(props);
    }
    state = {
        title: "New Course"
    }



    render(){
        return (

            <div>

                <div className=" wbdv-sticky-top wbdv-padding-5px">

                    <div className=" container-fluid row">

                        <div className="col-1">
                            <i className="ml-3 fa fa-bars fa-2x"></i>
                        </div>
                        <div className="col-3 d-none d-sm-block">
                            <h4>Course Manager</h4>
                        </div>
                        <div className="col-6">
                            <input type ="text" id="title-fld" className="bglight-blue form-control"  onChange={(e) => {
                                const newTitle = e.target.value
                                this.setState({title: newTitle})

                            }} placeholder="Enter Course"/>
                        </div>
                        <div className="col-1 ">
                            <button className=" pr-2 pl-2 pt-1 pb-1 rounded-circle bg-secondary fa fa-plus fa-2x" onClick={() => {
                                this.props.addCourse(this.state.title)

                            }
                            } type="button">
                            </button>
                        </div >

                        <div className ="col-1 d-none d-sm-block">
                            <a href="/">
                                <i className="fas fa-2x fa-home float-right"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <button
                    style={{position: "fixed", bottom: 0, right: 0}}
                    onClick={() => {
                        this.props.addCourse(this.state.title)
                    }}><i className="pr-2 pl-2 pt-1 pb-1 rounded-circle bg-secondary fa fa-plus fa-2x"/></button>



            </div>


        )
    }
}
