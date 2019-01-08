import React from "react";
import ListItem from "../component/ListItem";
import FormContainer from "./FormContainer";
import axios from "axios";
import { Route, Link } from 'react-router-dom';

class ListContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            edited: 0,
            todos: []
        }
    }

    componentDidMount() {
        this.getTodoData();
    }

    getTodoData() {
        axios.get('http://195.181.210.249:3000/todo/')
            .then(response => response.data)
            .then(data => {
                this.setState({
                    todos: data
                });
            })
    }

    handleChange = () => {
        this.setState({
            edited: this.state.edited + 1
        })
    }

    render() {
        let loginButton = null;
        let logoutButton = null;
        if(this.state.edited === 0) {
            loginButton = <h2>Login</h2>;
        } else {
            logoutButton = <h2>Logout</h2>;
        }
        return (
        <div>
            <Link to="/">Home go</Link>
            <FormContainer onTodosChange={this.getTodoData.bind(this)} />
            {loginButton}
            <h2>
                Zeedytowano: {this.state.edited}
            </h2>
            {logoutButton}

            <ul className="list-group">
                {this.state.todos.map(el => 
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

export default ListContainer;