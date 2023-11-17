import './App.css';

import Blogs from './components/Blogs/Blogs';
import Create from './components/Create/Create';
import Modal from './components/UI/Modal/Modal';

import { blog } from './data/dataBlog.json';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState('');
  const [blogPosts, setBlogPosts] = useState(blog);

  const addPosts = (newPosts) => {
    setBlogPosts([...blogPosts, newPosts]);
    blog.push(newPosts);
  };
  return (
    <>
      {user ? null : <Modal setUser={setUser} />}
      <Blogs blogPosts={blogPosts} />
      <Create blogPosts={blogPosts} addPosts={addPosts} user={user} />
    </>
  );
}

export default App;
