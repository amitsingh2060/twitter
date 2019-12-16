import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <React.Fragment>
                 <nav class="navbar navbar-expand-lg navbar-light bg-light">
                     <div className="container">
                        <a class="navbar-brand" href="#">
                            <img src="https://img.etimg.com/thumb/msid-70427769,width-643,imgsize-70881,resizemode-4/twittersized.jpg" width="30" height="30" class="d-inline-block align-top" alt=""/>
                            Home
                        </a>
                            <Link class="navbar-brand" to="/follow">Follow</Link> 
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <Link class="navbar-brand" to="tweet">Tweet</Link>
                                <a class="navbar-brand" href="#">Likes</a> 
                            </ul>  
                        </div>
                     </div>
                </nav>
        </React.Fragment>
    )
}

export default Navbar
