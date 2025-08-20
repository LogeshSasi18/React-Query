import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get("http://localhost:3001/posts");
  return response;
};
const Home = () => {
  const queryClient = useQueryClient();
  const API_URL = "http://localhost:3001/posts";

  const createPost = async (postData) => {
    const { data } = await axios.post(API_URL, postData);
    return data;
  };

  const [newname, setNewname] = useState("");
  const [descriptions, setDescriptions] = useState("");

  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const createMutation = useMutation({
    mutationFn: createPost,
    onSuccess: (newData) => {
      console.log(newData);
      queryClient.invalidateQueries({queryKey: ['posts']})
    },
  });

  const handleClick = () => {
    console.log(newname,descriptions);
    
    createMutation.mutate({name: newname, description: descriptions})
  };

  if (isLoading) return <p>Page is Loading</p>;
  return (
    <div className="container">
      <h2>Create react query CRUD</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault(), handleClick();
        }}
      >
        <input type="text" placeholder="name" onChange={(e) => setNewname(e.target.value)} />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => setDescriptions(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>

      <div className="posts">
        {posts.data.map((val) => {
          return (
            <div key={val.id} className="table">
              <p>{val.name}</p>
              <p className="">{val.description}</p>
              <div className="actions">
                <button>EDIT</button>
                <button>DELETE</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
