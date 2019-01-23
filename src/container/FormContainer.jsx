import React from "react";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { addTodo } from './../actions';

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
        
        this.props.addTodo(this.state);

        this.setState({
            title: '',
            author: 'Maciek'
        });
    }

    render() {
        return (
            <>
                {this.props.menu.map(el => (
                    <div key={el}>
                        <Link to="/lista">{el}</Link>
                    </div>
                ))}
                <form onSubmit={this.handleSubmit.bind(this)}>
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
            </>
        )
    }
}

const mapStateToProps = state => ({
    menu: state.menu,
    message: state.todos.message,
})

export default connect(mapStateToProps, {addTodo})(FormContainer);