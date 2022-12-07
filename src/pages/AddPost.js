import { useState } from "react";
import { Link } from "react-router-dom";

function AddPost({addAlbumToList}) {
    
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('')
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [urlToImage, setUrlToImage] = useState('')
    const [url, setUrl] = useState('')
    function handleAuthorChange(e){
        // console.log(e.target.value);
        setAuthor(e.target.value)
    }
    function handleTitleChange(e){
        // console.log(e.target.value);
        setTitle(e.target.value)
    }
    function handleContentChange(e){
        // console.log(e.target.value);
        setContent(e.target.value)
    }
    function handleDescriptionChange(e){
        // console.log(e.target.value);
        setDescription(e.target.value)
    }
    function handleUrlChange(e){
        // console.log(e.target.value);
        setUrlToImage(e.target.value)
    }
    function handleUChange(e){
        // console.log(e.target.value);
        setUrl(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
    }
  return (
    <div className="AddAlbum">
        <div className="container p-4">
            <div className="card p-4">
                <form onSubmit={handleSubmit}>
                    <h2 className="mb-3">Create a blog</h2>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Author" onChange={handleAuthorChange} value = {author} />
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Title" value={title} onChange = {handleTitleChange} />
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Content" onChange={handleContentChange} value = {content} />
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description" onChange={handleDescriptionChange} value = {description} />
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Image url" onChange={handleUrlChange} value = {urlToImage} />
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Url" onChange={handleUChange} value = {url} />
                    </div>
                    <Link to="/" type="submit" className="btn btn-primary" onClick={() => addAlbumToList(author, content, description, title, urlToImage,url)}  >Submit</Link>
                </form>
            </div>
        </div>
    </div>
  );
}

export default AddPost;
