import React from 'react'
import {Link} from "react-router-dom";
export default class CourseNavbar extends React.Component {
render(){
return (
<div>
    <div>
        <nav className="justify-content-start navbar navbar-expand-sm  fixed-top">
            <em className="fa fa-bars fa-3x wbdv-field wbdv-hamburger d-block text-dark"></em>
            <a className="navbar-brand col-2 d-none d-lg-block d-xl-block" href="#">Course Manager</a>
            <form>
<input className="input-large" type ="text" placeholder="Enter Course"/>
            </form>
        </nav>

</div>
    <Link to="/">
        <i className="fas fa-2x fa-home float-right"></i>
    </Link>
</div>

)
}
}