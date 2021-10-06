import React, { useEffect } from 'react'
import {BlogItem, Button, Gap} from '../../Components'
import './home.scss'
import { useHistory } from 'react-router'
import Axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch();
    // menggunakan state global yang telah di setting pada redux/store
    // const {dataBlogs, name} = useSelector(state => state)
    const {dataBlog} = useSelector(state => state.homeReduser)

    // function untuk memanggil data api dari node js
    useEffect(() => {
        Axios.get('http://localhost:4000/v1/blog/posts') //memanggil data menggunakan library axios dengan method get dari nodeJS
        .then(result => {
            const responseAPI = result.data; //variabel untuk menganti dataBLog
            dispatch({type: 'UPDATE_DATA_BLOG', payload: responseAPI.data}) //cara memanggil state global
        })
        .catch(err => {
            console.log('err', err) //jika fungsi pemanggilan error
        })
    }, [dispatch])

    const history = useHistory();

    return (
        <div className="home-app-wrapper">
            <div className="create-wrapper">
                <Button title="Create Blog" onClick={() => history.push('/create-blog')}/>
            </div>
            <Gap height={20}/>
            <div className="content-wrapper">
                {dataBlog.map(blog => {
                        return <BlogItem key={blog._id} image={`http://localhost:4000/${blog.image}`} title={blog.title} body={blog.body} name={blog.author.name} date={blog.createdAt}/>
                    })
                }
            </div>
            <div className="pagination">
                <Button title="Previous" />
                <Gap width={20} />
                <Button title="Next" />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default Home
