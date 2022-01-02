import { useEffect } from "react"
import { useParams , useNavigate } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
export default function Article() {
    const { id } = useParams()
    const url = 'https://jsonplaceholder.typicode.com/posts/' + id
    const {data:article ,isPending , error} = useFetch(url)
    const navigate = useNavigate()

    useEffect(()=>{
        if(error){

            setTimeout(()=>{
                navigate('/')
            },1500)
        }
    },[error])
    return (
        <div>
           {isPending && <div>Loding...</div>}
           {error && <div>{error}</div>}
           {article && (
               <div>
               <h2>{article.title}</h2>
               <p>{article.author}</p>
               <p>{article.body}</p>
               </div>
           )}

        </div>
    )
}
