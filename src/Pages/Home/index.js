import React, { useEffect, useState } from 'react'
import {BlogItem, Button, Gap} from '../../Components'
import './home.scss'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setDataBlog } from '../../config/redux/action/homeAction'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Axios from 'axios'

const Home = () => {
    const [counter, setCounter] = useState(1);

    const dispatch = useDispatch();
    // menggunakan state global yang telah di setting pada redux/store
    // const {dataBlogs, name} = useSelector(state => state)
    const {dataBlog, page} = useSelector(state => state.homeReduser)

    // function untuk memanggil data api dari node js
    useEffect(() => {
       dispatch(setDataBlog(counter))
    }, [counter, dispatch])

    const history = useHistory();

    const previous = () => {
        setCounter(counter <= 1 ? 1 : counter - 1)
    }

    const next = () => {
        setCounter(counter === page.total_page ? page.total_page : counter + 1)
    }

    const confirmDelete = (id) => {
        confirmAlert({
            title: 'Konfirmasi Penghapusan Blog',
            message: 'Apakah anda yakin ingin menghapus blog ?',
            buttons: [
              {
                label: 'Ya',
                onClick: () => {
                    Axios.delete(`http://localhost:4000/v1/blog/post/${id}`)
                    .then(res => {
                        console.log("Hapus Berhasil ", res.data)
                        dispatch(setDataBlog(counter))
                    })
                    .catch(err => {
                        console.log("err", err)
                    })
                }
              },
              {
                label: 'Tidak',
                onClick: () => console.log('tidak')
              }
            ]
          });
        };

    return (
        <div className="home-app-wrapper">
            <div className="create-wrapper">
                <Button title="Create Blog" onClick={() => history.push('/create-blog')}/>
            </div>
            <Gap height={20}/>
            <div className="content-wrapper">
                {dataBlog.map(blog => {
                        return <BlogItem key={blog._id} image={`http://localhost:4000/${blog.image}`} title={blog.title} body={blog.body} name={blog.author.name} date={blog.createdAt} _id={blog._id} onDelete={confirmDelete}/>
                    })
                }
            </div>
            <div className="pagination">
                <Button title="Previous" onClick={previous}/>
                <Gap width={20} />
                <p className="text-page">{page.current_page} / {page.total_page}</p>
                <Gap width={20} />
                <Button title="Next" onClick={next} />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default Home
