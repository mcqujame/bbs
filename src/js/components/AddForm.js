import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addGacha } from '../actions/index';

const mapDispatchToProps = dispatch => {
    return {
        addGacha: gacha => dispatch(addGacha(gacha))
    };
};

class ConnectedAddForm extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            characters: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if ( event.target.id === 'characters' ) {
            const value = event.target.value.split( ',' );
            this.setState({ [event.target.id]: value })
        } else {
            this.setState({ [event.target.id]: event.target.value });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title, characters } = this.state;
        const id = uuidv1();
        this.props.addGacha({ title, characters, id });
        this.setState({ title: '', characters: '' });
    }

    render() {
        const { title, characters } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className="flex-row">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="characters">Characters</label>
                    <input
                        type="text"
                        className="form-control"
                        id="characters"
                        value={characters}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn">
                    SAVE
                </button>
            </form>
        );
    }
}

const AddForm = connect(null, mapDispatchToProps)(ConnectedAddForm);

export default AddForm;
