import React, { Component } from 'react';


class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
    }

    inputChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

     inputSubmit = (e) => {
         e.preventDefault();
         console.log(this.state)

         this.props.history.push('/home')
     }
    
    render() {
        return (
            <React.Fragment>
                
                    <div className="container mt-5">

                        <div className="row">
                            <div className="col-6">
                               <div class="card mb-3">
                                  <div class="row no-gutters">
                                     <div class="col-md-4">
                                         <img src="https://img.etimg.com/thumb/msid-70427769,width-643,imgsize-70881,resizemode-4/twittersized.jpg" class="card-img" alt="..."/>
                                    </div>
                                       <div class="col-md-8">
                                           <div class="card-body">
                                              <form onSubmit={this.inputSubmit}>
                                                  <div className="form-group">
                                                    <label>Email address</label>
                                                    <input type="email" required className="form-control" placeholder="Enter email" name="email" value={this.state.email} onChange={this.inputChange}/>
                                                 </div>
                                                 <div className="form-group">
                                                    <label>Password</label>
                                                    <input type="password" required className="form-control"  placeholder="Password" name="password" value={this.state.password} onChange={this.inputChange }/>
                                                </div>

                                              <button type="submit" className="btn btn-primary">Log In</button>
                                            </form>
                                        </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
            </React.Fragment>
        );
    }
}

export default Profile;