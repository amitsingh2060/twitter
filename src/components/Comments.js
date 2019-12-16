import React, { Component } from 'react';
import { connect } from 'react-redux';


class Comments extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        console.log(this.props.allComments.comments)
        let showComment = this.props.allComments.comments.reverse().map(each => {
            return(
                <div class="card mb-3" >
                     <div class="row no-gutters">
                          <div class="col-md-4">
                              <img src="..." class="card-img" alt="..."/>
                         </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title">Comment:{each.comment}</h5>
                                    <p class="card-text">This is a wider card with This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 1 mins ago</small></p>
                                </div>
                            </div>
                      </div>
                </div>
            )
        })
        return (
           <React.Fragment>
               <div className="container">
                   <div className="row">
                       <div c="col-12">
                           <h1>See All Comments here!</h1>
                                {showComment}
                       </div>
                   </div>
               </div>
           </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
       allComments: state.comments // taking comments from AllReducer 
    }
}
export default connect(mapStateToProps) (Comments);