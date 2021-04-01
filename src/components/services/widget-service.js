
const WIDGET_URL = "http://localhost:8080/api";

export const createWidget = (tid, widget) => fetch(`${WIDGET_URL}/topics/${tid}/widgets`, {
    method: "POST",
    body: JSON.stringify(widget),
    headers: {'content-type': 'application/json'}
}).then(response => response.json())

export const findWidgetsForTopic = (tid) => fetch(`${WIDGET_URL}/topics/${tid}/widgets`)
    .then(response => response.json())

export const findAllWidgets = () => {}



export const updateWidget = (wid, widget) => fetch(`${WIDGET_URL}/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {'content-type': 'application/json'}
    }
).then(response => response.json())

export const deleteWidget = (wid) => fetch(`${WIDGET_URL}/widgets/${wid}`, {method: "DELETE",}).then(response => response.json())

const api = {
    createWidget,
    findWidgetsForTopic,
    findAllWidgets,
    updateWidget,
    deleteWidget
}

export default api