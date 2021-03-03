const initialState ={
    topics:[
        {title:'Topic1', _id:'11'},
        {title:'Topic2', _id:'12'},
        {title:'Topic3', _id:'13'},
        {title:'Topic4', _id:'14'},
        {title:'Topic4', _id:'14'},
        {title:'Topic4', _id:'14'}

    ]
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATETOPIC":
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
        default:
            return state


    }
}
export default topicReducer