import React, { Component } from 'react';


class Follow extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="container">
                  <div class="card">
                        <img src="https://www.freepngimg.com/thumb/cartoon/4-2-cartoon-transparent-thumb.png"  style={{width:"100px", height:"100px"}} class="card-img-top" alt="..."/>
                        <div class="card-body">
                               <h5 class="card-title">{this.props.name}</h5>
                            <p class="card-text">Some</p>
                            <a href="#" class="btn btn-primary">Follow</a>
                        </div>
                  </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Follow;