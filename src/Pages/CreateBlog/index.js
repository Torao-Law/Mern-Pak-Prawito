import React, { useEffect, useState } from 'react'
import { Button, Gap, Input, TextArea, Upload, Link } from '../../Components'
import './createBlog.scss'
import { useHistory, withRouter } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setForm, setImgPreview, postToAPI, updateToAPI } from '../../config/redux/action/createdBlogPostAction'
import Axios from 'axios'

const CreateBlog = (props) => {
    const {form, imgReview} = useSelector(state => state.createdBlogPostReducer)
    const {title, body} = form;
    const [isUpdate, setIsUpdate] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        console.log('params: ', props)
        const id = props.match.params.id
        if(id) {
            setIsUpdate(true)
            Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
            .then(res => {
                const data = res.data.data
                console.log("res: ", data)
                dispatch(setForm('title', data.title))
                dispatch(setForm('body', data.body))
                dispatch(setImgPreview(`http://localhost:4000/${data.image}`))
            })
            .catch(err => {
                console.log("err: ", err)
            })
        }

    },[props, dispatch])

    const onSubmit = () => {
        if(isUpdate) {
          const id = props.match.params.id
          updateToAPI(form, id)
        } else {
            postToAPI(form)
        }
    }

    const onImageUpload = (e) => {
        const file = e.target.files[0]
        dispatch(setForm('image', file));
        dispatch(setImgPreview(URL.createObjectURL(file)));
    }

    return (
        <div className="create-blog">
            <Link title="Kembali" onClick={() => history.push('/')} />
            <p className="title">{isUpdate ? 'Update' : 'Create New'} Blog Post</p>
            <Input label="Post Title" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))}/>
            <Upload onChange={(e) => onImageUpload(e)} img={imgReview}/>
            <TextArea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))}/>
            <Gap height={20}/>
            <div className="button-action">
                <Button title={isUpdate ? 'Update' : 'Save'} onClick={onSubmit}/>
            </div>
            <Gap height={50}/>
        </div>
    )
}

export default withRouter(CreateBlog)
