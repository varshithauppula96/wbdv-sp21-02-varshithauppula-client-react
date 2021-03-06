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
           const newModule = {
               title:"New Module",
               _id : (new Date()).getTime()
           }
           return {
               ...state,
               modules: [
                   ...state.modules,
                   newModule
               ]
           }

        case "DELETEMODULE":
            return{
                ...state,
                modules: state.modules.filter(
                    module => {
                        if(module._id !== action.deleteModule._id)
                        {
                            return true
                        }
                        else{
                            return false
                        }
                    })
            }

        case "UPDATEMODULE":
            return{
                ...state,
                modules:state.modules.map(module =>{
                    if(module._id === action.updateModule._id){
                        return action.updateModule
                    }
                    else
                    {
                        return module
                    }
                })
            }
        case "FIND_MODULE_FOR_COURSE": return{
        ...
            state,
                modules: action.modules
        }
        default:
            return state


    }
}
export default moduleReducer