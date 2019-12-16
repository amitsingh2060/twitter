const ADD_COMMENT = "ADD_COMMENT"


const addComment = (e) => {
    console.log(e)
    return{
      type:ADD_COMMENT,
      commentID: e.commentID,
      comment:e.comment
    }
}

export {addComment}