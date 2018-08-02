import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getNotes, saveNote, deleteNote } from '../actions/notesAction';
import NoteCard from './NoteCard';
import { getUser } from '../actions/userAction';
import { Link } from 'react-router-dom';


class App extends Component {
    constructor(props) {
        super(props);
        // state
        this.state = {
            title: '',
            body: ''
        };
        // bind
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderNotes = this.renderNotes.bind(this);
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
        return (


            <div className="container-fluid">
                <div className="row">

                    <div className="col-sm-12 text-center">
                        <h1></h1>
                        <p>This system uses blockchain to catalize our human family to the Third Industrial Revolution</p>


                        <div className="intrinsic-container intrinsic-container-16x9">
                            <iframe src="https://www.youtube.com/embed/QX3M8Ka9vUA" allowfullscreen></iframe>
                        </div>

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
