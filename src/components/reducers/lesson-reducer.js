const initialState ={
    lessons:[
        {title:'Lesson1', _id:'1'},
        {title:'Lesson2', _id:'2'},
        {title:'Lesson3', _id:'3'},
        {title:'Lesson4', _id:'4'},


    ]
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATELESSON":
        case "DELETELESSON":
        case "UPDATELESSON":
        default:
            return state


    }
}
export default lessonReducer