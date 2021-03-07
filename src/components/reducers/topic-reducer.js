const initialState ={
    topics:[]
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATETOPIC":

            return {
                ...state,
                topics: [
                    ...state.topics,
                   action.topic
                ]
            }
        case "DELETETOPIC": return{
            ...state,
            topics: state.topics.filter(
                topic => {
                    if(topic._id !== action.deleteTopic._id)
                    {
                        return true
                    }
                    else{
                        return false
                    }
                })
        }
        case "UPDATETOPIC": return{
            ...state,
            topics:state.topics.map(topic =>{
                if(topic._id === action.updateTopic._id){
                    return action.updateTopic
                }
                else
                {
                    return topic
                }
            })
        }
        case "FIND_TOPICS_FOR_LESSON":
            return{
                ...state,
                topics:action.topics,

            }
        default:
            return state


    }
}
export default topicReducer