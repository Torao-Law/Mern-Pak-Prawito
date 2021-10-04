import React, { useEffect } from 'react'
import {BlogItem, Button, Gap} from '../../Components'
import './home.scss'
import { useHistory } from 'react-router'
import Axios from 'axios'

const Home = () => {
    // function untuk memanggil data api dari node js
    useEffect(() => {
        Axios.get('http://localhost:4000/v1/blog/posts') //memanggil data menggunakan library axios dengan method get dari nodeJS
        .then(result => {
            console.log('Data API :', result.data) //jika fungsi pemanggilan berhasil
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
                <BlogItem/>
                <BlogItem/>
                <BlogItem/>
                <BlogItem/>
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
