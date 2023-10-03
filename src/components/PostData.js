import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GetData from './GetData';

function PostData() {
  const [newPost, setNewPost] = useState({ title: '', body: '' });

  const createPost = async () => 
  {
    try 
    {
      await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
      setNewPost({ title: '', body: '' });
      GetData();
    } catch (error) 
    {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <h1>Posts App</h1>
      <h2>Add New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Body"
        value={newPost.body}
        onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
      />
      <button onClick={createPost}>Submit Post</button>
    </div>
  );
}

export default PostData;
