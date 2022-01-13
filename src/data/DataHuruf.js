const Iqra = [
    {
        id_huruf: 1,
        nama_huruf: 'Alif',
        gambar_huruf: 'https://boesta.files.wordpress.com/2015/10/1-alif.jpg'
    },
    {
        id_huruf: 2,
        nama_huruf: 'Ba',
        gambar_huruf: 'https://boesta.files.wordpress.com/2015/10/2-ba.jpg'
    },
    {
        id_huruf: 3,
        nama_huruf: 'Ta',
        gambar_huruf: 'https://boesta.files.wordpress.com/2015/10/3-ta.jpg'
    }
]

export default Iqra

// import {useState, useEffect} from "react";
// import axios from 'axios'

// const useFetch = (GET_URL) => {

//     const [error, setError] = useState()
//     const [data, setData] = useState([])

//     useEffect(() => {
//         axios.get(GET_URL).then(res => {
//             setData(res.data)
//             console.log('fetch');
//         }).catch(err => {
//             setError(err)
//         })
//     }, [GET_URL])

//     return { data, error };
// }

// export default useFetch