const initialState ={
    modules:[
        {title:'CS5610', _id:'123'},
        {title:'CS5680', _id:'124'},
        {title:'CS5800', _id:'125'},
        {title:'CS5320', _id:'126'},
        {title:'CS5510', _id:'127'},
        {title:'CS6180', _id:'128'}
    ]
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATEMODULE":
        case "DELETEMODULE":
        default:
            return state


    }
}
export default moduleReducer