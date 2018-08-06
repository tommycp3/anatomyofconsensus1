import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getNotes, saveNote, deleteNote } from '../actions/notesAction';
import NoteCard from './NoteCard';
import { getUser } from '../actions/userAction';
import { Link } from 'react-router-dom';
import { Accordion, Icon, List, Message, Button, Input } from 'semantic-ui-react'


class App extends Component {
    constructor(props) {
        super(props);
        // state
        this.state = {
            title: '',
            body: '',
            activeIndex: 0
        };
        // bind
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderNotes = this.renderNotes.bind(this);
    }


    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    // handle change
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // handle submit
    handleSubmit(e) {
        e.preventDefault();
        const note = {
            title: this.state.title,
            body: this.state.body,
            uid: this.props.user.uid
        };
        this.props.saveNote(note);
        this.setState({
            title: '',
            body: ''
        });
    }

    // render notes
    renderNotes() {
        return _.map(this.props.notes, (note, key) => {
            return (
                <NoteCard key={key}>
                    <Link to={`/${key}`} >
                        <h2>{note.title}</h2>
                    </Link>
                    <p>{note.body}</p>
                    {note.uid === this.props.user.uid && (
                        <div>
                            <button className="btn btn-danger btn-xs" onClick={() => this.props.deleteNote(key)}>
                                Delete
                        </button>
                            <button className="btn btn-info btn-xs pull-right">
                                <Link to={`/${key}`}>Update</Link>
                            </button>
                        </div>

                    )}


                </NoteCard>
            );
        });
    }

    render() {
        const { activeIndex } = this.state
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-sm-12 text-center">
                            <h1></h1>
                            <p>This system uses blockchain to catalize our human family to the Third Industrial Revolution</p>



                            <br />
                            <br />

                        </div>
                    </div>




                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            {/*   

                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input
                                    onChange={this.handleChange}
                                    value={this.state.title}
                                    type="text"
                                    name="title"
                                    className="form-control no-border"
                                    placeholder="Title..."
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <textarea
                                    onChange={this.handleChange}
                                    value={this.state.body}
                                    type="text"
                                    name="body"
                                    className="form-control no-border"
                                    placeholder="Body..."
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary col-sm-12">Save</button>
                            </div>
                        </form>
                        <br />
                        <br />
                        <br />
                        {this.renderNotes()}
                        
                        */}

                        </div>
                    </div>
                </div>



                <div className="container" >
                    <h3>How to to get access to AOC starter pack</h3>
                    <Accordion fluid styled>
                        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            1. Create an account at <a target="_blank" href="http://www.cointree.com.au">CoinTree</a>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                            <p>In Australia <a target="_blank" href="http://www.cointree.com.au">CoinTree</a> is a site that allows you to convert AUD to cryptocurrencies.</p>

                            <div className="intrinsic-container intrinsic-container-16x9">
                                <iframe src="https://www.youtube.com/embed/ARkWiMqCu3U"></iframe>
                            </div>

                            {/* https://codepen.io/jk6/pen/vKBNJp */}
                        </Accordion.Content>

                        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            2. Acquire some bitcoin with a Cash Deposit (fastest way)
                    </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                            <div className="intrinsic-container intrinsic-container-16x9">
                                <iframe src="https://www.youtube.com/embed/ARkWiMqCu3U"></iframe>
                            </div>
                            {/* https://codepen.io/jk6/pen/vKBNJp */}
                        </Accordion.Content>

                        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            3. Convert Bitcoin to Ether
                    </Accordion.Title>
                        <Accordion.Content active={activeIndex === 2}>
                            <div className="intrinsic-container intrinsic-container-16x9">
                                <iframe src="https://www.youtube.com/embed/ARkWiMqCu3U"></iframe>
                            </div>
                            {/* https://codepen.io/jk6/pen/vKBNJp */}
                        </Accordion.Content>

                        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            4. Setup Your MetaMask Wallet
                    </Accordion.Title>
                        <Accordion.Content active={activeIndex === 3}>
                            <div className="intrinsic-container intrinsic-container-16x9">
                                <iframe src="https://www.youtube.com/embed/ARkWiMqCu3U"></iframe>
                            </div>
                            {/* https://codepen.io/jk6/pen/vKBNJp */}
                        </Accordion.Content>

                        <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            5. Send Ether to your new MetaMask account
                    </Accordion.Title>
                        <Accordion.Content active={activeIndex === 4}>
                            <div className="intrinsic-container intrinsic-container-16x9">
                                <iframe src="https://www.youtube.com/embed/ARkWiMqCu3U"></iframe>
                            </div>
                            {/* https://codepen.io/jk6/pen/vKBNJp */}
                        </Accordion.Content>
                    </Accordion>

                    <br />

                    <div>
                        <Message size='mini' warning>
                            <Message.Header>Warning!</Message.Header>
                            <p>Until you understand how to protect yourself from hackers we advise not to hold more than 0.3 Ether.  We will teach you how to manage large sums of value after you experience executing your first real smart contract.</p>
                        </Message>
                    </div>
                    <br />
                    <div >
                        <Link to="/aoc-starter-pack">
                            <Button fluid positive>Execute First Smart Contract</Button>
                        </Link>


                    </div>


                </div >

            </div>


        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        notes: state.notes,
        user: state.user
    };
}

export default connect(mapStateToProps, { getNotes, saveNote, deleteNote, getUser })(App);
