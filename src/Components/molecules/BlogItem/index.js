import React from 'react'
import { Button, Gap } from '../..'
import { RegisterBg } from '../../../assets'
import './blogitem.scss'
import { useHistory } from 'react-router'

const BlogItem = () => {
    const history = useHistory();

    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="post" />
            <div className="content-detail">
                <p className="title">Make with React Js</p>
                <p className="author">Author - post</p>
                <p className="body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo voluptatum excepturi minima nesciunt ipsum veniam, quas magni commodi quaerat iste quis corporis, error molestiae recusandae iure officiis ab a aperiam.</p>
                <Gap height={20}/>
                <Button title="Read More" onClick={() => history.push('/detail-blog')} />
            </div>
        </div>
    )
}

export default BlogItem
