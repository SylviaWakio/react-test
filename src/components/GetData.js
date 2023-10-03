import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetData() {
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      if(res.status = 1)
      {
      setPosts(res.data);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      <h1>Posts App</h1>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button className='btn btn-primary' onClick={''}>Edit</button>
          </li>
        ))}
      </ul> 
    </div>
  );
}

export default GetData;
