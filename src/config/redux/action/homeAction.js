import Axios from "axios";


export const setDataBlog = () => (dispatch) => {
        Axios.get('http://localhost:4000/v1/blog/posts') //memanggil data menggunakan library axios dengan method get dari nodeJS
    .then(result => {
        const responseAPI = result.data; //variabel untuk menganti dataBLog
        dispatch({type: 'UPDATE_DATA_BLOG', payload: responseAPI.data}) //cara memanggil state global
    })
    .catch(err => {
        console.log('err', err) //jika fungsi pemanggilan error
    })
}