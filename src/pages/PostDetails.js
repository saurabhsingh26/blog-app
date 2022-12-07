import React from 'react'
import { useLocation } from 'react-router-dom';
const PostDetails = () => {
    const location = useLocation();
    const {content, description,title,image} = location.state;
    return (
        <div className='container w-50'>
            <div className="card mb-3">
                <img className="card-img-top" src={image} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default PostDetails
