const initialState ={
    modules:[]
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATEMODULE":

           return {
               ...state,
               modules: [
                   ...state.modules,
                   action.module
               ]
           }

        case "DELETEMODULE":
            return {
                ...state,
                modules:state.modules.filter(module => {
                    if(module._id !== action.moduleToDelete._id) {
return true
                    } else {
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