import { createStore } from "redux";

const initialState = {
    dataBlogs: [],
    name: "Dandi Saputra"
}

// sebuah function yang mengirimkan value yg sering disebut state global yang akan diterima store, dan menerima 2 parameter utama yaitu (state & action)
// state disini yang akan menjadi state global yang dimana valuenya adalah initial state
const reducer = (state = initialState, action) => {
    // merubah value dari state global redux
    // kita menggunakan logic perbandingan untuk action
    // action.type adalah kata kunci untuk melakukan perubahan yang diingikan
    if(action.type === 'UPDATE_DATA_BLOG') {
        return {
            ...state,
            dataBlogs: action.payload
        }
    }
    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: "Dandi"
        }
    }
    return state
}

const store = createStore(reducer);

export default store;