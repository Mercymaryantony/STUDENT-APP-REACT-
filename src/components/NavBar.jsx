import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-warning">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">STUDENT</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">ADD</Link>
                            <Link className="nav-link" to="/s">SEARCH</Link>
                            <Link className="nav-link" to="/d">DELETE</Link>
                            <Link className="nav-link" to="/v">VIEW</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
