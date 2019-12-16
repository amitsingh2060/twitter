const ADD_COMMENT = "ADD_COMMENT"


const initState = {
    comments: []
}
const addingComment = (state = initState, action)  => {
    switch(action.type){
        case ADD_COMMENT:
            let newComment = {
                commentID: action.commentID,
                comment:action.comment
            }
            return{
                ...state,
                comments:[...state.comments, newComment]
            }

            default:
                return state
    }
}

export default addingComment