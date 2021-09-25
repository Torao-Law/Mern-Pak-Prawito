import React from 'react'
import { Button, Gap, Input, TextArea, Upload } from '../../Components'
import './createBlog.scss'

const CreateBlog = () => {
    return (
        <div className="create-blog">
            <p className="title">Create New Blog</p>
            <Input label="Post Title"/>
            <Upload />
            <TextArea/>
            <Gap height={20}/>
            <div className="button-action">
                <Button title="Save"/>
            </div>
            <Gap height={50}/>
        </div>
    )
}

export default CreateBlog
