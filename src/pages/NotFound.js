import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<section className="page">
          <div className="container">
              <div className="row">
                <div>
                    <h1>404</h1>
				    <p>the page you requested was not found. Go to <Link to='/'>Home page</Link></p>
                </div>
              </div>
          </div>
      </section> 
	)
}

export default NotFound
