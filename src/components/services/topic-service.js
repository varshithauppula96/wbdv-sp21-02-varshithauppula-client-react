import {createModule, deleteModule, findModulesForCourse, updateModule} from "./module-services";

const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/1234/lessons"
export const findTopicsForLesson = (LessonId) =>
    fetch(`${LESSONS_URL}/${LessonId}/topics`)
        .then(response => response.json());


export const createTopic = (lessonId,topic) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


const api = {
    findTopicsForLesson, createTopic
}

export default api;