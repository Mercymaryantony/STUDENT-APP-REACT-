import React from 'react'

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
                            <a className="nav-link active" aria-current="page" href="/">ADD</a>
                            <a className="nav-link" href="/s">SEARCH</a>
                            <a className="nav-link" href="/d">DELETE</a>
                            <a className="nav-link" href="/v">VIEW</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
