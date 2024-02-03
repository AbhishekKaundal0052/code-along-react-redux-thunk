const initialState = {
    user: [],
    error:''
}

const reducer=(state = initialState,action)=>{
    switch (action.type){
        case 'success':
            return {
                user: action.payload,
                error:''
            }
            case 'error':
                return {
                    user: [],
                    error: 'error'
                }
    }
}
export default reducer;