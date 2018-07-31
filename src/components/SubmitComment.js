import React, { Component } from 'react';
import { connect } from 'react-redux';

class SubmitComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentBody: ''
        };
        // bind
        this.handleChange = this.handleChange.bind(this)
    };

    handleChange(e) {
        this.setState({
            commentBody: e.target.value
        })
    }


    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <textarea
                            onChange={this.handleChange}
                            type="text"
                            name="commentBody"
                            className="form-control no-boarder"
                            placeholder="Write comment.."
                            required
                        />
                    </div>
                    <div className="form-group">
                    <button className="btn btn-success">Add Comment</button>

                    </div>

                </form>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        uid: state.user.id
    }
}

export default connect(mapStateToProps, {})(SubmitComment)