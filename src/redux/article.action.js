import axios from 'axios'

const fetchData = () => (dispatch) => {
    axios
        .get('https://run.mocky.io/v3/c602ef1d-eac5-41b2-be57-0cadaad8e10d')
        .then((res) => res.data)
        .then((data) => {
            dispatch({
                type: 'ARTICLE_SUCCESS',
                article: data.article,
            })
            dispatch({
                type: 'GALLERY_SUCCESS',
                gallery: data.gallery,
            })
        })
}
export default fetchData
