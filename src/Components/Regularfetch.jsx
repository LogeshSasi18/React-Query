import axios from 'axios';
import React, { useEffect,useState } from 'react'

const Regularfetch = () => {
    const [post,setPost] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState("")
  
    const fetchPosts = async ()=>{
      try{
        const response = await axios.get("http://localhost:3001/posts");
          setPost(response.data)
          console.log("respose",response.data);
      }catch(err){
        setError(err)
      }finally{
        setIsLoading(false)
      }
    }

    useEffect(()=>{
      fetchPosts()
    },[])

    if (isLoading) return <p>data is loading please wait...</p>
  return (
    <div className='container'>
      <h2>Regularfetch</h2>
      <ul className='post'>
        {post.map((post)=>{
          return(
          <li key={post.id}>{post.name}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Regularfetch