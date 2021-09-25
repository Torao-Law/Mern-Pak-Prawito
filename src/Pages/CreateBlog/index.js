import React from 'react'
import { Button, Gap, Input, TextArea, Upload, Link } from '../../Components'
import './createBlog.scss'
import { useHistory } from 'react-router'

const CreateBlog = () => {
    const history = useHistory();

    return (
        <div className="create-blog">
            <Link title="Kembali" onClick={() => history.push('/')} />
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
