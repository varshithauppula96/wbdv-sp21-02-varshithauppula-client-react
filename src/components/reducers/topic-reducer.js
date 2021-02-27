const initialState ={
    topics:[
        {title:'Topic1', _id:'11'},
        {title:'Topic2', _id:'12'},
        {title:'Topic3', _id:'13'},
        {title:'Topic4', _id:'14'},

    ]
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATETOPIC":
        case "DELETETOPIC":
        case "UPDATETOPIC":
        default:
            return state


    }
}
export default topicReducer