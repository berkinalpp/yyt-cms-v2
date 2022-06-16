import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='container mt-5'>
        <div className="row">
          <div className="col-md-12">
            <div className="card ">
                <div className="card-body">
                <h1 className="card-title">Admin Page</h1>
                    <p className="card-text">You can go to content type builder page to create a content</p>
                    <div className="home-links">
                        <Link className="home-link" to="/content-type-builder">Content Type Builder</Link> 
                        <Link className="home-link" to="/content-type-manager">Content Type Manager</Link> 
                        <Link className="home-link" to="/users">User Manager</Link> 
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home