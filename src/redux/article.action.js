import axios from 'axios'

const fetchProducts = () => (dispatch) => {
    axios
        .get('https://run.mocky.io/v3/6a405908-0961-4411-a110-de9c5b72d324')
        .then((res) => res.data)
        .then((data) => {
            dispatch({
                type: 'ARTICLE_SUCCESS',
                article: data.article,
            })
        })
}
export default fetchProducts
