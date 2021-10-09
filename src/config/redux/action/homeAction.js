import Axios from "axios";


export const setDataBlog = (page) => (dispatch) => {
    Axios.get(`http://localhost:4000/v1/blog/posts?page=${page}&perPage=2`) //memanggil data menggunakan library axios dengan method get dari nodeJS
    .then(result => {
        const responseAPI = result.data; //variabel untuk menganti dataBLog
        dispatch({type: 'UPDATE_DATA_BLOG', payload: responseAPI.data}) //cara memanggil state global
        dispatch({
            type: 'UPDATE_PAGE',
            payload: {
                current_page: responseAPI.current_page,
                total_page: Math.ceil(responseAPI.total_page / responseAPI.per_page)
            }
        }) //cara memanggil state global

    })
    .catch(err => {
        console.log('err', err) //jika fungsi pemanggilan error
    })
}