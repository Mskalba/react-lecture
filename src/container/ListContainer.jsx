import React from "react";
import ListItem from "../component/ListItem";
import FormContainer from "./FormContainer";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTodos } from './../actions';

class ListContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            edited: 0,
            todos: []
        }
    }

    componentDidMount() {
        this.props.fetchTodos();
    }

    handleChange = () => {
        this.setState({
            edited: this.state.edited + 1
        })
    }

    render() {
        return (
        <div>
            <FormContainer />
            
            <h2>
                Zeedytowano: {this.state.edited}
            </h2>

            <ul className="list-group">
                {this.props.todos.map(el => 
                    <ListItem
                        key={el.id}
                        handleChange={this.handleChange.bind(this, el.id)}
                        name={el.title}
                    />
                )}
            </ul>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos.items,
    error: state.todos.error,
})

export default connect(mapStateToProps, {fetchTodos})(ListContainer);