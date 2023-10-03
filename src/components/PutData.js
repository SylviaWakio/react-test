import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GetData from './GetData';

function PutData() {
  const [editedPost, setPost] = useState({ title: '', body: '' });

  const EditPostV = async () => {
    try {
      await axios.put('https://jsonplaceholder.typicode.com/posts', editedPost);
      setPost({ title: '', body: '' });
      GetData();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <h1>API Consumer App</h1>
      <h2>Edit Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={editedPost.title}
        onChange={(e) => setPost({ ...editedPost, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Body"
        value={editedPost.body}
        onChange={(e) => setPost({ ...editedPost, body: e.target.value })}
      />
      <button onClick={EditPostV}>Edit Post</button>
    </div>
  );
}

export default PutData;
