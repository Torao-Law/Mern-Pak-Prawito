import React from 'react'
import { Button, Gap } from '../..'
import './blogitem.scss'
import { useHistory } from 'react-router'

const BlogItem = (props) => {
    const history = useHistory();
    const {name, title, body, date, image, _id} = props;

    return (
        <div className="blog-item">
            <img className="image-thumb" src={image} alt="post" />
            <div className="content-detail">
                <div className="title-wrapper">
                    <p className="title">{title}</p>
                    <div className="update-wrapper">
                        <p className="edit" onClick={() => history.push(`/create-blog/${_id}`)}>Edit</p> | <p className="delete">Delete</p>
                    </div>
                </div>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                <Gap height={20}/>
                <Button title="Read More" onClick={() => history.push(`/detail-blog/${_id}`)} />
            </div>
        </div>
    )
}

export default BlogItem
