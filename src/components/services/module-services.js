const COURSES_URL="https://wbdv-generic-server.herokuapp.com/api/YOUR_NEUID/courses/"

export const findModulesForCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}/modules`)
        .then(response => response.json());