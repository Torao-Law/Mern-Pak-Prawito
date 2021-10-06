import React, { useEffect, useState } from 'react'
import {BlogItem, Button, Gap} from '../../Components'
import './home.scss'
import { useHistory } from 'react-router'
import Axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    // membuat state dengan nama dataBlog dan methode setDataBlog
    // const [dataBlog, setDataBlog] = useState([]) //useState harus memiliki value, disini diisi array kosong untuk menerima respon API
    const dispatch = useDispatch();

    // menggunakan state global yang telah di setting pada redux/store
    const {dataBlogs, name} = useSelector(state => state)
    // console.log("State Global : ", stateGlobal)
    console.log("State global : ", dataBlogs)

    // function untuk memanggil data api dari node js
    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'UPDATE_NAME'})
        }, 3000)

        Axios.get('http://localhost:4000/v1/blog/posts') //memanggil data menggunakan library axios dengan method get dari nodeJS
        .then(result => {
            console.log('Data API :', result.data) //jika fungsi pemanggilan berhasil
            const responseAPI = result.data; //variabel untuk menganti dataBLog
            //cara memanggil state lokal variable untuk mengganti dataBlog menggunakan methode setDataBlog
            // setDataBlog(responseAPI.data)
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
            <p>{name}</p>
            <Gap height={20}/>
            <div className="content-wrapper">
                {dataBlogs.map(blog => {
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
