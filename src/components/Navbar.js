import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="Navbar mb-5">
            <nav className="navbar navbar-light bg-light justify-content-between">
            <Link className="navbar-brand" to="/" >Home</Link>
            <form className="form-inline">
                <Link to="/add-blog">
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add Blog</button>
                </Link>
            </form>
            </nav>
        </div>
  )
}

export default Navbar