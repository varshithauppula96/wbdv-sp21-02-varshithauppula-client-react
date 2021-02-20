import React from 'react'
import {Link} from "react-router-dom";

const CourseGrid =(courses)=>{
    return(
        <div className="container-fluid">
        <h2>Course Grid</h2>

            <td><Link to="/editor">cs5610</Link></td>
    <Link to ="/courses/table">
        <i className="fas fa-table float-right"></i>
    </Link>

            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <Link to="/editor" className="btn btn-primary">Go somewhere</Link>
                    </div>
            </div>
        </div>
    )
}
export default CourseGrid