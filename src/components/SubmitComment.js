import React, { Component } from 'react';
import { connect } from 'react-redux';

class SubmitComment extends Component {
    render() {
        return (
            <div><h2>Comment Box</h2></div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        uid: state.user.id
    }
}

export default connect(mapStateToProps,{})(SubmitComment)