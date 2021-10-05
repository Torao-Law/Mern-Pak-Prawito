import React, { useEffect, useState } from 'react'
import {BlogItem, Button, Gap} from '../../Components'
import './home.scss'
import { useHistory } from 'react-router'
import Axios from 'axios'

const Home = () => {
    // membuat state dengan nama dataBlog dan methode setDataBlog
    const [dataBlog, setDataBlog] = useState([]) //useState harus memiliki value, disini diisi array kosong untuk menerima respon API
    // function untuk memanggil data api dari node js
    useEffect(() => {
        Axios.get('http://localhost:4000/v1/blog/posts') //memanggil data menggunakan library axios dengan method get dari nodeJS
        .then(result => {
            console.log('Data API :', result.data) //jika fungsi pemanggilan berhasil
            const responseAPI = result.data; //variabel untuk menganti dataBLog

            setDataBlog(responseAPI.data) //cara memanggil variable untuk mengganti dataBlog menggunakan methode setDataBlog
        })
        .catch(err => {
            console.log('err', err) //jika fungsi pemanggilan error
        })
    }, [])

    const history = useHistory();

    return (
        <div className="home-app-wrapper">
            <div className="create-wrapper">
                <Button title="Create Blog" onClick={() => history.push('/create-blog')}/>
            </div>
            <Gap height={20}/>
            <div className="content-wrapper">
                {dataBlog.map(blog => {
                        return <BlogItem key={blog._id} image={`http://localhost:4000/${blog.image}`} title={blog.title} body={blog.body} author={blog.author.name} date={blog.createdAt}/>
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
