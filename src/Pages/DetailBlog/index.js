import React, { useEffect, useState } from 'react'
import { Gap, Link } from '../../Components'
import './detailBlog.scss'
import { useHistory, withRouter } from 'react-router'
import Axios from 'axios'

const DetailBlog = (props) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const id = props.match.params.id

        Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
        .then(res => {
            setData(res.data.data)
        })
        .catch(err => {
            console.log('err: ', err)
        })
    }, [props])

    const history = useHistory();
    if(data.author) {
        return (
            <div className="detailBlog">
                <img className="img-cover" src={`http://localhost:4000/${data.image}`} alt="Thumb"/>
                <p className="titleBlog">{data.title}</p>
                <p className="authorBlog">{data.author.name} - {data.createdAt}</p>
                <p className="contentBlog">{data.body}</p>
                <Link title="Back to Home" onClick={() => history.push('/')} />
                <Gap height={20}/>
            </div>
        )
    }
    return <p>Data Loading ... </p>
}

export default withRouter(DetailBlog)
