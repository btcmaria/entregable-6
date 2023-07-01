import axios from "axios"
import { useState } from "react"

const useFecth = (baseUrl) => {

    const [infoApi, setInfoApi] = useState()
    const [hasError, setHasError] = useState(false)
    const [isLoding, setIsLoding] = useState(true)

    //GET
    const getApi = (path)=> {
        const url = `${baseUrl}${path}`
        setIsLoding(true)
        axios.get(url)
        .then(res => {
            setInfoApi(res.data)
            setHasError(false)
        })
        .catch(err => {
            console.log(err)
            setHasError(true)
        })
        .finally(()=>{
            setIsLoding(false)
        })
    }

    //POST
    const postApi = (path, data) => {
        const url = `${baseUrl}${path}`
        axios.post(url, data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    return [infoApi, getApi, hasError, isLoding, postApi]
}

export default useFecth