import React from 'react'
import {RegisterBg} from '../../assets'
import { Gap, Link } from '../../Components'
import './detailBlog.scss'
import { useHistory } from 'react-router'

const DetailBlog = () => {
    const history = useHistory();

    return (
        <div className="detailBlog">
            <img className="img-cover" src={RegisterBg} alt="Thumb"/>
            <p className="titleBlog">Title Blog</p>
            <p className="authorBlog">Author - date post</p>
            <p className="contentBlog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos architecto corrupti neque ipsum perferendis, quis autem in iste praesentium veritatis natus laudantium. Ipsa perspiciatis saepe deserunt molestiae amet beatae nostrum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio voluptas quisquam voluptatem. Accusamus corrupti perferendis iusto unde temporibus debitis nostrum atque consectetur voluptatem, optio nesciunt blanditiis ea, cumque explicabo! Numquam!</p>
            <Link title="Back to Home" onClick={() => history.push('/')} />
            <Gap height={20}/>
        </div>
    )
}

export default DetailBlog
