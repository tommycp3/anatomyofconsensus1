import React, { Component } from 'react';
import { connect } from 'react-redux';
import { googleLogin, twitterLogin } from '../actions/userAction';
import AboutAOC from './AboutAOC';

class Login extends Component {
    componentWillMount() {
        if (this.props.user !== null) {
            // console.log(this.props.history);
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user !== null) {
            nextProps.history.push('/');
        }
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row text-center">
                        <div className="col-sm-12 jumbotron" style={{ marginTop: '-20px' }}>
                            <h1>Welcome to <b>A</b>natomy<b>O</b>f<b>C</b>onsensus</h1>
                            <p><i>"The best no fluff education system that teaches you the power of blockchain <b>by using it.</b>"</i></p>
                        </div>
                    </div>

                </div>


                <div className="container">
                    <div className="col-sm-12">

                        <AboutAOC />
                    </div>

                </div>


                <br />


                <div className="continer-fluid">
                    <div className="row text-center">

                        <div className="col-sm-12">
                            <p><b>Create an account below to learn how to buy Ether to get access to this system.</b></p>
                            <br />
                            <br />
                        </div>


                        <div className="col-sm-6">
                            <button className="btn btn-danger btn-lg" onClick={this.props.googleLogin}>Login with Google</button>
                        </div>

                        <br />

                        <div className="col-sm-6">
                            <button className="bt btn-success btn-lg" onClick={this.props.twitterLogin}>Login with Twitter</button>
                        </div>




                    </div>
                </div>
                <br />
                <br />

                <div className="container">
                    <div className="jumbotron">

                        <p> <i>commenting/suggestions box coming soon...</i></p>
                    </div>

                </div>




            </div>

        );
    }
}

function mapStateToProps(state, onwProps) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, { googleLogin, twitterLogin })(Login);
