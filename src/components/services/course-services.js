const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/001025839/courses";


export const findAllCourses = () =>
 fetch(COURSES_URL)
     .then(response => response.json())
