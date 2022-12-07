import Home from "../pages/Home";
import Navbar from "./Navbar";
import AddPost from "../pages/AddPost";
import PostDetails from "../pages/PostDetails";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  const [posts, setPosts] = useState([]);
  // console.log('Posts',posts);
  useEffect(() => {
    
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=300be0372ce64ead840346911752051c')
    .then((response) => response.json())
    .then((result) => {
      setPosts(result.articles)
    })
      
  },[])
  const addAlbumToList = (author, content, description, title, urlToImage,url) => {
    // const length = posts.length;
    // const lastId = posts[length - 1].id;
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=300be0372ce64ead840346911752051c', {
      method: 'POST',
      body: JSON.stringify({
        author: author,
        content: content,
        description: description,
        title: title,
        urlToImage:urlToImage,
        url: url,
        publishedAt: Date()
      }),
      
    }).then((response) => response.json()).then((json) => json);
    const newPosts = {
      author: author,
      content: content,
      description: description,
      title: title,
      urlToImage:urlToImage,
      url : url,
      publishedAt:Date()
    }
    const allPosts = [newPosts,...posts]
    console.log(allPosts);
    setPosts(allPosts)
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home posts = {posts} />} />
        <Route path="/blog" element={<PostDetails />} />
        <Route path="/add-blog" element={<AddPost addAlbumToList = {addAlbumToList} />} />
      </Routes>
    </div>
  );
}

export default App;
