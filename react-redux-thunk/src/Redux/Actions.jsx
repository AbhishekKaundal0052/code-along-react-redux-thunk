
export function showUser(users){
    return{
        type: 'success', payload: users,
}
}
export function showError(error){
    return{
        type: 'error', payload:error,
    }
}