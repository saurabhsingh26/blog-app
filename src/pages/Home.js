import React from 'react'
import { Link } from 'react-router-dom';
const Home = ({posts}) => {
    console.log(posts);
  return (
    <div className='container w-75'>
        {posts.map((post, index) => (
            <div className="card mb-3 d-flex flex-row" key={`posts-${index}`}>
                <img style={{width:'200px', height:'200px'}} className="card-img-top image " src={post.urlToImage} alt="Card cap" />
                <div className="card-body ">
                    <Link to='/blog'
                    state={
                        { 
                          title: post.title,
                          content: post.content,
                          description: post.description,
                          image: post.urlToImage
                        }
                      }>
                        <h5 className="card-title">{post.title}</h5>
                    </Link>
                    <p className="card-text">Author - {post.author}</p>
                    <p className="card-text"><small className="text-muted">Published at : {post.publishedAt}</small></p>
                    <a href={post.url} rel="noopener noreferrer">
                    Know More
                  </a>
                </div>
            </div>
        ))}
        
    </div>
  )
}


export default Home