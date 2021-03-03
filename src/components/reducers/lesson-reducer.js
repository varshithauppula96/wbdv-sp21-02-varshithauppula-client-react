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
        case "DELETELESSON": return{
            ...state,
            lessons: state.lessons.filter(
                lesson => {
                    if(lesson._id !== action.deleteLesson._id)
                    {
                        return true
                    }
                    else{
                        return false
                    }
                })
        }
        case "UPDATELESSON": return{
            ...state,
            lessons:state.lessons.map(lesson =>{
                if(lesson._id === action.updateLesson._id){
                    return action.updateLesson
                }
                else
                {
                    return lesson
                }
            })
        }
        default:
            return state


    }
}
export default lessonReducer