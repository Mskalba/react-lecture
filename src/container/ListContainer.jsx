import React from "react";
import ListItem from "../component/ListItem";

class ListContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            edited: 0
        }
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
            {this.state.edited === 0 && <h2>Login</h2>}
            {this.state.edited === 0 ?
                <h2>Login</h2>: 
                <h3>cokolwiek</h3>
            }

            {loginButton}

            <h2>
                Zeedytowano: {this.state.edited}
            </h2>

            {this.state.edited > 0 ?
            <h2>Logout</h2> :
            null}

            {logoutButton}
            <ul className="list-group">
                {this.state.edited === 0 ?
                <ListItem
                    handleChange={this.handleChange.bind(this)}
                    name={`Maciej ${this.state.edited}`}
                /> :
                null}
            </ul>
        </div>
        );
    }
}

export default ListContainer;