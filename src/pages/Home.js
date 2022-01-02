import {useFetch} from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import './home.css'
export default function Home() {
const { data:articles ,isPending , error} = useFetch('https://jsonplaceholder.typicode.com/posts')
  

return (
        <div className='home'>
               <h2>Articles</h2> 
               {isPending && <div>Loding...</div>}
               {error && <div>{error}</div>}
               {articles && articles.map((article)=>(
                <div key={article.id} className='card'>
                   <h3>{article.title}</h3>
                   <p>{article.author}</p>
                   <Link to={`/article/${article.id}`}>Read More....</Link>
                </div>
               ))}
        </div>
    )
}
