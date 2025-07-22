import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const ReactQueryFetch = () => {

    const fetchPosts = ()=>{
        return axios.get("http://localhost:3001/posts");
    }

    const {data, isLoading, isFetching, error, isError} = useQuery({
        queryKey: ['posts'],
        queryFn: ()=>fetchPosts(),
        staleTime: 5000,
    })
    
    
    if(isLoading) return <p>Please wait while loading</p>
    console.log("isLoading",isLoading);
    console.log("isFetched",isFetching);
  return (
    <div className='container'>
        <h1>ReactQueryFetch</h1>
        <ul className='post'>
            {data?.data.map((data)=>{
                return(
                    <li className='' key={data.id}>{data.name}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default ReactQueryFetch