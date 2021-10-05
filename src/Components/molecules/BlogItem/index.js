import React from 'react'
import { Button, Gap } from '../..'
import './blogitem.scss'
import { useHistory } from 'react-router'

const BlogItem = (props) => {
    const history = useHistory();
    const {name, title, body, date, image} = props;

    return (
        <div className="blog-item">
            <img className="image-thumb" src={image} alt="post" />
            <div className="content-detail">
                <p className="title">{title}</p>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                <Gap height={20}/>
                <Button title="Read More" onClick={() => history.push('/detail-blog')} />
            </div>
        </div>
    )
}

export default BlogItem
