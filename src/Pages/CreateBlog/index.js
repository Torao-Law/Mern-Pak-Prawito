import React from 'react'
import { Button, Gap, Input, TextArea, Upload, Link } from '../../Components'
import './createBlog.scss'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setForm, setImgPreview, postToAPI } from '../../config/redux/action/createdBlogPostAction'

const CreateBlog = () => {
    const {form, imgReview} = useSelector(state => state.createdBlogPostReducer)
    const {title, body} = form;
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = () => {
        postToAPI(form)
    }

    const onImageUpload = (e) => {
        const file = e.target.files[0]
        dispatch(setForm('image', file));
        dispatch(setImgPreview(URL.createObjectURL(file)));
    }

    return (
        <div className="create-blog">
            <Link title="Kembali" onClick={() => history.push('/')} />
            <p className="title">Create New Blog</p>
            <Input label="Post Title" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))}/>
            <Upload onChange={(e) => onImageUpload(e)} img={imgReview}/>
            <TextArea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))}/>
            <Gap height={20}/>
            <div className="button-action">
                <Button title="Save" onClick={onSubmit}/>
            </div>
            <Gap height={50}/>
        </div>
    )
}

export default CreateBlog
