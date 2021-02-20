import React from 'react';

const CourseRow = ( {course,
                        title ="webdev",
                        owner="me",
                        lastModified="1/3/2020"
}) =>
    <tr>
                    <td>{course.title}</td>
                    <td>{course.owner}</td>
                    <td>{course.lastModified}</td>
                    <td ><i className=" float-right fa fa-trash"> </i>
                        <i className=" float-right fas fa-edit"> </i>
                        <i className=" float-right fas fa-check"> </i> </td>
                </tr>




export default CourseRow