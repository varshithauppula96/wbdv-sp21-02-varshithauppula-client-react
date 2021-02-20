import React from 'react';

const CourseRow =()=>{
    return(
        <div>
            <table className="table">
                <tr>
                    <td>CS5610</td>
                    <td>ME</td>
                    <td ><i className=" float-right fa fa-trash"> </i>
                        <i className=" float-right fas fa-edit"> </i>
                        <i className=" float-right fas fa-check"> </i> </td>
                </tr>
            </table>
        </div>
    )
}
export default CourseRow