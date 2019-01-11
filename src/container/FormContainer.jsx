import React from "react";
import axios from "axios";

class FormContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            title: '',
            author: 'Maciek'
        }
    }

    handleFormChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://195.181.210.249:3000/todo/', this.state)
            .then(() => {
                if(this.props.onTodosChange && typeof this.props.onTodosChange === 'function') {
                    this.props.onTodosChange();
                } 
            });

        this.setState({
            title: '',
            author: 'Maciek'
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title
                </label>
                <input
                    name='title'
                    value={this.state.title}
                    onChange={this.handleFormChange.bind(this)}
                />
                <br/>
                <label>
                    Author
                </label>
                <input
                    name='author'
                    value={this.state.author}
                    onChange={this.handleFormChange.bind(this)}
                />
                <br />
                <input type="submit" value="Add" />
            </form>
        )
    }
}

export default FormContainer;