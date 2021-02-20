const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses";


 export const findAllCourses = () =>
 fetch(COURSES_URL)
     .then(response => response.json())


export const deleteCourse =(courseId) =>
    fetch(`${COURSES_URL}/${courseId}`,{
        method: 'DELETE'
    })
.then(response => response.json())

export const createCourse = (course) =>
    fetch(COURSES_URL,{
        method: 'POST',
        body: JSON.stringify(course),
        headers : {
            'content-type' : 'application/json'
        }
    })

const api ={
    findAllCourses :findAllCourses,
    deleteCourse :deleteCourse,
    createCourse,
}
export default api;