import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addComment} from '../Redux/Action'
import Comments from './Comments';

class Tweet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             comment:''
        }
    }
    
    inputChange = (e) => {
        this.setState({comment:e.target.value})
    }

    inputSubmit = (e) => {
        e.preventDefault();
       // console.log(this.state.comment)
       let randomNumber = Math.floor(Math.random(2000)*1000);
       let newComment = {
           commentID: randomNumber,
           comment:this.state.comment
       }
        this.props.add(newComment)
    }
    render() {
        return (
            <React.Fragment>
                 <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={this.inputSubmit}>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Write your comments</label>
                                    <textarea class="form-control" rows="4" value={this.state.comment} onChange={this.inputChange}></textarea>
                                    <button className="btn btn-primary mt-2">Tweet</button>
                                </div>
                            </form>

                       </div>
                    </div>
                </div>
                <Comments/>
            </React.Fragment>
        );
    }
}

const dispatchStateToProps = (dispatch)  => {
    return {
        add: (commentData) => dispatch(addComment(commentData))
    }
}

export default  connect(null, dispatchStateToProps) (Tweet);