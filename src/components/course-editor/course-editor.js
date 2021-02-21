import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor =({history}) =>{
    return(
        <div>
            <h1>
                <button onClick={()=>history.goBack()}><i className="fa fa-times" aria-hidden="true"> </i> </button>
           Course Editor
            </h1>

            <div className="container-fill">
                <div className="row">

                    <div className="col-12">
                        <nav className="navbar navbar-dark bg-secondary ">
                            <ul className=" nav nav-pills ">


                                <li className="nav-item ">
                                    <a className="bg-secondary nav-link text-white " href="#" tabIndex="-1"
                                       aria-disabled="true">
                                        <i className="fa fa-close"></i>
                                    </a>
                                </li>
                                <li className="nav-item p-2 pr-5">
                                    <a className="bg-secondary nav-link text-white" href="#">CS5610-Web Development</a>
                                </li>
                                <li className="nav-item p-2">
                                    <a className=" bg-secondary nav-link text-white" href="#">Build</a>
                                </li>
                                <li className="nav-item p-2 ">
                                    <a className=" bg-secondary nav-link active" href="#">
                                        Active

                                    </a>
                                </li>
                                <li className="nav-item p-2">
                                    <a className=" bg-secondary nav-link text-white" href="#">Theme</a>
                                </li>
                                <li className="nav-item p-2">
                                    <a className=" bg-secondary nav-link text-white" href="#">Store</a>
                                </li>
                                <li className="nav-item p-2">
                                    <a className=" bg-secondary nav-link text-white" href="#">Apps</a>
                                </li>
                                <li className="nav-item p-2">
                                    <a className="bg-secondary nav-link text-white" href="#">Settings</a>
                                </li>

                                <li className="nav-item p-2">
                                    <a className="bg-secondary nav-link text-white " href="#" tabIndex="-1"
                                       aria-disabled="true">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                </li>

                            </ul>
                        </nav>

                        <div className="row">
                            <div className="col-4">
                                <div className="p-3 bg-dark text-black">
                                    <ul className="list-group">
                                        <li className=" mb-2 list-group-item bg-secondary">Module 1-jQuery<i
                                            className="pull-right fa fa-close"> </i></li>
                                        <li className=" mb-2 list-group-item active"> Module 2-React<i
                                            className="pull-right fa fa-close"> </i></li>
                                        <li className=" mb-2 list-group-item bg-secondary">Module 3-Redux<i
                                            className="pull-right fa fa-close"> </i></li>
                                        <li className=" mb-2 list-group-item bg-secondary">Module 4-Native <i
                                            className="pull-right fa fa-close"> </i></li>
                                        <li className="mb-2 list-group-item bg-secondary">Module 5-Angular<i
                                            className="pull-right fa fa-close"> </i></li>
                                        <li className=" mb-2 list-group-item  bg-secondary">Module 6-Node<i
                                            className="pull-right fa fa-close"> </i></li>
                                        <li className=" mb-2 list-group-item  bg-secondary">Module 7-Mongo <i
                                            className="pull-right fa fa-close"> </i></li>
                                        <div className="mb-2 pr-3 pt-3 float-left"><i
                                            className=" text-white pull-right fa fa-plus"> </i></div>
                                    </ul>
                                </div>
                            </div>

                            <br/>
                            <div className=" row">
                                <div className="col-12">
                                    <ul className="nav nav-pills">
                                        <li className="nav-item">
                                            <a className="mt-3 mr-2 bg-secondary text-light nav-link  "
                                               aria-current="page" href="#">Topic1</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className=" mt-3 mr-2 bg-dark text-light nav-link" href="#">Topic2</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className=" mt-3 mr-2 bg-secondary text-light nav-link"
                                               href="#">Topic3</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className=" mt-3 mr-2 bg-secondary text-light nav-link"
                                               href="#">Topic4</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className=" mt-3 mr-2 bg-secondary text-light nav-link" href="#"
                                               tabIndex="-1 "> + </a>
                                        </li>


                                    </ul>

                                    <form className="m-5 border container-fluid">
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-lg-6"><h2> Heading Widget</h2></div>
                                                <div className="col-lg-1">
                                                    <button className="btn btn-warning"><em
                                                        className="fa fa-arrow-up fa-lg fa-2x"></em></button>
                                                </div>
                                                <div className="col-lg-1">
                                                    <button className="btn btn-warning"><em
                                                        className="fa fa-arrow-down fa-lg fa-2x"></em></button>
                                                </div>
                                                <div className="col-lg-2">
                                                    <select className="form-control">
                                                        <option>List</option>
                                                        <option>Heading</option>
                                                        <option>Image</option>
                                                        <option>Paragraph</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-1">
                                                    <button className="btn btn-danger"><em
                                                        className="fa fa-times fa-lg fa-2x"></em></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Heading text"/>
                                        </div>
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option value="o1">Heading 1</option>
                                                <option value="o2">Heading 2</option>
                                                <option value="o3">Heading 3</option>
                                                <option value="o4">Heading 4</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Widget name"/>
                                        </div>
                                        <div className="form-group ">
                                            <label><h4>Preview</h4></label>
                                        </div>
                                        <div className="form-group ">
                                            <label><h3>Heading Text</h3></label>
                                        </div>
                                    </form>


                                </div>
                </div>
            </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default CourseEditor