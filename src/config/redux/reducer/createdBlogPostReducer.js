const initiaState = {
    form: {
        title:'',
        body:'',
        image:'',
    },
    imgReview: null,
}

const createdBlogPostReducer = (state = initiaState, action) => {
    if(action.type === 'SET_BLOG_POST') {
        return {
            ...state,
            form: {
                ...state.form,
                [action.formType]:action.formValue
            }
        }
    }

    if(action.type === 'SET_IMG_PREVIEW') {
        return {
            ...state,
            imgReview: action.payload,
        }
    }

    return state;
}

export default createdBlogPostReducer;